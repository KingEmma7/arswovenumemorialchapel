-- ============================================
-- Group inventory (instruments, equipment, etc.)
-- Generic across groups: name + quantity + condition,
-- fully admin-editable.
-- ============================================
create table inventory_items (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  name text not null,
  quantity int not null default 0,
  condition text not null default 'good' check (condition in ('good', 'needs_repair')),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table inventory_items enable row level security;

create policy "members can view group inventory"
  on inventory_items for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage inventory"
  on inventory_items for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

-- ============================================
-- Group rules & regulations (rule + punishment)
-- ============================================
create table group_rules (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  rule text not null,
  punishment text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table group_rules enable row level security;

create policy "members can view group rules"
  on group_rules for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage rules"
  on group_rules for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

-- ============================================
-- Seed: placeholder Brass Band inventory (admin-editable after)
-- ============================================
insert into inventory_items (group_id, name, quantity, condition, sort_order)
select g.id, v.name, v.quantity, v.condition, v.sort_order
from (select id from groups where slug = 'brass-band') g,
(values
  ('Snare Drum', 4, 'good', 1),
  ('Bass Drum', 2, 'good', 2),
  ('Side Drum', 3, 'needs_repair', 3),
  ('Trumpet', 8, 'good', 4),
  ('Euphonium', 3, 'good', 5),
  ('Trombone', 5, 'needs_repair', 6),
  ('Cymbals', 2, 'good', 7),
  ('Music Stands', 15, 'good', 8)
) as v(name, quantity, condition, sort_order);

-- ============================================
-- Seed: placeholder Brass Band rules (admin-editable after)
-- ============================================
insert into group_rules (group_id, rule, punishment, sort_order)
select g.id, v.rule, v.punishment, v.sort_order
from (select id from groups where slug = 'brass-band') g,
(values
  ('Arrive at least 15 minutes before rehearsal or service.', 'Verbal warning; repeated lateness reported to band leadership.', 1),
  ('Full band uniform must be worn during processions and services.', 'Not permitted to march until properly dressed.', 2),
  ('Instruments must be returned to storage in good condition after use.', 'Member is responsible for the cost of any repair.', 3),
  ('Absence from rehearsal requires prior notice to an admin.', 'Unexcused absence recorded and reviewed at the end of the month.', 4)
) as v(rule, punishment, sort_order);
