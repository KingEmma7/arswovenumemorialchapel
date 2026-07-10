-- ============================================
-- Per-member dues tracking start date, so balances aren't
-- overstated for members who joined after dues tracking began.
-- Defaults to the first of the current month (i.e. "start counting
-- from when this feature went live" for existing roster rows);
-- admins can adjust it per member in the Dues tab.
-- ============================================
alter table roster_members
  add column dues_start_period date not null default date_trunc('month', now())::date;
