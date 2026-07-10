-- ============================================
-- Monthly dues collection & balancing, generic per group.
-- ============================================
create table dues_settings (
  group_id uuid primary key references groups(id) on delete cascade,
  monthly_amount numeric(10,2) not null default 0,
  currency text not null default 'GHS',
  updated_at timestamptz not null default now()
);

alter table dues_settings enable row level security;

create policy "members can view dues settings"
  on dues_settings for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage dues settings"
  on dues_settings for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

create table dues_payments (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references groups(id) on delete cascade,
  roster_member_id uuid not null references roster_members(id) on delete cascade,
  period date not null, -- first day of the month this payment covers
  amount numeric(10,2) not null,
  paid_on date not null default current_date,
  recorded_by uuid references profiles(id),
  note text,
  created_at timestamptz not null default now(),
  unique (roster_member_id, period)
);

alter table dues_payments enable row level security;

create policy "members can view dues payments"
  on dues_payments for select
  to authenticated
  using (is_group_member(group_id));

create policy "admins can manage dues payments"
  on dues_payments for all
  to authenticated
  using (is_group_admin(group_id))
  with check (is_group_admin(group_id));

-- ============================================
-- Seed: default Brass Band monthly dues (admin-editable after)
-- ============================================
insert into dues_settings (group_id, monthly_amount, currency)
select id, 20, 'GHS' from groups where slug = 'brass-band';
