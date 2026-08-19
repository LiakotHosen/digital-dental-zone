-- ═══════════════════════════════════════════════════════════════════
-- DIGITAL DENTAL ZONE — 6 Categories & Pricing Update
-- Run this in Supabase SQL Editor to update your database
-- ═══════════════════════════════════════════════════════════════════

-- Clear existing treatments & categories to cleanly apply the 6 categories
truncate table public.treatments cascade;
delete from public.service_categories;

-- 1. Insert 6 Service Categories
insert into public.service_categories (id, slug, name_en, name_bn, icon, sort_order) values
  (1, 'diagnostics-general',       'Diagnostics & General Dentistry', 'ডায়াগনস্টিকস ও সাধারণ দন্তচিকিৎসা', 'stethoscope', 1),
  (2, 'root-canal-restorations',   'Root Canal & Restorations',       'রুট ক্যানাল ও রেস্টোরেশন',          'healing',     2),
  (3, 'oral-surgery-implants',     'Oral Surgery & Implants',         'ওরাল সার্জারি ও ইমপ্ল্যান্ট',        'surgery',     3),
  (4, 'prosthodontics-aesthetic',  'Prosthodontics & Aesthetic Smile', 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',     'crown',       4),
  (5, 'orthodontics',              'Orthodontics',                    'অর্থোডন্টিক্স',                     'aligner',     5),
  (6, 'pediatric-dentistry',       'Pediatric Dentistry',             'শিশু দন্ত চিকিৎসা',                 'child',       6);

-- Reset sequence for service_categories
select setval(pg_get_serial_sequence('public.service_categories', 'id'), 6);

-- 2. Insert 33 Treatments under the 6 Categories
insert into public.treatments
  (category_id, slug, name_en, name_bn, price_min, price_max, price_text, negotiable, notes_en, sort_order) values
  -- 1. Diagnostics & General Dentistry
  (1, 'consultation-fee', 'Consultation Fee', 'পরামর্শ ফি', 700, 700, '৳700', true, 'Negotiable', 1),
  (1, 'scaling-polishing', 'Scaling & Polishing', 'স্কেলিং ও পলিশিং', 3000, 3000, '৳3,000', false, NULL, 2),
  (1, 'traditional-filling', 'Traditional Filling', 'সাধারণ ফিলিং', 4000, 4000, '৳4,000', false, 'Per tooth', 3),
  (1, 'tooth-whitening', 'Tooth Whitening', 'দাঁত সাদা করা', 15000, 15000, '৳15,000', true, 'Negotiable', 4),

  -- 2. Root Canal & Restorations
  (2, 'rct-endomotor', 'RCT (using Endomotor)', 'রুট ক্যানাল (এন্ডোমোটর)', 8000, 8000, '৳8,000', false, NULL, 1),
  (2, 're-rct', 'Re-RCT', 'রি-রুট ক্যানাল', 15000, 15000, '৳15,000', false, NULL, 2),
  (2, 'rct-full-package', 'RCT + Post Core + Zirconia Crown (Full Package)', 'রুট ক্যানাল + পোস্ট কোর + জিরকোনিয়া ক্রাউন (সম্পূর্ণ প্যাকেজ)', 25000, 25000, '৳25,000', false, 'Where indicated', 3),
  (2, 'inlay', 'Inlay', 'ইনলে', 10000, 10000, '৳10,000', false, NULL, 4),
  (2, 'onlay', 'Onlay', 'অনলে', 10000, 10000, '৳10,000', false, NULL, 5),
  (2, 'overlay', 'Overlay', 'ওভারলে', 10000, 10000, '৳10,000', false, NULL, 6),

  -- 3. Oral Surgery & Implants
  (3, 'adult-extraction', 'Adult Tooth Extraction', 'প্রাপ্তবয়স্ক দাঁত তোলা', 3000, 3000, '৳3,000', false, 'Per tooth; varies case to case', 1),
  (3, 'surgical-extraction', 'Surgical / Semi-surgical Extraction', 'সার্জিক্যাল / সেমি-সার্জিক্যাল এক্সট্রাকশন', 4000, 15000, '৳4,000 – ৳15,000', false, 'Depends on case', 2),
  (3, 'crown-lengthening', 'Crown Lengthening', 'ক্রাউন লেংথেনিং', 3000, 3000, '৳3,000', false, NULL, 3),
  (3, 'gingivectomy', 'Gingivectomy', 'জিনজিভেক্টমি', 5000, 10000, '৳5,000 – ৳10,000', false, 'Depends on case', 4),
  (3, 'operculectomy', 'Operculectomy', 'অপারকুলেক্টমি', 10000, 10000, '৳10,000', false, NULL, 5),
  (3, 'apicectomy', 'Apicectomy', 'এপিসেক্টমি', 15000, 15000, '৳15,000', true, 'Negotiable', 6),
  (3, 'gummy-smile', 'Gummy Smile Correction', 'গামি স্মাইল কারেকশন', 50000, NULL, 'Above ৳50,000', true, 'Negotiable — exact figure to be confirmed', 7),
  (3, 'dental-implant', 'Dental Implant', 'ডেন্টাল ইমপ্ল্যান্ট', 120000, 120000, '৳1,20,000', true, 'Negotiable', 8),

  -- 4. Prosthodontics & Aesthetic Smile
  (4, 'pmma-crown', 'PMMA Crown', 'পিএমএমএ ক্রাউন', 5000, 5000, '৳5,000', false, 'Per tooth', 1),
  (4, 'porcelain-crown', 'Porcelain Crown', 'পোর্সেলিন ক্রাউন', 7000, 7000, '৳7,000', false, 'Per tooth', 2),
  (4, 'zirconia-crown', 'Zirconia Crown', 'জিরকোনিয়া ক্রাউন', 12000, 12000, '৳12,000', false, 'Per tooth', 3),
  (4, 'titanium-crown', 'Titanium Crown', 'টাইটানিয়াম ক্রাউন', 20000, 20000, '৳20,000', false, 'Per tooth', 4),
  (4, 'crown-removal', 'Crown Removal (old/faulty)', 'ক্রাউন রিমুভাল (পুরনো/ত্রুটিপূর্ণ)', 4000, 4000, '৳4,000', false, NULL, 5),
  (4, 'veneer-zirconia', 'Veneer (Zirconia)', 'ভিনিয়ার (জিরকোনিয়া)', 12000, 12000, '৳12,000', false, NULL, 6),
  (4, 'smile-design', 'Smile Designing', 'স্মাইল ডিজাইনিং', NULL, NULL, 'Included with cosmetic procedures', false, 'No separate fee given', 7),

  -- 5. Orthodontics
  (5, 'invisalign', 'Invisalign Orthodontic Aligner', 'ইনভিজালাইন অর্থোডন্টিক অ্যালাইনার', 50000, NULL, 'Above ৳50,000', true, 'Negotiable — exact figure to be confirmed', 1),
  (5, 'braces', 'Orthodontic Braces', 'অর্থোডন্টিক ব্রেসেস', 50000, NULL, 'Above ৳50,000', true, 'Negotiable — exact figure to be confirmed', 2),

  -- 6. Pediatric Dentistry
  (6, 'deciduous-extraction', 'Deciduous Tooth Extraction', 'দুধ দাঁত তোলা', 1000, 1000, '৳1,000', false, NULL, 1),
  (6, 'deciduous-filling', 'Deciduous Filling', 'দুধ দাঁতের ফিলিং', 2500, 2500, '৳2,500', false, NULL, 2),
  (6, 'deciduous-pulpotomy', 'Deciduous Pulpotomy', 'দুধ দাঁতের পালপোটমি', 4000, 4000, '৳4,000', false, NULL, 3),
  (6, 'deciduous-temporary-crown', 'Deciduous Temporary Crown', 'দুধ দাঁতের টেম্পোরারি ক্রাউন', 4000, 4000, '৳4,000', false, 'Lasts 6–18+ months', 4),
  (6, 'deciduous-pulpectomy', 'Deciduous Pulpectomy', 'দুধ দাঁতের পালপেক্টমি', 5000, 5000, '৳5,000', true, 'Negotiable', 5),
  (6, 'deciduous-space-maintainer', 'Deciduous Space Maintainer', 'দুধ দাঁতের স্পেস মেইনটেইনার', 5000, 5000, '৳5,000', false, NULL, 6);
