-- ============================================
-- Wovenu Memorial Chapel: Groups & Attendance
-- ============================================

create table groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  created_at timestamptz not null default now()
);

create table memberships (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references profiles(id) on delete cascade,
  group_id uuid not null references groups(id) on delete cascade,
  role text not null check (role in ('member', 'admin')),
  created_at timestamptz not null default now(),
  unique (profile_id, group_id)
);

create table events (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  date date not null,
  type text not null default 'sunday_service',
  created_at timestamptz not null default now(),
  unique (group_id, date, type)
);

create table attendance (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  profile_id uuid not null references profiles(id) on delete cascade,
  status text not null check (status in ('present', 'absent', 'excused')),
  marked_by uuid references profiles(id),
  marked_at timestamptz not null default now(),
  unique (event_id, profile_id)
);

-- ============================================
-- Helper function: is this user an admin of a given group?
-- ============================================
create or replace function is_group_admin(p_group_id uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from memberships
    where profile_id = auth.uid()
      and group_id = p_group_id
      and role = 'admin'
  );
$$;

create or replace function is_group_member(p_group_id uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from memberships
    where profile_id = auth.uid()
      and group_id = p_group_id
  );
$$;

-- ============================================
-- Enable RLS on every table
-- ============================================
alter table groups enable row level security;
alter table profiles enable row level security;
alter table memberships enable row level security;
alter table events enable row level security;
alter table attendance enable row level security;

-- ============================================
-- Policies: groups (any logged-in user can see the list of groups)
-- ============================================
create policy "groups visible to authenticated users"
  on groups for select
  to authenticated
  using (true);

-- ============================================
-- Policies: profiles (users see their own profile; group admins see profiles of their group's members)
-- ============================================
create policy "users can view own profile"
  on profiles for select
  to authenticated
  using (id = auth.uid());

create policy "users can view profiles of fellow group members"
  on profiles for select
  to authenticated
  using (
    exists (
      select 1 from memberships m1
      join memberships m2 on m1.group_id = m2.group_id
      where m1.profile_id = auth.uid()
        and m2.profile_id = profiles.id
    )
  );

create policy "users can update own profile"
  on profiles for update
  to authenticated
  using (id = auth.uid());

create policy "users can insert own profile"
  on profiles for insert
  to authenticated
  with check (id = auth.uid());

-- ============================================
-- Policies: memberships (members see their group's roster; admins manage it)
-- ============================================
create policy "members can view own group memberships"
  on memberships for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage memberships"
  on memberships for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

-- ============================================
-- Policies: events (members can view; admins can create/edit)
-- ============================================
create policy "members can view group events"
  on events for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage events"
  on events for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

-- ============================================
-- Policies: attendance (members can view; admins can mark)
-- ============================================
create policy "members can view group attendance"
  on attendance for select
  to authenticated
  using (
    exists (
      select 1 from events
      where events.id = attendance.event_id
        and is_group_member(events.group_id)
    )
  );

create policy "admins can mark attendance"
  on attendance for all
  to authenticated
  using (
    exists (
      select 1 from events
      where events.id = attendance.event_id
        and is_group_admin(events.group_id)
    )
  )
  with check (
    exists (
      select 1 from events
      where events.id = attendance.event_id
        and is_group_admin(events.group_id)
    )
  );

-- ============================================
-- Seed: create the Brass Band group
-- ============================================
insert into groups (name, slug) values ('Brass Band', 'brass-band');