-- ============================================
-- Add a free-text notes field to inventory items, for details
-- like "2 of 3 trumpets need repair, 1 in good condition".
-- ============================================
alter table inventory_items add column notes text;
