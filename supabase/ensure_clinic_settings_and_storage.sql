-- ═══════════════════════════════════════════════════════════════════════
-- DIGITAL DENTAL ZONE — CLINIC SETTINGS & LOGO STORAGE CONFIGURATION
-- ═══════════════════════════════════════════════════════════════════════
-- Run this in Supabase Dashboard -> SQL Editor -> Click "RUN"
-- This ensures the clinic_settings table exists, has an initial row,
-- and allows public read/write for seamless admin logo uploads.
-- ═══════════════════════════════════════════════════════════════════════

-- 1. Create or update clinic_settings table
CREATE TABLE IF NOT EXISTS public.clinic_settings (
  id              SERIAL PRIMARY KEY,
  clinic_name_en  TEXT NOT NULL DEFAULT 'Digital Dental Zone',
  clinic_name_bn  TEXT NOT NULL DEFAULT 'ডিজিটাল ডেন্টাল জোন',
  doctor_name_en  TEXT NOT NULL DEFAULT 'Dr. Nusrat Naiem',
  doctor_name_bn  TEXT NOT NULL DEFAULT 'ডাঃ নুসরাত নাঈম',
  phone           TEXT NOT NULL DEFAULT '01674-878470',
  phone_intl      TEXT NOT NULL DEFAULT '+8801674878470',
  whatsapp_link   TEXT NOT NULL DEFAULT 'https://wa.me/8801674878470',
  address_en      TEXT NOT NULL DEFAULT '15, Parara Road (Opp. Surovi Booking Office), Barishal',
  address_bn      TEXT NOT NULL DEFAULT '১৫, পরারা রোড (সুরভী বুকিং অফিসের বিপরীতে), বরিশাল',
  map_url         TEXT NOT NULL DEFAULT 'https://maps.app.goo.gl/LorR3QSZqivKtxk76',
  hours_en        TEXT NOT NULL DEFAULT 'Sat–Fri: 10:00 AM – 1:00 PM & 5:00 PM – 9:00 PM',
  hours_bn        TEXT NOT NULL DEFAULT 'শনি–শুক্র: সকাল ১০:০০ – দুপুর ১:০০ ও বিকাল ৫:০০ – রাত ৯:০০',
  bmdc_reg        TEXT NOT NULL DEFAULT '5808',
  facebook_url    TEXT NOT NULL DEFAULT 'https://www.facebook.com/nusratdental.barishal/',
  logo_url        TEXT,
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Ensure initial row (id: 1) exists with default logo
INSERT INTO public.clinic_settings (id, clinic_name_en, logo_url)
VALUES (1, 'Digital Dental Zone', '/assets/ddz-logo.png')
ON CONFLICT (id) DO NOTHING;

-- 3. Configure Row-Level Security (RLS)
ALTER TABLE public.clinic_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "allow full access to clinic_settings" ON public.clinic_settings;
DROP POLICY IF EXISTS "clinic_settings are public readable" ON public.clinic_settings;

CREATE POLICY "allow full access to clinic_settings"
  ON public.clinic_settings
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- 4. Create and configure storage buckets for logo and review uploads
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('reviews', 'reviews', true),
  ('gallery', 'gallery', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 5. Storage policies for uploads
DROP POLICY IF EXISTS "Public Access for Storage" ON storage.objects;
CREATE POLICY "Public Access for Storage"
  ON storage.objects
  FOR ALL
  TO anon, authenticated
  USING (bucket_id IN ('reviews', 'gallery'))
  WITH CHECK (bucket_id IN ('reviews', 'gallery'));
