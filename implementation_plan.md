# Digital Dental Zone — Website Development Plan

Build a premium, conversion-focused, bilingual (EN/BN) dental website for **Dr. Nusrat Naiem** in Barishal, using the **Crimson Rose** color palette and **Inter + Playfair Display** fonts from the selected design reference.

---

## User Review Required

> [!IMPORTANT]
> **Tech Stack Decision:** The Developer Brief specifies Next.js 14 + TypeScript + Tailwind + Supabase, but the existing `smile-arc-dental` folder uses **plain HTML/CSS/JS + Supabase**. The design reference files are also plain HTML. I recommend building with **plain HTML/CSS/JS + Supabase** (no build step, simpler to deploy) since it matches the existing template and keeps things lightweight. Please confirm which approach you prefer.

> [!IMPORTANT]
> **Clinic Name Discrepancy:** The visiting card/prescription says "**Nusrat Dental-Orthodontics**" but the AI Brief says the new name is "**Digital Dental Zone**". I'll use **Digital Dental Zone** as the primary brand name. Please confirm.

> [!WARNING]
> **Missing Images:** Most services in the price list do NOT have real photos yet. I will use the available real images and create tasteful placeholder slots (with clear labels) for missing service photos — no stock photography will be used without your sign-off.

---

## Open Questions

> [!IMPORTANT]
> 1. **Logo:** No logo file has been provided. The visiting card shows an "Ora Dental" branded tooth logo. Should I design a text-based logo for "Digital Dental Zone", or is a logo file forthcoming?
> 2. **Phone Number Conflict:** The reference design HTML uses `01612-991021` but the Developer Brief & visiting card both say **`01674-878470`**. I will use **01674-878470** as instructed. Correct?
> 3. **Address Conflict:** The design reference says "Hatem Ali College Road" but the prescription/visiting card says "**15, Parara Road (Opposite Surovi Booking Office), Barishal**". I will use the Parara Road address. Correct?
> 4. **Chamber Hours — Friday:** The design reference shows Friday as "Closed", but the prescription pad clearly says "**FRIDAY OPEN**" and the AI Brief confirms "Friday: OPEN". I will show Friday as open.
> 5. **Admin Panel:** The brief requests a Supabase-powered admin panel. Should this be built in Phase 1, or can it come in a Phase 2 after the main site launches?

---

## Design System (From "Selected Design color for website_&_homepag.html")

### Color Palette — "Crimson Rose" (LOCKED)

| Token | Hex | Usage |
|---|---|---|
| `--darkest` | `#3A0B16` | Deepest background |
| `--dark` | `#5C1322` | Background mid |
| `--dark-mid` | `#7B1F2E` | Cards, borders |
| `--dark-accent` | `#8B2635` | Body radial gradient center |
| `--accent2` | `#C4485E` | CTA gradients, glows |
| `--accent` | `#E8849A` | Primary accent, tags, stats |
| `--white` | `#FFFFFF` | Text, highlights |
| `--muted` | `rgba(255,255,255,0.65)` | Subtitle/body text |

### Typography

| Role | Font | Weight | Source |
|---|---|---|---|
| **Headings (English)** | Playfair Display | 700, italic | Google Fonts |
| **Body / UI (English)** | Inter | 300–900 | Google Fonts |
| **Bengali text** | Noto Sans Bengali | 400, 600, 700 | Google Fonts |

### Visual Style

- **Background:** Radial gradient `#8B2635` → `#5C1322` → `#3A0B16`
- **Glassmorphism:** `rgba(255,255,255,0.08)` bg + `rgba(255,255,255,0.15)` border + `backdrop-filter: blur()`
- **CTAs:** Gradient pills `#E8849A` → `#C4485E`, rounded 50px
- **Ghost buttons:** 2px white border, transparent bg
- **Image treatment:** Circular hero + dramatic `box-shadow` glow in accent colors
- **Animations:** Scroll-reveal, parallax tilt, floating badges, counter animations, smooth ~1s entrance

---

## Proposed Changes

### Component 1 — Project Scaffolding

#### [NEW] `digital-dental-zone/` (root project folder)

Create a clean project structure inside the workspace:

```
digital-dental-zone/
├── index.html              ← Homepage (single-page with anchored sections)
├── doctor.html             ← Doctor bio/credentials page
├── blog/
│   ├── index.html          ← Blog listing page
│   └── post.html           ← Individual blog post (?slug=...)
├── css/
│   ├── variables.css       ← Design tokens (Crimson Rose palette)
│   ├── style.css           ← Main stylesheet
│   └── animations.css      ← Scroll-reveal, float, tilt, counter animations
├── js/
│   ├── config.js           ← Supabase URL + anon key
│   ├── supabase-client.js  ← Supabase client init
│   ├── main.js             ← Content rendering, nav, scroll, language toggle
│   ├── calculator.js       ← Pricing calculator + lead capture
│   ├── animations.js       ← IntersectionObserver reveals, counter, tilt
│   └── language.js         ← EN/BN toggle logic
├── assets/
│   └── images/             ← Doctor photos, treatment images (copied from provided)
├── supabase/
│   └── schema.sql          ← Tables, RLS policies, seed data
└── README.md
```

---

### Component 2 — Design System (`css/variables.css` + `css/style.css`)

#### [NEW] [variables.css](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/css/variables.css)

CSS custom properties defining the full Crimson Rose palette, typography scale, spacing, glass effects, and responsive breakpoints.

#### [NEW] [style.css](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/css/style.css)

Full styling for all sections, built mobile-first:
- Global resets, radial gradient body background
- Glassmorphism cards (`.glass` utility)
- Nav (sticky, blurred backdrop, logo + links + CTA pill)
- Hero section (centered layout matching the selected design)
- Section headers (tag pills, large headings with italic Playfair accents)
- Service cards (sticky scroll stack from design reference)
- Trust/Why-Us numbered cards
- Hours card + emergency card
- Contact cards + Google Maps embed
- Footer (3-column + bottom bar)
- Mobile responsive overrides
- WhatsApp floating button
- Mobile sticky CTA bar

#### [NEW] [animations.css](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/css/animations.css)

- `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale` — scroll-triggered entrances
- `.float-slow` / `.float-med` — floating badge animations
- `.stagger` children — sequential reveal
- Hero counter number animation
- Tilt-on-hover for image cards
- All animations complete within ~1 second (performance constraint)

---

### Component 3 — Homepage (`index.html`)

#### [NEW] [index.html](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/index.html)

**Sections (in order):**

| # | Section | Key Content |
|---|---|---|
| 1 | **WhatsApp Float** | Fixed bottom-right WhatsApp icon → `wa.me/8801674878470` |
| 2 | **Navbar** | Logo "Digital Dental Zone" + About / Services / Why Us / Hours / Contact + "Book Appointment" CTA pill |
| 3 | **Hero** | Tag: "Barishal's Pioneer in Digital Dentistry" · Headline: centered bold with italic Playfair accent · Dr. Nusrat hero image (circular with crimson glow) · CTA row: "Book Appointment →" + "Our Services" ghost · Service pills: "Digital Dentistry Pioneer", "Implant Specialist", "Children-Friendly" |
| 4 | **Stats Bar** | 500+ Patients · 10+ Services · 7+ Years · BMDC Reg-5808 |
| 5 | **About** | Doctor bio, credentials (BDS Dhaka, PGT OMS, DIAB Implantology), key achievements (1st female intraoral scanner user in Barishal Division, 1st female implant surgeon in Barishal), photo |
| 6 | **Services — Sticky Scroll Stack** | 10 service categories from price list, each with card showing: image, title, description, price range, tags. Sticky scroll design from reference |
| 7 | **Before/After Gallery** | Swipeable before/after slider using available implant + treatment photos |
| 8 | **Doctor Banner** | Full-width hero shot of Dr. Nusrat treating patient |
| 9 | **Why Choose Us** | 4 trust cards: Qualified & Specialized · Digital Dentistry Pioneer · Patient-First · Your Local Dental Home |
| 10 | **Google Reviews** | 7 real Google reviews displayed as glass cards with star ratings |
| 11 | **Cost Calculator** | Interactive pricing calculator (select services → receipt-style total) from price list data |
| 12 | **Chamber Hours** | Glass card with Sat–Thu 10am–1pm & 5pm–9pm, Friday: Open. Emergency CTA |
| 13 | **FAQ** | 10–15 bilingual dental FAQs in accordion |
| 14 | **Contact** | Phone, WhatsApp, address cards + embedded Google Map |
| 15 | **Footer** | Brand, services links, contact links, social links, copyright |
| 16 | **Mobile CTA Bar** | Fixed bottom bar: Call + WhatsApp (mobile only) |

---

### Component 4 — Doctor Page (`doctor.html`)

#### [NEW] [doctor.html](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/doctor.html)

Dedicated doctor biography page:
- Hero section with Dr. Nusrat's photo
- Full qualifications: BDS (Dhaka), PGT (OMS) — Shahid Sohrawardy MCH, BMDC Reg-5808, DIAB Implantology
- Notable achievements section
- Video embeds from Facebook (2 videos provided)
- "Receiving gifts from Akik CAD CAM Prosthetics" photo
- CTA: Book appointment

---

### Component 5 — Blog System (`blog/`)

#### [NEW] `blog/index.html` — Blog listing page
#### [NEW] `blog/post.html` — Individual post template

6 blog posts total (3 English + 3 Bengali), topics relevant to Dr. Nusrat's specialties:

**English:**
1. "What is Digital Dentistry? How Intraoral Scanners are Changing Dental Care in Barishal"
2. "Root Canal vs. Extraction: When to Save Your Tooth"
3. "Dental Implants in Barishal: Cost, Procedure, and What to Expect"

**Bengali:**
1. "ডিজিটাল ডেন্টিস্ট্রি কী? বরিশালে ইন্ট্রাওরাল স্ক্যানার কীভাবে দাঁতের চিকিৎসা বদলে দিচ্ছে"
2. "রুট ক্যানাল নাকি দাঁত তোলা? কখন দাঁত বাঁচানো যায়"
3. "বরিশালে ডেন্টাল ইমপ্ল্যান্ট: খরচ, পদ্ধতি এবং কী আশা করবেন"

Blog posts stored in Supabase, rendered dynamically.

---

### Component 6 — Bilingual Toggle (`js/language.js`)

#### [NEW] [language.js](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/js/language.js)

- Toggle button in navbar (EN | বাংলা)
- Uses `data-en` / `data-bn` attributes on all text elements
- Persists user preference in `localStorage`
- Bengali text uses natural conversational tone (কথ্য ও চলিত ভাষা), formal আপনি form
- Font switches to Noto Sans Bengali for BN mode

---

### Component 7 — JavaScript Core

#### [NEW] [main.js](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/js/main.js)

- Fetch clinic settings, services, reviews, FAQs from Supabase
- Render all dynamic sections
- Sticky nav scroll behavior
- Mobile hamburger menu
- Smooth scroll to anchors
- Counter animation on stats

#### [NEW] [calculator.js](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/js/calculator.js)

- Full pricing calculator from the price list
- 10 categories matching the price list document
- Receipt-style summary with running total
- "Send this list" → captures name/phone → Supabase `leads` table insert
- Bilingual labels

#### [NEW] [animations.js](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/js/animations.js)

- IntersectionObserver for scroll-reveal
- Sticky scroll stack logic for services section
- 3D tilt effect on hover for image cards
- Floating badge animation controller
- Number counter animation

---

### Component 8 — Supabase Backend

#### [NEW] [schema.sql](file:///F:/G_Development/All%20Project%20from%20Shadly%20Bhai/10.%20Client%201.1_Dr.%20Nusrat_Barishal_digital%20Dental/Dr.%20Nusrat_Barishal_digital%20Dental/digital-dental-zone/supabase/schema.sql)

Tables with RLS policies and seed data:

| Table | Purpose |
|---|---|
| `clinic_settings` | Clinic name, doctor info, phone, address, hours, map URL |
| `service_categories` | 10 service categories from price list |
| `treatments` | All treatments with EN/BN names, prices, image URLs |
| `reviews` | Google reviews (7 seeded) |
| `faqs` | FAQ items (EN/BN) |
| `blog_posts` | 6 blog posts (3 EN + 3 BN) |
| `leads` | Lead capture from calculator submissions |
| `gallery` | Before/after + general gallery images |

All content tables: `SELECT` allowed for anon role. `leads`: `INSERT` only for anon.

---

### Component 9 — SEO & Meta

Every page will include:
- Proper `<title>` and `<meta description>` (bilingual-aware)
- Single `<h1>` per page with semantic hierarchy
- `hreflang` tags for EN/BN
- Open Graph / social meta tags
- Schema.org JSON-LD for `Dentist` / `MedicalBusiness`
- Semantic HTML5 elements throughout
- `loading="lazy"` on all images
- Optimized image dimensions

---

## Implementation Phases

### Phase 1 — Core Website (Week 1–2)
1. Project scaffolding + design system CSS
2. Homepage with all 16 sections
3. Full responsive design
4. Animations & interactions
5. Bilingual toggle
6. Cost calculator
7. Supabase schema + seed data
8. Doctor page

### Phase 2 — Content & SEO (Week 2–3)
1. 6 blog posts (3 EN + 3 BN)
2. FAQ section content
3. SEO meta + structured data
4. Google Reviews integration
5. Before/After gallery
6. Performance optimization (images, lazy loading)

### Phase 3 — Admin & Polish (Week 3)
1. Admin panel for content editing (if confirmed for Phase 1)
2. Final cross-browser testing
3. Mobile testing
4. Final copy review
5. Deploy to Vercel

---

## Verification Plan

### Automated Tests
```bash
# Validate HTML
npx html-validate index.html doctor.html blog/index.html blog/post.html

# Check for broken links
npx broken-link-checker http://localhost:3000

# Lighthouse performance audit
npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
```

### Manual Verification
- **Visual:** Open all pages in Chrome, Firefox, Safari — verify Crimson Rose palette, glassmorphism, animations
- **Responsive:** Test at 320px, 375px, 768px, 1024px, 1440px breakpoints
- **Bilingual:** Toggle EN/BN on every section — verify natural Bengali text renders correctly with Noto Sans Bengali
- **Calculator:** Add multiple services, verify receipt total, submit lead
- **Performance:** All animations complete within ~1 second; Lighthouse score ≥ 90
- **CTAs:** Verify all WhatsApp links → `wa.me/8801674878470`, all call links → `tel:01674878470`
- **Map:** Verify Google Maps embed loads correctly with Barishal location
- **SEO:** Verify meta tags, heading hierarchy, schema.org markup
