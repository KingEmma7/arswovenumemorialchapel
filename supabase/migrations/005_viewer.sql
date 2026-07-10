-- ============================================
-- Grant the shared "member viewer" account read access to Brass
-- Band attendance. Create the account first in the Supabase
-- Dashboard (Authentication > Users > Add User):
--   email:    brassband-viewer@wmc-ars.org
--   password: <the passcode you want to share with band members>
--   check "Auto Confirm User" so it can sign in immediately.
-- Then run this. Safe to re-run.
-- ============================================
insert into memberships (profile_id, group_id, role)
select p.id, g.id, 'member'
from auth.users u
join profiles p on p.id = u.id
cross join (select id from groups where slug = 'brass-band') g
where u.email = 'brassband-viewer@wmc-ars.org'
on conflict (profile_id, group_id) do update set role = 'member';
