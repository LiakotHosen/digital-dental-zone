/* ═══════════════════════════════════════════════════
   DIGITAL DENTAL ZONE — 6 CLINICAL CATEGORIES & 33 TREATMENTS
   Enriched Comprehensive Clinical Dataset for services.html, calculator & search
   ═══════════════════════════════════════════════════ */

const DDZ_SERVICES_CATEGORIES = [
  {
    "id": "diagnostics",
    "num": "01",
    "code": "1",
    "nameEn": "Diagnostics & General Dentistry",
    "nameBn": "ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা",
    "descEn": "Comprehensive digital oral cavity checkups, ultrasonic tartar cleaning, natural aesthetic composite fillings, and in-clinic smile brightening.",
    "descBn": "ডিজিটাল মুখগহ্বর পরীক্ষা, আল্ট্রাসনিক স্কেলিং ও পলিশিং, প্রাকৃতিক রঙের কম্পোজিট ফিলিং এবং আধুনিক পদ্ধতিতে দাঁত সাদা করা।",
    "image": "assets/treatment/1. Diagnostics & General Dentistry.png",
    "items": [
      {
        "id": "1-a-consultation-fee",
        "code": "1.a",
        "cat": "Diagnostics & General Dentistry",
        "catBn": "ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা",
        "title": "Consultation Fee",
        "titleBn": "পরামর্শ ফি",
        "price": "৳700",
        "image": "assets/treatment/1. Diagnostics & General Dentistry.png",
        "badge": "Initial Check",
        "badgeBn": "পরামর্শ",
        "desc": "Comprehensive oral cavity inspection, digital diagnosis, and personalized treatment roadmap with Dr. Nusrat Naiem.",
        "descBn": "ডাঃ নুসরাত নাঈম কর্তৃক সম্পূর্ণ মুখগহ্বর পরীক্ষা, ডিজিটাল রোগ নির্ণয় এবং ব্যক্তিগত চিকিৎসা পরিকল্পনা।",
        "benefits": [
          "Full oral cavity and teeth screening",
          "Digital diagnosis & case assessment",
          "Personalized transparent treatment plan",
          "Detailed preventive oral health guidance"
        ],
        "benefitsBn": [
          "সম্পূর্ণ মুখগহ্বর ও দাঁত পরীক্ষা",
          "ডিজিটাল রোগ নির্ণয় ও কেস মূল্যায়ন",
          "ব্যক্তিগত ও স্বচ্ছ চিকিৎসা পরিকল্পনা",
          "প্রতিরোধমূলক পরামর্শ ও যত্ন নির্দেশনা"
        ],
        "duration": "20–30 Mins",
        "durationBn": "২০–৩০ মিনিট",
        "comfort": "100% Painless · Non-Invasive",
        "comfortBn": "সম্পূর্ণ ব্যথামুক্ত · কোনো সুই নেই",
        "durability": "Valid for 30 Days Follow-up",
        "durabilityBn": "৩০ দিন পর্যন্ত ফলো-আপ বৈধ",
        "articleEn": "\n      <p>A comprehensive dental consultation is the foundation of lifelong oral wellness. At Digital Dental Zone in Barishal, our consultation is conducted by Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH) using high-definition intraoral cameras.</p>\n      <p>We project real-time magnified imaging of your oral cavity onto a screen, allowing you to clearly see hidden cavities, early enamel cracks, gum inflammation, and tartar buildup. You receive a written, transparent treatment plan with exact cost estimates and zero hidden fees.</p>\n    ",
        "articleBn": "\n      <p>একটি পূর্ণাঙ্গ ডেন্টাল পরামর্শ আজীবন সুস্থ দাঁত ও মাড়ির ভিত্তি। ডিজিটাল ডেন্টাল জোন বরিশালে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ) উন্নত ইন্ট্রাওরাল ক্যামেরার মাধ্যমে বিশদ মুখগহ্বর পরীক্ষা পরিচালনা করেন।</p>\n      <p>লাইভ স্ক্রিনে দাঁতের ভেতরের সূক্ষ্ম গর্ত, ফাটল ও মাড়ির প্রদাহ বড় করে দেখানো হয়। ফলে আপনি নিজের চোখে সমস্যাগুলো দেখে সুস্পষ্ট ও স্বচ্ছ খরচের চিকিৎসা পরিকল্পনা গ্রহণ করতে পারবেন।</p>\n    ",
        "symptoms": [
          "Tooth sensitivity when drinking hot, cold, or sweet beverages",
          "Bleeding, swollen, or tender gums when brushing",
          "Persistent bad breath or unpleasant taste in the mouth",
          "Routine 6-month preventive checkup and cancer screening"
        ],
        "symptomsBn": [
          "ঠান্ডা, গরম বা মিষ্টি খাবার খেলে দাঁতে শিরশিরানি",
          "ব্রাশ করার সময় মাড়ি দিয়ে রক্ত পড়া বা মাড়ি ফোলা",
          "মুখে দীর্ঘস্থায়ী দুর্গন্ধ বা অস্বস্তিকর স্বাদ",
          "প্রতি ৬ মাসের নিয়মিত রুটিন চেকআপ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical History & Visual Exam",
            "titleBn": "রোগীর ইতিহাস ও পর্যবেক্ষণ",
            "descEn": "Review of medical history, chief complaints, and past dental treatments.",
            "descBn": "রোগীর অতীত শারীরিক অবস্থা ও বর্তমান সমস্যার বিশদ পর্যালোচনা।"
          },
          {
            "num": "02",
            "titleEn": "HD Intraoral Camera Screening",
            "titleBn": "এইচডি ইন্ট্রাওরাল ক্যামেরা স্ক্রিনিং",
            "descEn": "High-resolution live screen inspection of all teeth, gums, and oral tissues.",
            "descBn": "লাইভ মনিটরে দাঁত ও মাড়ির প্রতিটি অংশের বিশদ চিত্র গ্রহণ।"
          },
          {
            "num": "03",
            "titleEn": "Diagnosis & Written Roadmap",
            "titleBn": "রোগ নির্ণয় ও লিখিত পরিকল্পনা",
            "descEn": "Transparent step-by-step treatment blueprint with exact pricing.",
            "descBn": "স্বচ্ছ খরচের হিসাবসহ ধাপে ধাপে লিখিত চিকিৎসা পরিকল্পনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow personalized home oral care advice provided during consultation",
          "Schedule recommended preventive or restorative treatments promptly",
          "Visit for a routine follow-up checkup every 6 months"
        ],
        "aftercareBn": [
          "পরামর্শের সময় দেওয়া ব্যক্তিগত মুখ ও দাঁতের যত্ন মেনে চলুন",
          "প্রয়োজনীয় চিকিৎসাগুলো সময়মতো করিয়ে নেওয়ার ব্যবস্থা করুন",
          "প্রতি ৬ মাস পর পর নিয়মিত চেকআপে আসুন"
        ]
      },
      {
        "id": "1-b-scaling-polishing",
        "code": "1.b",
        "cat": "Diagnostics & General Dentistry",
        "catBn": "ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা",
        "title": "Scaling & Polishing",
        "titleBn": "স্কেলিং ও পলিশিং",
        "price": "৳3,000",
        "image": "assets/treatment/1.b. Scaling & Polishing.png",
        "badge": "Preventive Care",
        "badgeBn": "প্রতিরোধমূলক যত্ন",
        "desc": "Deep ultrasonic removal of hardened tartar, plaque, and stubborn stains followed by high-gloss micro-polishing for fresh breath and pink gums.",
        "descBn": "আল্ট্রাসনিক স্কেলিংয়ের মাধ্যমে দাঁতের পাথর, প্ল্যাক ও দাগ দূর করে মাড়ি সুস্থ ও মুখ সতেজ রাখা হয়।",
        "benefits": [
          "Stops bleeding gums and bad breath instantly",
          "Gentle ultrasonic tips preserve natural enamel",
          "High-luster diamond polishing paste finish",
          "Recommended every 6 months for optimum health"
        ],
        "benefitsBn": [
          "মাড়ি দিয়ে রক্ত পড়া ও মুখের দুর্গন্ধ দূর করে",
          "এনামেলের কোনো ক্ষতি না করে মৃদু আল্ট্রাসনিক ভাইব্রেশন",
          "উচ্চ উজ্জ্বল পলিশিং ফিনিশ",
          "সুস্থ দাঁতের জন্য প্রতি ৬ মাস পর পর প্রযোজ্য"
        ],
        "duration": "35–45 Mins",
        "durationBn": "৩৫–৪৫ মিনিট",
        "comfort": "100% Painless Ultrasonic Wave",
        "comfortBn": "ব্যথামুক্ত আল্ট্রাসনিক ভাইব্রেশন",
        "durability": "Recommended every 6 Months",
        "durabilityBn": "প্রতি ৬ মাস পর পর প্রযোজ্য",
        "articleEn": "\n      <p>Bacterial plaque continuously mixes with saliva minerals to form calculus (hardened tartar). Once tartar forms, ordinary toothbrushes cannot remove it. If left untreated, tartar triggers chronic gingivitis, bleeding gums, bad breath, and progressive bone loss leading to loose teeth.</p>\n      <p>At Digital Dental Zone, our gentle ultrasonic scalers vibrate at high frequencies with a soothing water spray to dislodge hardened tartar without scratching enamel. We finish with micro-diamond paste polishing that buffs tooth surfaces smooth to resist future stain buildup.</p>\n    ",
        "articleBn": "\n      <p>মুখের লালা ও ব্যাকটেরিয়া জমে দাঁতের গোড়ায় শক্ত পাথর বা ক্যালকুলাস তৈরি করে। একবার পাথর জমে গেলে তা সাধারণ ব্রাশ দিয়ে দূর করা অসম্ভব। পাথর না সরালে মাড়িতে ইনফেকশন হয়, রক্ত পড়ে এবং হাড় ক্ষয় হয়ে দাঁত নড়ে যায়।</p>\n      <p>ডিজিটাল ডেন্টাল জোনে আমরা আধুনিক আল্ট্রাসনিক পাইজো-স্কেলার ব্যবহার করি যা এনামেলের কোনো ক্ষতি না করে মৃদু কম্পনে সব পাথর ও দাগ দূর করে। এরপর বিশেষ ডায়মন্ড পেস্ট দিয়ে পলিশ করে দাঁতকে মসৃণ ও চকচকে করা হয়।</p>\n    ",
        "symptoms": [
          "Bleeding gums when brushing, flossing, or eating fruits",
          "Visible yellow, brown, or black deposits at the gumline",
          "Persistent bad breath despite regular brushing",
          "Red, swollen, or tender gum margins"
        ],
        "symptomsBn": [
          "ব্রাশ করার সময় বা শক্ত ফল খাওয়ার সময় মাড়ি দিয়ে রক্ত পড়া",
          "দাঁতের গোড়ায় হলুদ, বাদামী বা কালো পাথরের আস্তরণ",
          "মুখের দুর্গন্ধ যা সহজে দূর হয় না",
          "মাড়ি লাল হয়ে যাওয়া, ফুলে যাওয়া বা নরম লাগা"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Gum Assessment & Tartar Mapping",
            "titleBn": "মাড়ি পরীক্ষা ও পর্যবেক্ষণ",
            "descEn": "Evaluating gum pockets and tartar accumulation above and below the gumline.",
            "descBn": "মাড়ির গভীরতা ও পাথর জমার স্থানগুলো বিশদভাবে পরীক্ষা করা।"
          },
          {
            "num": "02",
            "titleEn": "Ultrasonic Scaling",
            "titleBn": "আল্ট্রাসনিক স্কেলিং",
            "descEn": "Gentle acoustic vibrations dislodge hardened calculus safely.",
            "descBn": "মৃদু আল্ট্রাসনিক কম্পনে মাড়ির উপর ও নিচের পাথর অপসারণ।"
          },
          {
            "num": "03",
            "titleEn": "Diamond Micro-Polishing",
            "titleBn": "ডায়মন্ড মাইক্রো-পলিশিং",
            "descEn": "High-luster paste buffs enamel smooth and removes tobacco/tea stains.",
            "descBn": "বিশেষ পেস্ট দিয়ে দাঁতের উপরিভাগ উজ্জ্বল ও মসৃণ করা।"
          }
        ],
        "aftercare": [
          "Avoid very hot or icy foods for 24 hours if mild sensitivity occurs",
          "Brush twice daily with a soft-bristled brush and floss every day",
          "Rinse with warm salt water for 2–3 days if gums were inflamed"
        ],
        "aftercareBn": [
          "হালকা শিরশিরানি থাকলে ২৪ ঘণ্টা অতিরিক্ত গরম বা ঠান্ডা খাবার এড়িয়ে চলুন",
          "নরম ব্রাশ দিয়ে দিনে দুবার ব্রাশ করুন এবং নিয়মিত ফ্লস ব্যবহার করুন",
          "মাড়ির দ্রুত আরোগ্যের জন্য ২–৩ দিন হালকা কুসুম গরম পানিতে লবণ দিয়ে কুলকুচি করুন"
        ]
      },
      {
        "id": "1-c-traditional-filling",
        "code": "1.c",
        "cat": "Diagnostics & General Dentistry",
        "catBn": "ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা",
        "title": "Traditional Filling",
        "titleBn": "সাধারণ ফিলিং",
        "price": "৳4,000",
        "image": "assets/treatment/1.c. Traditional Filling.png",
        "badge": "Cavity Care",
        "badgeBn": "ক্যাভিটি সুরক্ষা",
        "desc": "Direct aesthetic resin restoration to seal cavities, prevent progressive decay, and restore natural tooth strength and bite function.",
        "descBn": "দাঁতের রঙের উন্নত ফিলিং যা ক্যাভিটি বা গর্ত বন্ধ করে দাঁতের ক্ষয় রোধ এবং স্বাভাবিক শক্তি ও সৌন্দর্য ফিরিয়ে আনে।",
        "benefits": [
          "Seamless natural tooth color blending",
          "Bonds securely to enamel and dentin",
          "Restores full chewing comfort and durability",
          "Prevents food impaction and deeper infections"
        ],
        "benefitsBn": [
          "দাঁতের স্বাভাবিক রঙের সাথে ১০০% মিল",
          "এনামেলের সাথে শক্তিশালী বন্ধন তৈরি করে",
          "চিবানোর স্বাভাবিক শক্তি ও আরাম ফিরিয়ে আনে",
          "খাবার আটকে থাকা ও সংক্রমণ প্রতিরোধ করে"
        ],
        "duration": "30–40 Mins",
        "durationBn": "৩০–৪০ মিনিট",
        "comfort": "Virtually Pain-Free",
        "comfortBn": "সম্পূর্ণ আরামদায়ক ও ব্যথাহীন",
        "durability": "7–10+ Years",
        "durabilityBn": "৭–১০+ বছর স্থায়িত্ব",
        "articleEn": "\n      <p>Tooth decay begins when bacteria dissolve the protective enamel layer. Untreated decay penetrates deeper into the dentin, creating a cavity that traps food and eventually invades the living nerve pulp, causing severe toothaches.</p>\n      <p>At Digital Dental Zone, we use premium universal nano-hybrid composite resins (3M, Ivoclar). Unlike dark silver amalgam fillings, our tooth-colored fillings are 100% mercury-free, shade-matched to your natural enamel, and chemically bonded to the tooth structure for exceptional durability.</p>\n    ",
        "articleBn": "\n      <p>দাঁতের ক্ষয় প্রাথমিক অবস্থায় কোনো ব্যথা দেয় না, তবে ধীরে ধীরে গর্ত গভীর হয়ে মজ্জায় পৌঁছালে তীব্র ব্যথার সৃষ্টি হয় এবং রুট ক্যানাল ছাড়া উপায় থাকে না।</p>\n      <p>ডিজিটাল ডেন্টাল জোনে আমরা বিশ্বমানের ন্যানো-হাইব্রিড কম্পোজিট রেজিন ব্যবহার করি যা পারদ-মুক্ত, আপনার দাঁতের রঙের সাথে হুবহু মিলে যায় এবং দাঁতের সাথে শক্তিশালী বন্ধন তৈরি করে দীর্ঘস্থায়ী সুরক্ষা নিশ্চিত করে।</p>\n    ",
        "symptoms": [
          "Food constantly packing between teeth or in tooth pits",
          "Dark spots, holes, or visible brown discoloration on teeth",
          "Sensitivity when drinking cold water or eating sweet foods",
          "Rough or sharp edges that snag your tongue"
        ],
        "symptomsBn": [
          "দাঁতের গর্তে বা ফাঁকে বারবার খাবার আটকে থাকা",
          "দাঁতের উপরিভাগে কালো বা বাদামী দাগ ও গর্ত দৃশ্যমান হওয়া",
          "ঠান্ডা পানি বা মিষ্টি খেলে হালকা শিরশিরানি অনুভূত হওয়া",
          "দাঁতের কোনো অংশ ভেঙে ধারালো হয়ে জিহ্বায় লাগা"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Cavity Cleaning & Disinfection",
            "titleBn": "ক্ষয় পরিষ্কার ও জীবাণুমুক্তকরণ",
            "descEn": "Gentle removal of decayed enamel and sanitizing the cavity floor.",
            "descBn": "ক্ষতিগ্রস্ত অংশ আলতো করে পরিষ্কার করে ক্যাভিটি জীবাণুমুক্ত করা।"
          },
          {
            "num": "02",
            "titleEn": "Adhesive Bonding Agent",
            "titleBn": "বন্ডিং এজেন্ট প্রয়োগ",
            "descEn": "Applying microscopic bonding agent to ensure an airtight seal.",
            "descBn": "এনামেলের সাথে মজবুত জোড়া লাগার জন্য বিশেষ বন্ডিং এজেন্ট প্রয়োগ।"
          },
          {
            "num": "03",
            "titleEn": "Layered Resin & LED Light Cure",
            "titleBn": "কম্পোজিট স্থাপন ও কিউরিং",
            "descEn": "Sculpting nano-composite resin in natural tooth anatomy and curing with LED.",
            "descBn": "দাঁতের স্বাভাবিক খাঁজ অনুযায়ী ফিলিং বসিয়ে নীল আলো দিয়ে শক্ত করা।"
          }
        ],
        "aftercare": [
          "You can eat normally immediately after the appointment",
          "Maintain regular flossing to prevent new decay between teeth",
          "Avoid biting extremely hard non-food objects"
        ],
        "aftercareBn": [
          "চিকিৎসা শেষ হওয়ার পর পরই আপনি স্বাভাবিক খাবার খেতে পারবেন",
          "দাঁতের ফাঁক পরিষ্কার রাখতে নিয়মিত ফ্লস ব্যবহার করুন",
          "দাঁত দিয়ে খুব শক্ত জিনিস কাটা পরিহার করুন"
        ]
      },
      {
        "id": "1-d-tooth-whitening",
        "code": "1.d",
        "cat": "Diagnostics & General Dentistry",
        "catBn": "ডায়াগনস্টিক ও সাধারণ দন্তচিকিৎসা",
        "title": "Tooth Whitening",
        "titleBn": "দাঁত সাদা করা",
        "price": "৳15,000",
        "image": "assets/treatment/1.d. Tooth Whitening.png",
        "badge": "Instant Bright",
        "badgeBn": "তাৎক্ষণিক উজ্জ্বলতা",
        "desc": "In-office advanced photo-activated tooth bleaching that removes deep coffee, tea, smoking, and age-related stains in a single 45-minute session.",
        "descBn": "ক্লিনিকে উন্নত ফটো-অ্যাক্টিভেটেড ব্লিচিংয়ের মাধ্যমে মাত্র ৪৫ মিনিটে চা, কফি বা ধূমপানের দাগ দূর করে দাঁত ৫-৮ শেড উজ্জ্বল করা হয়।",
        "benefits": [
          "Brightens teeth by 5–8 shades in one sitting",
          "Gum barrier protection prevents sensitivity",
          "Long-lasting radiant results",
          "Safe and enamel-friendly formula"
        ],
        "benefitsBn": [
          "এক সেশনেই দাঁত ৫–৮ শেড উজ্জ্বল হয়",
          "মাড়ি সুরক্ষিত রেখে শিরশিরানি মুক্ত পদ্ধতি",
          "দীর্ঘস্থায়ী ও দৃষ্টিনন্দন ফলাফল",
          "এনামেলের জন্য সম্পূর্ণ নিরাপদ"
        ],
        "duration": "45–60 Mins",
        "durationBn": "৪৫–৬০ মিনিট",
        "comfort": "Pain-Free with Gum Barrier",
        "comfortBn": "মাড়ি সুরক্ষাসহ সম্পূর্ণ আরামদায়ক",
        "durability": "1–3+ Years (with care)",
        "durabilityBn": "১–৩+ বছর স্থায়িত্ব",
        "articleEn": "\n      <p>Over years of consuming tea, coffee, turmeric, and tobacco, microscopic stain molecules penetrate deep into the dentin, making teeth look dull and yellowish. Over-the-counter whitening toothpastes only scrub the surface and can erode enamel.</p>\n      <p>At Digital Dental Zone, our in-office professional whitening system uses concentrated whitening gel activated by cold blue LED light. We apply a protective resin dam over your gums to ensure zero irritation. In three 15-minute cycles, deep stain molecules are safely broken down, brightening your smile by 5 to 8 shades in a single sitting.</p>\n    ",
        "articleBn": "\n      <p>বছর ধরে চা, কফি, হলুদযুক্ত খাবার ও ধূমপানের কারণে দাঁতের ভেতরের স্তরে গভীর দাগ বসে যায়। সাধারণ টুথপেস্ট বা ঘরোয়া উপায়ে এই ভেতরের দাগ দূর করা সম্ভব নয়।</p>\n      <p>ডিজিটাল ডেন্টাল জোনে আমাদের ইন-অফিস প্রফেশনাল হোয়াইটনিং পদ্ধতিতে কোল্ড ব্লু এলইডি অ্যাক্টিভেটেড জেল ব্যবহার করা হয়। মাড়িকে বিশেষ লিকুইড ব্যারিয়ার দিয়ে পুরোপুরি নিরাপদ রেখে মাত্র ৪৫ মিনিটে তিনটি ধাপে দাঁতের ভেতরের দাগ ভেঙে প্রাকৃতিক উজ্জ্বল হাসি ফিরিয়ে দেওয়া হয়।</p>\n    ",
        "symptoms": [
          "Yellowed, dull, or stained teeth from tea, coffee, or smoking",
          "Upcoming wedding, job interview, or special event",
          "Uneven tooth color due to aging or dietary habits"
        ],
        "symptomsBn": [
          "চা, কফি বা ধূমপানের কারণে দাঁত হলুদ বা বিবর্ণ হয়ে যাওয়া",
          "সামনে বিয়ে, ভাইভা বা কোনো বিশেষ সামাজিক অনুষ্ঠান",
          "বয়সের সাথে সাথে দাঁতের স্বাভাবিক উজ্জ্বলতা হারিয়ে যাওয়া"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Shade Recording & Polish",
            "titleBn": "শেড পরিমাপ ও প্রস্তুতি",
            "descEn": "Recording baseline tooth shade and surface polishing.",
            "descBn": "বর্তমান দাঁতের শেড রেকর্ড করা এবং পৃষ্ঠভাগ পরিষ্কার করা।"
          },
          {
            "num": "02",
            "titleEn": "Gingival Barrier Isolation",
            "titleBn": "মাড়ি সুরক্ষা ব্যারিয়ার",
            "descEn": "Applying light-cured protective barrier over the gums.",
            "descBn": "মাড়ির সুরক্ষার জন্য বিশেষ রেজিন সিল প্রয়োগ।"
          },
          {
            "num": "03",
            "titleEn": "Active Gel & LED Activation",
            "titleBn": "জেল ও এলইডি অ্যাক্টিভেশন",
            "descEn": "Applying professional whitening gel under cold blue LED light.",
            "descBn": "ব্লু এলইডি লাইটের নিচে প্রফেশনাল জেল দ্বারা ব্লিচিং সম্পন্ন।"
          }
        ],
        "aftercare": [
          "Follow the \"White Diet\" for 48 hours (avoid tea, coffee, red sauce, tobacco)",
          "Avoid freezing cold drinks for the first 24 hours",
          "Brush and rinse regularly to maintain the brilliant shine"
        ],
        "aftercareBn": [
          "প্রথম ৪৮ ঘণ্টা \"হোয়াইট ডায়েট\" মেনে চলুন (চা, কফি, পান বা ধূমপান পরিহার করুন)",
          "প্রথম ২৪ ঘণ্টা খুব ঠান্ডা পানীয় এড়িয়ে চলুন",
          "দীর্ঘদিন উজ্জ্বলতা ধরে রাখতে নিয়মিত ব্রাশ ও মুখ পরিষ্কার রাখুন"
        ]
      }
    ]
  },
  {
    "id": "rct",
    "num": "02",
    "code": "2",
    "nameEn": "Root Canal & Restorations",
    "nameBn": "রুট ক্যানাল ও রেস্টোরেশন",
    "descEn": "Painless rotary Endomotor root canal procedures, re-treatment of failed cases, and custom CAD/CAM ceramic inlays, onlays & overlays.",
    "descBn": "ব্যথামুক্ত রোটারি এন্ডোমোটর রুট ক্যানাল, রি-রুট ক্যানাল এবং সিএডি/সিএএম সিরামিক ইনলে, অনলে ও ওভারলে রেস্টোরেশন।",
    "image": "assets/treatment/2. Root Canal & Restorations.jpg",
    "items": [
      {
        "id": "2-a-rct-endomotor",
        "code": "2.a",
        "cat": "Root Canal & Restorations",
        "catBn": "রুট ক্যানাল ও রেস্টোরেশন",
        "title": "RCT (using Endomotor)",
        "titleBn": "রুট ক্যানাল (এন্ডোমোটর)",
        "price": "৳8,000",
        "image": "assets/treatment/2.a. RCT (using Endomotor).png",
        "badge": "Pain Relief",
        "badgeBn": "ব্যথামুক্ত",
        "desc": "Advanced rotary endodontic root canal procedure to thoroughly clean infected pulp, sterilize canals, and hermetically seal the tooth structure with zero pain.",
        "descBn": "উন্নত রোটারি এন্ডোডন্টিক রুট ক্যানাল পদ্ধতির মাধ্যমে সংক্রমিত পাল্প পরিষ্কার ও জীবাণুমুক্ত করে প্রাকৃতিকভাবে দাঁত রক্ষা করা হয়।",
        "benefits": [
          "Precision apex locator with rotary Endomotor",
          "Single or two-visit painless procedure",
          "100% digital sterilization & dental dam isolation",
          "Preserves your natural tooth structure for life"
        ],
        "benefitsBn": [
          "নির্ভুল এপেক্স লোকেটার ও রোটারি এন্ডোমোটর প্রযুক্তি",
          "ব্যথামুক্ত ও দ্রুততম চিকিৎসা পদ্ধতি",
          "১০০% জীবাণুমুক্ত পরিবেশ ও ডেন্টাল ড্যাম আইসোলেশন",
          "সারাজীবনের জন্য প্রাকৃতিক দাঁত সুরক্ষিত রাখে"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Advanced rotary endodontic root canal procedure to thoroughly clean infected pulp, sterilize canals, and hermetically seal the tooth structure with zero pain.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>উন্নত রোটারি এন্ডোডন্টিক রুট ক্যানাল পদ্ধতির মাধ্যমে সংক্রমিত পাল্প পরিষ্কার ও জীবাণুমুক্ত করে প্রাকৃতিকভাবে দাঁত রক্ষা করা হয়।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to rct (using endomotor)",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "রুট ক্যানাল (এন্ডোমোটর)-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "2-b-re-rct",
        "code": "2.b",
        "cat": "Root Canal & Restorations",
        "catBn": "রুট ক্যানাল ও রেস্টোরেশন",
        "title": "Re-RCT",
        "titleBn": "রি-রুট ক্যানাল",
        "price": "৳15,000",
        "image": "assets/treatment/2. b. Re-RCT.png",
        "badge": "Revision Care",
        "badgeBn": "পুনর্বাসন",
        "desc": "Specialized retreatment for previously treated teeth that have developed recurrent infection or persistent pain, eliminating deep-rooted bacteria.",
        "descBn": "অতীতে অন্য কোথাও অসম্পূর্ণ বা ব্যর্থ হওয়া রুট ক্যানালের পুনরায় উন্নত ও আধুনিক জীবাণুমুক্ত চিকিৎসা।",
        "benefits": [
          "Removal of old filling materials & infection removal",
          "Deep canal sanitization with medicinal dressing",
          "Digital X-ray & 3D scanner verification",
          "High success rate for saving problematic teeth"
        ],
        "benefitsBn": [
          "পুরানো ফিলিং ও ব্যাকটেরিয়া সম্পূর্ণ অপসারণ",
          "ঔষধযুক্ত ড্রেসিংয়ের মাধ্যমে গভীর জীবাণুমুক্তকরণ",
          "ডিজিটাল এক্স-রে ও ৩ডি স্ক্যানার পর্যবেক্ষণ",
          "সমস্যাগ্রস্ত দাঁত রক্ষার সর্বোচ্চ সফলতা"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Specialized retreatment for previously treated teeth that have developed recurrent infection or persistent pain, eliminating deep-rooted bacteria.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>অতীতে অন্য কোথাও অসম্পূর্ণ বা ব্যর্থ হওয়া রুট ক্যানালের পুনরায় উন্নত ও আধুনিক জীবাণুমুক্ত চিকিৎসা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to re-rct",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "রি-রুট ক্যানাল-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "2-c-rct-package",
        "code": "2.c",
        "cat": "Root Canal & Restorations",
        "catBn": "রুট ক্যানাল ও রেস্টোরেশন",
        "title": "RCT + Post Core + Zirconia Crown (Full Package)",
        "titleBn": "রুট ক্যানাল + পোস্ট কোর + জিরকোনিয়া ক্রাউন (সম্পূর্ণ প্যাকেজ)",
        "price": "৳25,000",
        "image": "assets/treatment/2.c. RCT + Post Core + Zirconia Crown.png",
        "badge": "Full Package",
        "badgeBn": "সম্পূর্ণ প্যাকেজ",
        "desc": "Comprehensive full-mouth preservation package including pain-free RCT, structural fiber post-core buildup, and a custom CAD/CAM Zirconia diamond crown.",
        "descBn": "সম্পূর্ণ দাঁত সুরক্ষার অল-ইন-ওয়ান প্যাকেজ: ব্যথামুক্ত আরসিটি, ফাইবার পোস্ট-কোর শক্তিবৃদ্ধি এবং কাস্টম জিরকোনিয়া ক্রাউন।",
        "benefits": [
          "Complete endodontic therapy & post-core reinforcement",
          "Custom CAD/CAM Monolithic Zirconia Crown included",
          "Natural aesthetic color match to adjacent teeth",
          "10-year durability with complete chewing comfort"
        ],
        "benefitsBn": [
          "সম্পূর্ণ রুট ক্যানাল ও পোস্ট-কোর শক্তিশালীকরণ",
          "কাস্টম সিএডি/সিএএম জিরকোনিয়া ক্রাউন অন্তর্ভুক্ত",
          "অন্যান্য দাঁতের সাথে ১০০% স্বাভাবিক রঙের মিল",
          "১০ বছরের স্থায়িত্ব ও সম্পূর্ণ চিবানোর আরাম"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Comprehensive full-mouth preservation package including pain-free RCT, structural fiber post-core buildup, and a custom CAD/CAM Zirconia diamond crown.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>সম্পূর্ণ দাঁত সুরক্ষার অল-ইন-ওয়ান প্যাকেজ: ব্যথামুক্ত আরসিটি, ফাইবার পোস্ট-কোর শক্তিবৃদ্ধি এবং কাস্টম জিরকোনিয়া ক্রাউন।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to rct + post core + zirconia crown (full package)",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "রুট ক্যানাল + পোস্ট কোর + জিরকোনিয়া ক্রাউন (সম্পূর্ণ প্যাকেজ)-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "2-d-inlay",
        "code": "2.d",
        "cat": "Root Canal & Restorations",
        "catBn": "রুট ক্যানাল ও রেস্টোরেশন",
        "title": "Inlay",
        "titleBn": "ইনলে",
        "price": "৳10,000",
        "image": "assets/treatment/2.d. Inlay.jpeg",
        "badge": "Micro-Restoration",
        "badgeBn": "মাইক্রো রেস্টোরেশন",
        "desc": "Custom-milled solid ceramic restoration designed to fit precisely inside the prepared cavity between the cusps of a tooth, conserving healthy tooth structure.",
        "descBn": "দাঁতের অক্ষত অংশ অক্ষুণ্ণ রেখে মধ্যবর্তী ক্ষয় বা গর্ত নিখুঁতভাবে পূরণ করার উন্নত সিরামিক ইনলে পদ্ধতি।",
        "benefits": [
          "Conserves up to 75% more tooth structure than full crowns",
          "Precision CAD/CAM marginal fit prevents recurrent decay",
          "High compressive strength matching natural tooth enamel",
          "Stain-resistant and biocompatible ceramic"
        ],
        "benefitsBn": [
          "ক্রাউনের চেয়ে ৭৫% বেশি প্রাকৃতিক দাঁত অক্ষত রাখে",
          "সিএডি/সিএএম নির্ভুল প্রান্তিক ফিটিং পুনরায় ব্যাকটেরিয়া আক্রমণ রোধ করে",
          "প্রাকৃতিক দাঁতের মতো উচ্চ চাপ সহনশীলতা",
          "দাগহীন ও শতভাগ বায়োকম্প্যাটিবল"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Custom-milled solid ceramic restoration designed to fit precisely inside the prepared cavity between the cusps of a tooth, conserving healthy tooth structure.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>দাঁতের অক্ষত অংশ অক্ষুণ্ণ রেখে মধ্যবর্তী ক্ষয় বা গর্ত নিখুঁতভাবে পূরণ করার উন্নত সিরামিক ইনলে পদ্ধতি।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to inlay",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ইনলে-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "2-e-onlay",
        "code": "2.e",
        "cat": "Root Canal & Restorations",
        "catBn": "রুট ক্যানাল ও রেস্টোরেশন",
        "title": "Onlay",
        "titleBn": "অনলে",
        "price": "৳10,000",
        "image": "assets/treatment/2.e.Onlay .png",
        "badge": "Cusp Protection",
        "badgeBn": "কাস্প সুরক্ষা",
        "desc": "Conservative ceramic restoration covering one or more damaged cusps of a posterior tooth without requiring full crown preparation.",
        "descBn": "দাঁতের ভাঙা বা ক্ষতিগ্রস্ত শীর্ষবিন্দু (কাস্প) সুরক্ষিত রেখে প্রাকৃতিক দাঁত টিকিয়ে রাখার আধুনিক সিরামিক অনলে।",
        "benefits": [
          "Protects weakened cusps against biting fractures",
          "Significantly less tooth grinding than full crowns",
          "Flawless aesthetic color integration",
          "Exceptional long-term durability"
        ],
        "benefitsBn": [
          "চিবানোর সময় দুর্বল দাঁত ভেঙে যাওয়া থেকে রক্ষা করে",
          "ফুল ক্রাউনের চেয়ে অনেক কম দাঁত কাটার প্রয়োজন হয়",
          "দাঁতের স্বাভাবিক রঙের সাথে নিখুঁত মিল",
          "অসাধারণ দীর্ঘস্থায়িত্ব"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Conservative ceramic restoration covering one or more damaged cusps of a posterior tooth without requiring full crown preparation.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>দাঁতের ভাঙা বা ক্ষতিগ্রস্ত শীর্ষবিন্দু (কাস্প) সুরক্ষিত রেখে প্রাকৃতিক দাঁত টিকিয়ে রাখার আধুনিক সিরামিক অনলে।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to onlay",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "অনলে-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "2-f-overlay",
        "code": "2.f",
        "cat": "Root Canal & Restorations",
        "catBn": "রুট ক্যানাল ও রেস্টোরেশন",
        "title": "Overlay",
        "titleBn": "ওভারলে",
        "price": "৳10,000",
        "image": "assets/treatment/2.f. Overlay.png",
        "badge": "Full Cusp Care",
        "badgeBn": "পূর্ণাঙ্গ রেস্টোরেশন",
        "desc": "Complete occlusal surface ceramic restoration designed to rebuild heavily worn or fractured teeth while preserving healthy side walls.",
        "descBn": "দাঁতের ওপরের পুরো চিবানোর অংশ ক্ষয় বা ভাঙন থেকে রক্ষা করতে ব্যবহৃত আধুনিক সিরামিক ওভারলে।",
        "benefits": [
          "Replaces entire chewing surface with solid ceramic",
          "Preserves vital tooth structure and gum margins",
          "Restores proper bite alignment and chewing efficiency",
          "Excellent biocompatibility with opposing natural teeth"
        ],
        "benefitsBn": [
          "চিবানোর পুরো পৃষ্ঠ সলিড সিরামিকে প্রতিস্থাপন করে",
          "দাঁতের মাড়ির কিনারা ও স্বাভাবিক দেওয়াল অক্ষত রাখে",
          "সঠিক বাইট ও চিবানোর ক্ষমতা পুনরুদ্ধার করে",
          "বিপরীত দাঁতের জন্য সম্পূর্ণ নিরাপদ ও ক্ষয়রোধী"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Complete occlusal surface ceramic restoration designed to rebuild heavily worn or fractured teeth while preserving healthy side walls.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>দাঁতের ওপরের পুরো চিবানোর অংশ ক্ষয় বা ভাঙন থেকে রক্ষা করতে ব্যবহৃত আধুনিক সিরামিক ওভারলে।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to overlay",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ওভারলে-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      }
    ]
  },
  {
    "id": "surgery",
    "num": "03",
    "code": "3",
    "nameEn": "Oral Surgery & Implants",
    "nameBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
    "descEn": "Gentle adult extractions, specialist surgical wisdom tooth extraction, periodontal surgeries, apicectomy, gummy smile, and permanent titanium dental implants.",
    "descBn": "ব্যথাহীন প্রাপ্তবয়স্ক দাঁত তোলা, আক্কেল দাঁতের সার্জিক্যাল অপসারণ, জিনজিভেক্টমি, এপিসেক্টমি, গামি স্মাইল ও স্থায়ী টাইটানিয়াম ইমপ্ল্যান্ট।",
    "image": "assets/treatment/3. Oral Surgery & Implants.jpg",
    "items": [
      {
        "id": "3-a-adult-extraction",
        "code": "3.a",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Adult Tooth Extraction",
        "titleBn": "প্রাপ্তবয়স্ক দাঁত তোলা",
        "price": "৳3,000",
        "image": "assets/treatment/3.a. Adult Tooth Extraction.png",
        "badge": "Gentle Extraction",
        "badgeBn": "ব্যথাহীন তোলা",
        "desc": "Safe, atraumatic removal of non-restorable or severely broken adult teeth with advanced local anesthesia for zero pain.",
        "descBn": "উন্নত লোকাল এনেস্থেশিয়ার মাধ্যমে সম্পূর্ণ ব্যথামুক্তভাবে অপ্রতিরোধ্য বা নষ্ট হয়ে যাওয়া দাঁত তোলা।",
        "benefits": [
          "Completely painless with advanced local anesthesia",
          "Atraumatic technique preserves surrounding bone",
          "Post-extraction wound care guidance and dressing",
          "Fast recovery with minimal discomfort"
        ],
        "benefitsBn": [
          "উন্নত এনেস্থেশিয়ার কারণে কোনো ব্যথা অনুভূত হয় না",
          "চোয়ালের হাড় অক্ষত রেখে দাঁত তোলা হয়",
          "অপারেশন পরবর্তী ড্রেসিং ও যত্ন নির্দেশনা",
          "দ্রুত নিরাময় ও স্বস্তি"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Safe, atraumatic removal of non-restorable or severely broken adult teeth with advanced local anesthesia for zero pain.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>উন্নত লোকাল এনেস্থেশিয়ার মাধ্যমে সম্পূর্ণ ব্যথামুক্তভাবে অপ্রতিরোধ্য বা নষ্ট হয়ে যাওয়া দাঁত তোলা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to adult tooth extraction",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "প্রাপ্তবয়স্ক দাঁত তোলা-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-b-surgical-extraction",
        "code": "3.b",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Surgical / Semi-surgical Extraction",
        "titleBn": "সার্জিক্যাল / সেমি-সার্জিক্যাল এক্সট্রাকশন",
        "price": "৳4,000 – ৳15,000",
        "image": "assets/treatment/3.b. Surgical _Semi-surgical Extraction.png",
        "badge": "Specialist Surgery",
        "badgeBn": "বিশেষজ্ঞ সার্জারি",
        "desc": "Gentle, pain-managed minor surgical removal of impacted or partially erupted wisdom teeth performed by PGT (OMS) trained doctor.",
        "descBn": "মাড়ির ভেতরে আটকে থাকা বা বাঁকা আক্কেল দাঁতের সম্পূর্ণ ব্যথামুক্ত ও নিরাপদ মাইনর সার্জিক্যাল অপসারণ।",
        "benefits": [
          "Performed by PGT (OMS) trained specialist Dr. Nusrat",
          "Local anesthesia ensures complete numbness & zero pain",
          "Fast healing protocol with minimal swelling",
          "Comprehensive post-operative checkup included"
        ],
        "benefitsBn": [
          "ওরাল সার্জারিতে পিজিটি প্রশিক্ষিত ডাঃ নুসরাত দ্বারা সম্পন্ন",
          "উন্নত এনেস্থেশিয়ার মাধ্যমে সম্পূর্ণ ব্যথামুক্ত অনুভূতি",
          "দ্রুত ক্ষত নিরাময়ের বিশেষ প্রটোকল",
          "অপারেশন পরবর্তী ফলো-আপ চেকআপ অন্তর্ভুক্ত"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Gentle, pain-managed minor surgical removal of impacted or partially erupted wisdom teeth performed by PGT (OMS) trained doctor.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>মাড়ির ভেতরে আটকে থাকা বা বাঁকা আক্কেল দাঁতের সম্পূর্ণ ব্যথামুক্ত ও নিরাপদ মাইনর সার্জিক্যাল অপসারণ।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to surgical / semi-surgical extraction",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "সার্জিক্যাল / সেমি-সার্জিক্যাল এক্সট্রাকশন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-c-crown-lengthening",
        "code": "3.c",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Crown Lengthening",
        "titleBn": "ক্রাউন লেংথেনিং",
        "price": "৳3,000",
        "image": "assets/treatment/3.c. Crown Lengthening.png",
        "badge": "Perio Contouring",
        "badgeBn": "মাড়ির কনট্যুরিং",
        "desc": "Minor surgical procedure to reshape gum tissue and expose more natural tooth structure for proper crown placement and aesthetic harmony.",
        "descBn": "দাঁতের উপরে সঠিক ক্রাউন বসানো বা সৌন্দর্য বৃদ্ধির জন্য মাড়ির অতিরিক্ত অংশ সামান্য কেটে দাঁতের দৃশ্যমান অংশ বাড়ানো।",
        "benefits": [
          "Enables stable retention for crowns and bridges",
          "Creates balanced and symmetrical gum lines",
          "Prevents chronic gum inflammation around restorations",
          "Quick procedure with rapid healing"
        ],
        "benefitsBn": [
          "ক্রাউন ও ব্রিজের মজবুত ফিটিং নিশ্চিত করে",
          "মাড়ির সুন্দর ও সুষম রূপরেখা তৈরি করে",
          "মাড়ির প্রদাহ ও রক্ত পড়া বন্ধ করে",
          "দ্রুত আরোগ্য লাভ"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Minor surgical procedure to reshape gum tissue and expose more natural tooth structure for proper crown placement and aesthetic harmony.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>দাঁতের উপরে সঠিক ক্রাউন বসানো বা সৌন্দর্য বৃদ্ধির জন্য মাড়ির অতিরিক্ত অংশ সামান্য কেটে দাঁতের দৃশ্যমান অংশ বাড়ানো।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to crown lengthening",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ক্রাউন লেংথেনিং-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-d-gingivectomy",
        "code": "3.d",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Gingivectomy",
        "titleBn": "জিনজিভেক্টমি",
        "price": "৳5,000 – ৳10,000",
        "image": "assets/treatment/3.d. Gingivectomy.png",
        "badge": "Gum Health",
        "badgeBn": "মাড়ির চিকিৎসা",
        "desc": "Surgical removal of diseased, overgrown, or hypertrophic gum tissue to eliminate deep periodontal pockets and restore oral hygiene.",
        "descBn": "অতিরিক্ত ফুলে ওঠা বা সংক্রমিত মাড়ি কেটে অপসারণ করে মাড়ির স্বাভাবিক স্বাস্থ্য ও পরিচ্ছন্নতা ফিরিয়ে আনা।",
        "benefits": [
          "Eliminates deep bacterial periodontal pockets",
          "Reduces gum swelling and bleeding",
          "Enhances smile aesthetics and tooth proportions",
          "Promotes long-term periodontal health"
        ],
        "benefitsBn": [
          "গভীর ব্যাকটেরিয়া পকেট দূর করে সংক্রমণ বন্ধ করে",
          "মাড়ির ফোলাভাব ও রক্তপাত দূর করে",
          "দাঁতের স্বাভাবিক অনুপাত ও সৌন্দর্য বৃদ্ধি করে",
          "মাড়ির দীর্ঘমেয়াদী স্বাস্থ্য নিশ্চিত করে"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Surgical removal of diseased, overgrown, or hypertrophic gum tissue to eliminate deep periodontal pockets and restore oral hygiene.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>অতিরিক্ত ফুলে ওঠা বা সংক্রমিত মাড়ি কেটে অপসারণ করে মাড়ির স্বাভাবিক স্বাস্থ্য ও পরিচ্ছন্নতা ফিরিয়ে আনা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to gingivectomy",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "জিনজিভেক্টমি-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-e-operculectomy",
        "code": "3.e",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Operculectomy",
        "titleBn": "অপারকুলেক্টমি",
        "price": "৳10,000",
        "image": "assets/treatment/3.e.Operculectomy.png",
        "badge": "Flap Relief",
        "badgeBn": "ফ্ল্যাপ অপসারণ",
        "desc": "Minor surgical excision of the infected flap of gum tissue overlying an erupting wisdom tooth (pericoronitis relief).",
        "descBn": "আক্কেল দাঁতের ওপর ঢেকে থাকা সংক্রমিত মাড়ির অংশ অপসারণ করে তীব্র ব্যথা ও ফোলা দূর করা।",
        "benefits": [
          "Instantly eliminates severe pericoronitis pain",
          "Prevents recurrent food trapping and infection",
          "Avoids full tooth extraction when tooth is erupting well",
          "Painless minor procedure under local anesthesia"
        ],
        "benefitsBn": [
          "আক্কেল দাঁতের অসহ্য ব্যথা ও প্রদাহ দ্রুত নিরাময় করে",
          "খাবার আটকে থাকা ও পুঁজ হওয়া বন্ধ করে",
          "দাঁত না তুলেই অনেক ক্ষেত্রে স্থায়ী সমাধান দেয়",
          "লোকাল এনেস্থেশিয়ায় ব্যথামুক্ত চিকিৎসা"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Minor surgical excision of the infected flap of gum tissue overlying an erupting wisdom tooth (pericoronitis relief).</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>আক্কেল দাঁতের ওপর ঢেকে থাকা সংক্রমিত মাড়ির অংশ অপসারণ করে তীব্র ব্যথা ও ফোলা দূর করা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to operculectomy",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "অপারকুলেক্টমি-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-f-apicectomy",
        "code": "3.f",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Apicectomy",
        "titleBn": "এপিসেক্টমি",
        "price": "৳15,000",
        "image": "assets/treatment/3.f. Apicectomy.png",
        "badge": "Root-End Care",
        "badgeBn": "রুট-এন্ড সার্জারি",
        "desc": "Microsurgical removal of persistent root-tip cysts and apical infections when conventional root canal treatment is insufficient to save the tooth.",
        "descBn": "সাধারণ রুট ক্যানালে নিরাময় না হওয়া দাঁতের শেকড়ের সংক্রমণ ও সিস্ট কেটে অপসারণ করে দাঁত রক্ষা করার বিশেষ সার্জারি।",
        "benefits": [
          "Saves natural tooth from extraction",
          "Eliminates deep apical cysts and bone infections",
          "High precision root-end retrograde filling",
          "Painless microsurgical technique"
        ],
        "benefitsBn": [
          "দাঁত ফেলা থেকে রক্ষা করে প্রাকৃতিক দাঁত বাঁচায়",
          "শেকড়ের গভীর সিস্ট ও হাড়ের ইনফেকশন দূর করে",
          "নির্ভুল রুট-এন্ড রেট্রোগ্রেড সিলিং",
          "ব্যথামুক্ত মাইক্রোসার্জিক্যাল পদ্ধতি"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Microsurgical removal of persistent root-tip cysts and apical infections when conventional root canal treatment is insufficient to save the tooth.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>সাধারণ রুট ক্যানালে নিরাময় না হওয়া দাঁতের শেকড়ের সংক্রমণ ও সিস্ট কেটে অপসারণ করে দাঁত রক্ষা করার বিশেষ সার্জারি।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to apicectomy",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "এপিসেক্টমি-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-g-gummy-smile",
        "code": "3.g",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Gummy Smile Correction",
        "titleBn": "গামি স্মাইল কারেকশন",
        "price": "Above ৳50,000",
        "image": "assets/treatment/3.g. Gummy Smile Correction.png",
        "badge": "Smile Makeover",
        "badgeBn": "স্মাইল মেকওভার",
        "desc": "Advanced surgical and aesthetic gum re-contouring to reduce excessive gum display when smiling, creating a harmonious and balanced smile.",
        "descBn": "হাসার সময় অতিরিক্ত মাড়ি দেখা যাওয়ার সমস্যা দূর করতে উন্নত সার্জিক্যাল ও লেজার কনট্যুরিংয়ের মাধ্যমে সুন্দর হাসি তৈরি।",
        "benefits": [
          "Dramatic aesthetic enhancement when smiling",
          "Harmonizes teeth length and gum exposure",
          "Permanent and highly predictable outcome",
          "Customized digital smile analysis before treatment"
        ],
        "benefitsBn": [
          "হাসির দৃশ্যে অভাবনীয় নান্দনিক রূপান্তর",
          "দাঁতের দৈর্ঘ্য ও মাড়ির সুষম অনুপাত নিশ্চিত করে",
          "স্থায়ী ও আত্মবিশ্বাস বৃদ্ধিকারী ফলাফল",
          "চিকিৎসার পূর্বে ডিজিটাল স্মাইল সিমুলেশন"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Advanced surgical and aesthetic gum re-contouring to reduce excessive gum display when smiling, creating a harmonious and balanced smile.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>হাসার সময় অতিরিক্ত মাড়ি দেখা যাওয়ার সমস্যা দূর করতে উন্নত সার্জিক্যাল ও লেজার কনট্যুরিংয়ের মাধ্যমে সুন্দর হাসি তৈরি।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to gummy smile correction",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "গামি স্মাইল কারেকশন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "3-h-dental-implant",
        "code": "3.h",
        "cat": "Oral Surgery & Implants",
        "catBn": "ওরাল সার্জারি ও ইমপ্ল্যান্ট",
        "title": "Dental Implant",
        "titleBn": "ডেন্টাল ইমপ্ল্যান্ট",
        "price": "৳1,20,000",
        "image": "assets/treatment/3.h. Dental Implant.png",
        "badge": "Lifetime Fix",
        "badgeBn": "স্থায়ী সমাধান",
        "desc": "The gold standard for replacing missing teeth. A biocompatible titanium root surgically anchored into the jawbone, topped with a custom Zirconia crown.",
        "descBn": "হারানো দাঁতের সেরা স্থায়ী সমাধান। চোয়ালের হাড়ে টাইটানিয়াম রুট স্থাপন করে উপরে প্রাকৃতিক জিরকোনিয়া ক্রাউন বসানো হয়।",
        "benefits": [
          "Guided 3D digital planning with intraoral scanner",
          "Preserves jawbone density and facial structure",
          "Looks, feels, and functions exactly like a natural tooth",
          "Lifetime durability with proper oral care"
        ],
        "benefitsBn": [
          "৩ডি ইন্ট্রাওরাল স্ক্যানার দ্বারা পরিচালিত নির্ভুল সার্জারি",
          "চোয়ালের হাড় ও মুখের স্বাভাবিক গঠন ধরে রাখে",
          "প্রাকৃতিক দাঁতের মতোই খাবার খাওয়া যায়",
          "যথাযথ যত্নে সারাজীবন স্থায়ী থাকে"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>The gold standard for replacing missing teeth. A biocompatible titanium root surgically anchored into the jawbone, topped with a custom Zirconia crown.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>হারানো দাঁতের সেরা স্থায়ী সমাধান। চোয়ালের হাড়ে টাইটানিয়াম রুট স্থাপন করে উপরে প্রাকৃতিক জিরকোনিয়া ক্রাউন বসানো হয়।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to dental implant",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ডেন্টাল ইমপ্ল্যান্ট-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      }
    ]
  },
  {
    "id": "prosthodontics",
    "num": "04",
    "code": "4",
    "nameEn": "Prosthodontics & Aesthetic Smile",
    "nameBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
    "descEn": "PMMA provisionals, porcelain crowns, high-strength CAD/CAM zirconia crowns, pure titanium crowns, veneers, and 3D smile designing.",
    "descBn": "পিএমএমএ ক্রাউন, পোর্সেলিন ও জিরকোনিয়া ক্রাউন, খাঁটি টাইটানিয়াম ক্রাউন, কসমেটিক ভিনিয়ার ও ৩ডি ডিজিটাল স্মাইল ডিজাইন।",
    "image": "assets/treatment/4. Prosthodontics & Aesthetic Smile.jpg",
    "items": [
      {
        "id": "4-a-pmma-crown",
        "code": "4.a",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "PMMA Crown",
        "titleBn": "পিএমএমএ ক্রাউন",
        "price": "৳5,000",
        "image": "assets/treatment/4.a. PMMA Crown.png",
        "badge": "Interim Protection",
        "badgeBn": "অস্থায়ী সুরক্ষা",
        "desc": "High-density milled provisional crown designed to protect prepared teeth and preserve gum margins while permanent restorations are fabricated.",
        "descBn": "স্থায়ী ক্রাউন তৈরি হওয়ার সময় প্রস্তুতকৃত দাঁত ও মাড়িকে সুরক্ষিত রাখতে ব্যবহৃত বিশেষ ক্রাউন।",
        "benefits": [
          "Immediate smile restoration & protection",
          "Prevents sensitivity while eating or drinking",
          "Maintains tooth spacing and contour",
          "Smooth comfortable finish"
        ],
        "benefitsBn": [
          "তাৎক্ষণিক দাঁতের সুরক্ষা ও সৌন্দর্য বজায় রাখে",
          "খাওয়ার সময় শিরশিরানি দূর করে",
          "দাঁতের স্বাভাবিক স্থান বজায় রাখে",
          "মসৃণ ও আরামদায়ক"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>High-density milled provisional crown designed to protect prepared teeth and preserve gum margins while permanent restorations are fabricated.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>স্থায়ী ক্রাউন তৈরি হওয়ার সময় প্রস্তুতকৃত দাঁত ও মাড়িকে সুরক্ষিত রাখতে ব্যবহৃত বিশেষ ক্রাউন।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to pmma crown",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "পিএমএমএ ক্রাউন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "4-b-porcelain-crown",
        "code": "4.b",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "Porcelain Crown",
        "titleBn": "পোর্সেলিন ক্রাউন",
        "price": "৳7,000",
        "image": "assets/treatment/4.b. Porcelain Crown.png",
        "badge": "Classic Balance",
        "badgeBn": "জনপ্রিয়",
        "desc": "Reliable and affordable dental crown blending the strength of metal substructure with a natural tooth-colored porcelain exterior.",
        "descBn": "ন্যায্য মূল্যে নির্ভরযোগ্য ক্রাউন যা ভেতরের মেটালের শক্তির সাথে বাইরের প্রাকৃতিক পোর্সেলিন রঙের সমন্বয় ঘটায়।",
        "benefits": [
          "Proven clinical reliability over decades",
          "Color matched to patient natural shade",
          "Cost-effective solution for missing or damaged teeth",
          "Great structural resilience"
        ],
        "benefitsBn": [
          "ক্লিনিক্যালি পরীক্ষিত ও নির্ভরযোগ্য",
          "রোগীর দাঁতের স্বাভাবিক রঙের সাথে মিল",
          "সাশ্রয়ী মূল্যে পূর্ণাঙ্গ দাঁত পুনরুদ্ধার",
          "শক্তিশালী কাঠামো"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Reliable and affordable dental crown blending the strength of metal substructure with a natural tooth-colored porcelain exterior.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>ন্যায্য মূল্যে নির্ভরযোগ্য ক্রাউন যা ভেতরের মেটালের শক্তির সাথে বাইরের প্রাকৃতিক পোর্সেলিন রঙের সমন্বয় ঘটায়।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to porcelain crown",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "পোর্সেলিন ক্রাউন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "4-c-zirconia-crown",
        "code": "4.c",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "Zirconia Crown",
        "titleBn": "জিরকোনিয়া ক্রাউন",
        "price": "৳12,000",
        "image": "assets/treatment/4.c. Zirconia Crown.png",
        "badge": "Premium Diamond",
        "badgeBn": "প্রিমিয়াম কোয়ালিটি",
        "desc": "Ultra-strong, metal-free translucent crown precision-milled using digital CAD/CAM technology. Maximum biocompatibility and lifelike translucency.",
        "descBn": "মেটাল-মুক্ত অত্যন্ত শক্তিশালী ক্রাউন যা ডিজিটাল সিএডি/সিএএম প্রযুক্তির মাধ্যমে তৈরি করা হয়। প্রাকৃতিকভাবে চকচকে ও দীর্ঘস্থায়ী।",
        "benefits": [
          "Digitally scanned with intraoral 3D scanner (No messy putty)",
          "Metal-free & 100% biocompatible with gums",
          "Zero black lines at the gumline",
          "Unmatched tensile strength for front & back teeth"
        ],
        "benefitsBn": [
          "৩ডি ইন্ট্রাওরাল স্ক্যানারের মাধ্যমে নির্ভুল মাপ",
          "ধাতুমুক্ত ও মাড়ির জন্য সম্পূর্ণ নিরাপদ",
          "মাড়ির গোড়ায় কোনো কালো দাগ হয় না",
          "সামনের ও পেছনের দাঁতের জন্য অত্যন্ত টেকসই"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Ultra-strong, metal-free translucent crown precision-milled using digital CAD/CAM technology. Maximum biocompatibility and lifelike translucency.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>মেটাল-মুক্ত অত্যন্ত শক্তিশালী ক্রাউন যা ডিজিটাল সিএডি/সিএএম প্রযুক্তির মাধ্যমে তৈরি করা হয়। প্রাকৃতিকভাবে চকচকে ও দীর্ঘস্থায়ী।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to zirconia crown",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "জিরকোনিয়া ক্রাউন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "4-d-titanium-crown",
        "code": "4.d",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "Titanium Crown",
        "titleBn": "টাইটানিয়াম ক্রাউন",
        "price": "৳20,000",
        "image": "assets/treatment/4.d. Titanium Crown.png",
        "badge": "Maximum Strength",
        "badgeBn": "সর্বোচ্চ শক্ত",
        "desc": "Medical-grade pure titanium crown offering peak structural strength, lightweight comfort, and hypoallergenic medical excellence.",
        "descBn": "মেডিকেল গ্রেড বিশুদ্ধ টাইটানিয়াম ক্রাউন যা সর্বোচ্চ শক্তি ও আরামদায়ক অনুভূতি প্রদান করে।",
        "benefits": [
          "Ultra-lightweight aerospace grade titanium core",
          "Ideal for high-stress molar teeth and heavy biters",
          "Exceptional long-term marginal fit",
          "Immune to corrosion and temperature sensitivity"
        ],
        "benefitsBn": [
          "অত্যন্ত হালকা ও দীর্ঘস্থায়ী টাইটানিয়াম কোর",
          "পেছনের শক্ত দাঁত ও খাবারের চাপের জন্য আদর্শ",
          "নিখুঁত প্রান্তিক ফিটিং",
          "তাপমাত্রা সংবেদনশীলতামুক্ত"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Medical-grade pure titanium crown offering peak structural strength, lightweight comfort, and hypoallergenic medical excellence.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>মেডিকেল গ্রেড বিশুদ্ধ টাইটানিয়াম ক্রাউন যা সর্বোচ্চ শক্তি ও আরামদায়ক অনুভূতি প্রদান করে।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to titanium crown",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "টাইটানিয়াম ক্রাউন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "4-e-crown-removal",
        "code": "4.e",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "Crown Removal (old/faulty)",
        "titleBn": "ক্রাউন রিমুভাল (পুরনো/ত্রুটিপূর্ণ)",
        "price": "৳4,000",
        "image": "assets/treatment/4.e. Crown removal.png",
        "badge": "Safe Removal",
        "badgeBn": "নিরাপদ অপসারণ",
        "desc": "Painless, atraumatic removal of old, loose, leaking, or defective dental crowns to treat underlying decay and prepare for new restorations.",
        "descBn": "পুরানো, ত্রুটিপূর্ণ বা ফুটো হয়ে যাওয়া ক্রাউন অক্ষতভাবে খুলে ভেতরের ইনফেকশন বা ক্ষয়ের চিকিৎসা করা।",
        "benefits": [
          "Protects underlying natural tooth stump from breakage",
          "Painless procedure with local anesthesia",
          "Removes deep secondary bacterial decay",
          "Prepares tooth for fresh precision CAD/CAM crown"
        ],
        "benefitsBn": [
          "ভেতরের প্রাকৃতিক দাঁতের গোড়া সুরক্ষিত রাখে",
          "লোকাল এনেস্থেশিয়ায় সম্পূর্ণ ব্যথাহীন পদ্ধতি",
          "ভেতরে জমে থাকা ব্যাকটেরিয়া ও পচন পরিষ্কার করে",
          "নতুন নিখুঁত ক্রাউন বসানোর উপযোগী করে তোলে"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Painless, atraumatic removal of old, loose, leaking, or defective dental crowns to treat underlying decay and prepare for new restorations.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>পুরানো, ত্রুটিপূর্ণ বা ফুটো হয়ে যাওয়া ক্রাউন অক্ষতভাবে খুলে ভেতরের ইনফেকশন বা ক্ষয়ের চিকিৎসা করা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to crown removal (old/faulty)",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ক্রাউন রিমুভাল (পুরনো/ত্রুটিপূর্ণ)-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "4-f-veneer-zirconia",
        "code": "4.f",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "Veneer (Zirconia)",
        "titleBn": "ভিনিয়ার (জিরকোনিয়া)",
        "price": "৳12,000",
        "image": "assets/treatment/4.f. Veneer.png",
        "badge": "Hollywood Smile",
        "badgeBn": "স্মাইল মেকওভার",
        "desc": "Ultra-thin custom porcelain shells bonded to the front of your teeth to instantly correct discoloration, chips, gaps, or minor misalignment.",
        "descBn": "অতি-পাতলা কাস্টম পোর্সেলিন শেল যা দাঁতের রঙ, ফাঁকা বা ভাঙা অংশ ঢেকে দিয়ে একটি নিখুঁত উজ্জ্বল হাসি উপহার দেয়।",
        "benefits": [
          "Stain-resistant high-gloss ceramic finish",
          "Minimal enamel preparation needed",
          "Corrects gaps, deep stains & uneven teeth",
          "Natural light reflection matching real enamel"
        ],
        "benefitsBn": [
          "দাগ প্রতিরোধক দীর্ঘস্থায়ী উজ্জ্বল ফিনিশ",
          "দাঁতের খুব সামান্য অংশ প্রস্তুত করতে হয়",
          "দাঁতের ফাঁকা ও স্থায়ী দাগ দূর করে",
          "প্রাকৃতিক এনামেলের মতো আলো প্রতিফলিত করে"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Ultra-thin custom porcelain shells bonded to the front of your teeth to instantly correct discoloration, chips, gaps, or minor misalignment.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>অতি-পাতলা কাস্টম পোর্সেলিন শেল যা দাঁতের রঙ, ফাঁকা বা ভাঙা অংশ ঢেকে দিয়ে একটি নিখুঁত উজ্জ্বল হাসি উপহার দেয়।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to veneer (zirconia)",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ভিনিয়ার (জিরকোনিয়া)-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "4-g-smile-designing",
        "code": "4.g",
        "cat": "Prosthodontics & Aesthetic Smile",
        "catBn": "প্রস্থোডন্টিক্স ও নান্দনিক হাসি",
        "title": "Smile Designing",
        "titleBn": "স্মাইল ডিজাইনিং",
        "price": "Included",
        "image": "assets/treatment/4.g. Smile Designing.png",
        "badge": "Included",
        "badgeBn": "অন্তর্ভুক্ত",
        "desc": "Comprehensive facial and dental aesthetic simulation using 3D intraoral digital scans to preview your ideal smile makeover before treatment begins.",
        "descBn": "চিকিৎসা শুরুর আগেই ৩ডি ডিজিটাল স্ক্যানের মাধ্যমে আপনার মুখের সাথে মানানসই নিখুঁত হাসির প্রিভিউ ডিজাইন করা।",
        "benefits": [
          "See your simulated final smile before treatment starts",
          "Fully customized to your facial proportions and lip line",
          "Included seamlessly with all cosmetic & veneer procedures",
          "Zero guesswork — 100% predictable cosmetic results"
        ],
        "benefitsBn": [
          "চিকিৎসা শুরুর আগেই নিজের ভবিষ্যৎ হাসি দেখার সুবিধা",
          "মুখের গড়ন ও ঠোঁটের অনুপাতের সাথে সামঞ্জস্যপূর্ণ",
          "কসমেটিক ও ভিনিয়ার চিকিৎসার সাথে সম্পূর্ণ অন্তর্ভুক্ত",
          "কোনো অনিশ্চয়তা ছাড়াই শতভাগ নির্ভুল ফলাফল"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Comprehensive facial and dental aesthetic simulation using 3D intraoral digital scans to preview your ideal smile makeover before treatment begins.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>চিকিৎসা শুরুর আগেই ৩ডি ডিজিটাল স্ক্যানের মাধ্যমে আপনার মুখের সাথে মানানসই নিখুঁত হাসির প্রিভিউ ডিজাইন করা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to smile designing",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "স্মাইল ডিজাইনিং-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      }
    ]
  },
  {
    "id": "orthodontics",
    "num": "05",
    "code": "5",
    "nameEn": "Orthodontics",
    "nameBn": "অর্থোডন্টিক্স",
    "descEn": "Invisible clear aligners (Invisalign) and modern orthodontic braces to straighten misaligned teeth and correct bite anomalies.",
    "descBn": "ইনভিজিবল ক্লিয়ার অ্যালাইনার্স (ইনভিজালাইন) ও আধুনিক অর্থোডন্টিক ব্রেসেস দিয়ে বাঁকা বা ফাঁকা দাঁত সোজা করার বিশেষ চিকিৎসা।",
    "image": "assets/treatment/5. Orthodontics.jpg",
    "items": [
      {
        "id": "5-a-invisalign",
        "code": "5.a",
        "cat": "Orthodontics",
        "catBn": "অর্থোডন্টিক্স",
        "title": "Invisalign Orthodontic Aligner",
        "titleBn": "ইনভিজালাইন অর্থোডন্টিক অ্যালাইনার",
        "price": "Above ৳50,000",
        "image": "assets/treatment/5.a. Invisalign Orthodontic Aligner.png",
        "badge": "Invisible Comfort",
        "badgeBn": "অদৃশ্য ও আরামদায়ক",
        "desc": "Virtually invisible removable aligners custom-fabricated to straighten crooked or gapped teeth without noticeable metal wires or brackets.",
        "descBn": "মেটাল তার ছাড়া স্বচ্ছ ও খুলে ফেলার মতো অ্যালাইনার যা কোনো দৃশ্যমান তার ছাড়াই দাঁত সোজা ও সুন্দর করে।",
        "benefits": [
          "100% transparent and discreet",
          "Removable while eating, brushing, and flossing",
          "No cuts, scratches, or wire emergencies",
          "Computer-simulated progress from day 1"
        ],
        "benefitsBn": [
          "সম্পূর্ণ স্বচ্ছ ও দৃষ্টির আড়ালে থাকে",
          "খাওয়ার ও ব্রাশ করার সময় সহজে খোলা যায়",
          "তারের গুঁতো বা মুখের ক্ষতের ভয় নেই",
          "প্রথম দিন থেকেই অগ্রগতির কম্পিউটার সিমুলেশন"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Virtually invisible removable aligners custom-fabricated to straighten crooked or gapped teeth without noticeable metal wires or brackets.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>মেটাল তার ছাড়া স্বচ্ছ ও খুলে ফেলার মতো অ্যালাইনার যা কোনো দৃশ্যমান তার ছাড়াই দাঁত সোজা ও সুন্দর করে।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to invisalign orthodontic aligner",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "ইনভিজালাইন অর্থোডন্টিক অ্যালাইনার-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "5-b-orthodontic-braces",
        "code": "5.b",
        "cat": "Orthodontics",
        "catBn": "অর্থোডন্টিক্স",
        "title": "Orthodontic Braces",
        "titleBn": "অর্থোডন্টিক ব্রেসেস",
        "price": "Above ৳50,000",
        "image": "assets/treatment/5.b Orthodontic Braces.png",
        "badge": "Alignment Expert",
        "badgeBn": "নিখুঁত অ্যালাইনমেন্ট",
        "desc": "Precision orthodontic treatment for severe bite misalignments, crowded teeth, overbites, underbites, and space closures.",
        "descBn": "অসমান দাঁত, অতিরিক্ত চাপযুক্ত দাঁত বা ফাঁকা দাঁতের স্থায়ী সমাধানের জন্য উন্নত অর্থোডন্টিক চিকিৎসা।",
        "benefits": [
          "Effective for complex orthodontic and bite cases",
          "Tooth-colored ceramic brackets available for subtlety",
          "Creates a balanced, harmonious profile and smile",
          "Flexible monthly payment options during treatment"
        ],
        "benefitsBn": [
          "জটিল কামড় ও অসম দাঁতের জন্য চূড়ান্ত সমাধান",
          "দাঁতের রঙের সাথে মেলানো সিরামিক ব্র্যাকেট সুবিধা",
          "সুন্দর ও আকর্ষণীয় মুখের অবয়ব তৈরি করে",
          "চিকিৎসাকালীন সহজ কিস্তি সুবিধা"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Precision orthodontic treatment for severe bite misalignments, crowded teeth, overbites, underbites, and space closures.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>অসমান দাঁত, অতিরিক্ত চাপযুক্ত দাঁত বা ফাঁকা দাঁতের স্থায়ী সমাধানের জন্য উন্নত অর্থোডন্টিক চিকিৎসা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to orthodontic braces",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "অর্থোডন্টিক ব্রেসেস-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      }
    ]
  },
  {
    "id": "pediatric",
    "num": "06",
    "code": "6",
    "nameEn": "Pediatric Dentistry",
    "nameBn": "শিশু দন্ত চিকিৎসা",
    "descEn": "Gentle milk tooth extractions, fillings, pulpotomy, temporary crowns, pulpectomy, and space maintainers in a warm, fear-free environment.",
    "descBn": "শিশুদের দুধ দাঁত তোলা, ফিলিং, পালপোটমি, টেম্পোরারি ক্রাউন, পালপেক্টমি ও স্পেস মেইনটেইনার চিকিৎসা।",
    "image": "assets/treatment/6. Pediatric Dentistry.jpg",
    "items": [
      {
        "id": "6-a-deciduous-extraction",
        "code": "6.a",
        "cat": "Pediatric Dentistry",
        "catBn": "শিশু দন্ত চিকিৎসা",
        "title": "Deciduous Tooth Extraction",
        "titleBn": "দুধ দাঁত তোলা",
        "price": "৳1,000",
        "image": "assets/treatment/6.a. Deciduous Tooth Extraction.png",
        "badge": "Kid Friendly",
        "badgeBn": "শিশুবান্ধব",
        "desc": "Gentle, pain-free milk tooth extraction in a caring and friendly atmosphere to allow healthy permanent adult teeth eruption.",
        "descBn": "শিশুদের ভয়হীন ও স্নেহপূর্ণ পরিবেশে ব্যথামুক্তভাবে দুধ দাঁত তোলা যাতে স্থায়ী দাঁত সুন্দরভাবে উঠতে পারে।",
        "benefits": [
          "Warm, friendly environment to eliminate dental fear",
          "Topical gel numbing before gentle extraction",
          "Prevents crowding of incoming adult teeth",
          "Child receives encouragement and gifts"
        ],
        "benefitsBn": [
          "শিশুদের ভয় দূর করতে বিশেষ স্নেহপূর্ণ পরিবেশ",
          "ব্যথাহীনভাবে দাঁত তোলার জন্য জেল স্প্রে",
          "ভবিষ্যতের স্থায়ী দাঁত সোজা উঠতে সাহায্য করে",
          "শিশুদের জন্য উপহার ও আনন্দময় অভিজ্ঞতা"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Gentle, pain-free milk tooth extraction in a caring and friendly atmosphere to allow healthy permanent adult teeth eruption.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>শিশুদের ভয়হীন ও স্নেহপূর্ণ পরিবেশে ব্যথামুক্তভাবে দুধ দাঁত তোলা যাতে স্থায়ী দাঁত সুন্দরভাবে উঠতে পারে।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to deciduous tooth extraction",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "দুধ দাঁত তোলা-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "6-b-deciduous-filling",
        "code": "6.b",
        "cat": "Pediatric Dentistry",
        "catBn": "শিশু দন্ত চিকিৎসা",
        "title": "Deciduous Filling",
        "titleBn": "দুধ দাঁতের ফিলিং",
        "price": "৳2,500",
        "image": "assets/treatment/6.b. Deciduous Filling.png",
        "badge": "Cavity Care",
        "badgeBn": "ক্যাভিটি সুরক্ষা",
        "desc": "Tooth-colored biocompatible composite filling to stop pediatric cavities, relieve eating sensitivity, and preserve primary teeth.",
        "descBn": "ছোটদের দুধ দাঁতের ক্ষয় ও গর্ত বন্ধ করে ব্যথা দূর করতে ব্যবহৃত শিশুবান্ধব ফিলিং।",
        "benefits": [
          "Stops decay from reaching delicate pulp nerves",
          "Prevents early loss of primary teeth",
          "Quick, pain-free procedure with high durability",
          "Maintains proper chewing function for child growth"
        ],
        "benefitsBn": [
          "দাঁতের ভেতরের নার্ভে ইনফেকশন ছড়ানো রোধ করে",
          "দুধ দাঁত অকালে পড়ে যাওয়া রোধ করে",
          "দ্রুত ও ব্যথাহীন ফিলিং পদ্ধতি",
          "শিশুর পুষ্টি ও চিবানোর ক্ষমতা বজায় রাখে"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Tooth-colored biocompatible composite filling to stop pediatric cavities, relieve eating sensitivity, and preserve primary teeth.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>ছোটদের দুধ দাঁতের ক্ষয় ও গর্ত বন্ধ করে ব্যথা দূর করতে ব্যবহৃত শিশুবান্ধব ফিলিং।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to deciduous filling",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "দুধ দাঁতের ফিলিং-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "6-c-deciduous-pulpotomy",
        "code": "6.c",
        "cat": "Pediatric Dentistry",
        "catBn": "শিশু দন্ত চিকিৎসা",
        "title": "Deciduous Pulpotomy",
        "titleBn": "দুধ দাঁতের পালপোটমি",
        "price": "৳4,000",
        "image": "assets/treatment/6.c. Deciduous Pulpotomy.png",
        "badge": "Pain Relief",
        "badgeBn": "ব্যথামুক্ত চিকিৎসা",
        "desc": "Coronal pulp treatment for deeply decayed baby teeth to eliminate pain and infection while preserving healthy root pulp until natural exfoliation.",
        "descBn": "শিশুর দাঁতের গভীর গর্ত ও তীব্র ব্যথা দূর করতে সংক্রমিত পাল্প অপসারণ করে দাঁত টিকিয়ে রাখার বিশেষ চিকিৎসা।",
        "benefits": [
          "Provides immediate pain relief for crying children",
          "Preserves vital root structure for jaw development",
          "Single-visit comfortable kid-friendly procedure",
          "Avoids premature extraction and space loss"
        ],
        "benefitsBn": [
          "তীব্র দাঁতের ব্যথা থেকে শিশুকে তাৎক্ষণিক মুক্তি দেয়",
          "চোয়ালের স্বাভাবিক বৃদ্ধির জন্য শেকড় সুস্থ রাখে",
          "এক সেশনেই আরামদায়ক শিশুবান্ধব চিকিৎসা",
          "অকালে দাঁত তোলা রোধ করে ফাঁকা হওয়া ঠেকায়"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Coronal pulp treatment for deeply decayed baby teeth to eliminate pain and infection while preserving healthy root pulp until natural exfoliation.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>শিশুর দাঁতের গভীর গর্ত ও তীব্র ব্যথা দূর করতে সংক্রমিত পাল্প অপসারণ করে দাঁত টিকিয়ে রাখার বিশেষ চিকিৎসা।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to deciduous pulpotomy",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "দুধ দাঁতের পালপোটমি-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "6-d-deciduous-temporary-crown",
        "code": "6.d",
        "cat": "Pediatric Dentistry",
        "catBn": "শিশু দন্ত চিকিৎসা",
        "title": "Deciduous Temporary Crown",
        "titleBn": "দুধ দাঁতের টেম্পোরারি ক্রাউন",
        "price": "৳4,000",
        "image": "assets/treatment/6.d. Deciduous Temporary Crown.png",
        "badge": "Tooth Preserver",
        "badgeBn": "দাঁত সুরক্ষা",
        "desc": "Protective pediatric crown placed over treated or severely broken primary teeth, lasting 6 to 18+ months until natural tooth transition.",
        "descBn": "ক্ষতিগ্রস্ত দুধ দাঁতকে ৬ থেকে ১৮+ মাস পর্যন্ত চিবানোর উপযোগী ও সুরক্ষিত রাখতে ব্যবহৃত শিশুবান্ধব ক্রাউন।",
        "benefits": [
          "Lasts 6–18+ months until natural adult tooth eruption",
          "Protects weakened primary teeth from breaking",
          "Restores full chewing power and bite height",
          "Bio-inert and safe for young children"
        ],
        "benefitsBn": [
          "স্থায়ী দাঁত ওঠার আগ পর্যন্ত ৬–১৮+ মাস সুরক্ষিত রাখে",
          "দুর্বল হয়ে যাওয়া দুধ দাঁত ভেঙে যাওয়া থেকে বাঁচায়",
          "চিবানোর পূর্ণ শক্তি ও সঠিক বাইট ফিরিয়ে আনে",
          "শিশুদের জন্য শতভাগ নিরাপদ"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Protective pediatric crown placed over treated or severely broken primary teeth, lasting 6 to 18+ months until natural tooth transition.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>ক্ষতিগ্রস্ত দুধ দাঁতকে ৬ থেকে ১৮+ মাস পর্যন্ত চিবানোর উপযোগী ও সুরক্ষিত রাখতে ব্যবহৃত শিশুবান্ধব ক্রাউন।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to deciduous temporary crown",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "দুধ দাঁতের টেম্পোরারি ক্রাউন-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "6-e-deciduous-pulpectomy",
        "code": "6.e",
        "cat": "Pediatric Dentistry",
        "catBn": "শিশু দন্ত চিকিৎসা",
        "title": "Deciduous Pulpectomy",
        "titleBn": "দুধ দাঁতের পালপেক্টমি",
        "price": "৳5,000",
        "image": "assets/treatment/6.e. Deciduous Pulpectomy.png",
        "badge": "Deep Care",
        "badgeBn": "গভীর সংক্রমণ নিরাময়",
        "desc": "Complete root canal therapy for severely infected baby teeth using resorbable paste that naturally dissolves as the adult tooth comes in.",
        "descBn": "দুধ দাঁতের শেকড় পর্যন্ত ছড়িয়ে পড়া গভীর ইনফেকশন দূর করতে বিশেষ ক্ষয়ণশীল পেস্ট দ্বারা সম্পূর্ণ রুট ক্যানাল।",
        "benefits": [
          "Eliminates root-end abscess and swelling in children",
          "Uses resorbable filling safe for incoming adult teeth",
          "Preserves natural space maintainer in dental arch",
          "Performed with gentle, child-specialized technique"
        ],
        "benefitsBn": [
          "শিশুর মাড়ির ফোলা ও পুঁজ সম্পূর্ণ নিরাময় করে",
          "স্থায়ী দাঁতের কোনো ক্ষতি না করে এমন বিশেষ পেস্ট ব্যবহৃত হয়",
          "প্রাকৃতিক স্পেস ধরে রেখে দাঁত আঁকাবাঁকা হওয়া রোধ করে",
          "অত্যন্ত যত্নশীল ও ব্যথাহীন পদ্ধতি"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Complete root canal therapy for severely infected baby teeth using resorbable paste that naturally dissolves as the adult tooth comes in.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>দুধ দাঁতের শেকড় পর্যন্ত ছড়িয়ে পড়া গভীর ইনফেকশন দূর করতে বিশেষ ক্ষয়ণশীল পেস্ট দ্বারা সম্পূর্ণ রুট ক্যানাল।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to deciduous pulpectomy",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "দুধ দাঁতের পালপেক্টমি-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      },
      {
        "id": "6-f-deciduous-space-maintainer",
        "code": "6.f",
        "cat": "Pediatric Dentistry",
        "catBn": "শিশু দন্ত চিকিৎসা",
        "title": "Deciduous Space Maintainer",
        "titleBn": "দুধ দাঁতের স্পেস মেইনটেইনার",
        "price": "৳5,000",
        "image": "assets/treatment/6.f. Deciduous Space Maintainer.png",
        "badge": "Growth Guard",
        "badgeBn": "স্পেস সুরক্ষা",
        "desc": "Custom appliance to hold open the space left by a prematurely lost baby tooth, ensuring permanent adult teeth grow in straight and aligned.",
        "descBn": "অকালে দুধ দাঁত পড়ে গেলে পেছনের দাঁত সামনে ঝুঁকে পড়া রোধ করতে এবং স্থায়ী দাঁত ওঠার জায়গা ধরে রাখতে বিশেষ অ্যাপ্লায়েন্স।",
        "benefits": [
          "Prevents adjacent teeth from drifting and crowding",
          "Guarantees space for proper permanent tooth eruption",
          "Reduces or eliminates future need for complex braces",
          "Custom-fitted, lightweight and comfortable for kids"
        ],
        "benefitsBn": [
          "পাশের দাঁত হেলে পড়ে জায়গা বন্ধ হওয়া রোধ করে",
          "ভবিষ্যতের স্থায়ী দাঁত সঠিক স্থানে ওঠার জায়গা নিশ্চিত করে",
          "পরবর্তীতে ব্যয়বহুল ব্রেসেস চিকিৎসার প্রয়োজন কমিয়ে দেয়",
          "শিশুর মুখের মাপ অনুযায়ী অত্যন্ত হালকা ও আরামদায়ক"
        ],
        "duration": "30–60 Mins",
        "durationBn": "৩০–৬০ মিনিট",
        "comfort": "100% Painless with Modern Anesthesia",
        "comfortBn": "আধুনিক অ্যানেসথেসিয়ায় ১০০% ব্যথামুক্ত",
        "durability": "Long-Lasting Clinical Durability",
        "durabilityBn": "দীর্ঘস্থায়ী ও নির্ভরযোগ্য ফলাফল",
        "articleEn": "\n      <p>Custom appliance to hold open the space left by a prematurely lost baby tooth, ensuring permanent adult teeth grow in straight and aligned.</p>\n      <p>At Digital Dental Zone in Barishal, this procedure is performed following strict European Class-B hospital sterilization standards under the direct supervision of Chief Dental Surgeon Dr. Nusrat Naiem (BDS, PGT, MPH). We utilize digital diagnostic aids, advanced instrumentation, and biocompatible materials to ensure a comfortable, painless, and enduring clinical result.</p>\n    ",
        "articleBn": "\n      <p>অকালে দুধ দাঁত পড়ে গেলে পেছনের দাঁত সামনে ঝুঁকে পড়া রোধ করতে এবং স্থায়ী দাঁত ওঠার জায়গা ধরে রাখতে বিশেষ অ্যাপ্লায়েন্স।</p>\n      <p>ডিজিটাল ডেন্টাল জোন বরিশালে এই চিকিৎসাটি ইউরোপীয় ক্লাস-বি হসপিটাল গ্রেড স্টেরিলাইজেশন নিশ্চিত করে চিফ ডেন্টাল সার্জন ডাঃ নুসরাত নাঈম (বিডিএস, পিজিটি, এমপিএইচ)-এর নিবিড় তত্ত্বাবধানে সম্পন্ন করা হয়। ডিজিটাল ডায়াগনসিস ও উন্নত বায়োকম্প্যাটিবল উপাদান ব্যবহারের ফলে চিকিৎসাটি সম্পূর্ণ আরামদায়ক ও স্থায়ী হয়।</p>\n    ",
        "symptoms": [
          "Pain, discomfort, or functional difficulty related to deciduous space maintainer",
          "Aesthetic concerns or desire to restore normal chewing function",
          "Clinical recommendation following comprehensive 3D digital diagnosis"
        ],
        "symptomsBn": [
          "দুধ দাঁতের স্পেস মেইনটেইনার-সংক্রান্ত ব্যথা, অস্বস্তি বা খাবার চিবানোর সমস্যা",
          "দাঁতের সৌন্দর্য বৃদ্ধি বা স্বাভাবিক চিবানোর ক্ষমতা পুনরুদ্ধারের ইচ্ছা",
          "পূর্ণাঙ্গ ৩ডি ডিজিটাল পরীক্ষার পর বিশেষজ্ঞ চিকিৎসকের পরামর্শ"
        ],
        "steps": [
          {
            "num": "01",
            "titleEn": "Clinical Assessment & 3D Imaging",
            "titleBn": "ক্লিনিক্যাল পরীক্ষা ও ৩ডি স্ক্যান",
            "descEn": "Detailed examination and digital imaging to plan treatment precision.",
            "descBn": "নির্ভুল চিকিৎসার জন্য ৩ডি ডিজিটাল স্ক্যান ও বিশদ পরীক্ষা।"
          },
          {
            "num": "02",
            "titleEn": "Painless Clinical Execution",
            "titleBn": "ব্যথামুক্ত চিকিৎসা সম্পাদন",
            "descEn": "Performing the procedure with modern painless technology and sterile care.",
            "descBn": "আধুনিক ব্যথামুক্ত প্রযুক্তি ও জীবাণুমুক্ত পরিবেশে চিকিৎসা সম্পন্ন।"
          },
          {
            "num": "03",
            "titleEn": "Evaluation & Aftercare Guidance",
            "titleBn": "চূড়ান্ত মূল্যায়ন ও যত্ন পরামর্শ",
            "descEn": "Verifying restoration fit, comfort, and providing aftercare instructions.",
            "descBn": "ফলাফল যাচাই এবং দীর্ঘস্থায়ী সুরক্ষার জন্য দিকনির্দেশনা প্রদান।"
          }
        ],
        "aftercare": [
          "Follow the post-procedure instructions and prescribed medication regimen",
          "Maintain strict oral hygiene with gentle brushing and flossing",
          "Attend scheduled follow-up visits to ensure optimum healing"
        ],
        "aftercareBn": [
          "চিকিৎসা পরবর্তী যত্ন ও চিকিৎসকের দেওয়া ঔষধ নিয়ম মেনে সেবন করুন",
          "নরমভাবে ব্রাশ ও ফ্লসিংয়ের মাধ্যমে মুখগহ্বর পরিষ্কার রাখুন",
          "নির্ধারিত ফলো-আপ চেকআপে এসে নিরাময় নিশ্চিত করুন"
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.DDZ_SERVICES_CATEGORIES = DDZ_SERVICES_CATEGORIES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DDZ_SERVICES_CATEGORIES };
}
