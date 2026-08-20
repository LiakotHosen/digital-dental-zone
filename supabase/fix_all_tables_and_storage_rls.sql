-- ═══════════════════════════════════════════════════════════════════════
-- DIGITAL DENTAL ZONE (DDZ) — COMPLETE DATABASE & STORAGE RLS FIX
-- ═══════════════════════════════════════════════════════════════════════
-- Run this script in Supabase Dashboard -> SQL Editor -> Click "RUN"
-- This guarantees:
-- 1. Full CRUD permissions (SELECT, INSERT, UPDATE, DELETE) for Admin Panel on all tables.
-- 2. Public Storage buckets ('reviews', 'gallery') for image and logo uploads.
-- 3. Proper columns on blog_posts, clinic_settings, reviews, gallery.
-- ═══════════════════════════════════════════════════════════════════════

-- 1. Ensure blog_posts table columns and full CRUD access
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id               SERIAL PRIMARY KEY,
  slug             TEXT UNIQUE NOT NULL,
  title_en         TEXT,
  title_bn         TEXT,
  excerpt_en       TEXT,
  excerpt_bn       TEXT,
  body_en          TEXT,
  body_bn          TEXT,
  language         TEXT NOT NULL DEFAULT 'both',
  tags             TEXT[] NOT NULL DEFAULT '{}',
  cover_image      TEXT,
  author           TEXT NOT NULL DEFAULT 'Dr. Nusrat Naiem',
  meta_title       TEXT,
  meta_description TEXT,
  published_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow full access on blog_posts" ON public.blog_posts;
DROP POLICY IF EXISTS "blog_posts are public readable" ON public.blog_posts;
CREATE POLICY "allow full access on blog_posts"
  ON public.blog_posts FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

-- 2. Apply Full CRUD Access on all other tables
DO $$
DECLARE
  tbl text;
BEGIN
  FOREACH tbl IN ARRAY ARRAY[
    'public.clinic_settings',
    'public.reviews',
    'public.service_categories',
    'public.treatments',
    'public.faqs',
    'public.gallery',
    'public.leads'
  ]
  LOOP
    EXECUTE format('ALTER TABLE IF EXISTS %s ENABLE ROW LEVEL SECURITY', tbl);
    EXECUTE format('DROP POLICY IF EXISTS "allow full access on %s" ON %s', tbl, tbl);
    EXECUTE format('DROP POLICY IF EXISTS "public read on %s" ON %s', tbl, tbl);
    EXECUTE format(
      'CREATE POLICY "allow full access on %s" ON %s
         FOR ALL TO anon, authenticated USING (true) WITH CHECK (true)',
      tbl, tbl);
  END LOOP;
END $$;

-- 3. Configure Storage Buckets for Images & Screenshots
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('reviews', 'reviews', true),
  ('gallery', 'gallery', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 4. Storage Bucket Access Policies
DROP POLICY IF EXISTS "Public Access for Storage" ON storage.objects;
DROP POLICY IF EXISTS "Public Access for Reviews Bucket" ON storage.objects;
CREATE POLICY "Public Access for Storage"
  ON storage.objects
  FOR ALL
  TO anon, authenticated
  USING (bucket_id IN ('reviews', 'gallery'))
  WITH CHECK (bucket_id IN ('reviews', 'gallery'));
