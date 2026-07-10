-- ============================================
-- Grant Brass Band admin role.
-- Run this AFTER each person has logged in at least once via the
-- magic link (their auth.users/profiles row must already exist).
-- Safe to re-run.
-- ============================================
insert into memberships (profile_id, group_id, role)
select p.id, g.id, 'admin'
from auth.users u
join profiles p on p.id = u.id
cross join (select id from groups where slug = 'brass-band') g
where u.email in ('etagbor@gmail.com', 'selormgoka.sg@gmail.com')
on conflict (profile_id, group_id) do update set role = 'admin';
