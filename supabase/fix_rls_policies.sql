-- ═══════════════════════════════════════════════════════════════════
-- DIGITAL DENTAL ZONE — FIX ROW-LEVEL SECURITY (RLS) POLICIES
-- Copy and paste this entire script into:
-- Supabase Dashboard → SQL Editor → Click "Run"
-- ═══════════════════════════════════════════════════════════════════

-- 1. Enable Full CRUD Access (INSERT, UPDATE, DELETE, SELECT) on Reviews
drop policy if exists "reviews are public readable" on public.reviews;
drop policy if exists "admin full access on public.reviews" on public.reviews;
drop policy if exists "allow full access to reviews" on public.reviews;

create policy "allow full access to reviews"
  on public.reviews
  for all
  to anon, authenticated
  using (true)
  with check (true);

-- 2. Apply Full CRUD Access to all content tables for seamless admin panel management
do $$
declare
  tbl text;
begin
  foreach tbl in array array[
    'public.clinic_settings',
    'public.service_categories',
    'public.treatments',
    'public.faqs',
    'public.blog_posts',
    'public.gallery'
  ]
  loop
    execute format('drop policy if exists "allow full access on %s" on %s', tbl, tbl);
    execute format(
      'create policy "allow full access on %s" on %s
         for all to anon, authenticated using (true) with check (true)',
      tbl, tbl);
  end loop;
end $$;

-- 3. Ensure Leads table allows insertion from website & reading by admin
drop policy if exists "anon can insert leads" on public.leads;
drop policy if exists "anon cannot read leads" on public.leads;
drop policy if exists "admin can read leads" on public.leads;
drop policy if exists "allow leads access" on public.leads;

create policy "allow insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

create policy "allow select leads"
  on public.leads for select
  to anon, authenticated
  using (true);

-- 4. Create and Configure Storage Bucket for Screenshot Uploads
insert into storage.buckets (id, name, public)
values ('reviews', 'reviews', true)
on conflict (id) do nothing;

drop policy if exists "Public Access for Reviews Bucket" on storage.objects;
create policy "Public Access for Reviews Bucket"
  on storage.objects for all
  to anon, authenticated
  using (bucket_id = 'reviews')
  with check (bucket_id = 'reviews');
