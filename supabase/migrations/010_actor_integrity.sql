-- ============================================
-- Bind attendance.marked_by and dues_payments.recorded_by to the
-- real authenticated actor, server-side. The client used to send
-- these as plain columns, which a tampered client could forge to
-- misattribute who marked attendance or recorded a payment.
-- Triggers overwrite whatever the client sends on every write.
-- ============================================
create or replace function set_marked_by()
returns trigger
language plpgsql
security definer
as $$
begin
  new.marked_by := auth.uid();
  return new;
end;
$$;

drop trigger if exists attendance_set_marked_by on attendance;
create trigger attendance_set_marked_by
  before insert or update on attendance
  for each row execute function set_marked_by();

create or replace function set_recorded_by()
returns trigger
language plpgsql
security definer
as $$
begin
  new.recorded_by := auth.uid();
  return new;
end;
$$;

drop trigger if exists dues_payments_set_recorded_by on dues_payments;
create trigger dues_payments_set_recorded_by
  before insert or update on dues_payments
  for each row execute function set_recorded_by();
