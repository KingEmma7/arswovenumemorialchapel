-- ============================================
-- Wovenu Memorial Chapel: group roster
-- Roster entries are independent of auth/login — an admin
-- seeds names directly. A person only needs to log in if they
-- want to view the group's attendance themselves (granted via
-- a `memberships` row, same as today).
-- ============================================

create table roster_members (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  full_name text not null,
  role_title text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table roster_members enable row level security;

create policy "members can view group roster"
  on roster_members for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage roster"
  on roster_members for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

-- ============================================
-- Point attendance at roster_members instead of profiles.
-- Recreated clean: the feature isn't live yet, so there's no
-- attendance data to preserve.
-- ============================================
drop table if exists attendance;

create table attendance (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  roster_member_id uuid not null references roster_members(id) on delete cascade,
  status text not null check (status in ('present', 'absent', 'excused')),
  marked_by uuid references profiles(id),
  marked_at timestamptz not null default now(),
  unique (event_id, roster_member_id)
);

alter table attendance enable row level security;

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
-- Seed: Brass Band roster (active members first in original
-- order, inactive/asterisked members follow, also in original order)
-- ============================================
insert into roster_members (group_id, full_name, role_title, status, sort_order)
select g.id, v.full_name, v.role_title, v.status, v.sort_order
from (select id from groups where slug = 'brass-band') g,
(values
  ('Selorm Malise Goka', 'Band President', 'active', 1),
  ('Emmanuel Mawulolo Tagbor', 'General Secretary', 'active', 2),
  ('James Kumordzi', 'Band Major', 'active', 3),
  ('Makafui Dziwornu Agboli', 'Asst. Band Major', 'active', 4),
  ('Wahid Awudi', 'Organizer and Drum Major', 'active', 5),
  ('Joel Adjei', 'Asst. Organizer', 'active', 6),
  ('Gborwoko Amenyo', 'Asst. Drum Major', 'active', 7),
  ('Courage Serwonu Ahlijah', null, 'active', 8),
  ('Etornam Gagudu', null, 'active', 9),
  ('Elemenye Agboli', null, 'active', 10),
  ('Hills Marcus Anyigba', null, 'active', 11),
  ('Prince Selasi Ofori-Kumah', null, 'inactive', 12),
  ('Kofi Ntumi Ansah', null, 'active', 13),
  ('Famous Tseh', null, 'active', 14),
  ('Enerst Ofori-Kumah', null, 'active', 15),
  ('Fayol Dunku', null, 'active', 16),
  ('Godknows Akpalu', null, 'active', 17),
  ('Joshua Dogbey', null, 'active', 18),
  ('Sedem Nutornuntsi', null, 'inactive', 19),
  ('Kelvin Nutornuntsi', null, 'inactive', 20),
  ('Stephen Worlanyo Wefum', null, 'inactive', 21),
  ('Wilson Sogah', null, 'inactive', 22),
  ('Kpormor Tagbor', null, 'inactive', 23),
  ('Edem Wilson', null, 'inactive', 24),
  ('Prince Selorm Akoto', null, 'inactive', 25),
  ('Jeff Kpodo', null, 'inactive', 26),
  ('Emmanuel Apuri', null, 'active', 27),
  ('Derrick Doe', null, 'inactive', 28),
  ('Esegbe Winner', null, 'inactive', 29)
) as v(full_name, role_title, status, sort_order);
