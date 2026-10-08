import type { Product } from "../types";

// Trace minerals, eggshell, anti-stress, growth promoters, liver tonics,
// vitamins and the anti-pyretic. Facts are from the Product Manual, the Feed
// Supplements brochure and the Liquid Supplements brochure.
export const NUTRITION: Product[] = [
  {
    slug: "mak-min-premium",
    name: "Mak-Min Premium",
    category: "trace-minerals",
    form: "feed",
    tagline: { en: "Complete trace mineral premix", hi: "संपूर्ण ट्रेस मिनरल प्रीमिक्स" },
    composition: [
      "Each kg contains:",
      "Manganese 100 g",
      "Zinc 85 g",
      "Copper 15 g",
      "Iodine 1.8 g",
      "Iron 90 g",
      "Selenium 0.45 g",
      "Organic chromium 0.15 g",
    ],
    benefits: {
      en: [
        "Broilers: better feed efficiency, live weight, immunity, livability and carcass quality",
        "Layers: better eggshell, higher egg production and longer egg shelf life",
        "Maximises immunity and livability in every flock",
      ],
      hi: [
        "ब्रॉयलर: बेहतर फीड दक्षता, वज़न, इम्युनिटी, जीवित दर और कारकस क्वालिटी",
        "लेयर: मज़बूत छिलका, ज़्यादा अंडे और अंडों की लंबी शेल्फ-लाइफ",
        "हर फ्लॉक में इम्युनिटी और जीवित दर बढ़ाता है",
      ],
    },
    dosage: {
      en: ["Broilers and layers: 1–1.5 kg / tonne of feed", "Breeders: 2 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर और लेयर: 1–1.5 किलो / टन फीड", "ब्रीडर: 2 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Every feed needs a trace mineral premix. Pitch it where the farmer sees weak legs, poor feathering, thin shells or low immunity.",
        hi: "हर फीड को ट्रेस मिनरल प्रीमिक्स चाहिए। जहां किसान को कमज़ोर टांगें, खराब पंख, पतले छिलके या कम इम्युनिटी दिखे, वहां बताएं।",
      },
      how: {
        en: "Supplies all seven trace minerals in balanced amounts, with organic chromium to help birds cope with heat stress.",
        hi: "सातों ट्रेस मिनरल संतुलित मात्रा में देता है, साथ में ऑर्गेनिक क्रोमियम जो गर्मी के तनाव में मदद करता है।",
      },
      pitch: {
        en: "All seven trace minerals in one premix, including selenium and organic chromium — for growth in broilers and shells in layers.",
        hi: "सेलेनियम और ऑर्गेनिक क्रोमियम समेत सातों ट्रेस मिनरल एक प्रीमिक्स में — ब्रॉयलर में ग्रोथ, लेयर में मज़बूत छिलका।",
      },
    },
  },
  {
    slug: "mak-min-org",
    name: "Mak Min-Org",
    category: "trace-minerals",
    form: "feed",
    tagline: { en: "More than just an organic trace mineral", hi: "सिर्फ ऑर्गेनिक ट्रेस मिनरल से कहीं बढ़कर" },
    composition: ["Each kg contains:", "Zinc 60 g", "Iron 30 g", "Copper 10 g", "Selenium 0.6 g", "Manganese 60 g", "Chromium 1.0 g", "Iodine 4.0 g"],
    benefits: {
      en: [
        "Organic (proteinate) minerals are far more bioavailable than inorganic salts",
        "Does not bind with toxin binders and keeps vitamins stable",
        "Does not reduce phytase or xylanase activity in feed",
        "Breeders: fertility, hatchability, eggshell, chick quality, fewer culls and less lameness",
        "Broilers: better daily gain, low drip loss, less wooden breast, better FCR",
        "Layers: eggshell quality, egg freshness and shelf life",
      ],
      hi: [
        "ऑर्गेनिक (प्रोटीनेट) मिनरल आम मिनरल से कहीं बेहतर पचते हैं",
        "टॉक्सिन बाइंडर से नहीं बंधता, विटामिन स्थिर रहते हैं",
        "फीड में फाइटेज़ और ज़ाइलेनेज़ का असर कम नहीं करता",
        "ब्रीडर: फर्टिलिटी, हैचेबिलिटी, छिलका, चूज़ा क्वालिटी, कम कल और लंगड़ापन",
        "ब्रॉयलर: बेहतर रोज़ाना बढ़त, कम ड्रिप लॉस, वुडन ब्रेस्ट कम, बेहतर FCR",
        "लेयर: छिलके की क्वालिटी, अंडे की ताज़गी और शेल्फ-लाइफ",
      ],
    },
    dosage: {
      en: ["Broilers: 500–650 g / tonne of feed", "Breeders: 1–1.2 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर: 500–650 ग्राम / टन फीड", "ब्रीडर: 1–1.2 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Farms that want better legs, feathers, shells and immunity, or that use toxin binders (which can lock up ordinary minerals).",
        hi: "जो फार्म बेहतर टांगें, पंख, छिलका और इम्युनिटी चाहते हैं, या जो टॉक्सिन बाइंडर इस्तेमाल करते हैं (जो आम मिनरल को बांध लेते हैं)।",
      },
      how: {
        en: "Each mineral is bound to small peptides (proteinate). The bird absorbs it like a protein, so it stays stable through the changing pH of the gut and is not grabbed by binders, phytate or other feed ingredients.",
        hi: "हर मिनरल छोटे पेप्टाइड से जुड़ा होता है (प्रोटीनेट)। पक्षी इसे प्रोटीन की तरह पचाता है, इसलिए यह आंत के बदलते pH में स्थिर रहता है और बाइंडर, फाइटेट या दूसरे कच्चे माल से नहीं बंधता।",
      },
      pitch: {
        en: "About half the dose of an inorganic premix like Mak-Min Premium, better absorbed, and it does not fight with your toxin binder — healthy feet, shiny feathers, fewer culls.",
        hi: "Mak-Min Premium जैसे इनऑर्गेनिक प्रीमिक्स से लगभग आधी डोज़, बेहतर अवशोषण, और टॉक्सिन बाइंडर से टकराव नहीं — स्वस्थ पैर, चमकदार पंख, कम कल।",
      },
    },
  },
  {
    slug: "mak-min-org-layer-pack",
    name: "Mak Min-Org Layer Pack",
    category: "trace-minerals",
    form: "feed",
    tagline: { en: "Organic trace minerals made for layers", hi: "लेयर के लिए खास ऑर्गेनिक ट्रेस मिनरल" },
    composition: ["Optimised organic trace minerals: zinc, manganese, copper, iodine, iron, selenium and chromium", "Vitamin D3 from plant origin"],
    benefits: {
      en: [
        "Uniform flock in body size, contour and production",
        "Stronger, more uniform eggshells; better egg size, bones and footpads",
        "Better internal (albumen, yolk) and external (shell) egg quality",
        "Protects against chondrodystrophy and perosis",
        "Fewer broken eggs and less leg weakness",
      ],
      hi: [
        "शरीर के आकार और उत्पादन में एक-समान फ्लॉक",
        "मज़बूत और एक जैसा छिलका; बेहतर अंडे का आकार, हड्डियां और पैर",
        "अंदर (सफेदी, ज़र्दी) और बाहर (छिलका) — दोनों तरफ से बेहतर अंडा",
        "कॉन्ड्रोडिस्ट्रॉफी और पेरोसिस से बचाव",
        "कम टूटे अंडे और कम टांगों की कमज़ोरी",
      ],
    },
    dosage: {
      en: ["500–750 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["500–750 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Store in a cool, dry place. Keep the bag closed when not in use.", hi: "ठंडी, सूखी जगह रखें। इस्तेमाल न हो तो बोरी बंद रखें।" },
    learn: {
      problem: {
        en: "Layer farms with broken or poor-quality eggs, leg weakness, or an uneven flock.",
        hi: "लेयर फार्म जहां अंडे टूटते हैं या क्वालिटी खराब है, टांगें कमज़ोर हैं, या फ्लॉक एक-समान नहीं है।",
      },
      how: {
        en: "Organic minerals plus plant-origin vitamin D3 give the hen everything she needs to build bone and lay down shell, in a form she absorbs well.",
        hi: "ऑर्गेनिक मिनरल और पौधों से बना विटामिन D3 मुर्गी को हड्डी और छिलका बनाने के लिए सब कुछ देते हैं, ऐसे रूप में जो अच्छी तरह पचता है।",
      },
      pitch: {
        en: "Made for layers: stronger shells, better eggs inside and out, and fewer broken eggs in the tray.",
        hi: "खास लेयर के लिए: मज़बूत छिलका, अंदर-बाहर बेहतर अंडा, और ट्रे में कम टूटे अंडे।",
      },
    },
  },
  {
    slug: "xshell-ds",
    name: "XShell-DS",
    category: "eggshell",
    form: "feed",
    tagline: { en: "Egg shell quality enhancer", hi: "अंडे के छिलके की क्वालिटी बढ़ाने वाला" },
    composition: ["Short-chain fatty acids (SCFAs)", "Medium-chain fatty acids (MCFAs)", "Vitamin D3 from plant origin", "Essential trace elements"],
    benefits: {
      en: [
        "Helps build ovocleidin-17, the protein frame calcium is laid on",
        "Cofactor for carbonic anhydrase, which deposits calcium in the shell",
        "Cross-links collagen fibres in the shell membranes",
        "Strong, resilient eggshells with less shell breakdown",
        "Supports immunity and overall egg quality",
      ],
      hi: [
        "ओवोक्लेडिन-17 बनाने में मदद — वह प्रोटीन ढांचा जिस पर कैल्शियम जमता है",
        "कार्बोनिक एनहाइड्रेज़ का सहायक, जो छिलके में कैल्शियम जमाता है",
        "छिलके की झिल्ली के कोलेजन रेशों को जोड़ता है",
        "मज़बूत, टिकाऊ छिलका, कम टूट-फूट",
        "इम्युनिटी और अंडे की कुल क्वालिटी में सुधार",
      ],
    },
    dosage: {
      en: ["500 g – 1 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["500 ग्राम – 1 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Thin, cracked or rough shells, especially in older flocks and in summer.",
        hi: "पतले, टूटे या खुरदुरे छिलके, खासकर बूढ़े फ्लॉक में और गर्मी में।",
      },
      how: {
        en: "Calcium alone is not enough. The shell is built on a protein frame and a membrane, and the hen needs vitamin D3 and enzymes to lay calcium on it. XShell-DS supports each of those steps.",
        hi: "सिर्फ कैल्शियम काफी नहीं। छिलका एक प्रोटीन ढांचे और झिल्ली पर बनता है, और कैल्शियम जमाने के लिए मुर्गी को विटामिन D3 और एंज़ाइम चाहिए। XShell-DS इन सभी कदमों में मदद करता है।",
      },
      pitch: {
        en: "If adding more calcium has not fixed the shells, XShell-DS fixes how the hen uses that calcium.",
        hi: "अगर ज़्यादा कैल्शियम डालकर भी छिलका ठीक नहीं हुआ, तो XShell-DS सुधारता है कि मुर्गी उस कैल्शियम का इस्तेमाल कैसे करे।",
      },
    },
  },
  {
    slug: "probeta-ns",
    name: "Probeta-NS",
    category: "anti-stress",
    form: "feed",
    tagline: { en: "Natural anti-stress for feed", hi: "फीड के लिए प्राकृतिक एंटी-स्ट्रेस" },
    composition: [
      "Natural betaine",
      "Natural benzophenones",
      "Methyl donors",
      "Moringa oleifera",
      "Anethum graveolens (dill)",
      "Chrysopogon zizanioides (vetiver)",
      "Trigonella foenum-graecum (fenugreek)",
      "Salvia hispanica L. (chia)",
    ],
    benefits: {
      en: [
        "A powerful natural anti-stress agent",
        "Excellent osmo-regulator — keeps water balance in cells",
        "Supports methylation for growth and metabolism",
        "Builds overall immunity",
        "Maintains production during stress",
      ],
      hi: [
        "ताकतवर प्राकृतिक एंटी-स्ट्रेस",
        "बेहतरीन ऑस्मो-रेगुलेटर — कोशिकाओं में पानी का संतुलन",
        "ग्रोथ और मेटाबॉलिज़्म के लिए मिथाइलेशन में मदद",
        "पूरी इम्युनिटी मज़बूत",
        "तनाव के समय भी प्रोडक्शन बनाए रखता है",
      ],
    },
    dosage: {
      en: ["Broilers / layers / breeders: 500 g / tonne of feed", "Summer: 1 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर / लेयर / ब्रीडर: 500 ग्राम / टन फीड", "गर्मी में: 1 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Summer heat and long stress periods where the farmer wants protection built into the feed.",
        hi: "गर्मी और लंबा तनाव, जब किसान चाहता है कि सुरक्षा फीड में ही मिले।",
      },
      how: {
        en: "Betaine holds water inside cells so they keep working in heat, and gives methyl groups that would otherwise use up methionine and choline. Herbs like moringa and fenugreek add antioxidants and calm stress.",
        hi: "बीटाइन कोशिकाओं में पानी रोककर गर्मी में भी उन्हें काम करता रखता है, और मिथाइल ग्रुप देता है जिससे मेथियोनिन और कोलीन बचते हैं। सहजन (मोरिंगा) और मेथी जैसी जड़ी-बूटियां एंटीऑक्सीडेंट देती हैं और तनाव घटाती हैं।",
      },
      pitch: {
        en: "Heat protection in the feed bag: 500 g per tonne all year, 1 kg in summer.",
        hi: "गर्मी से सुरक्षा फीड की बोरी में: साल भर 500 ग्राम प्रति टन, गर्मी में 1 किलो।",
      },
    },
  },
  {
    slug: "probeta-ws",
    name: "Probeta-WS",
    category: "anti-stress",
    form: "liquid",
    tagline: { en: "Feel cool — liquid anti-stress for heat and handling", hi: "Feel Cool — गर्मी और हैंडलिंग के लिए लिक्विड एंटी-स्ट्रेस" },
    composition: ["Betaine HCl", "Electrolytes", "Vitamin C", "Organic chromium", "Anti-stress and heat-regulating factors"],
    benefits: {
      en: [
        "Corrects electrolyte imbalance during heat stress",
        "Boosts immune response",
        "Relieves stress from vaccination, deworming, debeaking, weather and feed changes and transport",
        "Better body weight gain and FCR by stimulating metabolism",
        "Uniform growth and steady production during stress",
      ],
      hi: [
        "गर्मी में इलेक्ट्रोलाइट का संतुलन ठीक करता है",
        "इम्युनिटी बढ़ाता है",
        "वैक्सीनेशन, डीवर्मिंग, डीबीकिंग, मौसम/फीड बदलाव और ट्रांसपोर्ट का तनाव कम",
        "मेटाबॉलिज़्म बढ़ाकर बेहतर वज़न और FCR",
        "तनाव में भी एक-समान ग्रोथ और स्थिर प्रोडक्शन",
      ],
    },
    dosage: {
      en: ["Broilers / layers / breeders: 10–20 ml per 100 birds", "Heat stress and other stress: 1 ml / litre of drinking water", "Or as advised by the veterinarian"],
      hi: ["ब्रॉयलर / लेयर / ब्रीडर: 10–20 ml प्रति 100 पक्षी", "गर्मी और दूसरे तनाव में: 1 ml / लीटर पीने का पानी", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [
      { size: 1, unit: "L" },
      { size: 5, unit: "L" },
    ],
    learn: {
      problem: {
        en: "Summer panting and heat deaths, and any planned stress: vaccination, debeaking, shifting, transport.",
        hi: "गर्मी में हांफना और गर्मी से मौत, और हर तय तनाव: वैक्सीनेशन, डीबीकिंग, शिफ्टिंग, ट्रांसपोर्ट।",
      },
      how: {
        en: "In heat, birds pant and lose water and salts. Electrolytes restore the balance, betaine keeps cells hydrated, vitamin C lowers stress hormones and chromium helps the bird use energy. Birds keep drinking and eating.",
        hi: "गर्मी में पक्षी हांफते हैं और पानी व नमक खोते हैं। इलेक्ट्रोलाइट संतुलन लौटाते हैं, बीटाइन कोशिकाओं में पानी रखता है, विटामिन C तनाव हार्मोन घटाता है और क्रोमियम ऊर्जा के इस्तेमाल में मदद करता है। पक्षी खाते-पीते रहते हैं।",
      },
      pitch: {
        en: "Start Probeta-WS a day before vaccination or when the temperature climbs — birds stay cool, keep eating and keep growing.",
        hi: "वैक्सीनेशन से एक दिन पहले या तापमान बढ़ते ही Probeta-WS शुरू करें — पक्षी ठंडे रहते हैं, खाते रहते हैं और बढ़ते रहते हैं।",
      },
    },
  },
  {
    slug: "electrol-plus-ws",
    name: "Electrol Plus (Water Soluble)",
    category: "anti-stress",
    form: "water",
    tagline: { en: "Electrolytes with vitamin C, betaine and probiotic", hi: "विटामिन C, बीटाइन और प्रोबायोटिक के साथ इलेक्ट्रोलाइट" },
    composition: [
      "Each kg contains:",
      "Dextrose monohydrate 500 g",
      "Vitamin C 50 g",
      "Potassium chloride 30 g",
      "Sodium citrate 25 g",
      "Sodium chloride 20 g",
      "Mono sodium phosphate 20 g",
      "Sodium gluconate 11 g",
      "Betaine HCl 11 g",
      "Sodium bicarbonate 10 g",
      "Magnesium sulphate 9 g",
      "Probiotic 1 g",
      "Bioactive chromium 0.02 g",
      "Carriers q.s.",
    ],
    benefits: {
      en: [
        "Osmo-regulator",
        "Balances electrolytes during stress and summer",
        "Improves eggshell thickness in summer",
        "Minimises weight loss in broilers",
        "Dextrose gives quick energy",
      ],
      hi: [
        "ऑस्मो-रेगुलेटर",
        "तनाव और गर्मी में इलेक्ट्रोलाइट संतुलन",
        "गर्मी में अंडे का छिलका मोटा रखता है",
        "ब्रॉयलर में वज़न घटना कम",
        "डेक्सट्रोज़ से तुरंत ऊर्जा",
      ],
    },
    dosage: {
      en: ["In water: 1–2 g / litre of water", "Or as advised by the veterinarian / nutritionist"],
      hi: ["पानी में: 1–2 ग्राम / लीटर पानी", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "kg" }],
    learn: {
      problem: {
        en: "Summer, transport and disease — whenever birds pant, drink a lot and lose weight.",
        hi: "गर्मी, ट्रांसपोर्ट और बीमारी — जब भी पक्षी हांफें, बहुत पानी पिएं और वज़न घटे।",
      },
      how: {
        en: "Replaces the sodium, potassium and bicarbonate lost while panting, with dextrose for energy, vitamin C and betaine against heat stress and a probiotic for the gut.",
        hi: "हांफने में खोए सोडियम, पोटैशियम और बाइकार्बोनेट की पूर्ति करता है, साथ में ऊर्जा के लिए डेक्सट्रोज़, गर्मी के लिए विटामिन C और बीटाइन, और आंत के लिए प्रोबायोटिक।",
      },
      pitch: {
        en: "1–2 g per litre on hot days keeps broilers from losing weight and keeps layer shells thick.",
        hi: "गर्म दिनों में 1–2 ग्राम प्रति लीटर — ब्रॉयलर का वज़न नहीं गिरता और लेयर का छिलका मोटा रहता है।",
      },
    },
  },
  {
    slug: "electrol-plus-feed",
    name: "Electrol Plus (Feed Supplement)",
    category: "anti-stress",
    form: "feed",
    tagline: { en: "Electrolyte premix for summer feed", hi: "गर्मी के फीड के लिए इलेक्ट्रोलाइट प्रीमिक्स" },
    composition: [
      "Each kg contains:",
      "Vitamin C 50 g",
      "Potassium chloride 30 g",
      "Sodium citrate 25 g",
      "Sodium chloride 20 g",
      "Mono sodium phosphate 20 g",
      "Sodium gluconate 11 g",
      "Betaine HCl 11 g",
      "Sodium bicarbonate 10 g",
      "Magnesium sulphate 9 g",
      "Probiotic 1 g",
      "Bioactive chromium 0.02 g",
      "Carriers q.s.",
    ],
    benefits: {
      en: [
        "Osmo-regulator",
        "Balances electrolytes during stress and summer",
        "Improves eggshell thickness in summer",
        "Minimises weight loss in broilers",
      ],
      hi: ["ऑस्मो-रेगुलेटर", "तनाव और गर्मी में इलेक्ट्रोलाइट संतुलन", "गर्मी में अंडे का छिलका मोटा रखता है", "ब्रॉयलर में वज़न घटना कम"],
    },
    dosage: {
      en: ["In feed: 1–2 kg / tonne", "Or as advised by the veterinarian / nutritionist"],
      hi: ["फीड में: 1–2 किलो / टन", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Feed mills and large farms that prefer to build summer protection into the feed rather than dosing water daily.",
        hi: "फीड मिल और बड़े फार्म जो रोज़ पानी में डालने के बजाय गर्मी की सुरक्षा फीड में ही देना चाहते हैं।",
      },
      how: {
        en: "The same electrolyte, vitamin C, betaine, probiotic and chromium blend as the water-soluble form, without dextrose, made to mix into feed.",
        hi: "पानी वाले फॉर्म जैसा ही इलेक्ट्रोलाइट, विटामिन C, बीटाइन, प्रोबायोटिक और क्रोमियम मिश्रण, बिना डेक्सट्रोज़, फीड में मिलाने के लिए।",
      },
      pitch: {
        en: "Mix 1–2 kg per tonne in summer feed and every bird gets its electrolytes, every day, without extra labour.",
        hi: "गर्मी के फीड में 1–2 किलो प्रति टन मिलाइए — हर पक्षी को रोज़ इलेक्ट्रोलाइट, बिना अतिरिक्त मेहनत।",
      },
    },
  },
  {
    slug: "gromak-liquid",
    name: "GroMak Liquid",
    category: "growth-promoters",
    form: "liquid",
    tagline: { en: "Enriched booster tonic", hi: "पोषक तत्वों से भरपूर बूस्टर टॉनिक" },
    composition: [
      "Each 100 ml contains:",
      "Methionine (methionine hydroxy analogue) 23.2 g",
      "Choline chloride 11.52 g",
      "Lysine hydrochloride 11.52 g",
      "Magnesium 84 mg",
      "Sodium 64.32 mg",
      "Manganese 56.8 mg",
      "Ferrous (iron) 48.8 mg",
      "Cobalt 37.2 mg",
      "Zinc 34.512 mg",
      "Copper 30.848 mg",
      "Phosphorus 24.4 mg",
      "Protein concentrate (from yeast) q.s.",
    ],
    benefits: {
      en: [
        "Chelated compound boosts productivity across body systems",
        "Improves eggshell quality",
        "Prevents production fluctuation",
        "Reduces mortality due to deficiencies",
      ],
      hi: ["चीलेटेड कंपाउंड से पूरे शरीर की उत्पादकता बढ़ती है", "अंडे का छिलका बेहतर", "प्रोडक्शन में उतार-चढ़ाव नहीं", "कमी से होने वाली मौतें कम"],
    },
    dosage: {
      en: ["Broilers: 10–20 ml / 100 birds", "Layers: 20 ml / 100 birds", "Breeders: 20–30 ml / 100 birds", "Or as recommended by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर: 10–20 ml / 100 पक्षी", "लेयर: 20 ml / 100 पक्षी", "ब्रीडर: 20–30 ml / 100 पक्षी", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [
      { size: 1, unit: "L" },
      { size: 5, unit: "L" },
    ],
    learn: {
      problem: {
        en: "Birds behind on weight, production dips, or recovery after disease and vaccination.",
        hi: "वज़न में पीछे पक्षी, प्रोडक्शन में गिरावट, या बीमारी और वैक्सीनेशन के बाद रिकवरी।",
      },
      how: {
        en: "Supplies methionine (as MHA), lysine and choline — the amino acids that most limit growth — plus chelated minerals, through drinking water so they are absorbed quickly even when feed intake drops.",
        hi: "मेथियोनिन (MHA रूप), लाइसिन और कोलीन — ग्रोथ के लिए सबसे ज़रूरी अमीनो एसिड — और चीलेटेड मिनरल पानी से देता है, ताकि फीड कम खाने पर भी जल्दी पच जाएं।",
      },
      pitch: {
        en: "A complete booster in the water: amino acids plus chelated minerals for weight, shells and steady production.",
        hi: "पानी में संपूर्ण बूस्टर: वज़न, छिलके और स्थिर प्रोडक्शन के लिए अमीनो एसिड और चीलेटेड मिनरल।",
      },
    },
  },
  {
    slug: "gromak-gold-liquid",
    name: "GroMak Gold Liquid",
    category: "growth-promoters",
    form: "liquid",
    tagline: { en: "Enriched booster tonic with nano minerals", hi: "नैनो मिनरल वाला बूस्टर टॉनिक" },
    composition: [
      "Each 500 ml contains:",
      "Methionine (methionine hydroxy analogue) 145.0 g",
      "Choline chloride 72.0 g",
      "Lysine hydrochloride 72.0 g",
      "Sodium 402.0 mg",
      "Ferrous (iron) 305.0 mg",
      "Cobalt 232.5 mg",
      "Copper 192.8 mg",
      "Phosphorus 152.5 mg",
      "Nano minerals 1095.7 mg",
      "Protein concentrate (from yeast) q.s.",
    ],
    benefits: {
      en: [
        "Leading growth promoter liquid for maximum flock performance",
        "MHA is absorbed quickly — results even during off-feed days",
        "Chelated and nano minerals: higher bioavailability, stronger bones, better immunity",
        "Builds muscle, especially breast meat yield",
        "Improves eggshell, prevents production fluctuation, reduces deficiency mortality",
      ],
      hi: [
        "फ्लॉक की अधिकतम परफॉर्मेंस के लिए अग्रणी ग्रोथ प्रमोटर लिक्विड",
        "MHA जल्दी पचता है — कम खाने वाले दिनों में भी असर",
        "चीलेटेड और नैनो मिनरल: बेहतर अवशोषण, मज़बूत हड्डियां, बेहतर इम्युनिटी",
        "मांसपेशी बढ़ती है, खासकर ब्रेस्ट मीट",
        "बेहतर छिलका, प्रोडक्शन स्थिर, कमी से मौतें कम",
      ],
    },
    dosage: {
      en: ["Broilers: 5–10 ml / 100 birds", "Layers: 10–20 ml / 100 birds", "Breeders: 20 ml / 100 birds", "Or as recommended by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर: 5–10 ml / 100 पक्षी", "लेयर: 10–20 ml / 100 पक्षी", "ब्रीडर: 20 ml / 100 पक्षी", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 5, unit: "L" }],
    learn: {
      problem: {
        en: "Farmers who want maximum weight gain and breast yield in broilers, or steady production in layers.",
        hi: "जो किसान ब्रॉयलर में अधिकतम वज़न और ब्रेस्ट मीट, या लेयर में स्थिर प्रोडक्शन चाहते हैं।",
      },
      how: {
        en: "A concentrated form of GroMak: more amino acids per ml, plus nano minerals whose tiny particles have a huge surface area, so they are absorbed and used far better. Choline protects the liver; iron and copper help oxygen transport in heat.",
        hi: "GroMak का गाढ़ा रूप: हर ml में ज़्यादा अमीनो एसिड, साथ में नैनो मिनरल जिनके बारीक कणों की सतह बहुत बड़ी होती है, इसलिए वे बहुत बेहतर पचते हैं। कोलीन लीवर बचाता है; आयरन और कॉपर गर्मी में ऑक्सीजन पहुंचाने में मदद करते हैं।",
      },
      pitch: {
        en: "Half the broiler dose of GroMak Liquid, with nano minerals added — more breast meat, stronger bones and steady eggs.",
        hi: "ब्रॉयलर में GroMak Liquid से आधी डोज़, साथ में नैनो मिनरल — ज़्यादा ब्रेस्ट मीट, मज़बूत हड्डियां और स्थिर अंडे।",
      },
    },
  },
  {
    slug: "livomak-powder",
    name: "LivoMak Powder",
    category: "liver-tonics",
    form: "feed",
    tagline: { en: "Strengthens and supports liver functioning", hi: "लीवर को मज़बूत और स्वस्थ रखता है" },
    composition: ["Phyllanthus niruri", "Picrorhiza kurroa", "Neem powder", "Choline chloride", "Tricholine citrate", "Curcumin extract", "Liver extract powder"],
    benefits: {
      en: [
        "Prevents fatty liver syndrome",
        "Limits liver damage from bacteria, viruses and fungi, and liver hypertrophy",
        "Protects the liver from mycotoxins and helps avoid perosis",
        "Better flock immunity, growth, FCR, fertility and hatchability",
      ],
      hi: [
        "फैटी लीवर सिंड्रोम से बचाव",
        "बैक्टीरिया, वायरस, फंगस से लीवर का नुकसान और लीवर का बढ़ना कम",
        "माइकोटॉक्सिन से लीवर की सुरक्षा, पेरोसिस से बचाव",
        "बेहतर इम्युनिटी, ग्रोथ, FCR, फर्टिलिटी और हैचेबिलिटी",
      ],
    },
    dosage: {
      en: ["250–500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["250–500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 20, unit: "kg" }],
    learn: {
      problem: {
        en: "Routine liver protection in feed, especially with doubtful raw materials or high-energy layer feed.",
        hi: "फीड में रोज़ाना लीवर सुरक्षा, खासकर संदिग्ध कच्चे माल या हाई-एनर्जी लेयर फीड के साथ।",
      },
      how: {
        en: "Herbs proven for the liver (bhui amla, kutki, neem, turmeric) protect and regenerate liver cells, while choline and tricholine citrate move fat out of the liver.",
        hi: "लीवर के लिए जानी-मानी जड़ी-बूटियां (भुई आंवला, कुटकी, नीम, हल्दी) लीवर की कोशिकाओं को बचाती और ठीक करती हैं, और कोलीन व ट्राइकोलीन साइट्रेट लीवर से चर्बी हटाते हैं।",
      },
      pitch: {
        en: "A healthy liver means better FCR. LivoMak Powder protects it every day from just 250 g per tonne.",
        hi: "स्वस्थ लीवर यानी बेहतर FCR। LivoMak Powder सिर्फ 250 ग्राम प्रति टन से रोज़ लीवर बचाता है।",
      },
    },
  },
  {
    slug: "livomak-liquid",
    name: "LivoMak Liquid",
    category: "liver-tonics",
    form: "liquid",
    tagline: { en: "Strengthens and supports liver functioning", hi: "लीवर को मज़बूत और स्वस्थ रखता है" },
    composition: [
      "Tricholine citrate",
      "Eclipta alba",
      "Liver extract",
      "Phyllanthus niruri",
      "Picrorhiza kurroa",
      "Clove oil",
      "Ferrous gluconate",
      "Silymarin",
      "Andrographis paniculata",
      "Ocimum sanctum",
      "Protein hydrolysate",
    ],
    benefits: {
      en: [
        "Rejuvenates and stimulates liver metabolism; detoxifies",
        "Mobilises fat and protects against fatty change and cirrhosis",
        "Better FCR, weight gain and nutrient use; stronger immunity",
        "Better egg production, fertility and hatchability",
        "Faster recovery from mycotoxicosis and other diseases",
        "Prevents and treats fatty liver syndrome",
      ],
      hi: [
        "लीवर को फिर से ताकत देता है और ज़हर साफ करता है",
        "चर्बी हटाता है, फैटी लीवर और सिरोसिस से बचाव",
        "बेहतर FCR, वज़न और पोषण का उपयोग; मज़बूत इम्युनिटी",
        "बेहतर अंडा उत्पादन, फर्टिलिटी और हैचेबिलिटी",
        "माइकोटॉक्सिकोसिस और दूसरी बीमारियों से जल्दी रिकवरी",
        "फैटी लीवर सिंड्रोम से बचाव और इलाज",
      ],
    },
    dosage: {
      en: ["Chicks: 5–10 ml / 100 birds / day", "Growers and layers: 15–20 ml / 100 birds for 5–7 days", "Or as advised by the veterinarian"],
      hi: ["चूज़े: 5–10 ml / 100 पक्षी / दिन", "ग्रोवर और लेयर: 15–20 ml / 100 पक्षी, 5–7 दिन", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [
      { size: 1, unit: "L" },
      { size: 5, unit: "L" },
    ],
    learn: {
      problem: {
        en: "After mycotoxin exposure, after antibiotic courses, or when layers show fatty liver signs — any time the liver needs help quickly.",
        hi: "माइकोटॉक्सिन के बाद, एंटीबायोटिक कोर्स के बाद, या लेयर में फैटी लीवर के लक्षण दिखें — जब भी लीवर को जल्दी मदद चाहिए।",
      },
      how: {
        en: "Eleven liver herbs and nutrients in liquid form act fast: silymarin and bhringraj protect liver cells, tricholine citrate moves fat out, protein hydrolysate supplies amino acids for repair, and iron supports blood.",
        hi: "ग्यारह लीवर जड़ी-बूटियां और पोषक तत्व लिक्विड रूप में तेज़ असर करते हैं: सिलीमारिन और भृंगराज लीवर की कोशिकाएं बचाते हैं, ट्राइकोलीन साइट्रेट चर्बी हटाता है, प्रोटीन हाइड्रोलाइसेट मरम्मत के लिए अमीनो एसिड देता है।",
      },
      pitch: {
        en: "After every antibiotic course or toxin scare, give 5–7 days of LivoMak Liquid so the liver — and FCR — bounce back.",
        hi: "हर एंटीबायोटिक कोर्स या टॉक्सिन के डर के बाद 5–7 दिन LivoMak Liquid दें, ताकि लीवर और FCR दोनों वापस आएं।",
      },
    },
  },
  {
    slug: "zenmix-ad3ec",
    name: "ZenMix-AD3EC",
    category: "vitamins",
    form: "liquid",
    tagline: { en: "Vitamins A, D3, E and C for every kind of stress", hi: "हर तरह के तनाव के लिए विटामिन A, D3, E और C" },
    composition: ["Each ml contains:", "Vitamin A 50,000 IU", "Vitamin D3 5,000 IU", "Vitamin E 30 IU", "Vitamin C 100 mg"],
    benefits: {
      en: [
        "Prevents and relieves all types of stress, improving production",
        "Builds body resistance against infection (vitamin A, C)",
        "Keeps calcium and phosphorus at optimum levels — strong bones and shells (D3)",
        "Supports fertility and hatchability (vitamin E)",
      ],
      hi: [
        "हर तरह के तनाव से बचाव और राहत, बेहतर प्रोडक्शन",
        "इन्फेक्शन से लड़ने की ताकत (विटामिन A, C)",
        "कैल्शियम और फॉस्फोरस सही स्तर पर — मज़बूत हड्डी और छिलका (D3)",
        "फर्टिलिटी और हैचेबिलिटी में मदद (विटामिन E)",
      ],
    },
    dosage: {
      en: ["Chicks, broilers: 4–5 ml / 100 chicks for 5–7 days", "Layers / breeders: 10 ml / 100 birds for 5–7 days", "Or as recommended by the veterinarian / nutritionist"],
      hi: ["चूज़े, ब्रॉयलर: 4–5 ml / 100 चूज़े, 5–7 दिन", "लेयर / ब्रीडर: 10 ml / 100 पक्षी, 5–7 दिन", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "L" }],
    learn: {
      problem: {
        en: "Heat, debeaking, production peak, transport, handling, vaccination, deworming and antibiotic stress, and vitamin deficiency.",
        hi: "गर्मी, डीबीकिंग, प्रोडक्शन पीक, ट्रांसपोर्ट, हैंडलिंग, वैक्सीनेशन, डीवर्मिंग और एंटीबायोटिक का तनाव, और विटामिन की कमी।",
      },
      how: {
        en: "Vitamin A keeps the lining of the gut and airways healthy and helps make antibodies; D3 controls calcium and phosphorus; E protects cells and fertility; C is a fast anti-stress vitamin.",
        hi: "विटामिन A आंत और सांस नली की परत स्वस्थ रखता है और एंटीबॉडी बनाने में मदद करता है; D3 कैल्शियम-फॉस्फोरस संभालता है; E कोशिकाओं और फर्टिलिटी को बचाता है; C तेज़ असर वाला एंटी-स्ट्रेस विटामिन है।",
      },
      pitch: {
        en: "Give ZenMix-AD3EC for 5–7 days around every stress — vaccination, debeaking, heat — and birds keep producing.",
        hi: "हर तनाव — वैक्सीनेशन, डीबीकिंग, गर्मी — के आसपास 5–7 दिन ZenMix-AD3EC दें, पक्षी उत्पादन करते रहेंगे।",
      },
    },
  },
  {
    slug: "zenvit-e-plus",
    name: "ZenVit-E Plus",
    category: "vitamins",
    form: "water",
    tagline: { en: "Vitamin E, selenium and beta-glucans", hi: "विटामिन E, सेलेनियम और बीटा-ग्लूकन" },
    composition: ["Each gram contains:", "Vitamin E 100 mg", "Selenium 1 mg", "1,3-1,6 beta-glucans q.s."],
    benefits: {
      en: [
        "Better feed efficiency, growth rate and vitality",
        "Supports fertility and hatchability by protecting reproductive cells",
        "Reduces muscular dystrophy, exudative diathesis and encephalomalacia",
        "Helps birds withstand heat, infection and vaccination stress",
        "Stronger immunity and faster recovery",
      ],
      hi: [
        "बेहतर फीड दक्षता, ग्रोथ और फुर्ती",
        "प्रजनन कोशिकाओं को बचाकर फर्टिलिटी और हैचेबिलिटी में मदद",
        "मस्कुलर डिस्ट्रॉफी, एक्सुडेटिव डायथेसिस और एन्सेफेलोमलेशिया (क्रेज़ी चिक) कम",
        "गर्मी, इन्फेक्शन और वैक्सीनेशन का तनाव सहने में मदद",
        "मज़बूत इम्युनिटी और जल्दी रिकवरी",
      ],
    },
    dosage: {
      en: [
        "Drinking water — chicks / growers / layers: 5 g / 100 birds; broilers / breeders: 5 g / 50 birds",
        "Feed — chicks / growers / layers: 100–150 g / ton; broilers / breeders: 150–250 g / ton",
        "Or as recommended by the veterinarian / nutritionist",
      ],
      hi: [
        "पानी में — चूज़े / ग्रोवर / लेयर: 5 ग्राम / 100 पक्षी; ब्रॉयलर / ब्रीडर: 5 ग्राम / 50 पक्षी",
        "फीड में — चूज़े / ग्रोवर / लेयर: 100–150 ग्राम / टन; ब्रॉयलर / ब्रीडर: 150–250 ग्राम / टन",
        "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार",
      ],
    },
    packs: [{ size: 200, unit: "g" }],
    learn: {
      problem: {
        en: "Breeders with poor fertility or hatchability, chicks with 'crazy chick' signs, and flocks under heat or vaccination stress.",
        hi: "जिन ब्रीडर में फर्टिलिटी या हैचेबिलिटी कम है, 'क्रेज़ी चिक' के लक्षण वाले चूज़े, और गर्मी या वैक्सीनेशन के तनाव वाले फ्लॉक।",
      },
      how: {
        en: "Vitamin E and selenium work as a team against free radicals: selenium is part of glutathione peroxidase and regenerates used vitamin E. Beta-glucans add an immune boost.",
        hi: "विटामिन E और सेलेनियम मिलकर फ्री रेडिकल से लड़ते हैं: सेलेनियम ग्लूटाथियोन पेरोक्सीडेज़ एंज़ाइम का हिस्सा है और इस्तेमाल हो चुके विटामिन E को फिर से सक्रिय करता है। बीटा-ग्लूकन इम्युनिटी बढ़ाते हैं।",
      },
      pitch: {
        en: "For breeders, fertility is money: ZenVit-E Plus protects sperm and eggs, and works in both water and feed.",
        hi: "ब्रीडर में फर्टिलिटी ही पैसा है: ZenVit-E Plus शुक्राणु और अंडों की रक्षा करता है, और पानी व फीड दोनों में काम करता है।",
      },
    },
  },
  {
    slug: "paracip-oral",
    name: "Paracip-Oral Liquid",
    category: "anti-pyretic",
    form: "liquid",
    tagline: { en: "Paracetamol oral liquid for fever and pain", hi: "बुखार और दर्द के लिए पैरासिटामोल ओरल लिक्विड" },
    composition: ["Each 5 ml contains:", "Paracetamol IP 250 mg"],
    benefits: {
      en: [
        "Lowers fever from infections, including Newcastle disease and infectious bronchitis",
        "Relieves mild to moderate pain from injury, disease or management stress",
        "Eases hyperthermia in extreme heat",
        "Lowers raised body temperature without affecting normal temperature",
      ],
      hi: [
        "रानीखेत (ND) और IB जैसे इन्फेक्शन से हुआ बुखार उतारता है",
        "चोट, बीमारी या मैनेजमेंट तनाव से हल्के-मध्यम दर्द में राहत",
        "तेज़ गर्मी में शरीर का बढ़ा तापमान कम करता है",
        "सामान्य तापमान पर असर नहीं डालता",
      ],
    },
    dosage: {
      en: ["15–20 mg / kg body weight, 3 times a day", "Or as recommended by the veterinarian"],
      hi: ["15–20 mg / kg शरीर वज़न, दिन में 3 बार", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "L" }],
    learn: {
      problem: {
        en: "Feverish, dull birds that stop eating during viral outbreaks or heat waves.",
        hi: "वायरल बीमारी या लू के दौरान बुखार से सुस्त पक्षी जो खाना छोड़ दें।",
      },
      how: {
        en: "Paracetamol blocks the COX enzyme in the brain, which cuts the prostaglandins behind fever and pain, and resets the brain's thermostat.",
        hi: "पैरासिटामोल दिमाग में COX एंज़ाइम को रोकता है, जिससे बुखार और दर्द वाले प्रोस्टाग्लैंडिन कम बनते हैं और दिमाग का 'थर्मोस्टेट' ठीक होता है।",
      },
      pitch: {
        en: "When birds have a fever they stop eating. Paracip brings the temperature down so they keep eating while the treatment works.",
        hi: "बुखार में पक्षी खाना छोड़ देते हैं। Paracip तापमान कम करता है ताकि इलाज चलने तक वे खाते रहें।",
      },
    },
  },
];
