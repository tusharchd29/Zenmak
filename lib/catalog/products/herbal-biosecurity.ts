import type { Product } from "../types";

// Herbal range, house-fly control and bio-security disinfectants. Facts are
// from the Herbal brochure, the Bio-Security brochure and the Product Manual.
export const HERBAL_BIOSECURITY: Product[] = [
  {
    slug: "natumeric-plus",
    name: "Natumeric Plus",
    category: "herbal",
    form: "feed",
    tagline: { en: "Natural growth enhancer — powder and liquid", hi: "प्राकृतिक ग्रोथ एनहांसर — पाउडर और लिक्विड" },
    composition: ["Turmeric (curcumin)", "Ginger", "Pepper extract (piperine)", "Cinnamon (cinnamaldehyde)"],
    benefits: {
      en: [
        "Replaces antibiotic growth promoters (like CTC, Tylan) in feed",
        "Curcumin boosts digestive enzymes (lipase, amylase, trypsin)",
        "Better performance, nutrient use and immunity",
        "Fewer bacterial infections, less diarrhoea and lower mortality",
        "Supports liver health and helps the bird fight mycotoxins",
        "Non-toxic and residue-free; more eggs and healthy growth at low cost",
      ],
      hi: [
        "फीड में एंटीबायोटिक ग्रोथ प्रमोटर (जैसे CTC, टायलान) की जगह",
        "करक्यूमिन पाचन एंज़ाइम (लाइपेज़, एमाइलेज़, ट्रिप्सिन) बढ़ाता है",
        "बेहतर परफॉर्मेंस, पोषण का उपयोग और इम्युनिटी",
        "कम बैक्टीरियल इन्फेक्शन, कम दस्त और कम मौतें",
        "लीवर स्वस्थ रखता है, माइकोटॉक्सिन से लड़ने में मदद",
        "नॉन-टॉक्सिक और रेसिड्यू-फ्री; कम खर्च में ज़्यादा अंडे और अच्छी ग्रोथ",
      ],
    },
    dosage: {
      en: [
        "Powder — breeders: 500 g – 1 kg / ton of feed; layers and broilers: 500 g / ton of feed",
        "Liquid — breeders: 500 g – 1 kg / ton of feed; layers and broilers: 500 g / ton of feed",
        "Liquid in water: 1 ml / litre",
        "As advised by the veterinarian / nutritionist",
      ],
      hi: [
        "पाउडर — ब्रीडर: 500 ग्राम – 1 किलो / टन फीड; लेयर और ब्रॉयलर: 500 ग्राम / टन फीड",
        "लिक्विड — ब्रीडर: 500 ग्राम – 1 किलो / टन फीड; लेयर और ब्रॉयलर: 500 ग्राम / टन फीड",
        "लिक्विड पानी में: 1 ml / लीटर",
        "वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार",
      ],
    },
    packs: [
      { size: 3, unit: "kg", label: "Liquid" },
      { size: 25, unit: "kg", label: "Liquid" },
      { size: 20, unit: "kg", label: "Powder" },
    ],
    storage: { en: "Keep in a cool and dark place", hi: "ठंडी और अंधेरी जगह रखें" },
    learn: {
      problem: {
        en: "Farms and integrators moving away from antibiotic growth promoters, or customers who ask for residue-free birds and eggs.",
        hi: "जो फार्म और इंटीग्रेटर एंटीबायोटिक ग्रोथ प्रमोटर छोड़ रहे हैं, या जिनके ग्राहक रेसिड्यू-फ्री मुर्गा और अंडा मांगते हैं।",
      },
      how: {
        en: "Each spice does a job: turmeric's curcumin is anti-inflammatory, antioxidant and boosts digestive enzymes; ginger is antimicrobial and supports laying; black pepper's piperine increases absorption of selenium, B vitamins and curcumin; cinnamon raises gut enzymes and reduces oxidative stress. Together they cut harmful gut bacteria and toxic metabolites and help break down mycotoxin damage.",
        hi: "हर मसाले का अपना काम: हल्दी का करक्यूमिन सूजन घटाता, एंटीऑक्सीडेंट है और पाचन एंज़ाइम बढ़ाता है; अदरक कीटाणुनाशक है और अंडा उत्पादन में मदद करता है; काली मिर्च का पिपेरिन सेलेनियम, B विटामिन और करक्यूमिन का अवशोषण बढ़ाता है; दालचीनी आंत के एंज़ाइम बढ़ाती है। साथ मिलकर ये आंत के बुरे बैक्टीरिया और ज़हरीले पदार्थ घटाते हैं।",
      },
      pitch: {
        en: "Haldi, adrak, kali mirch and dalchini — what works for us works for birds. Natumeric Plus replaces AGPs with zero residue.",
        hi: "हल्दी, अदरक, काली मिर्च और दालचीनी — जो हमारे लिए काम करता है, वही पक्षियों के लिए भी। Natumeric Plus बिना रेसिड्यू के AGP की जगह लेता है।",
      },
      objection: {
        q: { en: "Will herbs really work like an antibiotic?", hi: "क्या जड़ी-बूटियां सच में एंटीबायोटिक जैसा काम करेंगी?" },
        a: {
          en: "Natumeric Plus is not a treatment for sick birds — for that the vet will prescribe. As a daily growth promoter it controls gut bacteria and improves digestion, which is exactly the job an AGP does, without residue in meat and eggs.",
          hi: "Natumeric Plus बीमार पक्षियों का इलाज नहीं है — उसके लिए वेटेरिनेरियन दवा लिखेंगे। रोज़ाना ग्रोथ प्रमोटर के रूप में यह आंत के बैक्टीरिया काबू करता है और पाचन सुधारता है — ठीक वही काम जो AGP करता है, पर मांस और अंडे में रेसिड्यू के बिना।",
        },
      },
    },
  },
  {
    slug: "allivisat",
    name: "Allivisat (Garlic Extract)",
    category: "herbal",
    form: "liquid",
    tagline: { en: "King of medicinal plants — natural feed supplement", hi: "औषधीय पौधों का राजा — प्राकृतिक फीड सप्लीमेंट" },
    composition: ["Garlic extract (allicin, alliin, ajoene, diallyl sulfide, dithiin, S-allylcysteine)", "Organo-selenium"],
    benefits: {
      en: [
        "Most potent natural antibacterial and antiviral activity",
        "Antifungal and antiprotozoal action",
        "Boosts immunity and improves body weight gain",
        "Acts as a fly repellent and controls larvae",
        "Works together with routine disinfectants (QAC, phenols, glutaraldehyde)",
        "Increases semen production and sperm concentration in breeder males",
        "Antioxidant (organo-selenium)",
      ],
      hi: [
        "सबसे ताकतवर प्राकृतिक एंटीबैक्टीरियल और एंटीवायरल",
        "फंगस और प्रोटोज़ोआ के खिलाफ असर",
        "इम्युनिटी और वज़न दोनों बढ़ाता है",
        "मक्खियां भगाता है और लार्वा कम करता है",
        "QAC, फिनोल, ग्लूटाराल्डिहाइड जैसे डिसइन्फेक्टेंट के साथ ज़्यादा असरदार",
        "ब्रीडर नर में वीर्य उत्पादन और शुक्राणु बढ़ाता है",
        "एंटीऑक्सीडेंट (ऑर्गेनो-सेलेनियम)",
      ],
    },
    dosage: {
      en: [
        "Routine disinfection: 5 ml / litre with QAC, phenols or glutaraldehyde; 10 ml / litre of water when used alone",
        "Drinking water: 0.5 ml / litre of water for 5 days",
        "In feed — powder: 250 g / ton; liquid: 1 litre / ton",
        "Or as advised by the veterinarian / nutritionist",
      ],
      hi: [
        "नियमित डिसइन्फेक्शन: QAC, फिनोल या ग्लूटाराल्डिहाइड के साथ 5 ml / लीटर; अकेले 10 ml / लीटर पानी",
        "पीने का पानी: 0.5 ml / लीटर, 5 दिन",
        "फीड में — पाउडर: 250 ग्राम / टन; लिक्विड: 1 लीटर / टन",
        "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार",
      ],
    },
    packs: [
      { size: 1, unit: "L", label: "Liquid" },
      { size: 1, unit: "kg", label: "Powder" },
    ],
    storage: { en: "Keep in a cool and dark place", hi: "ठंडी और अंधेरी जगह रखें" },
    learn: {
      problem: {
        en: "Farms wanting a natural antimicrobial for water and feed, breeder farms with weak males, and sheds with fly problems.",
        hi: "जो फार्म पानी और फीड के लिए प्राकृतिक कीटाणुनाशक चाहते हैं, कमज़ोर नर वाले ब्रीडर फार्म, और मक्खी वाले शेड।",
      },
      how: {
        en: "When garlic is crushed, alliinase turns alliin into allicin. Allicin crosses bacterial membranes and blocks their RNA and sulphur-containing proteins, stopping growth. Allivisat is extracted over 45 days (pre- and post-curing) to keep real allicin; its oligosaccharides also feed good gut bacteria.",
        hi: "लहसुन कुचलने पर एलीनेज़ एंज़ाइम एलीन को एलिसिन में बदलता है। एलिसिन बैक्टीरिया की झिल्ली पार कर उनके RNA और सल्फर वाले प्रोटीन को रोकता है, जिससे वे बढ़ नहीं पाते। Allivisat 45 दिन की प्रक्रिया से बनता है ताकि असली एलिसिन बचा रहे; इसके ओलिगोसैकेराइड अच्छे बैक्टीरिया का भोजन भी हैं।",
      },
      pitch: {
        en: "One garlic product, many jobs: water sanitiser, feed antimicrobial, fly repellent and breeder male booster.",
        hi: "एक लहसुन प्रोडक्ट, कई काम: पानी की सफाई, फीड में कीटाणुनाशक, मक्खी भगाना और ब्रीडर नर की ताकत।",
      },
    },
  },
  {
    slug: "ovitone-100",
    name: "OviTone-100",
    category: "herbal",
    form: "feed",
    tagline: { en: "Natural multi-ovarian inducer", hi: "प्राकृतिक मल्टी-ओवेरियन इंड्यूसर" },
    composition: ["Shatavari", "Hibiscus", "Kamboji", "Jeevanti", "Micronutrients from natural sources", "Curcumin base"],
    benefits: {
      en: [
        "Nutritive tonic and anti-stressor",
        "Promotes fertility",
        "Supports ovulation and endometrial receptivity",
        "Reduces stress- and immunity-related fertility problems",
        "Increases the egg-laying capacity of the hen",
      ],
      hi: [
        "पोषक टॉनिक और एंटी-स्ट्रेस",
        "फर्टिलिटी बढ़ाता है",
        "ओव्यूलेशन (अंडोत्सर्ग) में मदद",
        "तनाव और इम्युनिटी से जुड़ी फर्टिलिटी समस्याएं कम",
        "मुर्गी की अंडा देने की क्षमता बढ़ाता है",
      ],
    },
    dosage: {
      en: [
        "Programme 1: weeks 15–25, 500 g / tonne of feed; after 40 weeks, 500 g / tonne",
        "Programme 2 (reproduction problems): 1 kg / tonne of feed continuously for 1 month",
        "Programme 3 (top feeding): 5–10 g / bird continuously for 10 days",
        "Or as advised by the veterinarian / nutritionist",
      ],
      hi: [
        "प्रोग्राम 1: 15–25वें हफ्ते, 500 ग्राम / टन फीड; 40 हफ्ते के बाद 500 ग्राम / टन",
        "प्रोग्राम 2 (प्रजनन समस्या): 1 किलो / टन फीड, लगातार 1 महीना",
        "प्रोग्राम 3 (टॉप फीडिंग): 5–10 ग्राम / पक्षी, लगातार 10 दिन",
        "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार",
      ],
    },
    packs: [{ size: 1, unit: "kg" }],
    learn: {
      problem: {
        en: "Pullets coming into lay, layers after 40 weeks when production starts falling, and breeder flocks with fertility problems.",
        hi: "अंडे पर आने वाली पुलेट, 40 हफ्ते के बाद की लेयर जब प्रोडक्शन गिरने लगे, और फर्टिलिटी समस्या वाले ब्रीडर फ्लॉक।",
      },
      how: {
        en: "Shatavari and other Ayurvedic herbs support the hormones behind ovulation, so more follicles mature into eggs, while the curcumin base and micronutrients reduce stress on the reproductive system.",
        hi: "शतावरी और दूसरी आयुर्वेदिक जड़ी-बूटियां अंडोत्सर्ग वाले हार्मोन को सहारा देती हैं, ताकि ज़्यादा फॉलिकल अंडे में बदलें, और करक्यूमिन व सूक्ष्म पोषक तत्व प्रजनन तंत्र पर तनाव घटाते हैं।",
      },
      pitch: {
        en: "Start OviTone at week 15 for a strong start to lay, and again after week 40 to hold the peak longer.",
        hi: "अंडे की अच्छी शुरुआत के लिए 15वें हफ्ते से OviTone दें, और पीक लंबा रखने के लिए 40वें हफ्ते के बाद फिर।",
      },
    },
  },
  {
    slug: "respogreen-100",
    name: "Respogreen 100",
    category: "herbal",
    form: "liquid",
    tagline: { en: "Herbal respiratory support", hi: "सांस के लिए हर्बल सहारा" },
    composition: ["Menthol crystals", "Eucalyptus oil (eucalyptol)", "Vasaka", "Piper longum", "Glycyrrhiza glabra"],
    benefits: {
      en: [
        "Reduces rales, sneezing and nasal discharge",
        "Clears blocked airways for better airflow and oxygen uptake",
        "Antimicrobial — helps prevent secondary infections",
        "Better feed intake and health by easing respiratory distress",
      ],
      hi: [
        "घरघराहट (रेल्स), छींक और नाक बहना कम",
        "बंद सांस नली खोलता है — बेहतर हवा और ऑक्सीजन",
        "कीटाणुनाशक — सेकेंडरी इन्फेक्शन से बचाव",
        "सांस की तकलीफ घटने से बेहतर फीड खपत और सेहत",
      ],
    },
    dosage: {
      en: ["Drinking water: 0.2 ml / litre continuously for 4–5 days", "Spraying: 50 ml / 10 litres of water", "Or as advised by the veterinarian / nutritionist"],
      hi: ["पीने का पानी: 0.2 ml / लीटर, लगातार 4–5 दिन", "स्प्रे: 50 ml / 10 लीटर पानी", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "L" }],
    learn: {
      problem: {
        en: "Birds with snicking, rales and nasal discharge in winter, after vaccination reactions, or in dusty, high-ammonia sheds.",
        hi: "सर्दी में, वैक्सीन रिएक्शन के बाद, या धूल और अमोनिया वाले शेड में छींक, घरघराहट और नाक बहने वाले पक्षी।",
      },
      how: {
        en: "Menthol and eucalyptol open the airways; vasaka (adusa), long pepper (pippali) and liquorice (mulethi) are classic cough herbs that loosen mucus and fight microbes.",
        hi: "मेंथॉल और यूकेलिप्टॉल सांस नली खोलते हैं; अडूसा (वासा), पिप्पली और मुलेठी पुरानी खांसी की जड़ी-बूटियां हैं जो बलगम ढीला करती हैं और कीटाणुओं से लड़ती हैं।",
      },
      pitch: {
        en: "Use it in water and as a spray in the shed — birds breathe easier, keep eating, and you may avoid a full antibiotic course.",
        hi: "पानी में भी और शेड में स्प्रे भी — पक्षी आसानी से सांस लेते हैं, खाते रहते हैं, और कई बार पूरे एंटीबायोटिक कोर्स से बचा जा सकता है।",
      },
    },
  },
  {
    slug: "att2",
    name: "Att² (Attract & Attack House Flies)",
    category: "fly-control",
    form: "spray",
    tagline: { en: "Attracts and kills house flies", hi: "मक्खियों को आकर्षित करके मारता है" },
    composition: [
      "Biosensory attractants",
      "Phytochemicals and phytosterols with insecticidal properties",
      "Tender coconut",
      "Biopreservation using yeast metabolites",
    ],
    benefits: {
      en: [
        "Draws flies in and kills them where they gather",
        "Plant-based insecticidal actives",
        "Simple to use with gunny bags, trays or plates",
        "Cuts fly nuisance and disease spread in sheds and feed stores",
      ],
      hi: [
        "मक्खियों को खींचकर उनके जमावड़े की जगह पर ही मारता है",
        "पौधों से बने कीटनाशक तत्व",
        "बोरी, ट्रे या प्लेट के साथ आसान इस्तेमाल",
        "शेड और फीड गोदाम में मक्खी और बीमारी फैलना कम",
      ],
    },
    dosage: {
      en: [
        "Step 1: Pour Att² onto clean used gunny bags, trays or plates with the largest exposed area",
        "Step 2: Place them where flies gather — litter and feed storage areas — at least 3 metres apart",
        "Step 3: Every 3–4 days remove, wash with hot water and refill with Att²",
      ],
      hi: [
        "स्टेप 1: Att² को साफ पुरानी बोरी, ट्रे या प्लेट पर डालें, जितनी ज़्यादा सतह खुली हो उतना अच्छा",
        "स्टेप 2: इन्हें मक्खी वाली जगह — लिटर और फीड स्टोर — पर रखें, दो ट्रे के बीच कम से कम 3 मीटर",
        "स्टेप 3: हर 3–4 दिन में हटाकर गर्म पानी से धोएं और फिर से Att² भरें",
      ],
    },
    packs: [{ size: 1, unit: "L" }],
    learn: {
      problem: {
        en: "Layer and breeder farms with heavy fly populations around litter, manure and feed stores, especially in the monsoon.",
        hi: "लेयर और ब्रीडर फार्म जहां लिटर, खाद और फीड गोदाम के आसपास बहुत मक्खियां हैं, खासकर बरसात में।",
      },
      how: {
        en: "Attractants (with tender coconut and yeast metabolites) pull flies to the bait, and plant-based insecticidal compounds kill them on contact.",
        hi: "आकर्षक तत्व (नारियल पानी और यीस्ट मेटाबोलाइट के साथ) मक्खियों को चारे तक खींचते हैं, और पौधों से बने कीटनाशक तत्व उन्हें मार देते हैं।",
      },
      pitch: {
        en: "No spraying over the birds — just put Att² trays where flies gather and refill every 3–4 days.",
        hi: "पक्षियों पर छिड़काव नहीं — बस मक्खी वाली जगह पर Att² की ट्रे रखें और हर 3–4 दिन में भरें।",
      },
    },
  },
  {
    slug: "bio-triple-care-20",
    name: "Bio Triple Care-20",
    category: "bio-security",
    form: "spray",
    tagline: { en: "Farm and common disinfectant", hi: "फार्म और सामान्य डिसइन्फेक्टेंट" },
    composition: ["Each 100 g contains:", "Glutaraldehyde 12.0 g", "1,6-Dihydroxy 2,5-dioxahexane 10.5 g", "Polymethyl derivatives 4.6 g"],
    benefits: {
      en: [
        "For disinfection of high-risk areas",
        "Kills gram-positive and gram-negative bacteria, fungi, viruses and bacterial spores",
        "Economical and effective disinfection of poultry farms",
        "Also for cattle sheds, horse stables, hatcheries, hatchery equipment, incubators and egg rooms",
        "No irritation; long residual action",
      ],
      hi: [
        "हाई-रिस्क जगहों के डिसइन्फेक्शन के लिए",
        "ग्राम+ और ग्राम− बैक्टीरिया, फंगस, वायरस और बैक्टीरियल स्पोर को मारता है",
        "पोल्ट्री फार्म का किफायती और असरदार डिसइन्फेक्शन",
        "पशु शेड, घोड़ों का अस्तबल, हैचरी, हैचरी उपकरण, इनक्यूबेटर और अंडा कमरे के लिए भी",
        "जलन नहीं; लंबे समय तक असर",
      ],
    },
    dosage: {
      en: ["Routine disinfection: 5 ml / litre of water", "Terminal disinfection: 15 ml / litre of water"],
      hi: ["नियमित डिसइन्फेक्शन: 5 ml / लीटर पानी", "टर्मिनल (बैच के बाद) डिसइन्फेक्शन: 15 ml / लीटर पानी"],
    },
    packs: [
      { size: 1, unit: "L" },
      { size: 5, unit: "L" },
    ],
    storage: { en: "Keep in a cool and dark place", hi: "ठंडी और अंधेरी जगह रखें" },
    learn: {
      problem: {
        en: "Cleaning empty sheds between batches (terminal disinfection), hatcheries and any high-risk area after a disease outbreak.",
        hi: "बैच के बीच खाली शेड की सफाई (टर्मिनल डिसइन्फेक्शन), हैचरी और बीमारी के बाद हर हाई-रिस्क जगह।",
      },
      how: {
        en: "Glutaraldehyde kills microbes fast by cross-linking their proteins. The dioxahexane biocide adds fungicidal, sporicidal and tuberculocidal action and keeps working on surfaces for a long time.",
        hi: "ग्लूटाराल्डिहाइड कीटाणुओं के प्रोटीन को आपस में जोड़कर उन्हें जल्दी मारता है। डाइऑक्साहेक्सेन बायोसाइड फंगस, स्पोर और TB के कीटाणुओं पर भी असर करता है और सतह पर लंबे समय तक काम करता है।",
      },
      pitch: {
        en: "For the terminal wash, 15 ml per litre kills even bacterial spores — the next batch starts in a clean shed.",
        hi: "टर्मिनल धुलाई के लिए 15 ml प्रति लीटर बैक्टीरियल स्पोर तक को मारता है — अगला बैच साफ शेड में शुरू होता है।",
      },
    },
  },
  {
    slug: "hygin-tact-20",
    name: "Hygin-Tact 20",
    category: "bio-security",
    form: "spray",
    tagline: { en: "Rapid and long-acting disinfectant for hatchery and farm", hi: "हैचरी और फार्म के लिए तेज़ और लंबे असर वाला डिसइन्फेक्टेंट" },
    composition: [
      "Total quaternary ammonium compounds 6% w/v (alkyl, octyldecyl, dioctyl and didecyl dimethyl ammonium chloride)",
      "Glutaraldehyde solution 3.1% w/v",
      "Pine oil 1.7% v/v",
      "Terpineol BP 1.7% v/v",
      "Purified water q.s.",
    ],
    benefits: {
      en: [
        "Broad-spectrum action against bacteria and bacterial spores",
        "Also virucidal and fungicidal",
        "Rapid — kills microorganisms within 10 minutes of contact",
        "Effective in the presence of organic matter",
        "Residual activity lasts 7 days",
        "Also for fish ponds",
      ],
      hi: [
        "बैक्टीरिया और बैक्टीरियल स्पोर पर ब्रॉड-स्पेक्ट्रम असर",
        "वायरस और फंगस पर भी असर",
        "तेज़ — संपर्क के 10 मिनट में कीटाणु खत्म",
        "गंदगी (ऑर्गेनिक मैटर) होने पर भी असरदार",
        "7 दिन तक असर बना रहता है",
        "मछली तालाब में भी इस्तेमाल",
      ],
    },
    dosage: {
      en: ["Terminal disinfection: 10 ml / litre", "Routine disinfection: 5 ml / litre", "Dipping: 20 ml / litre", "Fish: 400–900 ml per acre at 1–1.2 m depth"],
      hi: ["टर्मिनल डिसइन्फेक्शन: 10 ml / लीटर", "नियमित डिसइन्फेक्शन: 5 ml / लीटर", "डिपिंग: 20 ml / लीटर", "मछली: 400–900 ml प्रति एकड़, 1–1.2 मीटर गहराई"],
    },
    packs: [
      { size: 1, unit: "L" },
      { size: 5, unit: "L" },
    ],
    storage: { en: "Keep in a cool and dark place", hi: "ठंडी और अंधेरी जगह रखें" },
    learn: {
      problem: {
        en: "Hatcheries and farms that need a fast-acting disinfectant which keeps working for a week, including foot and equipment dips.",
        hi: "हैचरी और फार्म जिन्हें तेज़ असर वाला और एक हफ्ते तक काम करने वाला डिसइन्फेक्टेंट चाहिए, फुट-डिप और उपकरण डिप समेत।",
      },
      how: {
        en: "Positively charged QACs stick to the negatively charged surface of microbes and break their cell walls; glutaraldehyde finishes them off. Pine oil and terpineol add cleaning power and a fresh smell.",
        hi: "पॉज़िटिव चार्ज वाले QAC कीटाणुओं की नेगेटिव सतह से चिपककर उनकी दीवार तोड़ते हैं; ग्लूटाराल्डिहाइड उन्हें खत्म करता है। पाइन ऑयल और टर्पिनियोल सफाई की ताकत और ताज़ी खुशबू देते हैं।",
      },
      pitch: {
        en: "Kills in 10 minutes and keeps protecting for 7 days — even on dirty surfaces.",
        hi: "10 मिनट में कीटाणु खत्म और 7 दिन तक सुरक्षा — गंदी सतह पर भी।",
      },
    },
  },
  {
    slug: "saniquat-20",
    name: "Saniquat-20",
    category: "bio-security",
    form: "spray",
    tagline: { en: "Powerful broad-spectrum disinfectant and water sanitiser", hi: "ताकतवर ब्रॉड-स्पेक्ट्रम डिसइन्फेक्टेंट और पानी की सफाई" },
    composition: [
      "N,N'-1,2-ethanediylbis[N-(carboxymethyl)-], tetrasodium salt (EDTA) 4%",
      "Quaternary ammonium compounds, di-C8-10-alkyldimethyl chlorides 4%",
      "Quaternary ammonium compounds, benzyl-C12-16-alkyldimethyl chlorides 2%",
    ],
    benefits: {
      en: [
        "Effective in hard water and in the presence of organic matter",
        "Effective at high pH",
        "Non-corrosive, non-toxic and user friendly",
        "Excellent antimicrobial and anti-biofilm activity",
        "Suitable for all hatchery equipment",
        "Drinking water sanitation as well as hygiene and material protection",
      ],
      hi: [
        "खारे (हार्ड) पानी और गंदगी में भी असरदार",
        "ऊंचे pH पर भी असरदार",
        "जंग नहीं लगाता, नॉन-टॉक्सिक और इस्तेमाल में आसान",
        "बेहतरीन कीटाणुनाशक और बायोफिल्म हटाने वाला",
        "हैचरी के सभी उपकरणों के लिए",
        "पीने के पानी की सफाई और सामान्य हाइजीन दोनों",
      ],
    },
    dosage: {
      en: ["Disinfection: 4 ml / litre of water", "Water sanitation: 1 ml / 10 litres of water", "Severe contamination: 10 ml / litre"],
      hi: ["डिसइन्फेक्शन: 4 ml / लीटर पानी", "पानी की सफाई: 1 ml / 10 लीटर पानी", "ज़्यादा संक्रमण: 10 ml / लीटर"],
    },
    packs: [
      { size: 1, unit: "L" },
      { size: 5, unit: "L" },
    ],
    storage: { en: "Keep in a cool and dark place", hi: "ठंडी और अंधेरी जगह रखें" },
    learn: {
      problem: {
        en: "Farms with hard bore-well water, slimy drinker lines (biofilm), and hatcheries needing a disinfectant that will not corrode equipment.",
        hi: "खारे बोरवेल पानी वाले फार्म, चिपचिपी पानी की लाइनें (बायोफिल्म), और ऐसी हैचरी जिन्हें उपकरण में जंग न लगाने वाला डिसइन्फेक्टेंट चाहिए।",
      },
      how: {
        en: "Its two QACs carry a permanent positive charge that disrupts cell membranes and viral envelopes, whatever the pH. EDTA locks up hardness minerals so the QACs keep working in hard water and help lift biofilm.",
        hi: "इसके दोनों QAC पर स्थायी पॉज़िटिव चार्ज होता है जो किसी भी pH पर कीटाणुओं की झिल्ली और वायरस का आवरण तोड़ता है। EDTA पानी के खारेपन वाले मिनरल को बांध लेता है, ताकि QAC खारे पानी में भी काम करें और बायोफिल्म हटे।",
      },
      pitch: {
        en: "Just 1 ml in 10 litres keeps drinking water clean, even hard bore-well water, and it is safe on equipment.",
        hi: "सिर्फ 1 ml प्रति 10 लीटर पीने का पानी साफ रखता है, खारा बोरवेल पानी भी, और उपकरणों के लिए सुरक्षित है।",
      },
    },
  },
  {
    slug: "triox-3",
    name: "Triox-3",
    category: "bio-security",
    form: "spray",
    tagline: { en: "A triple-salt disinfectant", hi: "ट्रिपल-सॉल्ट डिसइन्फेक्टेंट" },
    composition: [
      "Potassium monopersulphate compound 49.8% w/w (triple salt: potassium monopersulphate, potassium sulphate and potassium hydrogen sulphate)",
      "Sodium chloride 1.5% w/w",
      "Excipients q.s.",
    ],
    benefits: {
      en: [
        "Rapid, long-lasting, powerful broad-spectrum yet safe disinfectant",
        "Kills algae, bacteria (gram +, gram − and spore-formers), fungi and viruses",
        "Inactivates non-enveloped viruses that resist other disinfectants",
        "Can be used in the presence of birds to reduce cross-infection during outbreaks",
        "For aerosol, surface, water and equipment disinfection",
        "Stable and effective with organic matter; biodegradable",
      ],
      hi: [
        "तेज़, लंबे असर वाला, ताकतवर फिर भी सुरक्षित डिसइन्फेक्टेंट",
        "काई, बैक्टीरिया (ग्राम+, ग्राम− और स्पोर वाले), फंगस और वायरस को मारता है",
        "बिना आवरण (non-enveloped) वाले कठिन वायरस को भी खत्म करता है",
        "बीमारी के समय पक्षियों की मौजूदगी में भी इस्तेमाल हो सकता है",
        "हवा में स्प्रे, सतह, पानी और उपकरण — सबके लिए",
        "गंदगी में भी स्थिर और असरदार; पर्यावरण के अनुकूल",
      ],
    },
    dosage: {
      en: [
        "Water sanitation — regular: 1 g / 10 litres; disease outbreak: 1 g / litre",
        "Surface disinfection / severe contamination: 5 g / litre",
        "Aerial spray in the presence of birds: 5 g / litre",
        "Hatchery sanitation: 5 g / litre",
        "Foot dip / vehicle dip: 5–10 g / litre",
      ],
      hi: [
        "पानी की सफाई — नियमित: 1 ग्राम / 10 लीटर; बीमारी के समय: 1 ग्राम / लीटर",
        "सतह / ज़्यादा संक्रमण: 5 ग्राम / लीटर",
        "पक्षियों के रहते हवा में स्प्रे: 5 ग्राम / लीटर",
        "हैचरी की सफाई: 5 ग्राम / लीटर",
        "फुट-डिप / गाड़ी डिप: 5–10 ग्राम / लीटर",
      ],
    },
    packs: [
      { size: 200, unit: "g" },
      { size: 500, unit: "g" },
    ],
    storage: { en: "Store at room temperature in a dry place, away from direct sunlight", hi: "कमरे के तापमान पर, सूखी जगह, सीधी धूप से दूर रखें" },
    learn: {
      problem: {
        en: "Disease outbreaks (when you need to disinfect with birds still in the shed), drinking water, foot and vehicle dips, and hatcheries.",
        hi: "बीमारी के समय (जब पक्षी शेड में हों और डिसइन्फेक्शन करना हो), पीने का पानी, फुट और गाड़ी डिप, और हैचरी।",
      },
      how: {
        en: "Triple salt is an oxidiser: it oxidises the cell membrane and proteins of microbes, stops transport across the membrane and destroys the cell — including tough non-enveloped viruses — then breaks down into harmless salts.",
        hi: "ट्रिपल सॉल्ट ऑक्सीडाइज़र है: यह कीटाणुओं की झिल्ली और प्रोटीन को ऑक्सीडाइज़ करके कोशिका को नष्ट करता है — कठिन non-enveloped वायरस समेत — और फिर बेकार नमक में टूट जाता है।",
      },
      pitch: {
        en: "During an outbreak you can't empty the shed. Triox-3 can be sprayed with birds inside to cut cross-infection.",
        hi: "बीमारी के समय शेड खाली नहीं कर सकते। Triox-3 पक्षियों के रहते भी स्प्रे होता है और संक्रमण फैलना रोकता है।",
      },
    },
  },
];
