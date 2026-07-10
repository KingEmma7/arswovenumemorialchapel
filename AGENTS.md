# Agent notes for this repo

Context and hard-won lessons from building the Brass Band attendance/dues
portal (Supabase + static export). Read before making changes in this area.

## Architecture constraints

- `next.config.js` has `output: 'export'` - **no API routes, no server-side
  sessions**. All auth and data access goes through `@supabase/supabase-js`
  directly from the client, gated by Postgres Row Level Security (RLS).
  Don't reach for a Next.js API route to "fix" something - it won't run.
- Supabase URL/anon key live in `NEXT_PUBLIC_SUPABASE_URL` /
  `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`, which is gitignored.
  **Vercel needs these set in the Project Settings dashboard separately** -
  a missing env var fails the build at prerender time (`createClient` throws
  synchronously on an empty URL), not at runtime. If a Vercel build fails
  right after "Running npm run vercel-build" with no further Next.js output,
  suspect missing env vars first.
- No Supabase CLI / `config.toml` in this repo - migrations in
  `supabase/migrations/` are plain `.sql` files applied by hand via the
  Supabase SQL editor, in filename order. **They are numbered
  (`001_start.sql`, `002_profile.sql`, ...) specifically so alphabetical
  order matches dependency order.** When adding a migration, give it the
  next number - don't name it descriptively and let it sort wherever
  (alphabetical accidents like `admins.sql` sorting before `start.sql`, or
  `inventory_notes.sql` sorting before the `inventory_rules.sql` that
  creates the table it alters, broke a fresh apply).

## RLS is table-level, not column-level

Postgres RLS policies gate whole rows, not individual columns. If a table
has a sensitive column (e.g. `attendance.note` holding excused-absence
reasons) that only admins should see, **hiding it in the UI is not
enough** - any authenticated party with row access (including the shared
member-viewer account) can read it straight from the network response.
Fix at the query layer: have two fetch functions (e.g.
`fetchAttendanceStatuses` vs `fetchAttendanceWithNotes`) and call the
notes-including one only from admin-gated code paths.

## Don't trust client-supplied "who did this" fields

Columns like `marked_by` / `recorded_by` used to be set from a client-passed
user id. A tampered client could send someone else's id. Fixed with
`BEFORE INSERT OR UPDATE` triggers that force the column to `auth.uid()`
server-side (see `010_actor_integrity.sql`) - the client no longer sends
these fields at all. Apply the same pattern to any future "actor"/audit
column.

## Optimistic UI updates need a rollback path

Every admin-editable panel (attendance marks, dues, inventory, rules,
roster status) updates local state immediately for snappy UX, then awaits
the Supabase call. **The `catch` block must resync from the server**
(call the component's own `load()`/`refresh()`), not just show an error
message - otherwise a failed save leaves the UI showing a change that
never actually persisted, and the user has no way to tell.

## Timezone-safe date math

Don't use `Date.toISOString().slice(0, 10)` to get a "local" YYYY-MM-DD
string - `toISOString()` converts to UTC first, which silently shifts the
date by a day in timezones far enough from UTC. Build the string from
`getFullYear()`/`getMonth()`/`getDate()` instead (see `toLocalDateString`
in `lib/attendance.ts`).

## Don't create DB rows on a read/navigation path

`AttendanceMarker` used to call `getOrCreateEvent` (an upsert) every time
the date changed, even before anyone was marked - so just browsing dates
left empty `events` rows behind, cluttering the attendance grid with blank
columns. Fixed by only creating the event lazily, at the moment of an
actual write (`ensureEvent()` called from `handleMark`, not from the
loading effect). General rule: reads should never have side effects.

## Redirect targets must be validated

Never pass a user-controlled "redirect"/"return to" query param straight
to `router.replace()` or `window.location`. Restrict to same-origin
relative paths and explicitly reject protocol-relative tricks (`//evil.com`,
`/\evil.com`) - see `safeRedirect()` in `pages/login.tsx`.

## `router.query` isn't ready immediately

In the Next.js Pages Router, `router.query` is empty until
`router.isReady`. A value needed on the very first render (like a login
redirect target) computed from `router.query` can silently default to the
wrong thing if the user acts fast. Parse `window.location.search` directly
instead when the value is needed before hydration settles.

## Git workflow

**Never run `git commit` or `git push`.** The repo owner always commits
and pushes themselves. Make and verify changes, then hand off a clear
summary of what changed - stop there.

## Testing against the live Supabase project

There's no local/staging Supabase instance - testing happens against the
real project. When testing via the API directly (e.g. logging in via curl
to inspect table state), **clean up any test rows created** (stray events,
attendance marks, etc.) before finishing, so debug artifacts don't linger
in real data.
