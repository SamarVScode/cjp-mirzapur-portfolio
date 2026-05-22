"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const dictionary = {
  en: {
    // Navigation
    nav_vision: "Vision",
    nav_manifesto: "Manifesto",
    nav_eligibility: "Eligibility",
    nav_contact: "Contact",
    nav_join: "Join Swarm",
    nav_complaints: "File Complaint",
    nav_home: "Home",

    // Hero Section
    hero_eyebrow: "OFFICIAL MIRZAPUR DISTRICT WING",
    hero_title_1: "The Voice of the",
    hero_title_italic: "Lazy & Unemployed.",
    hero_slogan: "YOU CANNOT SQUASH A SWARM",
    hero_desc: "Fighting for the chronically online, the wonderfully unmotivated, and the beautifully unemployed citizens of Purvanchal. No corporate sponsors, infinity patience, and zero progress.",
    hero_cta_complaint: "Vent Grievances",
    hero_cta_join: "Become a Swarmer",
    hero_stamp: "MIRZAPUR SWARM",

    // Stats Section
    stats_title: "Swarm Dashboard of Lethargy",
    stats_eyebrow: "Divisional Metrics",
    stats_desc: "While other parties present tall growth promises, we believe in mathematical transparency. Behold the real-time indicators of our collective inaction.",
    stat_laziness_val: "99.9%",
    stat_laziness_title: "Swarm Laziness Coefficient",
    stat_laziness_desc: "Scientifically measured coefficient of procrastination. We move only when absolutely pushed.",
    stat_chai_val: "14,890+",
    stat_chai_title: "Cups of Chai Consumed",
    stat_chai_desc: "Daily average required to sustain passionate debates at local tea stalls across Mirzapur.",
    stat_funds_val: "0.00 INR",
    stat_funds_title: "Corporate Funding Secured",
    stat_funds_desc: "Proudly sponsored by absolutely no one. 100% pure, unadulterated middle-class frustration.",
    stat_rants_val: "8,450+",
    stat_rants_title: "Disgruntled Tweets & Memes",
    stat_rants_desc: "Active grievance venting on social media to keep administrative clerks thoroughly annoyed.",
    stat_members_val: "REGISTERED MEMBERS",
    stat_complaints_val: "VAULT COMPLAINTS FILED",

    // Gallery / Propaganda
    gallery_eyebrow: "Visual Propaganda",
    gallery_title: "Swarm Action Posters",
    gallery_desc: "Official campaign materials printed at our local underground presses. Download, print, and paste them in your neighborhood to spread the word of the swarm.",
    poster_002_kicker: "PROTEST / RALLY",
    poster_002_title: '"You Cannot Squash A Swarm"',
    poster_002_desc: "Our official Mirzapur wing's launch poster. Features the resilient cockroach standing tall against administrative pressure.",
    poster_003_kicker: "DISCUSSION / DEBATE",
    poster_003_title: '"Tea Stall Summit"',
    poster_003_desc: "Panoramic graphic showcasing CJP members gathering for policy debates and chai across local stalls in the district.",

    // FAQ Section
    faq_title: "Chronic Queries",
    faq_eyebrow: "Grievance Support",
    faq_desc: "Clear answers to questions you never asked. Read carefully—we will not repeat them during our tea breaks.",
    faq_q1: "How lazy do I need to be to qualify for CJP membership?",
    faq_a1: "If you got out of bed, navigated to this site, and read this query, you are already borderline overqualified. Do not worry—our wing provides remedial laziness classes. As long as you can delay chores and scroll memes for 4 hours daily, you qualify.",
    faq_q2: "Where do my CJP membership fees and donations go?",
    faq_a2: "Primarily to fund high-speed mobile internet packs for our core committee so they can scroll Twitter (X) and make political memes. The remainder is strictly allocated to the 'Chai & Samosa' reserve at local tea stalls in Mirzapur.",
    faq_q3: "Why is the party symbol a Cockroach?",
    faq_a3: "Because just like the common Indian citizen, cockroaches can survive absolutely anything—nuclear fallout, massive administrative delays, high tax slabs, and economic crushes—all while receiving zero help from the top. We are resilient, unstoppable, and extremely stubborn.",
    faq_q4: "Does CJP have a corporate sponsor?",
    faq_a4: "No corporation has a budget lazy enough to sponsor us. We are proud to declare a total corporate funding of exactly 0.00 INR. We are funded purely by the raw, mathematical, unedited frustration of the common public.",
    faq_q5: "Is CJP an officially registered political party?",
    faq_a5: "We would have registered it, but the registration clerk's office was on a tea break when we went, and going back there felt like too much physical labor. We'll try again next season, or probably never.",

    // Complaints Wall
    wall_eyebrow: "Mirzapur Division Bulletin",
    wall_title_1: "Swarm Wall of",
    wall_title_italic: "Complaints",
    wall_desc: "Every grievance is filed anonymously. Below lies the raw, unedited, mathematical frustration of the citizens of Mirzapur against administrative lethargy.",
    wall_loading: "LOADING VAULT ENTRIES...",
    wall_empty: "THE SWARM IS SILENT. NO COMPLAINTS FILED YET. BE THE FIRST TO VENT!",
    wall_approved: "CJP APPROVED",
    wall_anonymous: "ANONYMOUS SWARMER",
    wall_just_now: "JUST NOW",

    // Footer
    footer_disclaimer_title: "SATIRICAL STATEMENT",
    footer_disclaimer_text: "The Cockroach Janta Party (CJP-M) is a purely satirical political movement. We do not contest real elections, nor do we promise real progress. Complaining is our only objective. All rights reserved in administrative inertia.",
    footer_copyright: "© 2026 Cockroach Janta Party · All rants reserved.",
    footer_satire: "⚠ A work of satire",
    footer_blurb: "A political party for the lazy, the unemployed, and the chronically correct. Headquartered wherever the wifi works.",
    footer_party: "The Party",
    footer_get_involved: "Get involved",
    footer_volunteer: "Volunteer",
    footer_follow: "Follow",
    footer_privacy: "Privacy",
    footer_press: "Press",

    // Form inputs and buttons
    btn_submit_complaint: "Vent Your Frustration",
    btn_submit_join: "Register as Swarmer",
    btn_download_card: "Download Card (PNG)",
    btn_back_home: "Back to Home",
    btn_vent_here: "Vent Your Frustrations Here",
    btn_view_vault: "View Complaint Vault",
    btn_generate_card: "Generate custom 1:1 printable member card.",
    btn_join_swarm: "Join the Swarm",
    btn_file_complaint: "File a Complaint",

    // Eligibility Page
    elig_eyebrow: "Swarm Quality Standards",
    elig_title: "Are you Eligible?",
    elig_desc: "Before joining the Cockroach Janta Party, please verify that you satisfy our four (4) core criteria.",
    elig_req_01_num: "REQ / 01",
    elig_req_01_title: "Unemployed",
    elig_req_01_desc: "By force, by choice, or by principle. We don't ask.",
    elig_req_02_num: "REQ / 02",
    elig_req_02_title: "Lazy",
    elig_req_02_desc: "Physically only. The brain may continue to spiral.",
    elig_req_03_num: "REQ / 03",
    elig_req_03_title: "Chronically online",
    elig_req_03_desc: "Minimum 11 hours a day, including bathroom breaks.",
    elig_req_04_num: "REQ / 04",
    elig_req_04_title: "Can rant professionally",
    elig_req_04_desc: "As long as the content is sharp, honest, and points at something that actually matters.",
    elig_cta_fine: "Membership is free, lifelong, and revocable only by you.",
    elig_item_1: "You have spent at least 4 hours scrolling social media today.",
    elig_item_2: "Your immediate response to any task is: 'It'll happen, what's the rush?'.",
    elig_item_3: "You can consume 5+ cups of tea daily while debating geopolitics at the local tea stall.",
    elig_item_4: "You have never successfully woken up at 5:00 AM in your entire life.",
    elig_item_5: "You are mathematically convinced that doing nothing is better than doing something.",

    // Vision & Manifesto
    vision_eyebrow: "Chapter One",
    vision_title: "Our Movement's Vision.",
    vision_desc: "We are not here to set up another PM CARES, holiday in Davos on the taxpayer's salary slip, or rebrand corruption as 'strategic spending.' We are here to ask — loudly, repeatedly, in writing — where the money went.",
    vision_mission_label: "Our Mission",
    vision_mission_desc: "Build a party for the young people who keep getting called lazy, chronically online, and — most recently — cockroaches. That's it. That's the mission. The rest is satire.",
    vision_caption_title: "Rally · The People's Banner",
    
    manifesto_eyebrow: "The Five Demands",
    manifesto_title: "The Manifesto.",
    manifesto_desc: "Read it once. Read it twice. Then send it to someone who needs to read it.",
    manifesto_d1: "If the CJP comes in power, no Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward.",
    manifesto_d2: "If any legit vote is deleted, whether in a CJP or opposition-ruled state, the CEC shall be arrested under UAPA, as taking away voting rights of citizens is no less than terrorism.",
    manifesto_d3: "Women shall receive 50% reservation, not 33%, without increasing the strength of Parliament. Additionally, 50% of all Cabinet positions shall be reserved for women.",
    manifesto_d4: "All media houses owned by Ambani and Adani shall have their licences cancelled to make way for truly independent media. Bank accounts of Godi media anchors shall be investigated.",
    manifesto_d5: "Any MLA or MP who defects from one party to another shall be barred from contesting elections — and from holding any public office — for a period of 20 years.",

    // Contact
    contact_title: "Connect with us.",
    contact_eyebrow: "Get in touch",
    contact_desc: "Want to join, volunteer, complain, or send a meme? Use the form. We read everything. We reply to most things.",
    contact_hq_title: "HQ & Directory",
    contact_hq_val: "Wherever the wifi works.",
    contact_founder: "Founder & Convenor",
    contact_email: "Email",
    contact_press: "Press",
    contact_hq: "Headquarters",
    contact_founder_title: "Founder",
    contact_details_label: "Details",

    // Forms
    form_label_name: "Your Name *",
    form_label_email: "Your Email / Gmail Address *",
    form_label_phone: "Phone / मोबाइल नंबर *",
    form_label_complaint: "Frustration / Complaint Details (नाम/काम/दाम) *",
    form_placeholder_name: "e.g. Abhijeet Dipke",
    form_placeholder_email: "e.g. swarm@gmail.com",
    form_placeholder_phone: "e.g. 9876543210",
    form_placeholder_complaint: "State your complaint or absolute frustration with the current government. Unemployed standards, inflation, corruption, general laziness limits... vent it all!",
    form_error_name: "Please enter your name.",
    form_error_email: "Please enter a valid Gmail / Email address.",
    form_error_phone: "Please enter a valid phone number.",
    form_error_complaint: "Please tell us your frustration (minimum 10 characters).",
    form_error_submit: "Failed to register complaint. The system is currently too lazy. Try again.",
    
    // Receipt Labels
    receipt_eyebrow: "Venting Registered",
    receipt_title: "Frustration Logged.",
    receipt_desc: "Thank you for speaking up. Your official complaint receipt is generated below.",
    receipt_header: "Official Rant Record",
    receipt_ticket_id: "TICKET ID:",
    receipt_filed_by: "FILED BY:",
    receipt_target: "TARGET ENTITY:",
    receipt_target_val: "CURRENT GOVT",
    receipt_date: "DATE LOGGED:",
    receipt_status: "STATUS: PIPED TO ACTIVE ACTION BUREAU",
    receipt_fine: "Disclaimer: Venting keeps the swarm resilient. Your rant has been mathematically parsed and safely stored in the Swarm Vault.",
    receipt_btn_print: "Print Receipt",
    receipt_btn_another: "File Another Complaint",

    // Join Success
    join_success_eyebrow: "Success! Registration Complete",
    join_success_title: "Welcome to the Swarm!",
    join_success_desc: "Your custom 1:1 Swarm Member Card has been generated below.",
    join_success_btn: "Download Card (PNG)",
    join_success_another: "Register Another",
    join_form_title: "Request swarmer status.",
    join_form_btn: "GENERATE MEMBER CARD & REGISTER",
    join_form_btn_loading: "STORING RECORD & GENERATING...",
    join_form_fine: "* Fields are strictly required. By submitting this form, you certify under oath that you are indeed lazy, chronically online, and disgruntled."
  },
  hi: {
    // Navigation
    nav_vision: "विज़न",
    nav_manifesto: "घोषणापत्र",
    nav_eligibility: "पात्रता",
    nav_contact: "संपर्क",
    nav_join: "झुंड में शामिल हों",
    nav_complaints: "शिकायत दर्ज करें",
    nav_home: "होम",

    // Hero Section
    hero_eyebrow: "आधिकारिक मिर्ज़ापुर जिला विंग",
    hero_title_1: "आलसियों और",
    hero_title_italic: "बेरोजगारों की बुलंद आवाज़।",
    hero_slogan: "तुम झुंड को कुचल नहीं सकते",
    hero_desc: "पूर्वांचल के क्रॉनिकली ऑनलाइन, पूरी तरह से निरुत्साहित और बेहद आलसी बेरोजगार नागरिकों के अधिकारों की लड़ाई। बिना किसी कॉर्पोरेट प्रायोजक, अनंत धैर्य और शून्य प्रगति के साथ।",
    hero_cta_complaint: "भड़ास निकालें",
    hero_cta_join: "सदस्य बनें",
    hero_stamp: "मिर्ज़ापुर झुंड",

    // Stats Section
    stats_title: "आलस का हमारा डैशबोर्ड",
    stats_eyebrow: "विभागीय आंकड़े",
    stats_desc: "जबकि अन्य दल विकास के बड़े-बड़े झूठे दावे पेश करते हैं, हम गणितीय पारदर्शिता में विश्वास करते हैं। हमारी सामूहिक निष्क्रियता के वास्तविक संकेतकों को देखें।",
    stat_laziness_val: "९९.९%",
    stat_laziness_title: "झुंड आलस गुणांक",
    stat_laziness_desc: "टालमटोल का वैज्ञानिक रूप से मापा गया गुणांक। हम तभी हिलते हैं जब बिल्कुल पानी सिर से ऊपर चला जाए।",
    stat_chai_val: "१४,८९०+",
    stat_chai_title: "पिए गए चाय के कप",
    stat_chai_desc: "मिर्ज़ापुर जिले में स्थानीय ठेलों पर गर्म नीतिगत बहसों को जारी रखने के लिए आवश्यक दैनिक औसत ईंधन।",
    stat_funds_val: "०.०० रुपये",
    stat_funds_title: "प्राप्त कॉर्पोरेट फंडिंग",
    stat_funds_desc: "गर्व से शत-प्रतिशत किसी भी कॉर्पोरेट प्रभाव से मुक्त। पूरी तरह से शुद्ध मध्यमवर्गीय हताशा।",
    stat_rants_val: "८,४५०+",
    stat_rants_title: "ट्विटर पर किए गए रेंट्स और मीम्स",
    stat_rants_desc: "प्रशासनिक बाबूओं को अच्छी तरह से तंग रखने के लिए सोशल मीडिया पर सक्रिय रूप से किया गया भड़ास प्रदर्शन।",
    stat_members_val: "पंजीकृत सदस्य",
    stat_complaints_val: "दर्ज शिकायत तिजोरी",

    // Gallery / Propaganda
    gallery_eyebrow: "दृश्य प्रचार (प्रोपेगैंडा)",
    gallery_title: "झुंड के एक्शन पोस्टर्स",
    gallery_desc: "हमारी स्थानीय भूमिगत प्रेस में मुद्रित आधिकारिक अभियान सामग्री। झुंड के संदेश को फैलाने के लिए इन्हें डाउनलोड करें, प्रिंट करें और अपने आस-पास चिपकाएं।",
    poster_002_kicker: "विरोध / रैली",
    poster_002_title: '"तुम झुंड को कुचल नहीं सकते"',
    poster_002_desc: "हमारी आधिकारिक मिर्ज़ापुर शाखा का लॉन्च पोस्टर। प्रशासनिक दबाव के खिलाफ मजबूती से खड़ा जुझारू कॉकरोच।",
    poster_003_kicker: "नीतिगत चर्चा / बहस",
    poster_003_title: '"चाय की टपरी शिखर सम्मेलन"',
    poster_003_desc: "जिले की स्थानीय ठेलों पर नीतिगत चर्चा और चाय के लिए एकत्रित होते सीजेपी सदस्यों को दर्शाता चित्र।",

    // FAQ Section
    faq_title: "क्रॉनिक प्रश्न (FAQ)",
    faq_eyebrow: "शिकायत सहायता",
    faq_desc: "उन सवालों के स्पष्ट जवाब जो आपने कभी नहीं पूछे। ध्यान से पढ़ें—हम चाय के ब्रेक के दौरान इन्हें नहीं दोहराएंगे।",
    faq_q1: "सीजेपी सदस्य बनने के लिए कितना बड़ा आलसी होना ज़रूरी है?",
    faq_a1: "अगर आप बिस्तर से उठकर इस वेबसाइट तक आ गए हैं और इस सवाल को पढ़ रहे हैं, तो आप पहले से ही ज़रूरत से ज़्यादा योग्य (ओवरक्वालिफाइड) होने की कगार पर हैं। चिंता न करें—हमारी शाखा आलस बढ़ाने के लिए विशेष सुधारात्मक कक्षाएं चलाती है। जब तक आप अपने काम टाल सकते हैं और रोज़ कम से कम ४ घंटे सिर्फ मीम्स स्क्रॉल कर सकते हैं, आप पूरी तरह पात्र हैं।",
    faq_q2: "मेरी सीजेपी सदस्यता फ़ीस और चंदा कहाँ जाता है?",
    faq_a2: "मुख्य रूप से हमारी कोर कमेटी के सदस्यों के लिए हाई-स्पीड मोबाइल इंटरनेट पैक रिचार्ज कराने में, ताकि वे ट्विटर (X) पर दिन-रात स्क्रॉल कर सकें और ताबड़तोड़ राजनीतिक मीम्स बना सकें। बची हुई राशि मिर्ज़ापुर की स्थानीय चाय की टपरियों पर 'चाय और समोसा रिज़र्व फंड' में बिना किसी ऑडिट के सीधे जमा कर दी जाती है।",
    faq_q3: "पार्टी का चुनाव चिन्ह कॉकरोच ही क्यों है?",
    faq_a3: "क्योंकि बिल्कुल एक आम भारतीय नागरिक की तरह, कॉकरोच भी जीवन में कुछ भी झेल सकता है—परमाणु विस्फोट, भारी प्रशासनिक लेटलतीफ़ी, ऊंचे टैक्स स्लैब और आर्थिक मंदी—और वो भी बिना किसी सरकारी मदद के। हम बेहद जुझारू, ढीठ, अटूट और अत्यधिक जिद्दी हैं।",
    faq_q4: "क्या सीजेपी का कोई कॉर्पोरेट प्रायोजक (स्पॉन्सर) है?",
    faq_a4: "दुनिया की किसी भी कंपनी के पास हमारे जैसी सुस्ती को प्रायोजित करने के लिए ज़रूरी बजट या सब्र नहीं है। हमें यह घोषणा करते हुए गर्व हो रहा है कि हमारा कुल कॉर्पोरेट फंड ठीक ०.०० रुपये है। हमें किसी अरबपति से नहीं, बल्कि आम जनता के शुद्ध, गणितीय और बिना किसी फ़िल्टर के निकले गुस्से और हताशा से ईंधन मिलता है।",
    faq_q5: "क्या सीजेपी एक आधिकारिक तौर पर पंजीकृत राजनीतिक दल है?",
    faq_a5: "हम इसे पंजीकृत (रजिस्टर) करा ही लेते, पर जब हम सरकारी दफ़्तर गए तो बाबू चाय पीने गए थे। दोबारा धूप में उतनी दूर जाना हमारे लिए अत्यधिक शारीरिक श्रम का काम था। हम अगले चुनावी मौसम में फिर कोशिश करेंगे, या हो सकता है कि कभी न करें।",

    // Complaints Wall
    wall_eyebrow: "मिर्ज़ापुर मंडल बुलेटिन",
    wall_title_1: "शिकायतों की",
    wall_title_italic: "शिकायत दीवार",
    wall_desc: "हर शिकायत गुमनाम रूप से दर्ज की जाती है। नीचे प्रशासनिक सुस्ती के खिलाफ मिर्ज़ापुर के नागरिकों की बिना संपादन की, गणितीय निराशा मौजूद है।",
    wall_loading: "डेटाबेस से शिकायतें लोड हो रही हैं...",
    wall_empty: "झुंड अभी शांत है। अभी तक कोई शिकायत दर्ज नहीं की गई है। भड़ास निकालने वाले पहले व्यक्ति बनें!",
    wall_approved: "सीजेपी द्वारा स्वीकृत",
    wall_anonymous: "गुमनाम सदस्य",
    wall_just_now: "अभी-अभी",

    // Footer
    footer_disclaimer_title: "व्यंग्यात्मक घोषणा पत्र",
    footer_disclaimer_text: "कॉकरोच जनता पार्टी (सीजेपी-एम) विशुद्ध रूप से एक व्यंग्यात्मक राजनीतिक आंदोलन है। हम वास्तविक चुनाव नहीं लड़ते हैं, न ही हम वास्तविक प्रगति का वादा करते हैं। शिकायत करना ही हमारा एकमात्र उद्देश्य है। प्रशासनिक जड़ता में सभी अधिकार सुरक्षित हैं।",
    footer_copyright: "© २०२६ कॉकरोच जनता पार्टी · मिर्ज़ापुर शाखा · क्रॉनिकली आलसी",
    footer_satire: "⚠ एक व्यंग्यात्मक रचना",
    footer_blurb: "आलसियों, बेरोजगारों और क्रॉनिकली सही लोगों के लिए एक राजनीतिक दल। मुख्यालय जहाँ भी वाई-फाई काम करे।",
    footer_party: "दल",
    footer_get_involved: "शामिल हों",
    footer_volunteer: "स्वयंसेवक",
    footer_follow: "फॉलो करें",
    footer_privacy: "गोपनीयता",
    footer_press: "प्रेस",

    // Form inputs and buttons
    btn_submit_complaint: "अपनी भड़ास निकालें",
    btn_submit_join: "झुंड में शामिल हों",
    btn_download_card: "कार्ड डाउनलोड करें (PNG)",
    btn_back_home: "मुख्य पृष्ठ पर जाएं",
    btn_vent_here: "यहाँ अपनी भड़ास निकालें",
    btn_view_vault: "शिकायत तिजोरी देखें",
    btn_generate_card: "एक कस्टमाइज्ड १:१ प्रिंट करने योग्य सदस्य कार्ड बनाएं।",
    btn_join_swarm: "झुंड में शामिल हों",
    btn_file_complaint: "शिकायत दर्ज करें",

    // Eligibility Page
    elig_eyebrow: "झुंड गुणवत्ता मानक",
    elig_title: "क्या आप पात्र हैं?",
    elig_desc: "कॉकरोच जनता पार्टी में शामिल होने के लिए अपनी ऊर्जा खर्च करने से पहले, कृपया जांच लें कि आप हमारे इन चार (४) मुख्य मापदंडों पर खरे उतरते हैं या नहीं।",
    elig_req_01_num: "पात्रता / ०१",
    elig_req_01_title: "बेरोजगार",
    elig_req_01_desc: "मजबूरी से, मर्जी से, या सिद्धांतों के कारण। हम सवाल नहीं पूछते।",
    elig_req_02_num: "पात्रता / ०२",
    elig_req_02_title: "आलसी",
    elig_req_02_desc: "सिर्फ शारीरिक रूप से। दिमाग का ख्याली पुलाव पकाना जारी रह सकता है।",
    elig_req_03_num: "पात्रता / ०३",
    elig_req_03_title: "क्रॉनिकली ऑनलाइन",
    elig_req_03_desc: "दिन में कम से कम ११ घंटे, जिसमें बाथरूम ब्रेक भी शामिल हैं।",
    elig_req_04_num: "पात्रता / ०४",
    elig_req_04_title: "पेशेवर रूप से भड़ास निकालना",
    elig_req_04_desc: "जब तक आपकी भड़ास तीखी, ईमानदार और किसी ऐसे मुद्दे पर हो जो सचमुच मायने रखता है।",
    elig_cta_fine: "सदस्यता पूरी तरह से मुफ्त, आजीवन है, और इसे केवल आपके द्वारा ही रद्द किया जा सकता है।",
    elig_item_1: "आपने आज सोशल मीडिया स्क्रॉल करने में कम से कम ४ घंटे बिताए हैं।",
    elig_item_2: "किसी भी काम पर आपका त्वरित उत्तर होता है: 'हो जाएगा, क्या जल्दी है?'।",
    elig_item_3: "आप स्थानीय चाय की टपरी पर भू-राजनीति पर बहस करते हुए रोज़ ५+ कप चाय पी सकते हैं।",
    elig_item_4: "आप अपने पूरे जीवन में सुबह ५:०० बजे कभी सफलतापूर्वक सोकर नहीं उठे हैं।",
    elig_item_5: "आप गणितीय रूप से आश्वस्त हैं कि कुछ करने से बेहतर कुछ न करना है।",

    // Vision & Manifesto
    vision_eyebrow: "अध्याय एक",
    vision_title: "हमारे आंदोलन का विज़न।",
    vision_desc: "हम यहाँ कोई नया पीएम केयर्स फंड (PM CARES) बनाने, करदाताओं के पैसों पर दावोस में छुट्टियां मनाने या भ्रष्टाचार को 'रणनीतिक निवेश' का नाम देकर चमकाने नहीं आए हैं। हम यहाँ लिखित रूप में बार-बार और जोर-शोर से सिर्फ एक ही सवाल पूछने आए हैं—कि हमारा पैसा कहाँ गया?",
    vision_mission_label: "हमारा मिशन",
    vision_mission_desc: "उन युवाओं के लिए एक मजबूत मंच खड़ा करना जिन्हें लगातार आलसी, क्रॉनिकली ऑनलाइन और—हाल ही में—कॉकरोच (तिलचट्टा) कहकर चिढ़ाया जाता है। बस यही हमारा परम मिशन है। बाकी सब तो व्यंग्य है।",
    vision_caption_title: "रैली · जनता का बैनर",

    manifesto_eyebrow: "पांच सूत्रीय मांगें",
    manifesto_title: "घोषणापत्र।",
    manifesto_desc: "इसे एक बार पढ़ें। इसे दो बार पढ़ें। फिर इसे किसी ऐसे व्यक्ति को भेजें जिसे इसे पढ़ने की आवश्यकता है।",
    manifesto_d1: "यदि सीजेपी सत्ता में आती है, तो किसी भी सेवानिवृत्त मुख्य न्यायाधीश (CJI) को सेवानिवृत्ति के बाद इनाम के रूप में राज्यसभा की सीट नहीं दी जाएगी।",
    manifesto_d2: "यदि किसी भी वैध मतदाता का वोट सूची से काटा जाता है, चाहे वह सीजेपी का राज्य हो या विपक्ष का, तो मुख्य चुनाव आयुक्त (CEC) को सीधे UAPA के तहत गिरफ्तार किया जाएगा, क्योंकि नागरिकों के मतदान के अधिकार को छीनना किसी आतंकवाद से कम नहीं है।",
    manifesto_d3: "संसद में महिलाओं को ३३% नहीं, बल्कि पूरे ५०% का आरक्षण दिया जाएगा और वह भी संसद की कुल सीटें बढ़ाए बिना। इसके अलावा, कैबिनेट के भी ५०% मंत्री पद महिलाओं के लिए आरक्षित रहेंगे।",
    manifesto_d4: "अंबानी और अडानी के स्वामित्व वाले सभी मीडिया घरानों के लाइसेंस तत्काल प्रभाव से रद्द किए जाएंगे ताकि निष्पक्ष और स्वतंत्र मीडिया के लिए रास्ता साफ हो सके। साथ ही, गोदी मीडिया के मुख्य एंकरों के बैंक खातों की गहन जांच की जाएगी।",
    manifesto_d5: "दल-बदल (Defection) करने वाले किसी भी विधायक या सांसद को अगले २० वर्षों तक चुनाव लड़ने और किसी भी सार्वजनिक या प्रशासनिक पद को संभालने से पूरी तरह प्रतिबंधित कर दिया जाएगा।",

    // Contact
    contact_title: "हमसे संपर्क करें।",
    contact_eyebrow: "जुड़ें हमारे साथ",
    contact_desc: "शामिल होना चाहते हैं, स्वयंसेवा करना चाहते हैं, शिकायत करना चाहते हैं या मीम भेजना चाहते हैं? फॉर्म का उपयोग करें। हम सब कुछ पढ़ते हैं। हम अधिकांश चीज़ों का उत्तर देते हैं।",
    contact_hq_title: "मुख्यालय और निर्देशिका",
    contact_hq_val: "जहाँ भी वाई-फाई काम करे।",
    contact_founder: "संस्थापक और संयोजक",
    contact_email: "ईमेल",
    contact_press: "प्रेस",
    contact_hq: "मुख्यालय",
    contact_founder_title: "संस्थापक",
    contact_details_label: "विवरण",

    // Forms
    form_label_name: "आपका नाम *",
    form_label_email: "आपका ईमेल / जीमेल पता *",
    form_label_phone: "मोबाइल नंबर *",
    form_label_complaint: "शिकायत का विस्तृत ब्योरा (नाम/काम/दाम) *",
    form_placeholder_name: "उदा. अभिजीत दिपके",
    form_placeholder_email: "उदा. swarm@gmail.com",
    form_placeholder_phone: "उदा. 9876543210",
    form_placeholder_complaint: "वर्तमान सरकार के प्रति अपनी भड़ास या शिकायत लिखें। बेरोजगारी, महंगाई, भ्रष्टाचार, प्रशासनिक सुस्ती... जो है सब निकालें!",
    form_error_name: "कृपया अपना नाम दर्ज करें।",
    form_error_email: "कृपया एक वैध ईमेल पता दर्ज करें।",
    form_error_phone: "कृपया एक वैध मोबाइल नंबर दर्ज करें।",
    form_error_complaint: "कृपया अपनी भड़ास लिखें (कम से कम १० अक्षर)।",
    form_error_submit: "पंजीकरण में विफल। सिस्टम फ़िलहाल बहुत आलसी महसूस कर रहा है। पुनः प्रयास करें।",

    // Receipt Labels
    receipt_eyebrow: "भड़ास पंजीकृत",
    receipt_title: "भड़ास दर्ज की गई।",
    receipt_desc: "आवाज़ उठाने के लिए धन्यवाद। आपकी आधिकारिक शिकायत रसीद नीचे तैयार हो गई है।",
    receipt_header: "आधिकारिक भड़ास रिकॉर्ड",
    receipt_ticket_id: "टिकट आईडी:",
    receipt_filed_by: "शिकायतकर्ता:",
    receipt_target: "निशाना:",
    receipt_target_val: "वर्तमान सरकार",
    receipt_date: "दर्ज करने की तिथि:",
    receipt_status: "स्थिति: सक्रिय कार्रवाई ब्यूरो को प्रेषित",
    receipt_fine: "अस्वीकरण: भड़ास निकालने से झुंड मजबूत रहता है। आपकी शिकायत को गणितीय रूप से पार्स करके सुरक्षित रूप से स्टोर कर लिया गया है।",
    receipt_btn_print: "रसीद प्रिंट करें",
    receipt_btn_another: "एक और शिकायत दर्ज करें",

    // Join Success
    join_success_eyebrow: "सफलता! पंजीकरण पूरा हुआ",
    join_success_title: "झुंड में आपका स्वागत है!",
    join_success_desc: "आपका कस्टमाइज्ड १:१ झुंड सदस्यता कार्ड नीचे तैयार कर दिया गया है।",
    join_success_btn: "कार्ड डाउनलोड करें (PNG)",
    join_success_another: "दूसरा सदस्य जोड़ें",
    join_form_title: "सदस्यता के लिए अनुरोध करें।",
    join_form_btn: "सदस्यता कार्ड बनाएं और रजिस्टर करें",
    join_form_btn_loading: "डेटा स्टोर और कार्ड तैयार हो रहा है...",
    join_form_fine: "* सभी फ़ील्ड आवश्यक हैं। इस फ़ॉर्म को जमा करके, आप शपथ लेते हैं कि आप वास्तव में आलसी, क्रॉनिकली ऑनलाइन और हताश हैं।"
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  // Fetch initial language on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cjp_language");
      if (saved === "en" || saved === "hi") {
        setLanguage(saved);
      }
    } catch (e) {
      console.warn("Could not read language from localStorage:", e);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
    try {
      localStorage.setItem("cjp_language", nextLang);
    } catch (e) {
      console.warn("Could not write language to localStorage:", e);
    }
  };

  const t = (key) => {
    const dict = dictionary[language] || dictionary.en;
    return dict[key] || dictionary.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
