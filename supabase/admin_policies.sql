-- ═══════════════════════════════════════════════════════════════════
--   DIGITAL DENTAL ZONE — Admin RLS Policies
--   Run AFTER supabase/schema.sql in the Supabase SQL Editor.
--
--   Grants full CRUD on content tables to *authenticated* users
--   (i.e. anyone you create via Supabase Auth → Users), and lets
--   admins read the leads captured from the pricing calculator.
--
--   Security note: "to authenticated" lets ANY signed-in user of this
--   project edit content. For a single-owner clinic this is fine.
--   To lock it to one email instead, uncomment the admin helper at the
--   bottom and replace the "to authenticated" clauses with
--   "to authenticated using (is_admin()) with check (is_admin())".
-- ═══════════════════════════════════════════════════════════════════

-- 1. Content tables — full CRUD for authenticated users
do $$
declare
  t text;
begin
  foreach t in array array[
    'public.clinic_settings',
    'public.service_categories',
    'public.treatments',
    'public.reviews',
    'public.faqs',
    'public.blog_posts',
    'public.gallery'
  ]
  loop
    execute format('drop policy if exists "admin full access on %s" on %s', t, t);
    execute format(
      'create policy "admin full access on %s" on %s
         for all to authenticated using (true) with check (true)',
      t, t);
  end loop;
end $$;

-- 2. Leads — authenticated users may read (but not modify) leads
drop policy if exists "admin can read leads" on public.leads;
create policy "admin can read leads"
  on public.leads for select to authenticated using (true);

drop policy if exists "admin cannot write leads" on public.leads;
create policy "admin cannot write leads"
  on public.leads for all to authenticated using (false) with check (false);

-- ───────────────────────────────────────────────────────────────────
-- Optional: restrict admin access to a single email address.
-- Uncomment the helper below, then change the "to authenticated"
-- clauses above to use is_admin().
-- ───────────────────────────────────────────────────────────────────
-- create or replace function public.is_admin()
-- returns boolean
-- language sql stable security definer set search_path = public
-- as $$
--   select coalesce(auth.jwt() ->> 'email', '') = 'you@example.com';
-- $$;