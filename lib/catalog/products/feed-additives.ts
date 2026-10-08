import type { Product } from "../types";

// Enzymes, acidifiers, performance enhancers, emulsifiers, toxin binders and
// probiotics. Facts are from the Product Manual and the Feed Supplements
// brochure.
export const FEED_ADDITIVES: Product[] = [
  {
    slug: "makzyme-c",
    name: "MakZyme-C AMF",
    category: "enzymes",
    form: "feed",
    tagline: { en: "Multi-enzyme with Advanced Micro-chipping Technology", hi: "एडवांस्ड माइक्रो-चिपिंग टेक्नोलॉजी वाला मल्टी-एंज़ाइम" },
    composition: [
      "Minimum activity per kg:",
      "Cellulase 63,00,000 U",
      "Xylanase 1,00,00,000 U",
      "Beta-glucanase 7,50,000 U",
      "Phytase 6,00,000 U",
      "Alpha-amylase 8,00,000 U",
      "Pectinase 80,000 U",
      "Protease 30,00,000 U",
      "Lipase 7,000 U",
    ],
    benefits: {
      en: [
        "Releases energy and protein locked in NSP fibre, improving FCR and body weight",
        "Lets the nutritionist use cheaper raw materials and cut feed cost",
        "Reduces gut viscosity, wet litter, ammonia and dirty eggs",
        "Built-in phytase improves eggshell quality and frees phosphorus",
        "Matrix value: ME 25–50 kcal/kg, protein 0.5%, replaces 0.75–1 kg DCP",
        "Micro-chip form mixes evenly and survives pelleting",
      ],
      hi: [
        "NSP फाइबर में बंद ऊर्जा और प्रोटीन निकालता है, FCR और वज़न सुधरता है",
        "सस्ते कच्चे माल का इस्तेमाल संभव, फीड की लागत घटती है",
        "आंत की चिपचिपाहट, गीला लिटर, अमोनिया और गंदे अंडे कम",
        "फाइटेज़ से अंडे का छिलका मज़बूत और फॉस्फोरस उपलब्ध",
        "मैट्रिक्स वैल्यू: ME 25–50 kcal/kg, प्रोटीन 0.5%, 0.75–1 kg DCP की बचत",
        "माइक्रो-चिप रूप में बराबर मिक्स होता है और पेलेटिंग में टिकता है",
      ],
    },
    dosage: {
      en: ["Broilers, breeders and layers: 350 g / tonne of feed (regular use)", "For matrix value: 500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर, ब्रीडर और लेयर: 350 ग्राम / टन फीड (नियमित)", "मैट्रिक्स वैल्यू के लिए: 500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Feed cost is high, FCR is poor, litter is wet and sticky, or layers lay dirty eggs on high-fibre feed.",
        hi: "फीड महंगा है, FCR खराब है, लिटर गीला और चिपचिपा है, या हाई-फाइबर फीड पर लेयर गंदे अंडे दे रही हैं।",
      },
      how: {
        en: "Eight enzymes work together: xylanase and beta-glucanase cut fibre, protease frees protein, phytase frees phosphorus, amylase and lipase help digest starch and oil. Less undigested feed reaches the hind gut, so there is less sticky material and less food for harmful bacteria.",
        hi: "आठ एंज़ाइम साथ काम करते हैं: ज़ाइलेनेज़ और बीटा-ग्लूकानेज़ फाइबर तोड़ते हैं, प्रोटिएज़ प्रोटीन निकालता है, फाइटेज़ फॉस्फोरस निकालता है, एमाइलेज़ और लाइपेज़ स्टार्च और तेल पचाते हैं। कम बिना-पचा फीड पिछली आंत तक पहुंचता है, इसलिए चिपचिपाहट और बुरे बैक्टीरिया दोनों कम होते हैं।",
      },
      pitch: {
        en: "At just 350 g per tonne, MakZyme-C beat a competitor enzyme used at 500 g — more eggs and better FCR at a lower dose.",
        hi: "सिर्फ 350 ग्राम प्रति टन पर MakZyme-C ने 500 ग्राम वाले दूसरे एंज़ाइम को पीछे छोड़ा — कम डोज़ में ज़्यादा अंडे और बेहतर FCR।",
      },
      proof: {
        en: "Broiler trial at 34 days: body weight 2.115 kg vs 2.094 kg (control), FCR 1.62 vs 1.68, gut viscosity 1.32 vs 1.87 cP. Layer meta-analysis on 1 million birds: 93.8% production vs 91.8% with a competitor enzyme and 88.3% without enzyme, with lower feed intake (110 vs 112 g/day).",
        hi: "ब्रॉयलर ट्रायल (34 दिन): वज़न 2.115 kg बनाम 2.094 kg (कंट्रोल), FCR 1.62 बनाम 1.68, आंत की चिपचिपाहट 1.32 बनाम 1.87 cP। 10 लाख लेयर पर अध्ययन: प्रोडक्शन 93.8%, दूसरे एंज़ाइम से 91.8% और बिना एंज़ाइम 88.3%, साथ ही कम फीड खपत (110 बनाम 112 ग्राम/दिन)।",
      },
      objection: {
        q: { en: "My feed already has an enzyme.", hi: "मेरे फीड में पहले से एंज़ाइम है।" },
        a: {
          en: "Most single enzymes only target one thing. MakZyme-C has eight activities including phytase and protease, and in the layer trial it gave 2% more production than a competitor at a lower dose. Run it on one shed and compare.",
          hi: "ज़्यादातर एंज़ाइम एक ही चीज़ पर काम करते हैं। MakZyme-C में फाइटेज़ और प्रोटिएज़ समेत आठ एंज़ाइम हैं, और लेयर ट्रायल में कम डोज़ पर भी दूसरे एंज़ाइम से 2% ज़्यादा प्रोडक्शन मिला। एक शेड में चलाकर तुलना कर लीजिए।",
        },
      },
    },
  },
  {
    slug: "makzyme-xpl",
    name: "MakZyme-XPL Premium",
    category: "enzymes",
    form: "feed",
    tagline: { en: "Thermostable extra-strength xylanase complex", hi: "गर्मी में टिकने वाला एक्स्ट्रा-स्ट्रेंथ ज़ाइलेनेज़ कॉम्प्लेक्स" },
    composition: ["Each gram contains:", "1,4 endo-xylanase 1,80,000 BXU", "Protease 40,000 U", "Amylase 2,000 U", "Carrier: starch"],
    benefits: {
      en: [
        "Raises the feeding value of diets rich in wheat, rice, corn, sorghum and DDGS",
        "Thermostable — survives high pelleting temperatures",
        "More energy and digestible protein, especially for chicks with few enzymes of their own",
        "Lowers gut viscosity and litter moisture",
        "Better gut movement, nutrient absorption, growth and FCR",
      ],
      hi: [
        "गेहूं, चावल, मक्का, ज्वार और DDGS वाले फीड की पोषण क्षमता बढ़ाता है",
        "थर्मोस्टेबल — ऊंचे पेलेटिंग तापमान में भी काम करता है",
        "ज़्यादा ऊर्जा और पचने वाला प्रोटीन, खासकर छोटे चूज़ों के लिए",
        "आंत की चिपचिपाहट और लिटर की नमी कम",
        "बेहतर पाचन, ग्रोथ और FCR",
      ],
    },
    dosage: {
      en: ["Broilers, layers and breeders: 100 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर, लेयर और ब्रीडर: 100 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Away from moisture, heat and sunlight. Shelf life 24 months.", hi: "नमी, गर्मी और धूप से दूर रखें। 24 महीने तक उपयोग योग्य।" },
    learn: {
      problem: {
        en: "Feed mills that pellet at high temperature, or feed with a lot of wheat, rice or DDGS, where fibre (arabinoxylan) makes the gut sticky.",
        hi: "ऊंचे तापमान पर पेलेट बनाने वाली फीड मिल, या ज़्यादा गेहूं, चावल या DDGS वाला फीड, जहां फाइबर (अरेबिनोज़ाइलन) आंत को चिपचिपा बनाता है।",
      },
      how: {
        en: "A strong xylanase cuts arabinoxylan fibre into small pieces, which lowers stickiness and releases trapped nutrients; the small sugars released also feed good gut bacteria. Protease and amylase add more protein and starch digestion.",
        hi: "तेज़ ज़ाइलेनेज़ अरेबिनोज़ाइलन फाइबर को छोटे टुकड़ों में काटता है, जिससे चिपचिपाहट घटती है और बंद पोषक तत्व निकलते हैं; निकली हुई छोटी शक्कर अच्छे बैक्टीरिया का भोजन बनती है। प्रोटिएज़ और एमाइलेज़ प्रोटीन और स्टार्च का पाचन और बढ़ाते हैं।",
      },
      pitch: {
        en: "Only 100 g per tonne, and it keeps working after the pellet mill — ideal for wheat, rice and DDGS based feed.",
        hi: "सिर्फ 100 ग्राम प्रति टन, और पेलेट मिल के बाद भी असरदार — गेहूं, चावल और DDGS वाले फीड के लिए बिल्कुल सही।",
      },
    },
  },
  {
    slug: "sal-o-mak-plus",
    name: "SAL-O-MAK Plus",
    category: "acidifiers",
    form: "feed",
    tagline: { en: "Potentiated acidifier for breeders", hi: "ब्रीडर के लिए विशेष शक्तिशाली एसिडिफ़ायर" },
    composition: ["Salts of citric, propionic, formic, acetic, fumaric, benzoic and lactic acid", "Coated butyric acid", "Essential oils"],
    benefits: {
      en: [
        "Greatly reduces E. coli and Salmonella load in the hind gut of breeders",
        "Helps produce clean hatching eggs",
        "Improves hatchability and lowers first-week chick mortality",
        "Preserves feed and reduces its buffering capacity",
        "Better gut pH for protein digestion",
      ],
      hi: [
        "ब्रीडर की पिछली आंत में E. coli और साल्मोनेला बहुत कम करता है",
        "साफ हैचिंग अंडे देने में मदद",
        "हैचेबिलिटी बढ़ाता है और पहले हफ्ते की चूज़ों की मौत घटाता है",
        "फीड को सुरक्षित रखता है",
        "प्रोटीन पाचन के लिए सही pH",
      ],
    },
    dosage: {
      en: ["Breeders: 1–2 kg / tonne of feed", "Broilers / layers: 500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रीडर: 1–2 किलो / टन फीड", "ब्रॉयलर / लेयर: 500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Breeder farms and hatcheries with Salmonella or E. coli problems, poor hatchability, or high first-week chick mortality.",
        hi: "ब्रीडर फार्म और हैचरी जहां साल्मोनेला या E. coli की समस्या है, हैचेबिलिटी कम है या पहले हफ्ते में चूज़े ज़्यादा मरते हैं।",
      },
      how: {
        en: "A buffered blend of seven organic acids plus coated butyric acid and essential oils. The coating carries butyric acid to the hind gut, where Salmonella and E. coli live, so the eggs a breeder lays — and the chicks that hatch — start clean.",
        hi: "सात ऑर्गेनिक एसिड, कोटेड ब्यूटिरिक एसिड और एसेंशियल ऑयल का बफ़र्ड मिश्रण। कोटिंग ब्यूटिरिक एसिड को पिछली आंत तक पहुंचाती है जहां साल्मोनेला और E. coli रहते हैं, ताकि ब्रीडर के अंडे और उनसे निकले चूज़े साफ शुरुआत करें।",
      },
      pitch: {
        en: "Clean mother, clean egg, healthy chick: SAL-O-MAK Plus cuts Salmonella at the breeder so the hatchery sells better chicks.",
        hi: "साफ मां, साफ अंडा, स्वस्थ चूज़ा: SAL-O-MAK Plus ब्रीडर में ही साल्मोनेला कम करता है, ताकि हैचरी बेहतर चूज़े बेचे।",
      },
    },
  },
  {
    slug: "sal-o-mak",
    name: "SAL-O-MAK",
    category: "acidifiers",
    form: "feed",
    tagline: { en: "Broad-spectrum feed and gut acidifier", hi: "ब्रॉड-स्पेक्ट्रम फीड और गट एसिडिफ़ायर" },
    composition: [
      "Salts of citric, propionic, formic, lactic, acetic, fumaric and benzoic acid",
      "Esterified coated butyric acid",
      "Essential oils (cinnamaldehyde, thymol)",
      "Acid concentration 48–50%",
    ],
    benefits: {
      en: [
        "Protects feed and raw materials from microbes",
        "Controls E. coli, Salmonella, Clostridia and Pasteurella in the gut",
        "Better villi development and nutrient absorption — better FCR and body weight",
        "Works as both a feed and a gut acidifier",
        "Lower gut pH switches on digestive enzymes",
        "Micro-encapsulated sustained-release pellets: not pungent, less corrosive to mill machinery",
      ],
      hi: [
        "फीड और कच्चे माल को कीटाणुओं से बचाता है",
        "आंत में E. coli, साल्मोनेला, क्लोस्ट्रीडिया और पाश्चुरेला पर नियंत्रण",
        "बेहतर विली और पोषण का अवशोषण — बेहतर FCR और वज़न",
        "फीड और आंत दोनों का एसिडिफ़ायर",
        "आंत का pH कम होने से पाचन एंज़ाइम सक्रिय",
        "माइक्रो-एनकैप्सुलेटेड पेलेट: तीखी गंध नहीं, मशीन को कम नुकसान",
      ],
    },
    dosage: {
      en: ["Broilers / layers: 500 g – 1 kg / tonne of feed", "Breeders: 1–2 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर / लेयर: 500 ग्राम – 1 किलो / टन फीड", "ब्रीडर: 1–2 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Farms that want to cut antibiotic use, have gut infections (E. coli, Salmonella, Clostridia), or store feed and raw materials in humid weather.",
        hi: "जो फार्म एंटीबायोटिक कम करना चाहते हैं, जहां आंत के इन्फेक्शन (E. coli, साल्मोनेला, क्लोस्ट्रीडिया) हैं, या नमी वाले मौसम में फीड स्टोर होता है।",
      },
      how: {
        en: "Undissociated organic acids slip inside bacteria and upset them from within. The essential oils open up bacterial cell walls and boost the effect. Coated butyric acid is released slowly along the gut and builds taller, wider villi in the duodenum, jejunum and ileum.",
        hi: "ऑर्गेनिक एसिड बैक्टीरिया के अंदर घुसकर उन्हें अंदर से खत्म करते हैं। एसेंशियल ऑयल बैक्टीरिया की दीवार खोलकर असर बढ़ाते हैं। कोटेड ब्यूटिरिक एसिड आंत में धीरे-धीरे निकलता है और विली को लंबा और चौड़ा बनाता है।",
      },
      pitch: {
        en: "48–50% acid strength, in pellets that do not burn the nose or rust the mixer — one product that protects both the feed and the gut.",
        hi: "48–50% एसिड ताकत, ऐसे पेलेट में जो न नाक में चुभते हैं न मिक्सर में जंग लगाते हैं — फीड और आंत दोनों की सुरक्षा एक प्रोडक्ट से।",
      },
    },
  },
  {
    slug: "sal-o-zen",
    name: "SAL-O-ZEN",
    category: "acidifiers",
    form: "feed",
    tagline: { en: "A unique acidifier", hi: "एक अनोखा एसिडिफ़ायर" },
    composition: ["Salts of citric, propionic, formic, acetic, fumaric, benzoic and lactic acid", "Coated butyric acid"],
    benefits: {
      en: [
        "Feed preservative — propionic acid as ammonium dipropionate, a strong mould inhibitor",
        "Reduces orange droppings in broiler farms",
        "Improves in-gut pH for better protein digestion",
        "Reduces gut pathogen load (Salmonella, E. coli, Clostridium, Pasteurella)",
        "Better villi and nutrient absorption — better FCR and body weight",
      ],
      hi: [
        "फीड प्रिज़र्वेटिव — अमोनियम डाइप्रोपियोनेट रूप में प्रोपियोनिक एसिड, फफूंद रोकने में ताकतवर",
        "ब्रॉयलर फार्म में नारंगी बीट (orange droppings) कम करता है",
        "प्रोटीन पाचन के लिए आंत का सही pH",
        "आंत में बीमारी फैलाने वाले बैक्टीरिया कम",
        "बेहतर विली — बेहतर FCR और वज़न",
      ],
    },
    dosage: {
      en: ["Breeders / broilers / layers: 1–2 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रीडर / ब्रॉयलर / लेयर: 1–2 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Broiler farmers who see orange or mucus-like droppings, or who store feed long enough for mould to grow.",
        hi: "ब्रॉयलर किसान जिन्हें नारंगी या म्यूकस जैसी बीट दिख रही है, या जिनका फीड इतने दिन स्टोर रहता है कि फफूंद लग जाए।",
      },
      how: {
        en: "Its acids lower pH in the feed and the gut. Propionic acid stops mould in the bag; the other acids and coated butyric acid control harmful bacteria inside the bird, which is behind orange droppings.",
        hi: "इसके एसिड फीड और आंत दोनों का pH कम करते हैं। प्रोपियोनिक एसिड बोरी में फफूंद रोकता है; बाकी एसिड और कोटेड ब्यूटिरिक एसिड पक्षी के अंदर बुरे बैक्टीरिया रोकते हैं, जो नारंगी बीट की वजह हैं।",
      },
      pitch: {
        en: "Seeing orange droppings? SAL-O-ZEN cleans up the gut and protects the feed at the same time.",
        hi: "नारंगी बीट दिख रही है? SAL-O-ZEN आंत को साफ करता है और साथ ही फीड को भी बचाता है।",
      },
    },
  },
  {
    slug: "perfom-x",
    name: "Perfom-X",
    category: "performance",
    form: "feed",
    tagline: { en: "Unlock the potential of layers and breeders", hi: "लेयर और ब्रीडर की पूरी क्षमता खोलिए" },
    composition: ["Marine algae", "Yeast nucleotide concentrate", "Micro and macro nutrient blend for laying hens"],
    benefits: {
      en: [
        "Increases growth of follicles and formation of eggs",
        "Nucleotides support the rapid cell division needed for egg formation",
        "Higher hatchability for better yield and profit",
        "Seaweed antioxidants (polyphenols, flavonoids, carotenoids) revitalise laying",
        "Better chick quality and yolk weight (linoleic acid)",
        "Helps production recover after disease",
      ],
      hi: [
        "फॉलिकल की बढ़त और अंडे बनना तेज़",
        "न्यूक्लियोटाइड अंडा बनने के लिए ज़रूरी तेज़ कोशिका-विभाजन में मदद करते हैं",
        "ज़्यादा हैचेबिलिटी, ज़्यादा मुनाफा",
        "समुद्री शैवाल के एंटीऑक्सीडेंट अंडा उत्पादन को फिर से ताकत देते हैं",
        "बेहतर चूज़ा क्वालिटी और ज़र्दी का वज़न (लिनोलिक एसिड)",
        "बीमारी के बाद प्रोडक्शन वापस लाने में मदद",
      ],
    },
    dosage: {
      en: ["Layers / breeders: 500 g / tonne of feed", "Recovery phase: 1–2 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["लेयर / ब्रीडर: 500 ग्राम / टन फीड", "रिकवरी के समय: 1–2 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Layer or breeder flocks whose egg production dropped after a disease (like ILT) and is not coming back, or flocks laying below standard.",
        hi: "लेयर या ब्रीडर फ्लॉक जिनका अंडा उत्पादन बीमारी (जैसे ILT) के बाद गिरा और वापस नहीं आ रहा, या जो स्टैंडर्ड से कम अंडे दे रहे हैं।",
      },
      how: {
        en: "Every egg needs millions of new cells in the ovary and oviduct. Nucleotides are the building blocks of DNA and RNA, so they speed up that cell building; seaweed antioxidants reduce oxidative stress on reproductive tissue.",
        hi: "हर अंडे के लिए अंडाशय और अंडवाहिनी में लाखों नई कोशिकाएं बनती हैं। न्यूक्लियोटाइड DNA और RNA की ईंटें हैं, इसलिए ये कोशिका बनना तेज़ करते हैं; शैवाल के एंटीऑक्सीडेंट प्रजनन अंगों पर तनाव कम करते हैं।",
      },
      pitch: {
        en: "In an ILT-hit breeder flock in Tamil Nadu, Perfom-X brought production from 69% back to 80% within weeks.",
        hi: "तमिलनाडु के ILT से प्रभावित ब्रीडर फ्लॉक में Perfom-X ने कुछ ही हफ्तों में प्रोडक्शन 69% से वापस 80% तक पहुंचाया।",
      },
      proof: {
        en: "Trial in an ILT-affected breeder flock near Palladam, Tamil Nadu: production fell from 83.4% (week 31) to 65% (week 33). With Perfom-X at 2 kg/tonne it recovered to 79.9% by week 36 and held at about 80% through week 39.",
        hi: "पल्लडम (तमिलनाडु) के पास ILT प्रभावित ब्रीडर फ्लॉक में ट्रायल: प्रोडक्शन 83.4% (31वां हफ्ता) से गिरकर 65% (33वां हफ्ता) हुआ। 2 किलो/टन Perfom-X से 36वें हफ्ते तक 79.9% पर लौटा और 39वें हफ्ते तक लगभग 80% पर टिका रहा।",
      },
    },
  },
  {
    slug: "zenact-pro",
    name: "ZenAct-Pro",
    category: "performance",
    form: "feed",
    tagline: { en: "Advanced gut health and performance booster", hi: "आंत की सेहत और परफॉर्मेंस का एडवांस्ड बूस्टर" },
    composition: [
      "Gut-acting probiotic strains",
      "Epithelial cell enhancer",
      "SCFAs and MCFAs",
      "Mannans",
      "Catalytic proteins and NSP-digesting enzymes",
      "Astringents",
    ],
    benefits: {
      en: [
        "Reduces loose droppings and the percentage of dirty eggs",
        "Strengthens the intestinal lining and keeps gut flora balanced",
        "Firmer droppings and drier litter, so fewer flies and less ammonia",
        "Better digestion and nutrient use — better growth and egg production",
        "At 2 kg/tonne it fully replaces enzymes and probiotics in feed",
      ],
      hi: [
        "पतली बीट और गंदे अंडों का प्रतिशत कम",
        "आंत की परत मज़बूत, अच्छे-बुरे बैक्टीरिया में संतुलन",
        "सख्त बीट और सूखा लिटर — कम मक्खी और कम अमोनिया",
        "बेहतर पाचन — बेहतर ग्रोथ और अंडा उत्पादन",
        "2 किलो/टन पर फीड में एंज़ाइम और प्रोबायोटिक की पूरी जगह ले लेता है",
      ],
    },
    dosage: {
      en: [
        "Severe loose droppings / dirty eggs: 2 kg / tonne of feed for 10 days",
        "Regular use: 1 kg / tonne of feed",
        "2 kg/t replaces enzymes and probiotics completely; 1 kg/t replaces half their dose",
        "Or as advised by the veterinarian",
      ],
      hi: [
        "ज़्यादा पतली बीट / गंदे अंडे: 2 किलो / टन फीड, 10 दिन",
        "नियमित: 1 किलो / टन फीड",
        "2 किलो/टन से एंज़ाइम और प्रोबायोटिक पूरी तरह बदले जा सकते हैं; 1 किलो/टन से आधी डोज़",
        "या वेटेरिनेरियन की सलाह अनुसार",
      ],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Layer farms with dirty eggs from loose droppings, wet litter, fly trouble and ammonia smell.",
        hi: "लेयर फार्म जहां पतली बीट से अंडे गंदे हो रहे हैं, लिटर गीला है, मक्खियां और अमोनिया की बदबू है।",
      },
      how: {
        en: "Probiotics and mannans control harmful bacteria; SCFAs and the epithelial enhancer repair the gut lining; MCFAs give quick energy and fight bacteria; enzymes digest feed fully; astringents bind moisture so droppings come out firm and eggs stay clean.",
        hi: "प्रोबायोटिक और मैनन बुरे बैक्टीरिया रोकते हैं; SCFA और एपिथीलियल एनहांसर आंत की परत ठीक करते हैं; MCFA तुरंत ऊर्जा देते हैं; एंज़ाइम फीड पूरा पचाते हैं; एस्ट्रिंजेंट नमी बांधते हैं ताकि बीट सख्त निकले और अंडे साफ रहें।",
      },
      pitch: {
        en: "Dirty eggs sell at a discount. In trial, ZenAct-Pro cut dirty eggs from 4.7% to 2% in under two weeks.",
        hi: "गंदे अंडे कम दाम में बिकते हैं। ट्रायल में ZenAct-Pro ने दो हफ्ते से कम में गंदे अंडे 4.7% से घटाकर 2% कर दिए।",
      },
      proof: {
        en: "Trial in a 64-week-old layer flock: dirty eggs were about 4.5–4.7% in the week before; after starting ZenAct-Pro they fell steadily to 2.0% by day 13.",
        hi: "64 हफ्ते के लेयर फ्लॉक में ट्रायल: शुरू करने से पहले वाले हफ्ते में गंदे अंडे लगभग 4.5–4.7% थे; ZenAct-Pro शुरू करने के बाद 13वें दिन तक लगातार घटकर 2.0% रह गए।",
      },
      objection: {
        q: { en: "I already add an enzyme and a probiotic.", hi: "मैं पहले से एंज़ाइम और प्रोबायोटिक डालता हूं।" },
        a: {
          en: "At 2 kg per tonne ZenAct-Pro replaces both, and adds gut-lining repair and astringents that they do not have — one bag instead of two products.",
          hi: "2 किलो प्रति टन पर ZenAct-Pro दोनों की जगह ले लेता है, और साथ में आंत की मरम्मत और एस्ट्रिंजेंट भी देता है जो उनमें नहीं हैं — दो प्रोडक्ट की जगह एक बोरी।",
        },
      },
    },
  },
  {
    slug: "lipolyse-c",
    name: "Lipolyse-C",
    category: "emulsifiers",
    form: "feed",
    tagline: { en: "The most potent hydrophilic emulsifier", hi: "सबसे ताकतवर हाइड्रोफिलिक इमल्सीफ़ायर" },
    composition: [
      "GPGR (Glyceryl Poly Ethylene Glycol Ricinoleate)",
      "Lysophospholipid",
      "Phospholipids",
      "Soluble caseinates",
      "Lipase",
      "Synthetic bile salt",
      "Natural carriers",
    ],
    benefits: {
      en: [
        "Gets more energy out of the fat and oil in feed",
        "High HLB value releases maximum energy",
        "Improves digestion of long-chain and saturated fatty acids",
        "Synthetic bile salt activates lipase and raises ME",
        "Allows a lower-cost feed formulation",
      ],
      hi: [
        "फीड के तेल और फैट से ज़्यादा ऊर्जा",
        "हाई HLB वैल्यू से अधिकतम ऊर्जा",
        "लंबी चेन और सैचुरेटेड फैटी एसिड का बेहतर पाचन",
        "सिंथेटिक बाइल सॉल्ट लाइपेज़ सक्रिय करता है और ME बढ़ाता है",
        "फीड फॉर्मूला सस्ता बनाना संभव",
      ],
    },
    dosage: {
      en: ["Broilers / layers: 500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर / लेयर: 500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Keep in a cool place. Shelf life 24 months.", hi: "ठंडी जगह रखें। 24 महीने तक उपयोग योग्य।" },
    learn: {
      problem: {
        en: "Broiler feed with added oil, young chicks that cannot digest fat well, or birds recovering from gut disease.",
        hi: "तेल मिलाया हुआ ब्रॉयलर फीड, छोटे चूज़े जो फैट ठीक से नहीं पचा पाते, या आंत की बीमारी से उबर रहे पक्षी।",
      },
      how: {
        en: "Fat gives more than twice the energy of carbohydrate, but it must be broken into tiny droplets before lipase can digest it. Most feed oils have fatty acids longer than 14 carbons, which are hard to digest. Lipolyse-C's water-loving emulsifiers, lysolecithin and bile salt break oil into tiny droplets and its lipase digests them.",
        hi: "फैट कार्बोहाइड्रेट से दोगुनी से ज़्यादा ऊर्जा देता है, पर लाइपेज़ से पचने से पहले उसे छोटी बूंदों में टूटना ज़रूरी है। फीड के ज़्यादातर तेल में 14 से लंबी कार्बन चेन होती है, जो मुश्किल से पचती है। Lipolyse-C के इमल्सीफ़ायर, लाइसोलेसिथिन और बाइल सॉल्ट तेल को बारीक बूंदों में तोड़ते हैं और लाइपेज़ उन्हें पचाता है।",
      },
      pitch: {
        en: "Oil is your costliest ingredient — Lipolyse-C makes sure the bird uses all of it. 40 g more body weight and 3 points better FCR in trial.",
        hi: "तेल आपका सबसे महंगा कच्चा माल है — Lipolyse-C पक्का करता है कि पक्षी उसका पूरा इस्तेमाल करे। ट्रायल में 40 ग्राम ज़्यादा वज़न और FCR 3 पॉइंट बेहतर।",
      },
      proof: {
        en: "Broilers at 42 days: body weight 2,410 g with Lipolyse-C vs 2,370 g control; FCR 1.52 vs 1.55.",
        hi: "42 दिन के ब्रॉयलर: Lipolyse-C के साथ वज़न 2,410 ग्राम बनाम 2,370 ग्राम (कंट्रोल); FCR 1.52 बनाम 1.55।",
      },
    },
  },
  {
    slug: "lipolyse-l",
    name: "Lipolyse-L",
    category: "emulsifiers",
    form: "feed",
    tagline: { en: "Effective fat mobiliser for layers and breeders", hi: "लेयर और ब्रीडर के लिए असरदार फैट मोबिलाइज़र" },
    composition: [
      "Lysophosphatidylcholine",
      "Soluble caseinates",
      "Synthetic salts of enzymatic action",
      "Glycerol polyethylene glycol ricinoleate",
      "Herbal vitamin C, vitamin B12, liver tonic and natural carriers",
    ],
    benefits: {
      en: [
        "Reduces fatty liver syndrome in layers",
        "Minimises abdominal fat build-up",
        "Better metabolism of fat and oil in feed",
        "750 g Lipolyse-L replaces 1 kg choline chloride",
        "Facilitates a low-cost formulation",
      ],
      hi: [
        "लेयर में फैटी लीवर सिंड्रोम कम करता है",
        "पेट की चर्बी कम जमती है",
        "फीड के तेल और फैट का बेहतर उपयोग",
        "750 ग्राम Lipolyse-L, 1 किलो कोलीन क्लोराइड की जगह लेता है",
        "सस्ता फीड फॉर्मूला संभव",
      ],
    },
    dosage: {
      en: ["Layers / breeders: 1 kg / tonne of feed", "Replace 1 kg of choline chloride with 750 g of Lipolyse-L", "Or as advised by the veterinarian / nutritionist"],
      hi: ["लेयर / ब्रीडर: 1 किलो / टन फीड", "1 किलो कोलीन क्लोराइड की जगह 750 ग्राम Lipolyse-L", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Layers after 40 weeks of age with fat building up in the liver and abdomen, dropping production or sudden deaths from fatty liver haemorrhage.",
        hi: "40 हफ्ते के बाद की लेयर जिनके लीवर और पेट में चर्बी जम रही है, प्रोडक्शन गिर रहा है या फैटी लीवर से अचानक मौतें हो रही हैं।",
      },
      how: {
        en: "Choline is needed to carry fat out of the liver. Lipolyse-L supplies it as lysophosphatidylcholine — a form the bird uses directly — together with emulsifiers, vitamin B12, vitamin C and liver tonic, so fat is mobilised instead of stored.",
        hi: "लीवर से फैट बाहर ले जाने के लिए कोलीन ज़रूरी है। Lipolyse-L इसे लाइसोफॉस्फेटिडाइलकोलीन के रूप में देता है — जिसे पक्षी सीधे इस्तेमाल करता है — साथ में इमल्सीफ़ायर, विटामिन B12, विटामिन C और लीवर टॉनिक, ताकि फैट जमने के बजाय काम में आए।",
      },
      pitch: {
        en: "Use 750 g instead of 1 kg of choline chloride and get fat mobilisation and liver support on top.",
        hi: "1 किलो कोलीन क्लोराइड की जगह 750 ग्राम डालिए और साथ में फैट मोबिलाइज़ेशन व लीवर सपोर्ट भी पाइए।",
      },
    },
  },
  {
    slug: "ditox-regular",
    name: "DiTox Regular",
    category: "toxin-binders",
    form: "feed",
    tagline: { en: "Everyday mycotoxin binder with liver support", hi: "रोज़ाना का माइकोटॉक्सिन बाइंडर, लीवर सपोर्ट के साथ" },
    composition: ["Natural dipolar phyllosilicates", "Liver stimulants"],
    benefits: {
      en: [
        "Binds and removes a wide range of mycotoxins for safer feed",
        "Phyllosilicates trap toxins in their layered structure",
        "Liver stimulants boost detox enzymes and liver health",
      ],
      hi: [
        "कई तरह के माइकोटॉक्सिन बांधकर बाहर निकालता है, फीड सुरक्षित",
        "फाइलोसिलिकेट अपनी परतों में ज़हर फंसा लेते हैं",
        "लीवर स्टिमुलेंट डिटॉक्स एंज़ाइम और लीवर की सेहत बढ़ाते हैं",
      ],
    },
    dosage: {
      en: ["Regular: 1 kg / tonne of feed", "High-moisture or toxin-suspected feed: 2 kg / tonne of feed", "Or as advised by the veterinarian"],
      hi: ["नियमित: 1 किलो / टन फीड", "ज़्यादा नमी या टॉक्सिन के शक वाला फीड: 2 किलो / टन फीड", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Any farm using maize or DORB, especially in the monsoon — as routine protection against mycotoxins.",
        hi: "मक्का या DORB इस्तेमाल करने वाला हर फार्म, खासकर बरसात में — माइकोटॉक्सिन से रोज़ाना की सुरक्षा के लिए।",
      },
      how: {
        en: "Phyllosilicate clay has a huge surface area with layers that trap toxin molecules, so they pass out in the droppings instead of entering the blood. Liver stimulants help the liver clear what is left.",
        hi: "फाइलोसिलिकेट क्ले की सतह बहुत बड़ी होती है जिसकी परतें टॉक्सिन को फंसा लेती हैं, ताकि वे खून में जाने के बजाय बीट में निकल जाएं। लीवर स्टिमुलेंट बचा हुआ ज़हर साफ करने में लीवर की मदद करते हैं।",
      },
      pitch: {
        en: "You cannot see mycotoxin in feed, but you see its cost in weight and eggs. 1 kg per tonne is cheap insurance.",
        hi: "फीड में माइकोटॉक्सिन दिखता नहीं, पर उसका नुकसान वज़न और अंडों में दिखता है। 1 किलो प्रति टन — सस्ता बीमा।",
      },
    },
  },
  {
    slug: "ditox-3-plus",
    name: "DiTox-3 Plus",
    category: "toxin-binders",
    form: "feed",
    tagline: { en: "Binds and eliminates toxins", hi: "टॉक्सिन को बांधे और बाहर करे" },
    composition: [
      "Activated HSCAS (natural dipolar phyllosilicates)",
      "Activated carbon",
      "Mannan oligosaccharides (MOS)",
      "Liver and kidney rejuvenators",
      "Neem powder",
    ],
    benefits: {
      en: [
        "Binds and neutralises mycotoxins and chemical toxins for safer feed",
        "High affinity for aflatoxin B1, stable at 25–37°C and pH 2–10",
        "MOS binds harmful bacteria (E. coli, Salmonella) and their toxins in the gut",
        "Activated charcoal handles ochratoxin and T-2 toxin",
        "Neem adds antibacterial, antifungal and immunity support",
        "Improves liver and kidney function",
      ],
      hi: [
        "माइकोटॉक्सिन और केमिकल टॉक्सिन बांधकर फीड सुरक्षित करता है",
        "अफ्लाटॉक्सिन B1 को मज़बूती से बांधता है, 25–37°C और pH 2–10 पर स्थिर",
        "MOS आंत में E. coli, साल्मोनेला और उनके ज़हर को बांधता है",
        "एक्टिवेटेड चारकोल ओक्राटॉक्सिन और T-2 टॉक्सिन पर असरदार",
        "नीम से बैक्टीरिया-फंगस से सुरक्षा और इम्युनिटी",
        "लीवर और किडनी का काम सुधरता है",
      ],
    },
    dosage: {
      en: ["Regular: 1 kg / tonne of feed", "High-moisture or toxin-suspected feed: 2 kg / tonne of feed", "Or as advised by the veterinarian"],
      hi: ["नियमित: 1 किलो / टन फीड", "ज़्यादा नमी या टॉक्सिन के शक वाला फीड: 2 किलो / टन फीड", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "Feed with more than one toxin — common when maize, DORB and other raw materials are stored damp — and farms seeing poor growth, low eggs or vaccine failures.",
        hi: "एक से ज़्यादा टॉक्सिन वाला फीड — जो मक्का, DORB और दूसरे कच्चे माल के नम स्टोर होने पर आम है — और जिन फार्म में ग्रोथ कम, अंडे कम या वैक्सीन फेल हो रहे हैं।",
      },
      how: {
        en: "Three binders cover different toxins: activated clay for aflatoxin, activated charcoal for ochratoxin and T-2, and yeast MOS for bacterial toxins. Neem and the rejuvenators protect the liver and kidneys that the toxins attack.",
        hi: "तीन बाइंडर अलग-अलग ज़हर पकड़ते हैं: एक्टिवेटेड क्ले अफ्लाटॉक्सिन, एक्टिवेटेड चारकोल ओक्राटॉक्सिन और T-2, और यीस्ट MOS बैक्टीरिया के ज़हर। नीम और रिजुविनेटर लीवर और किडनी को बचाते हैं।",
      },
      pitch: {
        en: "Feed rarely has just one toxin. DiTox-3 Plus uses three binders plus neem so nothing slips through.",
        hi: "फीड में शायद ही कभी एक ही ज़हर होता है। DiTox-3 Plus तीन बाइंडर और नीम से हर तरह का ज़हर पकड़ता है।",
      },
    },
  },
  {
    slug: "ditox-3-premium",
    name: "DiTox-3 Premium",
    category: "toxin-binders",
    form: "feed",
    tagline: { en: "Complete toxin binder with liver protection", hi: "लीवर सुरक्षा के साथ संपूर्ण टॉक्सिन बाइंडर" },
    composition: [
      "Activated HSCAS (natural dipolar phyllosilicates)",
      "Mannan oligosaccharides (MOS)",
      "Activated carbon",
      "Beta-glucans",
      "Organic acids",
      "Phyllanthus niruri",
      "Liver and kidney rejuvenators",
    ],
    benefits: {
      en: [
        "Binds mycotoxins, chemical toxins and bacterial toxins",
        "Organic acids lower gut pH and neutralise bacterial toxins",
        "Beta-glucans boost immunity; Phyllanthus niruri protects the liver",
        "Completely replaces separate liver tonic use in feed and water",
        "Better production and reproductive performance",
      ],
      hi: [
        "माइकोटॉक्सिन, केमिकल और बैक्टीरिया के ज़हर — सब बांधता है",
        "ऑर्गेनिक एसिड आंत का pH कम करके बैक्टीरिया के ज़हर बेअसर करते हैं",
        "बीटा-ग्लूकन इम्युनिटी बढ़ाते हैं; भुई आंवला (फिलैन्थस) लीवर बचाता है",
        "फीड और पानी में अलग लीवर टॉनिक की ज़रूरत पूरी तरह खत्म",
        "बेहतर प्रोडक्शन और प्रजनन क्षमता",
      ],
    },
    dosage: {
      en: ["Regular: 1 kg / tonne of feed", "High-moisture or toxin-suspected feed: 2 kg / tonne of feed", "Or as advised by the veterinarian"],
      hi: ["नियमित: 1 किलो / टन फीड", "ज़्यादा नमी या टॉक्सिन के शक वाला फीड: 2 किलो / टन फीड", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    storage: { en: "Shelf life 24 months from manufacture", hi: "निर्माण से 24 महीने तक उपयोग योग्य" },
    learn: {
      problem: {
        en: "High-value flocks (breeders, layers) where the farmer is also buying a separate liver tonic, or where toxins and gut infections come together.",
        hi: "कीमती फ्लॉक (ब्रीडर, लेयर) जहां किसान अलग से लीवर टॉनिक भी खरीद रहा है, या जहां टॉक्सिन और आंत का इन्फेक्शन साथ में हैं।",
      },
      how: {
        en: "Everything in DiTox-3 Plus, plus organic acids to neutralise bacterial toxins, beta-glucans for immunity and Phyllanthus niruri as a herbal liver protector.",
        hi: "DiTox-3 Plus की सारी खूबियां, साथ में बैक्टीरिया के ज़हर के लिए ऑर्गेनिक एसिड, इम्युनिटी के लिए बीटा-ग्लूकन, और लीवर बचाने के लिए भुई आंवला (फिलैन्थस नीरुरी)।",
      },
      pitch: {
        en: "Toxin binder and liver tonic in one bag — stop buying them separately.",
        hi: "टॉक्सिन बाइंडर और लीवर टॉनिक एक ही बोरी में — अलग-अलग खरीदना बंद कीजिए।",
      },
      objection: {
        q: { en: "Premium binders are expensive.", hi: "प्रीमियम बाइंडर महंगे होते हैं।" },
        a: {
          en: "Add up what you spend on the binder plus a liver tonic. DiTox-3 Premium replaces the liver tonic completely, so the real cost is often lower.",
          hi: "बाइंडर और लीवर टॉनिक दोनों का खर्च जोड़िए। DiTox-3 Premium लीवर टॉनिक की पूरी जगह लेता है, इसलिए असली खर्च अक्सर कम पड़ता है।",
        },
      },
    },
  },
  {
    slug: "prozenbio-bsb",
    name: "ProZenBio-BSB",
    category: "probiotics",
    form: "feed",
    tagline: { en: "Thermostable spore probiotic for feed", hi: "फीड के लिए गर्मी सहने वाला स्पोर प्रोबायोटिक" },
    composition: [
      "Bacillus subtilis 2057 — 2 × 10⁹ cfu/g",
      "Bacillus licheniformis PBL01 — 2 × 10⁹ cfu/g",
      "Bacillus amyloliquefaciens 10440 — 5 × 10⁸ cfu/g",
      "Saccharomyces boulardii 5375 — 5 × 10⁸ cfu/g",
    ],
    benefits: {
      en: [
        "Thermostable organisms with the highest recovery in pellet feed",
        "Grows beneficial microbes in the gut",
        "Antimicrobial peptides protect against E. coli, Salmonella and Clostridia",
        "Strengthens the gut lining (mucins and defensins)",
        "Regular use reduces wet litter",
      ],
      hi: [
        "पेलेट फीड में भी ज़िंदा रहने वाले थर्मोस्टेबल जीवाणु",
        "आंत में अच्छे जीवाणु बढ़ाता है",
        "E. coli, साल्मोनेला और क्लोस्ट्रीडिया से सुरक्षा",
        "आंत की परत मज़बूत",
        "नियमित इस्तेमाल से गीला लिटर कम",
      ],
    },
    dosage: {
      en: ["Broilers / layers / breeders: 350–500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर / लेयर / ब्रीडर: 350–500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Farms reducing antibiotics in feed, or with recurring gut infections and wet litter.",
        hi: "जो फार्म फीड में एंटीबायोटिक कम कर रहे हैं, या जहां बार-बार आंत का इन्फेक्शन और गीला लिटर है।",
      },
      how: {
        en: "Bacillus spores survive pelleting heat, wake up in the gut and produce natural antimicrobial peptides that push out E. coli, Salmonella and Clostridia. The yeast S. boulardii adds gut protection and helps the lining secrete protective mucus.",
        hi: "बैसिलस स्पोर पेलेटिंग की गर्मी सह लेते हैं, आंत में सक्रिय होते हैं और प्राकृतिक एंटीमाइक्रोबियल पेप्टाइड बनाते हैं जो E. coli, साल्मोनेला और क्लोस्ट्रीडिया को बाहर करते हैं। यीस्ट S. boulardii आंत की सुरक्षा बढ़ाता है।",
      },
      pitch: {
        en: "Four poultry-specific strains that survive the pellet mill and keep the gut — and the litter — in good shape.",
        hi: "चार पोल्ट्री-विशेष स्ट्रेन जो पेलेट मिल में भी बचते हैं और आंत व लिटर दोनों को ठीक रखते हैं।",
      },
    },
  },
  {
    slug: "prozenbio-ws-plus",
    name: "ProZenBio-WS Plus",
    category: "probiotics",
    form: "water",
    tagline: { en: "Water-soluble probiotic with enzymes and MOS", hi: "एंज़ाइम और MOS वाला पानी में घुलने वाला प्रोबायोटिक" },
    composition: [
      "Bacillus subtilis",
      "Bacillus licheniformis",
      "Bacillus coagulans",
      "Encapsulated Lactobacillus acidophilus",
      "Digestive enzymes",
      "Water-soluble mannan oligosaccharides (MOS)",
    ],
    benefits: {
      en: [
        "Delivers live probiotics straight to the gut through drinking water",
        "Controls dysbacteriosis and loose droppings",
        "Gives chicks a strong start",
        "Encapsulated Lactobacillus survives to reach the intestine",
      ],
      hi: [
        "पीने के पानी से ज़िंदा प्रोबायोटिक सीधे आंत तक",
        "डिसबैक्टीरियोसिस और पतली बीट पर नियंत्रण",
        "चूज़ों को मज़बूत शुरुआत",
        "कैप्सूल वाला लैक्टोबैसिलस आंत तक ज़िंदा पहुंचता है",
      ],
    },
    dosage: {
      en: ["Loose droppings / dysbacteriosis, and for chicks: 5–10 g per 100 birds for 5–7 days in drinking water", "Or as recommended by the veterinarian"],
      hi: ["पतली बीट / डिसबैक्टीरियोसिस और चूज़ों के लिए: 5–10 ग्राम प्रति 100 पक्षी, 5–7 दिन पीने के पानी में", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 500, unit: "g" }],
    learn: {
      problem: {
        en: "Loose droppings after antibiotics, vaccination or a feed change, and the first days of chick life.",
        hi: "एंटीबायोटिक, वैक्सीनेशन या फीड बदलने के बाद पतली बीट, और चूज़ों के शुरुआती दिन।",
      },
      how: {
        en: "Freeze-dried probiotics, enzymes and MOS dissolve in water and reach the gut within hours, re-seeding good bacteria and helping digest feed while the gut recovers.",
        hi: "फ्रीज़-ड्राइड प्रोबायोटिक, एंज़ाइम और MOS पानी में घुलकर कुछ घंटों में आंत तक पहुंचते हैं, अच्छे बैक्टीरिया वापस लाते हैं और आंत ठीक होने तक पाचन में मदद करते हैं।",
      },
      pitch: {
        en: "After every antibiotic course or vaccination, 5–7 days of ProZenBio-WS Plus puts the gut back in order.",
        hi: "हर एंटीबायोटिक कोर्स या वैक्सीनेशन के बाद 5–7 दिन ProZenBio-WS Plus आंत को फिर से ठीक कर देता है।",
      },
    },
  },
];
