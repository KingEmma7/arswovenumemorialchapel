-- ============================================
-- Add an optional note to attendance records, used for
-- excused-absence reasons. Admin-entered, admin-only display
-- is enforced in the app layer (not column-level RLS).
-- ============================================
alter table attendance add column note text;
