-- ═══════════════════════════════════════════════════════════════════
--   DIGITAL DENTAL ZONE — Dr. Nusrat Naiem, Barishal
--   Supabase Schema + Seed Data
--   Run this in the Supabase SQL Editor (Project: jyqmjfvbsbujjrdffxra)
--
--   Content tables  → anon  : SELECT
--   leads           → anon  : INSERT only (lead capture from calculator)
--   service_role    → full access (bypasses RLS automatically)
-- ═══════════════════════════════════════════════════════════════════

-- ───────────────────────────────────────────────────────────────────
-- 1. CLINIC SETTINGS
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.clinic_settings (
  id              serial primary key,
  clinic_name_en  text not null default 'Digital Dental Zone',
  clinic_name_bn  text not null default 'ডিজিটাল ডেন্টাল জোন',
  doctor_name_en  text not null default 'Dr. Nusrat Naiem',
  doctor_name_bn  text not null default 'ডাঃ নুসরাত নাঈম',
  phone           text not null default '01674-878470',
  phone_intl      text not null default '+8801674878470',
  whatsapp_link   text not null default 'https://wa.me/8801674878470',
  address_en      text not null default '15, Parara Road (Opp. Surovi Booking Office), Barishal',
  address_bn      text not null default '১৫, পরারা রোড (সুরভী বুকিং অফিসের বিপরীতে), বরিশাল',
  map_url         text not null default 'https://maps.app.goo.gl/LorR3QSZqivKtxk76',
  hours_en        text not null default 'Sat–Fri: 10:00 AM – 1:00 PM & 5:00 PM – 9:00 PM',
  hours_bn        text not null default 'শনি–শুক্র: সকাল ১০:০০ – দুপুর ১:০০ ও বিকাল ৫:০০ – রাত ৯:০০',
  bmdc_reg        text not null default '5808',
  facebook_url    text not null default 'https://www.facebook.com/nusratdental.barishal/',
  logo_url        text,
  updated_at      timestamptz not null default now()
);

alter table public.clinic_settings enable row level security;

create policy "clinic_settings are public readable"
  on public.clinic_settings for select to anon using (true);

-- ───────────────────────────────────────────────────────────────────
-- 2. SERVICE CATEGORIES  (10 categories from the price list)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.service_categories (
  id          serial primary key,
  slug        text unique not null,
  name_en     text not null,
  name_bn     text not null,
  icon        text,
  sort_order  int  not null default 0
);

alter table public.service_categories enable row level security;

create policy "service_categories are public readable"
  on public.service_categories for select to anon using (true);

-- ───────────────────────────────────────────────────────────────────
-- 3. TREATMENTS  (full price list)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.treatments (
  id           serial primary key,
  category_id  int references public.service_categories(id) on delete cascade,
  slug         text unique not null,
  name_en      text not null,
  name_bn      text not null,
  price_min    numeric,              -- null when not yet quoted
  price_max    numeric,              -- null when single price / not capped
  price_text   text,                 -- display text e.g. '৳8,000' or 'Above ৳50,000'
  currency     text not null default 'BDT',
  negotiable   boolean not null default false,
  notes_en     text,
  notes_bn     text,
  image_url    text,
  sort_order   int not null default 0
);

alter table public.treatments enable row level security;

create policy "treatments are public readable"
  on public.treatments for select to anon using (true);

-- ───────────────────────────────────────────────────────────────────
-- 4. REVIEWS  (7 Google reviews — screenshots + links)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.reviews (
  id          serial primary key,
  author      text,
  rating      int  not null default 5,
  text_en     text,
  text_bn     text,
  review_date date,
  image_url   text,               -- screenshot of the real Google review
  source_url  text,               -- maps.app.goo.gl link
  sort_order  int not null default 0
);

alter table public.reviews enable row level security;

create policy "reviews are public readable and manageable"
  on public.reviews for all to anon, authenticated using (true) with check (true);

-- ───────────────────────────────────────────────────────────────────
-- 5. FAQS  (bilingual, 12 items)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.faqs (
  id           serial primary key,
  question_en  text not null,
  answer_en    text not null,
  question_bn  text not null,
  answer_bn    text not null,
  sort_order   int not null default 0
);

alter table public.faqs enable row level security;

create policy "faqs are public readable"
  on public.faqs for select to anon using (true);

-- ───────────────────────────────────────────────────────────────────
-- 6. BLOG POSTS  (6 posts — 3 EN + 3 BN, markdown body)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.blog_posts (
  id             serial primary key,
  slug           text unique not null,
  title_en       text,
  title_bn       text,
  excerpt_en     text,
  excerpt_bn     text,
  body_en        text,            -- markdown
  body_bn        text,            -- markdown
  language       text not null default 'en' check (language in ('en','bn')),
  tags           text[] not null default '{}',
  cover_image    text,
  author         text not null default 'Dr. Nusrat Naiem',
  meta_title     text,
  meta_description text,
  published_at   timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

create policy "blog_posts are public readable"
  on public.blog_posts for select to anon using (true);

-- ───────────────────────────────────────────────────────────────────
-- 7. LEADS  (calculator / lead capture — INSERT only for anon)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.leads (
  id              bigint generated always as identity primary key,
  name            text not null,
  phone           text not null,
  services        text not null default '[]',   -- JSON array of selected services
  estimated_total numeric,
  message         text,
  source          text not null default 'calculator',
  created_at      timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "anon can insert leads"
  on public.leads for insert to anon with check (true);

create policy "anon cannot read leads"
  on public.leads for select to anon using (false);

-- ───────────────────────────────────────────────────────────────────
-- 8. GALLERY  (before/after + general)
-- ───────────────────────────────────────────────────────────────────
create table if not exists public.gallery (
  id           serial primary key,
  title_en     text,
  title_bn     text,
  type         text not null default 'general' check (type in ('before_after','general')),
  before_url   text,
  after_url    text,
  image_url    text,
  caption_en   text,
  caption_bn   text,
  sort_order   int not null default 0
);

alter table public.gallery enable row level security;

create policy "gallery is public readable"
  on public.gallery for select to anon using (true);

-- ═══════════════════════════════════════════════════════════════════
--   SEED DATA
-- ═══════════════════════════════════════════════════════════════════

-- 1. Clinic settings
insert into public.clinic_settings (id) values (1)
on conflict (id) do nothing;

-- 2. Service categories (6 authoritative categories)
insert into public.service_categories (slug, name_en, name_bn, icon, sort_order) values
  ('diagnostics-general',       'Diagnostics & General Dentistry', 'ডায়াগনস্টিকস ও সাধারণ দন্তচিকিৎসা', 'stethoscope', 1),
  ('root-canal-restorations',   'Root Canal & Restorations',       'রুট ক্যানাল ও রেস্টোরেশন',          'healing',     2),
  ('oral-surgery-implants',     'Oral Surgery & Implants',         'ওরাল সার্জারি ও ইমপ্ল্যান্ট',        'surgery',     3),
  ('prosthodontics-aesthetic',  'Prosthodontics & Aesthetic Smile', 'প্রস্থোডন্টিক্স ও নান্দনিক হাসি',     'crown',       4),
  ('orthodontics',              'Orthodontics',                    'অর্থোডন্টিক্স',                     'aligner',     5),
  ('pediatric-dentistry',       'Pediatric Dentistry',             'শিশু দন্ত চিকিৎসা',                 'child',       6)
on conflict (slug) do nothing;

-- 3. Treatments (authoritative price list — BDT)
insert into public.treatments
  (category_id, slug, name_en, name_bn, price_min, price_max, price_text, negotiable, notes_en, sort_order) values
  -- 1. Diagnostics & General Dentistry
  ((select id from public.service_categories where slug='diagnostics-general'),
   'consultation-fee', 'Consultation Fee', 'পরামর্শ ফি', 700, 700, '৳700', true, 'Negotiable', 1),
  ((select id from public.service_categories where slug='diagnostics-general'),
   'scaling-polishing', 'Scaling & Polishing', 'স্কেলিং ও পলিশিং', 3000, 3000, '৳3,000', false, NULL, 2),
  ((select id from public.service_categories where slug='diagnostics-general'),
   'traditional-filling', 'Traditional Filling', 'সাধারণ ফিলিং', 4000, 4000, '৳4,000', false, 'Per tooth', 3),
  ((select id from public.service_categories where slug='diagnostics-general'),
   'tooth-whitening', 'Tooth Whitening', 'দাঁত সাদা করা', 15000, 15000, '৳15,000', true, 'Negotiable', 4),

  -- 2. Root Canal & Restorations
  ((select id from public.service_categories where slug='root-canal-restorations'),
   'rct-endomotor', 'RCT (using Endomotor)', 'রুট ক্যানাল (এন্ডোমোটর)', 8000, 8000, '৳8,000', false, NULL, 1),
  ((select id from public.service_categories where slug='root-canal-restorations'),
   're-rct', 'Re-RCT', 'রি-রুট ক্যানাল', 15000, 15000, '৳15,000', false, NULL, 2),
  ((select id from public.service_categories where slug='root-canal-restorations'),
   'rct-full-package', 'RCT + Post Core + Zirconia Crown (Full Package)', 'রুট ক্যানাল + পোস্ট কোর + জিরকোনিয়া ক্রাউন (সম্পূর্ণ প্যাকেজ)', 25000, 25000, '৳25,000', false, 'Where indicated', 3),
  ((select id from public.service_categories where slug='root-canal-restorations'),
   'inlay', 'Inlay', 'ইনলে', 10000, 10000, '৳10,000', false, NULL, 4),
  ((select id from public.service_categories where slug='root-canal-restorations'),
   'onlay', 'Onlay', 'অনলে', 10000, 10000, '৳10,000', false, NULL, 5),
  ((select id from public.service_categories where slug='root-canal-restorations'),
   'overlay', 'Overlay', 'ওভারলে', 10000, 10000, '৳10,000', false, NULL, 6),

  -- 3. Oral Surgery & Implants
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'adult-extraction', 'Adult Tooth Extraction', 'প্রাপ্তবয়স্ক দাঁত তোলা', 3000, 3000, '৳3,000', false, 'Per tooth; varies case to case', 1),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'surgical-extraction', 'Surgical / Semi-surgical Extraction', 'সার্জিক্যাল / সেমি-সার্জিক্যাল এক্সট্রাকশন', 4000, 15000, '৳4,000 – ৳15,000', false, 'Depends on case', 2),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'crown-lengthening', 'Crown Lengthening', 'ক্রাউন লেংথেনিং', 3000, 3000, '৳3,000', false, NULL, 3),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'gingivectomy', 'Gingivectomy', 'জিনজিভেক্টমি', 5000, 10000, '৳5,000 – ৳10,000', false, 'Depends on case', 4),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'operculectomy', 'Operculectomy', 'অপারকুলেক্টমি', 10000, 10000, '৳10,000', false, NULL, 5),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'apicectomy', 'Apicectomy', 'এপিসেক্টমি', 15000, 15000, '৳15,000', true, 'Negotiable', 6),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'gummy-smile', 'Gummy Smile Correction', 'গামি স্মাইল কারেকশন', 50000, NULL, 'Above ৳50,000', true, 'Negotiable — exact figure to be confirmed', 7),
  ((select id from public.service_categories where slug='oral-surgery-implants'),
   'dental-implant', 'Dental Implant', 'ডেন্টাল ইমপ্ল্যান্ট', 120000, 120000, '৳1,20,000', true, 'Negotiable', 8),

  -- 4. Prosthodontics & Aesthetic Smile
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'pmma-crown', 'PMMA Crown', 'পিএমএমএ ক্রাউন', 5000, 5000, '৳5,000', false, 'Per tooth', 1),
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'porcelain-crown', 'Porcelain Crown', 'পোর্সেলিন ক্রাউন', 7000, 7000, '৳7,000', false, 'Per tooth', 2),
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'zirconia-crown', 'Zirconia Crown', 'জিরকোনিয়া ক্রাউন', 12000, 12000, '৳12,000', false, 'Per tooth', 3),
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'titanium-crown', 'Titanium Crown', 'টাইটানিয়াম ক্রাউন', 20000, 20000, '৳20,000', false, 'Per tooth', 4),
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'crown-removal', 'Crown Removal (old/faulty)', 'ক্রাউন রিমুভাল (পুরনো/ত্রুটিপূর্ণ)', 4000, 4000, '৳4,000', false, NULL, 5),
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'veneer-zirconia', 'Veneer (Zirconia)', 'ভিনিয়ার (জিরকোনিয়া)', 12000, 12000, '৳12,000', false, NULL, 6),
  ((select id from public.service_categories where slug='prosthodontics-aesthetic'),
   'smile-design', 'Smile Designing', 'স্মাইল ডিজাইনিং', NULL, NULL, 'Included with cosmetic procedures', false, 'No separate fee given', 7),

  -- 5. Orthodontics
  ((select id from public.service_categories where slug='orthodontics'),
   'invisalign', 'Space Correction — Invisalign Orthodontic Aligner', 'ইনভিজালাইন অর্থোডন্টিক অ্যালাইনার', 50000, NULL, 'Above ৳50,000', true, 'Negotiable — exact figure to be confirmed', 1),
  ((select id from public.service_categories where slug='orthodontics'),
   'braces', 'Orthodontic Braces', 'অর্থোডন্টিক ব্রেসেস', 50000, NULL, 'Above ৳50,000', true, 'Negotiable — exact figure to be confirmed', 2),

  -- 6. Pediatric Dentistry
  ((select id from public.service_categories where slug='pediatric-dentistry'),
   'deciduous-extraction', 'Deciduous Tooth Extraction', 'দুধ দাঁত তোলা', 1000, 1000, '৳1,000', false, NULL, 1),
  ((select id from public.service_categories where slug='pediatric-dentistry'),
   'deciduous-filling', 'Deciduous Filling', 'দুধ দাঁতের ফিলিং', 2500, 2500, '৳2,500', false, NULL, 3),
  ((select id from public.service_categories where slug='pediatric-dentistry'),
   'deciduous-pulpotomy', 'Deciduous Pulpotomy', 'দুধ দাঁতের পালপোটমি', 4000, 4000, '৳4,000', false, NULL, 1),
  ((select id from public.service_categories where slug='pediatric-dentistry'),
   'deciduous-temporary-crown', 'Deciduous Temporary Crown', 'দুধ দাঁতের টেম্পোরারি ক্রাউন', 4000, 4000, '৳4,000', false, 'Lasts 6–18+ months', 5),
  ((select id from public.service_categories where slug='pediatric-dentistry'),
   'deciduous-pulpectomy', 'Deciduous Pulpectomy', 'দুধ দাঁতের পালপেক্টমি', 5000, 5000, '৳5,000', true, 'Negotiable', 2),
  ((select id from public.service_categories where slug='pediatric-dentistry'),
   'deciduous-space-maintainer', 'Deciduous Space Maintainer', 'দুধ দাঁতের স্পেস মেইনটেইনার', 5000, 5000, '৳5,000', false, NULL, 4)
on conflict (slug) do nothing;

-- 4. Reviews (7 Google reviews)
insert into public.reviews (author, rating, text_en, text_bn, image_url, source_url, sort_order) values
  ('Google Reviewer 1', 5,
   'Excellent doctor. Very gentle and caring. My root canal treatment was completely painless. Highly recommended!',
   'অসাধারণ ডাক্তার। অত্যন্ত ভদ্র ও যত্নশীল। আমার রুট ক্যানাল চিকিৎসা সম্পূর্ণ ব্যথাহীন ছিল। জোরালোভাবে সুপারিশ করছি!',
   '/assets/images/Google Reviews 1.png', 'https://maps.app.goo.gl/gg1BabKhJw6DNsAz7', 1),
  ('Google Reviewer 2', 5,
   'Best dental clinic in Barishal. Dr. Nusrat is very professional and uses modern technology. My children love visiting her!',
   'বরিশালের সেরা ডেন্টাল ক্লিনিক। ডাঃ নুসরাত অত্যন্ত পেশাদার এবং আধুনিক প্রযুক্তি ব্যবহার করেন। আমার সন্তানরা তাঁর কাছে যেতে ভালোবাসে!',
   '/assets/images/Google Reviews 2.png', 'https://maps.app.goo.gl/SRwGyGVDYvXrSpWv7', 2),
  ('Google Reviewer 3', 5,
   'Got my dental implant done here. Amazing results! The digital scanning technology made the whole process so much easier.',
   'এখানে ডেন্টাল ইমপ্ল্যান্ট করিয়েছি। অসাধারণ ফলাফল! ডিজিটাল স্ক্যানিং প্রযুক্তি পুরো প্রক্রিয়াটি অনেক সহজ করে দিয়েছে।',
   '/assets/images/Google Reviews 3.png', 'https://maps.app.goo.gl/QTW5WZzRksCwBGfN6', 3),
  ('Google Reviewer 4', 5,
   'Very clean and modern chamber. Dr. Nusrat explains everything clearly before starting treatment. Highly professional.',
   'অত্যন্ত পরিচ্ছন্ন ও আধুনিক চেম্বার। ডাঃ নুসরাত চিকিৎসা শুরুর আগে সবকিছু স্পষ্টভাবে বুঝিয়ে বলেন। অত্যন্ত পেশাদার।',
   '/assets/images/Google Reviews 4.png', 'https://maps.app.goo.gl/AqLqiXqdgy8hhiQJA', 4),
  ('Google Reviewer 5', 5,
   'Great experience with teeth whitening and veneers. My smile looks completely different now. Thank you doctor!',
   'দাঁত সাদা করা ও ভিনিয়ারে দারুণ অভিজ্ঞতা। এখন আমার হাসি সম্পূর্ণ আলাদা দেখায়। ধন্যবাদ ডাক্তার!',
   '/assets/images/Google Reviews 5.png', 'https://maps.app.goo.gl/gGwGUxRLcPts1WnHA', 5),
  ('Google Reviewer 6', 5,
   'Very caring doctor, especially with children. My son was scared of dentists before, now he asks when we can go back!',
   'খুব যত্নশীল ডাক্তার, বিশেষ করে শিশুদের সাথে। আমার ছেলে আগে ডেন্টিস্টকে ভয় পেত, এখন সে আবার কবে যাব জিজ্ঞেস করে!',
   '/assets/images/Google Reviews 6.png', 'https://maps.app.goo.gl/NADNeocJyWqy4qAr8', 6),
  ('Google Reviewer 7', 5,
   'Fair pricing and transparent consultation. I appreciated the detailed cost estimate before starting my treatment.',
   'ন্যায্য মূল্য ও স্বচ্ছ পরামর্শ। চিকিৎসা শুরুর আগে বিস্তারিত খরচের হিসাব দেয়ায় আমি সন্তুষ্ট।',
   '/assets/images/Google Reviews 7.png', 'https://maps.app.goo.gl/6iep9sBcCC3ZQGSS8', 7)
on conflict (id) do nothing;

-- 5. FAQs (12 bilingual items)
insert into public.faqs (question_en, answer_en, question_bn, answer_bn, sort_order) values
  ('Does root canal treatment hurt?',
   'Not at all! With modern anaesthesia and Dr. Nusrat''s Endomotor technology, root canal treatment is virtually painless. Most patients are surprised at how comfortable the procedure is.',
   'রুট ক্যানাল চিকিৎসায় কি ব্যথা হয়?',
   'একদমই না! আধুনিক অ্যানেস্থেসিয়া ও ডাঃ নুসরাতের এন্ডোমোটর প্রযুক্তির সাহায্যে রুট ক্যানাল চিকিৎসা প্রায় ব্যথাহীন। বেশিরভাগ রোগী অবাক হন যে প্রক্রিয়াটি কতটা আরামদায়ক।', 1),
  ('What is an intraoral scanner?',
   'An intraoral scanner creates a precise 3D digital impression of your teeth — no messy moulds needed. It makes procedures like crowns, veneers, and implants more accurate and comfortable. Dr. Nusrat is the first female doctor using this technology in Barishal Division.',
   'ইন্ট্রাওরাল স্ক্যানার কী?',
   'ইন্ট্রাওরাল স্ক্যানার আপনার দাঁতের সুনির্দিষ্ট ত্রিমাত্রিক ডিজিটাল ছাপ তৈরি করে — অগোছালো ছাঁচের দরকার নেই। এটি ক্রাউন, ভিনিয়ার এবং ইমপ্ল্যান্টের মতো প্রক্রিয়াগুলিকে আরও সঠিক ও আরামদায়ক করে তোলে। ডাঃ নুসরাত বরিশাল বিভাগে এই প্রযুক্তি ব্যবহারকারী প্রথম মহিলা চিকিৎসক।', 2),
  ('How much does a dental implant cost?',
   'Dental implants start from ৳1,20,000 (negotiable). The exact cost depends on your individual case. We offer a free initial consultation to discuss your options and give you a clear cost estimate.',
   'ডেন্টাল ইমপ্ল্যান্টের খরচ কত?',
   'ডেন্টাল ইমপ্ল্যান্ট ৳১,২০,০০০ থেকে শুরু (আলোচনাসাপেক্ষ)। সঠিক খরচ আপনার ব্যক্তিগত পরিস্থিতির উপর নির্ভর করে। আমরা আপনার বিকল্পগুলি আলোচনা করতে এবং স্পষ্ট খরচের ধারণা দিতে একটি বিনামূল্যে প্রাথমিক পরামর্শ দিই।', 3),
  ('Do you treat children?',
   'Absolutely! We love treating little patients. We offer specialized pediatric dentistry including milk tooth fillings (৳2,500), pulpotomy (৳4,000), space maintainers, and temporary crowns. Our environment is designed to be warm and welcoming for children.',
   'আপনারা কি শিশুদের চিকিৎসা করেন?',
   'অবশ্যই! আমরা ছোট রোগীদের চিকিৎসা করতে ভালোবাসি। আমরা দুধ দাঁতের ফিলিং (৳২,৫০০), পালপোটমি (৳৪,০০০), স্পেস মেইনটেইনার এবং টেম্পোরারি ক্রাউনসহ বিশেষ শিশু দন্ত চিকিৎসা দিই। আমাদের পরিবেশ শিশুদের জন্য উষ্ণ ও স্বাগতপূর্ণ।', 4),
  ('How do I book an appointment?',
   'You can call us directly at 01674-878470 or send a WhatsApp message. We''re available Saturday through Friday, 10:00 AM – 1:00 PM and 5:00 PM – 9:00 PM. Walk-ins are welcome based on availability.',
   'কীভাবে অ্যাপয়েন্টমেন্ট নেবো?',
   'আপনি সরাসরি 01674-878470 নম্বরে কল করতে পারেন অথবা হোয়াটসঅ্যাপ মেসেজ পাঠাতে পারেন। আমরা শনিবার থেকে শুক্রবার, সকাল ১০:০০ – দুপুর ১:০০ এবং বিকাল ৫:০০ – রাত ৯:০০ পর্যন্ত পাওয়া যাই। সিরিয়াল ছাড়াও আসতে পারেন।', 5),
  ('What types of dental crowns do you offer?',
   'We offer four types: Zirconia (৳12,000), Titanium (৳20,000), Porcelain (৳7,000), and PMMA (৳5,000) — all per tooth. Dr. Nusrat will recommend the best option for your specific situation during consultation.',
   'আপনারা কোন ধরনের ডেন্টাল ক্রাউন দেন?',
   'আমরা চার ধরনের ক্রাউন দিই: জিরকোনিয়া (৳১২,০০০), টাইটানিয়াম (৳২০,০০০), পোর্সেলিন (৳৭,০০০), এবং পিএমএমএ (৳৫,০০০) — প্রতিটি দাঁতের জন্য। ডাঃ নুসরাত পরামর্শের সময় আপনার পরিস্থিতি অনুযায়ী সেরা বিকল্পটি সুপারিশ করবেন।', 6),
  ('Are dental treatments painful?',
   'Modern anaesthesia and gentle technique mean most treatments — from fillings to extractions — are performed comfortably. Dr. Nusrat always takes time to ensure you are numb and relaxed before starting.',
   'ডেন্টাল চিকিৎসা কি ব্যথাদায়ক?',
   'আধুনিক অ্যানেস্থেসিয়া ও মৃদু কৌশলের কারণে ফিলিং থেকে দাঁত তোলা পর্যন্ত বেশিরভাগ চিকিৎসা আরামদায়কভাবে হয়। ডাঃ নুসরাত চিকিৎসা শুরুর আগে সবসময় নিশ্চিত হন যে আপনি অসাড় ও স্বস্তিতে আছেন।', 7),
  ('Is the intraoral scanner safe?',
   'Yes, completely safe. It uses only harmless visible light to capture 3D images of your teeth — there is no radiation involved, making it perfectly safe even for children and pregnant patients.',
   'ইন্ট্রাওরাল স্ক্যানার কি নিরাপদ?',
   'হ্যাঁ, সম্পূর্ণ নিরাপদ। এটি শুধুমাত্র ক্ষতিহীন আলো ব্যবহার করে দাঁতের ত্রিমাত্রিক ছবি তোলে — কোনো রেডিয়েশন নেই, তাই শিশু ও গর্ভবতী রোগীদের জন্যও সম্পূর্ণ নিরাপদ।', 8),
  ('How long does a dental implant take?',
   'The full implant process typically spans a few months: implant placement surgery, then 2–4 months of healing for the implant to fuse with the bone, followed by placement of the crown. Dr. Nusrat will give you a personal timeline at your consultation.',
   'ডেন্টাল ইমপ্ল্যান্ট করতে কত সময় লাগে?',
   'সম্পূর্ণ ইমপ্ল্যান্ট প্রক্রিয়ায় সাধারণত কয়েক মাস লাগে: ইমপ্ল্যান্ট বসানোর সার্জারি, তারপর হাড়ের সাথে যুক্ত হতে ২–৪ মাস হিলিং, তারপর ক্রাউন বসানো। ডাঃ নুসরাত আপনার পরামর্শে ব্যক্তিগত সময়সূচি দেবেন।', 9),
  ('Do you offer tooth whitening?',
   'Yes. Professional tooth whitening is available at ৳15,000 (negotiable). It is performed in-clinic by Dr. Nusrat for safe, noticeably brighter results compared to over-the-counter kits.',
   'আপনারা কি দাঁত সাদা করার সেবা দেন?',
   'হ্যাঁ। প্রফেশনাল দাঁত সাদা করা ৳১৫,০০০ (আলোচনাসাপেক্ষ) এ পাওয়া যায়। ডাঃ নুসরাত ক্লিনিকে এটি করেন — ওভার-দ্য-কাউন্টার কিটের তুলনায় নিরাপদ ও উজ্জ্বল ফলাফলের জন্য।', 10),
  ('What should I do in a dental emergency?',
   'Call or WhatsApp us at 01674-878470. For severe pain, swelling, trauma, or a knocked-out tooth, reach out immediately — Dr. Nusrat will advise you on the next steps even outside chamber hours.',
   'দাঁতের জরুরি সমস্যায় কী করবো?',
   'আমাদের 01674-878470 নম্বরে কল বা হোয়াটসঅ্যাপ করুন। তীব্র ব্যথা, ফোলা, আঘাত বা দাঁত ভেঙে গেলে সাথে সাথে যোগাযোগ করুন — চেম্বারের সময়ের বাইরেও ডাঃ নুসরাত আপনাকে পরবর্তী পদক্ষেপের পরামর্শ দেবেন।', 11),
  ('Where is the chamber located?',
   'Digital Dental Zone is at 15, Parara Road (Opposite Surovi Booking Office), Barishal. Open Saturday through Friday, 10:00 AM – 1:00 PM and 5:00 PM – 9:00 PM.',
   'চেম্বারটি কোথায় অবস্থিত?',
   'ডিজিটাল ডেন্টাল জোন ১৫, পরারা রোড (সুরভী বুকিং অফিসের বিপরীতে), বরিশালে অবস্থিত। শনিবার থেকে শুক্রবার, সকাল ১০:০০ – দুপুর ১:০০ এবং বিকাল ৫:০০ – রাত ৯:০০ পর্যন্ত খোলা।', 12)
on conflict (id) do nothing;

-- 6. Blog posts (6 posts — 3 EN + 3 BN). Bodies are markdown.
insert into public.blog_posts (slug, title_en, title_bn, excerpt_en, excerpt_bn, body_en, body_bn, language, tags, meta_title, meta_description, published_at) values
  ('digital-dentistry-intraoral-scanners-barishal',
   'What is Digital Dentistry? How Intraoral Scanners are Changing Dental Care in Barishal',
   NULL,
   'Discover how intraoral scanners are replacing messy moulds with precise 3D digital impressions — and how Barishal''s first female digital dentist is leading the change.',
   NULL,
$$## What is Digital Dentistry?

Digital dentistry simply means using modern computer technology in place of traditional manual methods during dental treatment. Instead of old-fashioned putty impressions, sticky moulds and guesswork, a dentist uses tools like **intraoral scanners**, **digital X-rays** and **CAD/CAM software** to diagnose and treat with far greater precision.

## What is an Intraoral Scanner?

An intraoral scanner is a small hand-held device with a camera that is passed gently over your teeth. In under a minute it creates a highly accurate **3D digital model** of your mouth — no gagging on mould paste, no discomfort.

- **No messy impressions** — the 3D scan replaces the old putty moulds.
- **Extreme precision** — the digital model is accurate to fractions of a millimetre.
- **Instant results** — the scan appears on screen immediately, so you can see exactly what the dentist sees.

## Why It Matters in Barishal

Most dental clinics still use traditional methods. When crowns, veneers or implants are made the old way, a small inaccuracy in the mould can lead to a poor-fitting restoration. Digital scanning removes that guesswork entirely.

Dr. Nusrat Naiem is the **first female doctor to use an intraoral scanner in Barishal Division** — and only the second user in the whole of Bangladesh. For her patients, this means:

- Faster and more comfortable appointments
- Crowns and veneers that fit better and last longer
- Implant planning that is far more predictable
- A fully digital smile design you can preview before treatment

## Who Can Benefit?

Almost everyone! Whether you need a simple filling, a crown, veneers for a smile makeover, or a full dental implant, digital scanning makes the process smoother. Even children find the scanner easy and fun — there is no scary moulding tray.

## Want to Experience Digital Dentistry?

Call or WhatsApp **01674-878470** to book a consultation at Digital Dental Zone, 15 Parara Road, Barishal. See for yourself how comfortable modern dental care can be.$$,
   NULL,
   'en',
   array['digital dentistry','intraoral scanner','barishal'],
   'What is Digital Dentistry? Intraoral Scanners in Barishal | Digital Dental Zone',
   'Learn how intraoral scanners and digital dentistry work, and why Dr. Nusrat Naiem — Barishal''s first female digital dentist — uses this technology for painless, precise care.',
   now() - interval '2 months'),

  ('root-canal-vs-extraction',
   'Root Canal vs. Extraction: When to Save Your Tooth',
   NULL,
   'A root canal can save a badly decayed tooth that extraction would remove forever. Here''s how to decide — and what each treatment costs in Barishal.',
   NULL,
$$## The First Question: Can the Tooth Be Saved?

When a tooth is badly decayed or infected, many patients immediately assume it must come out. But in most cases a **root canal treatment (RCT)** can save the natural tooth — and keeping your own tooth is almost always the better long-term choice.

## What is a Root Canal?

Deep inside every tooth is a chamber containing the nerve and blood supply — the pulp. When decay reaches the pulp, it becomes infected, causing severe pain. Root canal treatment removes the infected pulp, cleans and disinfects the canals, then seals the tooth. The tooth remains in place, crowned and fully functional.

At Digital Dental Zone, RCT is performed **using an Endomotor** — a modern electric instrument that makes the procedure faster, more accurate and virtually painless. RCT starts at **৳8,000**, with a full package (RCT + post core + zirconia crown) available at **৳25,000**.

## When Extraction Is Necessary

Extraction is the right choice when:

- The tooth is too badly destroyed to restore
- The infection is severe and the root can no longer be saved
- There is advanced gum (periodontal) disease that has loosened the tooth
- It is a wisdom tooth causing repeated problems

Simple adult extraction costs **৳3,000** per tooth; surgical or semi-surgical extraction ranges from **৳4,000 to ৳15,000** depending on the case.

## Why Saving the Tooth Matters

- **Better chewing function** — natural teeth withstand force better than replacements.
- **Prevents bone loss** — your jawbone stays stimulated and healthy.
- **Cheaper long-term** — replacing a lost tooth with an implant or bridge costs far more than one root canal.
- **No drifting** — neighbouring teeth do not shift into the gap.

## The Bottom Line

If your tooth is in pain, do not wait until it is beyond saving. The sooner you see a dentist, the more options you have. Dr. Nusrat will always try to save your natural tooth first — and only recommend extraction when it truly is the best option.

Call **01674-878470** to book an appointment at Digital Dental Zone, Barishal.$$,
   NULL,
   'en',
   array['root canal','extraction','rct','barishal'],
   'Root Canal vs Extraction: When to Save Your Tooth | Digital Dental Zone',
   'Root canal treatment in Barishal can save a badly decayed tooth. Compare RCT (from ৳8,000) vs extraction, and learn how Dr. Nusrat decides what''s best for you.',
   now() - interval '6 weeks'),

  ('dental-implants-barishal-cost-procedure',
   'Dental Implants in Barishal: Cost, Procedure, and What to Expect',
   NULL,
   'Everything you need to know about dental implants in Barishal — the cost, the step-by-step procedure, and what the recovery really feels like.',
   NULL,
$$## What is a Dental Implant?

A dental implant is a small titanium screw that is placed into the jawbone to replace the root of a missing tooth. On top of it, a natural-looking crown is attached. The result looks, feels and functions like a real tooth.

## Why Choose an Implant?

- **Looks completely natural** — indistinguishable from your own teeth
- **Prevents bone loss** — the implant keeps your jawbone healthy
- **No damage to other teeth** — unlike bridges, neighbouring teeth stay untouched
- **Eat and speak with confidence** — the implant is as strong as a natural root
- **Long-lasting** — with good care, implants can last decades

## The Procedure — Step by Step

1. **Consultation & digital planning** — Dr. Nusrat examines you, takes X-rays, and plans the implant position digitally. You receive a clear cost estimate before anything starts.
2. **Implant placement** — a minor surgical procedure performed under local anaesthesia. The implant is gently placed into the bone.
3. **Healing (2–4 months)** — the implant fuses with your bone in a process called osseointegration.
4. **Crown placement** — once healed, a custom crown is fixed onto the implant, completing your new tooth.

## What About Pain?

The placement itself is done under anaesthesia, so you feel no pain during the procedure. Afterward, most patients manage with simple painkillers and return to normal activities within a day or two.

## How Much Does an Implant Cost in Barishal?

A dental implant at Digital Dental Zone starts from **৳1,20,000** (negotiable). The final figure depends on your individual case — for example, whether you need a bone graft or sinus lift first. You will always receive a transparent, itemised estimate at your consultation.

## Am I a Candidate?

Most adults with one or more missing teeth are good candidates. You should have healthy gums and enough bone to support the implant. If bone has receded, grafting options exist. During your free initial consultation Dr. Nusrat will assess your suitability honestly.

## Book Your Implant Consultation

Call or WhatsApp **01674-878470** to book your appointment at Digital Dental Zone — 15 Parara Road, Barishal. As the **first female implant surgeon in Barishal**, Dr. Nusrat brings postgraduate precision to every implant case.$$,
   NULL,
   'en',
   array['dental implant','implant barishal','cost'],
   'Dental Implants in Barishal: Cost, Procedure & What to Expect | Digital Dental Zone',
   'Dental implant from ৳1,20,000 in Barishal by Dr. Nusrat Naiem — the first female implant surgeon in the city. Learn the procedure, recovery and transparent pricing.',
   now() - interval '4 weeks'),

  ('digital-dentistry-intraoral-scanners-barishal-bn',
   NULL,
   'ডিজিটাল ডেন্টিস্ট্রি কী? বরিশালে ইন্ট্রাওরাল স্ক্যানার কীভাবে দাঁতের চিকিৎসা বদলে দিচ্ছে',
   NULL,
   'জেনে নিন কীভাবে ইন্ট্রাওরাল স্ক্যানার অগোছালো ছাঁচের বদলে নিখুঁত ৩ডি ডিজিটাল ছাপ তৈরি করছে — এবং বরিশালের প্রথম মহিলা ডিজিটাল ডেন্টিস্ট কীভাবে এই পরিবর্তনের নেতৃত্ব দিচ্ছেন।',
   NULL,
$$## ডিজিটাল ডেন্টিস্ট্রি কী?

ডিজিটাল ডেন্টিস্ট্রি মানে দাঁতের চিকিৎসায় পুরনো হাতে-কলমে পদ্ধতির বদলে আধুনিক কম্পিউটার প্রযুক্তি ব্যবহার করা। পুরনো পুটি ছাঁচ, আঠালো মোল্ড আর অনুমানের বদলে এখন **ইন্ট্রাওরাল স্ক্যানার**, **ডিজিটাল এক্স-রে** ও **ক্যাড/ক্যাম সফটওয়্যার** দিয়ে রোগ নির্ণয় ও চিকিৎসা করা হয় — অনেক বেশি নিখুঁতভাবে।

## ইন্ট্রাওরাল স্ক্যানার কী?

ইন্ট্রাওরাল স্ক্যানার একটি ছোট হাতে-ধরা যন্ত্র, যার ক্যামেরা দাঁতের উপর আলতো করে চালানো হয়। এক মিনিটেরও কম সময়ে এটি আপনার মুখের একটি অত্যন্ত নিখুঁত **ত্রিমাত্রিক ডিজিটাল মডেল** তৈরি করে — গ্যাগিং, পুরনো মোল্ডের কষ্ট একেবারেই নেই।

- **অগোছালো ছাঁচ নেই** — ৩ডি স্ক্যান পুরনো পুটি মোল্ডের বদলে।
- **অসাধারণ নির্ভুলতা** — ডিজিটাল মডেল মিলিমিটারের ভগ্নাংশ পর্যন্ত নির্ভুল।
- **তাৎক্ষণিক ফলাফল** — স্ক্যান সাথে সাথে স্ক্রিনে দেখা যায়, ডাক্তার যা দেখেন আপনিও তাই দেখতে পান।

## বরিশালে কেন এটা গুরুত্বপূর্ণ?

বেশিরভাগ ডেন্টাল ক্লিনিক এখনও পুরনো পদ্ধতিতে কাজ করে। পুরনো পদ্ধতিতে ক্রাউন, ভিনিয়ার বা ইমপ্ল্যান্ট তৈরি করলে ছাঁচে সামান্য ভুলের কারণে রেস্টোরেশন ঠিকমতো বসে না। ডিজিটাল স্ক্যানিং এই অনুমান একেবারে দূর করে দেয়।

ডাঃ নুসরাত নাঈম **বরিশাল বিভাগে ইন্ট্রাওরাল স্ক্যানার ব্যবহারকারী প্রথম মহিলা ডাক্তার** — সমগ্র বাংলাদেশে দ্বিতীয় ব্যবহারকারী। তাঁর রোগীদের জন্য এর অর্থ:

- দ্রুত ও আরামদায়ক অ্যাপয়েন্টমেন্ট
- ভালো ফিট ও দীর্ঘস্থায়ী ক্রাউন ও ভিনিয়ার
- অনেক বেশি নিশ্চিত ইমপ্ল্যান্ট প্ল্যানিং
- চিকিৎসার আগেই দেখতে পাবেন আপনার নতুন স্মাইল ডিজাইন

## কারা উপকৃত হবেন?

প্রায় সবাই! সাধারণ ফিলিং, ক্রাউন, স্মাইল মেকওভারের জন্য ভিনিয়ার বা সম্পূর্ণ ডেন্টাল ইমপ্ল্যান্ট — যেকোনো চিকিৎসায় ডিজিটাল স্ক্যানিং প্রক্রিয়াকে মসৃণ করে তোলে। শিশুরাও স্ক্যানার খুব উপভোগ করে — কোনো ভয়ঙ্কর মোল্ডিং ট্রে নেই।

## ডিজিটাল ডেন্টিস্ট্রি অভিজ্ঞতা করতে চান?

কল বা হোয়াটসঅ্যাপ করুন **01674-878470** — ডিজিটাল ডেন্টাল জোন, ১৫ পরারা রোড, বরিশালে অ্যাপয়েন্টমেন্ট নিতে। দেখে নিন আধুনিক দাঁতের চিকিৎসা কতটা আরামদায়ক হতে পারে।$$,
   'bn',
   array['ডিজিটাল ডেন্টিস্ট্রি','ইন্ট্রাওরাল স্ক্যানার','বরিশাল'],
   'ডিজিটাল ডেন্টিস্ট্রি কী? বরিশালে ইন্ট্রাওরাল স্ক্যানার | ডিজিটাল ডেন্টাল জোন',
   'ইন্ট্রাওরাল স্ক্যানার ও ডিজিটাল ডেন্টিস্ট্রি কীভাবে কাজ করে এবং বরিশালের প্রথম মহিলা ডিজিটাল ডেন্টিস্ট ডাঃ নুসরাত নাঈম কেন এই প্রযুক্তি ব্যবহার করেন তা জানুন।',
   now() - interval '2 months' + interval '1 day'),

  ('root-canal-vs-extraction-bn',
   NULL,
   'রুট ক্যানাল নাকি দাঁত তোলা? কখন দাঁত বাঁচানো যায়',
   NULL,
   'রুট ক্যানাল একটি নষ্ট হয়ে যাওয়া দাঁত বাঁচাতে পারে যা এক্সট্রাকশনে চিরতরে হারিয়ে যেত। কীভাবে সিদ্ধান্ত নেবেন — আর বরিশালে প্রতিটি চিকিৎসার খরচ কত, তা জেনে নিন।',
   NULL,
$$## প্রথম প্রশ্ন: দাঁতটি কি বাঁচানো সম্ভব?

দাঁত প্রচণ্ড ক্ষয়ে গেলে বা ইনফেকশন হলে অনেক রোগী মনে করেন দাঁত তোলা ছাড়া উপায় নেই। কিন্তু বেশিরভাগ ক্ষেত্রে **রুট ক্যানাল ট্রিটমেন্ট (আরসিটি)** দাঁতটি বাঁচাতে পারে — আর নিজের দাঁতটা রাখা প্রায় সবসময়ই দীর্ঘমেয়াদে ভালো সিদ্ধান্ত।

## রুট ক্যানাল কী?

প্রতিটি দাঁতের ভেতরে একটি কুঠুরি থাকে যেখানে নার্ভ ও রক্ত সরবরাহ — পাল্প অবস্থান করে। ক্ষয় যখন পাল্প পর্যন্ত পৌঁছায়, তখন তা ইনফেক্টেড হয়ে তীব্র ব্যথা করে। রুট ক্যানাল চিকিৎসায় ইনফেক্টেড পাল্প সরিয়ে ক্যানাল পরিষ্কার ও জীবাণুমুক্ত করে দাঁত সিল করা হয়। দাঁতটি জায়গায় থেকে যায়, ক্রাউন পরানো হয় এবং পুরোপুরি কার্যকর থাকে।

ডিজিটাল ডেন্টাল জোনে **এন্ডোমোটর** দিয়ে আরসিটি করা হয় — আধুনিক ইলেকট্রিক যন্ত্র যা প্রক্রিয়াকে দ্রুত, নির্ভুল ও প্রায় ব্যথাহীন করে। আরসিটি শুরু হয় **৳৮,০০০** থেকে, আর সম্পূর্ণ প্যাকেজ (আরসিটি + পোস্ট কোর + জিরকোনিয়া ক্রাউন) পাওয়া যায় **৳২৫,০০০**-এ।

## কখন দাঁত তোলা প্রয়োজন

দাঁত তোলা তখনই সঠিক, যখন:

- দাঁতটি এতটাই নষ্ট যে আর বাঁচানো সম্ভব নয়
- ইনফেকশন মারাত্মক এবং রুট আর রক্ষা করা যায় না
- মাড়ির (পিরিওডন্টাল) রোগে দাঁত ঢিলা হয়ে গেছে
- বারবার সমস্যা করছে এমন আক্কেল দাঁত

সাধারণ দাঁত তোলার খরচ **৳৩,০০০**; সার্জিক্যাল বা সেমি-সার্জিক্যাল এক্সট্রাকশন **৳৪,০০০ থেকে ৳১৫,০০০** (কেস অনুযায়ী)।

## দাঁত বাঁচালে কেন ভালো?

- **ভালো চিবানো ক্ষমতা** — প্রাকৃতিক দাঁত প্রতিস্থাপনের চেয়ে বেশি শক্তি সহ্য করে।
- **হাড় ক্ষয় রোধ** — চোয়ালের হাড় সক্রিয় ও সুস্থ থাকে।
- **দীর্ঘমেয়াদে সাশ্রয়ী** — হারানো দাঁতের জায়গায় ইমপ্ল্যান্ট বা ব্রিজের খরচ একটি রুট ক্যানালের চেয়ে অনেক বেশি।
- **দাঁত সরে যায় না** — পাশের দাঁত ফাঁকায় হেলে পড়ে না।

## সবশেষে

দাঁতে ব্যথা হলে অপেক্ষা করবেন না — যত দেরি করবেন, বিকল্প তত কমবে। ডাঃ নুসরাত সবসময় আগে আপনার প্রাকৃতিক দাঁত বাঁচানোর চেষ্টা করবেন — আর এক্সট্রাকশন তখনই সুপারিশ করবেন যখন সত্যিই সেটাই সেরা বিকল্প।

অ্যাপয়েন্টমেন্টের জন্য **01674-878470** নম্বরে কল করুন — ডিজিটাল ডেন্টাল জোন, বরিশাল।$$,
   'bn',
   array['রুট ক্যানাল','দাঁত তোলা','আরসিটি','বরিশাল'],
   'রুট ক্যানাল নাকি দাঁত তোলা? কখন দাঁত বাঁচানো যায় | ডিজিটাল ডেন্টাল জোন',
   'বরিশালে রুট ক্যানাল (৳৮,০০০ থেকে) বনাম দাঁত তোলা — ডাঃ নুসরাত কীভাবে সিদ্ধান্ত নেন এবং কী খরচ হয় তা জানুন।',
   now() - interval '6 weeks' + interval '1 day'),

  ('dental-implants-barishal-cost-procedure-bn',
   NULL,
   'বরিশালে ডেন্টাল ইমপ্ল্যান্ট: খরচ, পদ্ধতি এবং কী আশা করবেন',
   NULL,
   'বরিশালে ডেন্টাল ইমপ্ল্যান্ট সম্পর্কে যা যা জানা দরকার — খরচ, ধাপে ধাপে পদ্ধতি এবং পুনরুদ্ধারের বাস্তব অভিজ্ঞতা।',
   NULL,
$$## ডেন্টাল ইমপ্ল্যান্ট কী?

ডেন্টাল ইমপ্ল্যান্ট একটি ছোট টাইটানিয়াম স্ক্রু যা হারানো দাঁতের মূলের বদলে চোয়ালের হাড়ে বসানো হয়। এর উপরে প্রাকৃতিক দেখতে ক্রাউন লাগানো হয়। ফলাফল দেখতে, অনুভবে ও কাজে একদম আসল দাঁতের মতো।

## কেন ইমপ্ল্যান্ট বেছে নেবেন?

- **একদম প্রাকৃতিক দেখায়** — নিজের দাঁত থেকে আলাদা বোঝা যায় না
- **হাড় ক্ষয় রোধ করে** — চোয়ালের হাড় সুস্থ থাকে
- **পাশের দাঁতের ক্ষতি নেই** — ব্রিজের মতো পাশের দাঁত ছোঁয়া হয় না
- **আত্মবিশ্বাসের সাথে খাওয়া ও কথা বলা** — আসল মূলের মতোই শক্ত
- **দীর্ঘস্থায়ী** — সঠিক যত্নে কয়েক দশক টেকে

## পদ্ধতি — ধাপে ধাপে

1. **পরামর্শ ও ডিজিটাল প্ল্যানিং** — ডাঃ নুসরাত আপনাকে পরীক্ষা করেন, এক্স-রে নেন এবং ডিজিটালভাবে ইমপ্ল্যান্টের অবস্থান পরিকল্পনা করেন। শুরু হওয়ার আগেই আপনি স্পষ্ট খরচের হিসাব পাবেন।
2. **ইমপ্ল্যান্ট বসানো** — লোকাল অ্যানেস্থেসিয়ায় ছোট সার্জিক্যাল প্রক্রিয়া। স্ক্রুটি আলতোভাবে হাড়ে বসানো হয়।
3. **হিলিং (২–৪ মাস)** — অ্যাসিওইন্টিগ্রেশন নামক প্রক্রিয়ায় ইমপ্ল্যান্ট হাড়ের সাথে যুক্ত হয়।
4. **ক্রাউন বসানো** — হিলিং শেষে কাস্টম ক্রাউন ইমপ্ল্যান্টের উপর ফিট করা হয়, সম্পূর্ণ হয় আপনার নতুন দাঁত।

## ব্যথা নিয়ে কী?

বসানোর সময় অ্যানেস্থেসিয়ার কারণে কোনো ব্যথা অনুভব করবেন না। পরে বেশিরভাগ রোগী সাধারণ পেইনকিলারেই চালান এবং এক-দুই দিনেই স্বাভাবিক জীবনে ফিরে যান।

## বরিশালে খরচ কত?

ডিজিটাল ডেন্টাল জোনে ডেন্টাল ইমপ্ল্যান্ট শুরু হয় **৳১,২০,০০০** থেকে (আলোচনাসাপেক্ষ)। চূড়ান্ত খরচ আপনার ব্যক্তিগত পরিস্থিতির উপর নির্ভর করে — যেমন হাড় গ্রাফট বা সাইনাস লিফট প্রয়োজন কিনা। পরামর্শে আপনাকে সবসময় স্বচ্ছ, আইটেম-ভিত্তিক হিসাব দেওয়া হবে।

## আমি কি যোগ্য প্রার্থী?

বেশিরভাগ প্রাপ্তবয়স্ক যাদের এক বা একাধিক দাঁত নেই তারা ভালো প্রার্থী। মাড়ি সুস্থ এবং ইমপ্ল্যান্ট ধারণের মতো হাড় থাকতে হবে। হাড় কমে গেলে গ্রাফটিংয়ের বিকল্প আছে। বিনামূল্যে প্রাথমিক পরামর্শে ডাঃ নুসরাত সৎভাবে আপনার যোগ্যতা মূল্যায়ন করবেন।

## ইমপ্ল্যান্ট পরামর্শ নিন

কল বা হোয়াটসঅ্যাপ **01674-878470** — ডিজিটাল ডেন্টাল জোন, ১৫ পরারা রোড, বরিশালে অ্যাপয়েন্টমেন্ট নিন। **বরিশালের প্রথম মহিলা ইমপ্ল্যান্ট সার্জন** হিসেবে ডাঃ নুসরাত প্রতিটি কেসে স্নাতকোত্তর নিখুঁততা নিয়ে আসেন।$$,
   'bn',
   array['ডেন্টাল ইমপ্ল্যান্ট','বরিশাল ইমপ্ল্যান্ট','খরচ'],
   'বরিশালে ডেন্টাল ইমপ্ল্যান্ট: খরচ, পদ্ধতি ও আশা করণীয় | ডিজিটাল ডেন্টাল জোন',
   'বরিশালের প্রথম মহিলা ইমপ্ল্যান্ট সার্জন ডাঃ নুসরাত নাঈমের কাছ থেকে ৳১,২০,০০০ থেকে ডেন্টাল ইমপ্ল্যান্ট — পদ্ধতি, পুনরুদ্ধার ও স্বচ্ছ মূল্য জানুন।',
   now() - interval '4 weeks' + interval '1 day')
on conflict (slug) do nothing;

-- 7. Gallery
insert into public.gallery (title_en, title_bn, type, before_url, after_url, image_url, caption_en, caption_bn, sort_order) values
  ('Traditional Implant', 'ট্র্যাডিশনাল ইমপ্ল্যান্ট', 'before_after',
   '/assets/images/Traditional Implant Before 1.jpeg', '/assets/images/Traditional Implant After 1.jpeg', NULL,
   'Traditional dental implant — restoring a complete, natural smile.',
   'ট্র্যাডিশনাল ডেন্টাল ইমপ্ল্যান্ট — সম্পূর্ণ, প্রাকৃতিক হাসি ফিরিয়ে আনা।', 1),
  ('Dental Restoration', 'ডেন্টাল রেস্টোরেশন', 'before_after',
   '/assets/images/Before treatment 1.jpeg', '/assets/images/After Treatment 1.jpeg', NULL,
   'Dental restoration — from damaged to perfectly restored.',
   'ডেন্টাল রেস্টোরেশন — ক্ষতিগ্রস্ত থেকে নিখুঁত পুনরুদ্ধার।', 2),
  ('Dr. Nusrat Hero', 'ডাঃ নুসরাত', 'general', NULL, NULL, '/assets/images/Dr. Nusrat Hero Shot.jpeg',
   'Dr. Nusrat Naiem — Digital Dental Zone, Barishal.', 'ডাঃ নুসরাত নাঈম — ডিজিটাল ডেন্টাল জোন, বরিশাল।', 3),
  ('Children Patients', 'শিশু রোগী', 'general', NULL, NULL, '/assets/images/Children Patients at chamber.jpeg',
   'Gentle pediatric care at our Barishal chamber.', 'বরিশাল চেম্বারে মৃদু শিশু দন্ত যত্ন।', 4),
  ('Inlay', 'ইনলে', 'general', NULL, NULL, '/assets/images/Inlay.jpeg',
   'Precision digital inlay restoration.', 'নির্ভুল ডিজিটাল ইনলে রেস্টোরেশন।', 5),
  ('Surgical Extraction', 'সার্জিক্যাল এক্সট্রাকশন', 'general', NULL, NULL, '/assets/images/Surgical extraction.jpeg',
   'Safe surgical extraction under expert care.', 'বিশেষজ্ঞ যত্নে নিরাপদ সার্জিক্যাল এক্সট্রাকশন।', 6)
on conflict (id) do nothing;