/* ============================================================
   SumanTV Story — Data: i18n (EN/TE/HI/TA) + Themes
   Attaches window.I18N, window.LANGS, window.THEMES
   ============================================================ */
(function () {
  window.LANGS = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'te', label: 'Telugu',  native: 'తెలుగు' },
    { code: 'hi', label: 'Hindi',   native: 'हिन्दी' },
    { code: 'ta', label: 'Tamil',   native: 'தமிழ்' },
  ];

  // Only high-impact strings are localized; the rest gracefully fall back to EN.
  const T = {
    brand_by:        { en: 'by SumanTV', te: 'SumanTV నుండి', hi: 'SumanTV द्वारा', ta: 'SumanTV வழங்கல்' },
    hero_eyebrow:    { en: "India's family keepsake studio", te: 'కుటుంబ జ్ఞాపికల స్టూడియో', hi: 'परिवार की यादों का स्टूडियो', ta: 'குடும்ப நினைவுகளின் ஸ்டுடியோ' },
    hero_title:      { en: 'Turn your family photos into a movie.', te: 'మీ కుటుంబ ఫోటోలను సినిమాగా మార్చండి.', hi: 'अपने परिवार की तस्वीरों को फ़िल्म बनाएं।', ta: 'உங்கள் குடும்பப் புகைப்படங்களை திரைப்படமாக மாற்றுங்கள்.' },
    hero_sub:        { en: 'A cinematic keepsake made from just three photos — with music, voice and your family at the heart. Ready in minutes.', te: 'కేవలం మూడు ఫోటోలతో — సంగీతం, స్వరం, మీ కుటుంబంతో రూపొందిన సినిమాటిక్ జ్ఞాపిక. నిమిషాల్లో సిద్ధం.', hi: 'सिर्फ़ तीन तस्वीरों से बनी एक सिनेमाई यादगार — संगीत, आवाज़ और आपका परिवार। मिनटों में तैयार।', ta: 'வெறும் மூன்று படங்களில் — இசை, குரல், உங்கள் குடும்பத்துடன் உருவான திரைப்பட நினைவுப் பரிசு. நிமிடங்களில் தயார்.' },
    cta_create:      { en: 'Create your story', te: 'మీ కథను సృష్టించండి', hi: 'अपनी कहानी बनाएं', ta: 'உங்கள் கதையை உருவாக்குங்கள்' },
    watch_sample:    { en: 'Watch a sample', te: 'నమూనా చూడండి', hi: 'नमूना देखें', ta: 'மாதிரியைப் பாருங்கள்' },
    how_title:       { en: 'How it works', te: 'ఇది ఎలా పనిచేస్తుంది', hi: 'यह कैसे काम करता है', ta: 'இது எப்படி வேலை செய்கிறது' },
    how_1:           { en: 'Pick a theme', te: 'థీమ్ ఎంచుకోండి', hi: 'थीम चुनें', ta: 'தீம் தேர்வு செய்யுங்கள்' },
    how_2:           { en: 'Upload 3 photos', te: '3 ఫోటోలు అప్‌లోడ్ చేయండి', hi: '3 तस्वीरें अपलोड करें', ta: '3 படங்களைப் பதிவேற்றுங்கள்' },
    how_3:           { en: 'Get your video', te: 'మీ వీడియోను పొందండి', hi: 'अपना वीडियो पाएं', ta: 'உங்கள் வீடியோவைப் பெறுங்கள்' },
    how_1d:          { en: 'Choose from festive, wedding & birthday stories.', te: 'పండుగ, వివాహ, పుట్టినరోజు కథల నుండి ఎంచుకోండి.', hi: 'त्योहार, शादी और जन्मदिन की कहानियों से चुनें।', ta: 'பண்டிகை, திருமணம், பிறந்தநாள் கதைகளில் தேர்ந்தெடுங்கள்.' },
    how_2d:          { en: 'Clear, front-facing, well-lit family photos.', te: 'స్పష్టమైన, ముఖం ఎదురుగా, మంచి వెలుతురు ఫోటోలు.', hi: 'साफ़, सामने से, अच्छी रोशनी वाली तस्वीरें।', ta: 'தெளிவான, நேர்முக, நல்ல வெளிச்சப் படங்கள்.' },
    how_3d:          { en: 'Delivered to WhatsApp & email in minutes.', te: 'వాట్సాప్ & ఇమెయిల్‌కు నిమిషాల్లో అందుతుంది.', hi: 'व्हाट्सएप और ईमेल पर मिनटों में।', ta: 'வாட்ஸ்அப் & மின்னஞ்சலில் நிமிடங்களில்.' },
    themes_title:    { en: 'Stories for every occasion', te: 'ప్రతి సందర్భానికీ కథలు', hi: 'हर मौके के लिए कहानियाँ', ta: 'ஒவ்வொரு நிகழ்விற்கும் கதைகள்' },
    see_all:         { en: 'See all themes', te: 'అన్ని థీమ్‌లు', hi: 'सभी थीम देखें', ta: 'அனைத்து தீம்களும்' },
    trust_title:     { en: 'Safe, private, and made with love', te: 'సురక్షితం, గోప్యం, ప్రేమతో రూపొందించబడింది', hi: 'सुरक्षित, निजी, और प्यार से बना', ta: 'பாதுகாப்பானது, தனிப்பட்டது, அன்புடன் உருவானது' },
    trust_1:         { en: 'Photos auto-deleted after 7 days', te: '7 రోజుల తర్వాత ఫోటోలు తొలగించబడతాయి', hi: '7 दिनों बाद तस्वीरें हट जाती हैं', ta: '7 நாட்களுக்குப் பின் படங்கள் நீக்கப்படும்' },
    trust_2:         { en: 'Never used to train AI', te: 'AI శిక్షణకు ఎప్పుడూ వాడబడవు', hi: 'AI प्रशिक्षण के लिए कभी नहीं', ta: 'AI பயிற்சிக்கு ஒருபோதும் இல்லை' },
    trust_3:         { en: 'Secure UPI & card payments', te: 'సురక్షిత UPI & కార్డ్ చెల్లింపులు', hi: 'सुरक्षित UPI और कार्ड भुगतान', ta: 'பாதுகாப்பான UPI & கார்டு கட்டணம்' },
    gallery_title:   { en: 'Choose a story theme', te: 'కథ థీమ్ ఎంచుకోండి', hi: 'कहानी थीम चुनें', ta: 'கதை தீம் தேர்வு செய்யுங்கள்' },
    filter_occasion: { en: 'Occasion', te: 'సందర్భం', hi: 'अवसर', ta: 'நிகழ்வு' },
    filter_lang:     { en: 'Language', te: 'భాష', hi: 'भाषा', ta: 'மொழி' },
    all:             { en: 'All', te: 'అన్నీ', hi: 'सभी', ta: 'அனைத்தும்' },
    select:          { en: 'Select', te: 'ఎంచుకోండి', hi: 'चुनें', ta: 'தேர்ந்தெடு' },
    selected:        { en: 'Selected', te: 'ఎంచుకున్నారు', hi: 'चुना गया', ta: 'தேர்ந்தெடுக்கப்பட்டது' },
    upload_title:    { en: 'Upload 3 photos', te: '3 ఫోటోలు అప్‌లోడ్ చేయండి', hi: '3 तस्वीरें अपलोड करें', ta: '3 படங்களைப் பதிவேற்றுங்கள்' },
    upload_guide:    { en: 'Clear, front-facing and well-lit photos make the most magical videos.', te: 'స్పష్టమైన, ముఖం ఎదురుగా, మంచి వెలుతురు ఫోటోలు అత్యంత అద్భుత వీడియోలను చేస్తాయి.', hi: 'साफ़, सामने से और अच्छी रोशनी वाली तस्वीरें सबसे जादुई वीडियो बनाती हैं।', ta: 'தெளிவான, நேர்முக, நல்ல வெளிச்சப் படங்கள் மிக அழகான வீடியோக்களை உருவாக்கும்.' },
    consent:         { en: 'I consent — my photos are auto-deleted after 7 days and never used to train AI.', te: 'నేను అంగీకరిస్తున్నాను — నా ఫోటోలు 7 రోజుల తర్వాత తొలగించబడతాయి, AI శిక్షణకు ఎప్పుడూ వాడబడవు.', hi: 'मैं सहमत हूँ — मेरी तस्वीरें 7 दिनों बाद हट जाती हैं और AI प्रशिक्षण के लिए कभी उपयोग नहीं होतीं।', ta: 'நான் ஒப்புக்கொள்கிறேன் — எனது படங்கள் 7 நாட்களில் நீக்கப்படும், AI பயிற்சிக்கு பயன்படுத்தப்படாது.' },
    continue_pay:    { en: 'Continue to payment', te: 'చెల్లింపుకు కొనసాగండి', hi: 'भुगतान जारी रखें', ta: 'கட்டணத்திற்குத் தொடரவும்' },
    checkout_title:  { en: 'Review & pay', te: 'సమీక్షించి చెల్లించండి', hi: 'समीक्षा करें और भुगतान करें', ta: 'மதிப்பாய்வு செய்து செலுத்துங்கள்' },
    order_summary:   { en: 'Order summary', te: 'ఆర్డర్ సారాంశం', hi: 'ऑर्डर सारांश', ta: 'ஆர்டர் சுருக்கம்' },
    your_details:    { en: 'Your details', te: 'మీ వివరాలు', hi: 'आपका विवरण', ta: 'உங்கள் விவரங்கள்' },
    full_name:       { en: 'Full name', te: 'పూర్తి పేరు', hi: 'पूरा नाम', ta: 'முழுப் பெயர்' },
    email:           { en: 'Email', te: 'ఇమెయిల్', hi: 'ईमेल', ta: 'மின்னஞ்சல்' },
    whatsapp:        { en: 'WhatsApp number', te: 'వాట్సాప్ నంబర్', hi: 'व्हाट्सएप नंबर', ta: 'வாட்ஸ்அப் எண்' },
    pay_method:      { en: 'Payment method', te: 'చెల్లింపు విధానం', hi: 'भुगतान का तरीका', ta: 'கட்டண முறை' },
    pay_now:         { en: 'Pay securely', te: 'సురక్షితంగా చెల్లించండి', hi: 'सुरक्षित भुगतान करें', ta: 'பாதுகாப்பாக செலுத்துங்கள்' },
    total:           { en: 'Total', te: 'మొత్తం', hi: 'कुल', ta: 'மொத்தம்' },
    proc_title:      { en: 'Bringing your story to life', te: 'మీ కథకు ప్రాణం పోస్తున్నాం', hi: 'आपकी कहानी को जीवंत बना रहे हैं', ta: 'உங்கள் கதைக்கு உயிரூட்டுகிறோம்' },
    proc_notify:     { en: "We'll notify you on WhatsApp & email the moment it's ready.", te: 'సిద్ధమైన వెంటనే వాట్సాప్ & ఇమెయిల్‌లో తెలియజేస్తాం.', hi: 'तैयार होते ही व्हाट्सएप और ईमेल पर सूचित करेंगे।', ta: 'தயாரானவுடன் வாட்ஸ்அப் & மின்னஞ்சலில் தெரிவிப்போம்.' },
    step_prep:       { en: 'Preparing', te: 'సిద్ధం చేస్తున్నాం', hi: 'तैयारी', ta: 'தயாராகிறது' },
    step_life:       { en: 'Bringing your family to life', te: 'మీ కుటుంబానికి ప్రాణం', hi: 'परिवार को जीवंत करना', ta: 'குடும்பத்திற்கு உயிரூட்டல்' },
    step_music:      { en: 'Adding music & voice', te: 'సంగీతం & స్వరం జోడిస్తున్నాం', hi: 'संगीत और आवाज़ जोड़ना', ta: 'இசை & குரல் சேர்க்கிறோம்' },
    step_finish:     { en: 'Finishing touches', te: 'చివరి మెరుగులు', hi: 'अंतिम स्पर्श', ta: 'இறுதி பணிகள்' },
    ready_title:     { en: 'Your story is ready', te: 'మీ కథ సిద్ధంగా ఉంది', hi: 'आपकी कहानी तैयार है', ta: 'உங்கள் கதை தயார்' },
    download:        { en: 'Download', te: 'డౌన్‌లోడ్', hi: 'डाउनलोड', ta: 'பதிவிறக்கம்' },
    share:           { en: 'Share', te: 'షేర్', hi: 'शेयर', ta: 'பகிர்' },
    create_another:  { en: 'Create another', te: 'మరొకటి సృష్టించండి', hi: 'एक और बनाएं', ta: 'மற்றொன்று உருவாக்கு' },
    minutes:         { en: 'min', te: 'నిమి', hi: 'मिनट', ta: 'நிமி' },
    est_time:        { en: 'Estimated time', te: 'అంచనా సమయం', hi: 'अनुमानित समय', ta: 'மதிப்பிட்ட நேரம்' },
  };

  window.I18N = function (key, lang) {
    const e = T[key];
    if (!e) return key;
    return e[lang] || e.en || key;
  };

  // ---------- Themes ----------
  // motif drives a drawn SVG placeholder; from/to are the cinematic gradient.
  window.THEMES = [
    { id: 'diwali', title: 'Festival of Lights', tagline: 'Diyas, marigolds & golden glow',
      occasion: 'Festival', langs: ['te','hi','ta','en'], duration: 45, price: 299,
      from: '#7A1322', to: '#E2832B', motif: 'diya', popular: true },
    { id: 'journey', title: 'Our Family Journey', tagline: 'A heartfelt walk through the years',
      occasion: 'Family', langs: ['te','hi','en'], duration: 60, price: 349,
      from: '#5A2A1E', to: '#C99A3E', motif: 'journey' },
    { id: 'birthday', title: 'Happy Birthday', tagline: 'Confetti, cake & big smiles',
      occasion: 'Birthday', langs: ['te','hi','ta','en'], duration: 30, price: 199,
      from: '#A6273A', to: '#DEBB66', motif: 'cake', popular: true },
    { id: 'wedding', title: 'Wedding Memories', tagline: 'Two souls, one beautiful story',
      occasion: 'Wedding', langs: ['te','hi','ta','en'], duration: 60, price: 399,
      from: '#8A1A2A', to: '#D46A78', motif: 'rings' },
    { id: 'baby', title: "Baby's First Year", tagline: 'Tiny moments, treasured forever',
      occasion: 'Milestone', langs: ['te','hi','en'], duration: 45, price: 299,
      from: '#6B2530', to: '#ECD49A', motif: 'star' },
    { id: 'anniversary', title: 'Golden Anniversary', tagline: 'Celebrating a lifetime together',
      occasion: 'Anniversary', langs: ['hi','en'], duration: 60, price: 399,
      from: '#5E1320', to: '#CCA13E', motif: 'heart' },
  ];

  window.OCCASIONS = ['All', 'Festival', 'Wedding', 'Birthday', 'Family', 'Milestone', 'Anniversary'];
})();
