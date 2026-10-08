import type { Product } from "../types";

// AGPs, antibiotics and injectables, from the Product Manual. All are
// marked rx: the app shows them with a "use only on veterinarian advice"
// note, and the Learning notes stress diagnosis, full course and withdrawal.
export const MEDICINES: Product[] = [
  {
    slug: "avilomak-10",
    name: "AviloMak-10",
    category: "agps",
    form: "feed",
    rx: true,
    tagline: { en: "Unmatched AGP — avilamycin 10%", hi: "बेजोड़ AGP — एविलामाइसिन 10%" },
    composition: ["Avilamycin 10%"],
    benefits: {
      en: ["Prevents mortality from necrotic enteritis caused by Clostridium perfringens in broilers", "Protects gut health and FCR in broilers"],
      hi: ["ब्रॉयलर में क्लोस्ट्रीडियम परफ्रिंजेंस से होने वाले नेक्रोटिक एंटेराइटिस की मौतें रोकता है", "ब्रॉयलर में आंत की सेहत और FCR की रक्षा"],
    },
    dosage: {
      en: ["Mix 100–150 g per 1000 kg of feed (gives 10–15 ppm avilamycin)", "Must be thoroughly mixed in broiler feed before use", "Or as advised by the veterinarian / nutritionist"],
      hi: ["100–150 ग्राम प्रति 1000 किलो फीड मिलाएं (10–15 ppm एविलामाइसिन)", "इस्तेमाल से पहले ब्रॉयलर फीड में अच्छी तरह मिलाना ज़रूरी", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Broiler farms with necrotic enteritis: sudden deaths, dark sticky droppings, birds that look fine one day and are dead the next.",
        hi: "नेक्रोटिक एंटेराइटिस वाले ब्रॉयलर फार्म: अचानक मौतें, गहरी चिपचिपी बीट, आज ठीक दिखने वाला पक्षी कल मरा मिलता है।",
      },
      how: {
        en: "Avilamycin acts against gram-positive bacteria such as Clostridium perfringens in the gut, keeping their numbers low so they cannot damage the gut lining.",
        hi: "एविलामाइसिन आंत में क्लोस्ट्रीडियम परफ्रिंजेंस जैसे ग्राम-पॉज़िटिव बैक्टीरिया पर असर करता है और उनकी संख्या कम रखता है, ताकि वे आंत की परत को नुकसान न पहुंचाएं।",
      },
      pitch: {
        en: "Low inclusion — 100 to 150 g per tonne — to keep necrotic enteritis away, on the nutritionist's advice.",
        hi: "कम मात्रा — 100 से 150 ग्राम प्रति टन — नेक्रोटिक एंटेराइटिस दूर रखने के लिए, न्यूट्रिशनिस्ट की सलाह पर।",
      },
    },
  },
  {
    slug: "zenbracin-4",
    name: "Zenbracin 4%",
    category: "agps",
    form: "feed",
    rx: true,
    tagline: { en: "Bambermycin 4% AGP", hi: "बैम्बरमाइसिन 4% AGP" },
    composition: ["Bambermycin 4%"],
    benefits: {
      en: [
        "Prevention and control of necrotic enteritis caused by Clostridium spp.",
        "Helps prevent infections by Streptococcus, Staphylococcus, Clostridium, E. coli, Pasteurella and Salmonella",
      ],
      hi: [
        "क्लोस्ट्रीडियम से होने वाले नेक्रोटिक एंटेराइटिस की रोकथाम और नियंत्रण",
        "स्ट्रेप्टोकोकस, स्टैफिलोकोकस, क्लोस्ट्रीडियम, E. coli, पाश्चुरेला और साल्मोनेला इन्फेक्शन से बचाव में मदद",
      ],
    },
    dosage: {
      en: ["Broilers / breeders / layers: 125–150 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ब्रॉयलर / ब्रीडर / लेयर: 125–150 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Broiler, breeder and layer farms wanting to keep Clostridium and necrotic enteritis under control.",
        hi: "ब्रॉयलर, ब्रीडर और लेयर फार्म जो क्लोस्ट्रीडियम और नेक्रोटिक एंटेराइटिस को काबू में रखना चाहते हैं।",
      },
      how: {
        en: "Bambermycin targets gram-positive bacteria in the gut, keeping Clostridium in check at a low feed inclusion.",
        hi: "बैम्बरमाइसिन आंत के ग्राम-पॉज़िटिव बैक्टीरिया पर काम करता है और कम मात्रा में ही क्लोस्ट्रीडियम को काबू में रखता है।",
      },
      pitch: {
        en: "Suitable for broilers, breeders and layers at 125–150 g per tonne.",
        hi: "ब्रॉयलर, ब्रीडर और लेयर — तीनों के लिए, 125–150 ग्राम प्रति टन।",
      },
    },
  },
  {
    slug: "zee-md-plus",
    name: "Zee MD Plus",
    category: "agps",
    form: "feed",
    rx: true,
    tagline: { en: "Bacitracin methylene disalicylate 10%", hi: "बैसिट्रेसिन मिथाइलीन डाइसैलिसिलेट 10%" },
    composition: ["Bacitracin methylene disalicylate (BMD) 10%"],
    benefits: {
      en: ["Prevention and control of necrotic enteritis caused by Clostridium spp.", "Controls dysbacteriosis"],
      hi: ["क्लोस्ट्रीडियम से होने वाले नेक्रोटिक एंटेराइटिस की रोकथाम और नियंत्रण", "डिसबैक्टीरियोसिस पर नियंत्रण"],
    },
    dosage: {
      en: ["Prevention of necrotic enteritis: 500 g / tonne of feed", "Treatment of necrotic enteritis: 1 kg / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["नेक्रोटिक एंटेराइटिस से बचाव: 500 ग्राम / टन फीड", "नेक्रोटिक एंटेराइटिस का इलाज: 1 किलो / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Necrotic enteritis outbreaks and dysbacteriosis (imbalanced gut bacteria with undigested feed in droppings).",
        hi: "नेक्रोटिक एंटेराइटिस और डिसबैक्टीरियोसिस (आंत के बैक्टीरिया का असंतुलन, बीट में बिना पचा फीड)।",
      },
      how: {
        en: "BMD acts on Clostridium and other gram-positive bacteria in the gut. It has a prevention dose and a higher treatment dose.",
        hi: "BMD आंत में क्लोस्ट्रीडियम और दूसरे ग्राम-पॉज़िटिव बैक्टीरिया पर काम करता है। इसकी बचाव की डोज़ और इलाज की ज़्यादा डोज़ अलग हैं।",
      },
      pitch: {
        en: "Two doses, one product: 500 g/t to prevent necrotic enteritis, 1 kg/t to treat it — on veterinary advice.",
        hi: "एक प्रोडक्ट, दो डोज़: बचाव के लिए 500 ग्राम/टन, इलाज के लिए 1 किलो/टन — वेटेरिनरी सलाह पर।",
      },
    },
  },
  {
    slug: "ciprozen-10",
    name: "CiproZen-10% (Water Soluble)",
    category: "antibiotics",
    form: "water",
    rx: true,
    tagline: { en: "Ciprofloxacin 10% water-soluble powder", hi: "सिप्रोफ्लॉक्सासिन 10% पानी में घुलने वाला पाउडर" },
    composition: ["Ciprofloxacin hydrochloride 10%"],
    benefits: {
      en: [
        "For gut, respiratory and urinary tract infections from ciprofloxacin-sensitive bacteria",
        "E. coli (colisepticaemia), Campylobacter, Haemophilus (infectious coryza)",
        "Mycoplasma (CRD), Pasteurella (fowl cholera), Salmonella (fowl typhoid)",
        "Also active against some gram-positive bacteria (Staphylococcus)",
      ],
      hi: [
        "सिप्रोफ्लॉक्सासिन से ठीक होने वाले आंत, सांस और मूत्र मार्ग के इन्फेक्शन",
        "E. coli (कोलीसेप्टीसीमिया), कैम्पिलोबैक्टर, हीमोफिलस (कोराइज़ा)",
        "माइकोप्लाज़्मा (CRD), पाश्चुरेला (फाउल कॉलरा), साल्मोनेला (फाउल टाइफॉइड)",
        "कुछ ग्राम-पॉज़िटिव बैक्टीरिया (स्टैफिलोकोकस) पर भी असर",
      ],
    },
    dosage: {
      en: ["1 g / litre of water for 3–5 days", "10–15 mg / kg body weight", "As advised by the veterinarian"],
      hi: ["1 ग्राम / लीटर पानी, 3–5 दिन", "10–15 mg / kg शरीर वज़न", "वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 500, unit: "g" }],
    learn: {
      problem: {
        en: "Mixed bacterial outbreaks — coryza, CRD, fowl cholera, E. coli or Salmonella — diagnosed by the veterinarian.",
        hi: "वेटेरिनेरियन द्वारा पहचाने गए बैक्टीरियल इन्फेक्शन — कोराइज़ा, CRD, फाउल कॉलरा, E. coli या साल्मोनेला।",
      },
      how: {
        en: "Ciprofloxacin, a fluoroquinolone, blocks the enzyme bacteria need to copy their DNA, so they cannot multiply.",
        hi: "सिप्रोफ्लॉक्सासिन (फ्लोरोक्विनोलोन) उस एंज़ाइम को रोकता है जिससे बैक्टीरिया अपना DNA बनाते हैं, इसलिए वे बढ़ नहीं पाते।",
      },
      pitch: {
        en: "One broad-spectrum antibiotic in the water for gut and respiratory infections — 1 g per litre for 3–5 days on the vet's advice.",
        hi: "आंत और सांस के इन्फेक्शन के लिए पानी में एक ब्रॉड-स्पेक्ट्रम एंटीबायोटिक — वेटेरिनेरियन की सलाह पर 1 ग्राम प्रति लीटर, 3–5 दिन।",
      },
    },
  },
  {
    slug: "tetramak-otc-feed",
    name: "Tetra Mak-OTC (Feed Supplement)",
    category: "antibiotics",
    form: "feed",
    rx: true,
    tagline: { en: "Oxytetracycline 20% for feed", hi: "फीड के लिए ऑक्सीटेट्रासाइक्लिन 20%" },
    composition: ["Oxytetracycline 20%"],
    benefits: {
      en: ["Treats Mycoplasma, Chlamydia, Pasteurella, Clostridium spp. and spirochetes", "Also some protozoal infections"],
      hi: ["माइकोप्लाज़्मा, क्लैमाइडिया, पाश्चुरेला, क्लोस्ट्रीडियम और स्पाइरोकीट का इलाज", "कुछ प्रोटोज़ोआ इन्फेक्शन पर भी"],
    },
    dosage: {
      en: ["500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "kg" }],
    learn: {
      problem: {
        en: "Respiratory and mixed infections where the vet wants a tetracycline given through feed.",
        hi: "सांस और मिले-जुले इन्फेक्शन जहां वेटेरिनेरियन फीड से टेट्रासाइक्लिन देना चाहते हैं।",
      },
      how: {
        en: "Oxytetracycline stops bacteria from making proteins, so they stop growing and the bird's immunity clears them.",
        hi: "ऑक्सीटेट्रासाइक्लिन बैक्टीरिया को प्रोटीन बनाने से रोकता है, जिससे वे बढ़ना बंद करते हैं और पक्षी की इम्युनिटी उन्हें खत्म कर देती है।",
      },
      pitch: {
        en: "A trusted broad-spectrum antibiotic in feed form — 500 g per tonne, as the veterinarian advises.",
        hi: "भरोसेमंद ब्रॉड-स्पेक्ट्रम एंटीबायोटिक फीड रूप में — वेटेरिनेरियन की सलाह पर 500 ग्राम प्रति टन।",
      },
    },
  },
  {
    slug: "tetramak-otc-ws",
    name: "Tetra Mak-OTC (Water Soluble)",
    category: "antibiotics",
    form: "water",
    rx: true,
    tagline: { en: "Oxytetracycline 10% for drinking water", hi: "पीने के पानी के लिए ऑक्सीटेट्रासाइक्लिन 10%" },
    composition: ["Oxytetracycline 10%"],
    benefits: {
      en: ["Treats Mycoplasma, Chlamydia, Pasteurella, Clostridium spp. and spirochetes", "Also some protozoal infections"],
      hi: ["माइकोप्लाज़्मा, क्लैमाइडिया, पाश्चुरेला, क्लोस्ट्रीडियम और स्पाइरोकीट का इलाज", "कुछ प्रोटोज़ोआ इन्फेक्शन पर भी"],
    },
    dosage: {
      en: ["1 g / litre of water", "Or as advised by the veterinarian / nutritionist"],
      hi: ["1 ग्राम / लीटर पानी", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 250, unit: "g" }],
    learn: {
      problem: {
        en: "The same infections as the feed form, when birds need treatment quickly through water — for example when they are eating less.",
        hi: "फीड वाले रूप जैसे ही इन्फेक्शन, जब पक्षियों को पानी से जल्दी इलाज चाहिए — जैसे जब वे कम खा रहे हों।",
      },
      how: {
        en: "Oxytetracycline stops bacteria from making proteins. In water it reaches sick birds that are still drinking but eating less.",
        hi: "ऑक्सीटेट्रासाइक्लिन बैक्टीरिया का प्रोटीन बनना रोकता है। पानी में देने से यह उन बीमार पक्षियों तक पहुंचता है जो पी रहे हैं पर कम खा रहे हैं।",
      },
      pitch: {
        en: "Sick birds drink before they eat — 1 g per litre reaches them fast.",
        hi: "बीमार पक्षी खाने से पहले पीते हैं — 1 ग्राम प्रति लीटर उन तक जल्दी पहुंचता है।",
      },
    },
  },
  {
    slug: "tiamumak-10",
    name: "Tiamumak 10%",
    category: "antibiotics",
    form: "feed",
    rx: true,
    tagline: { en: "Tiamulin 10% feed premix, micro-encapsulated", hi: "टियामुलिन 10% फीड प्रीमिक्स, माइक्रो-एनकैप्सुलेटेड" },
    composition: ["Each kg of free-flowing premix contains:", "Tiamulin hydrogen fumarate 100 g"],
    benefits: {
      en: ["Improved and steady egg production", "Improved feed conversion ratio (FCR)", "Micro-encapsulated, free-flowing premix for even mixing"],
      hi: ["बेहतर और स्थिर अंडा उत्पादन", "बेहतर FCR", "माइक्रो-एनकैप्सुलेटेड, आसानी से मिलने वाला प्रीमिक्स"],
    },
    dosage: {
      en: ["Growth promoter: 200 g / tonne of feed", "Regular dose: 500 g / tonne of feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["ग्रोथ प्रमोटर: 200 ग्राम / टन फीड", "नियमित डोज़: 500 ग्राम / टन फीड", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "kg" }],
    learn: {
      problem: {
        en: "Layer and breeder flocks where Mycoplasma pulls egg production and FCR down.",
        hi: "लेयर और ब्रीडर फ्लॉक जहां माइकोप्लाज़्मा से अंडा उत्पादन और FCR गिर रहे हैं।",
      },
      how: {
        en: "Tiamulin is highly active against Mycoplasma, which causes CRD and production drops. Micro-encapsulation protects it in feed and spreads it evenly.",
        hi: "टियामुलिन माइकोप्लाज़्मा पर बहुत असरदार है, जो CRD और प्रोडक्शन गिरने की वजह है। माइक्रो-एनकैप्सुलेशन इसे फीड में सुरक्षित रखता है और बराबर फैलाता है।",
      },
      pitch: {
        en: "Keeps Mycoplasma down so eggs and FCR stay steady — 200 or 500 g per tonne as advised.",
        hi: "माइकोप्लाज़्मा को काबू में रखकर अंडे और FCR स्थिर रखता है — सलाह अनुसार 200 या 500 ग्राम प्रति टन।",
      },
    },
  },
  {
    slug: "tiamumak-80",
    name: "Tiamumak 80%",
    category: "antibiotics",
    form: "feed",
    rx: true,
    tagline: { en: "Concentrated tiamulin feed premix", hi: "गाढ़ा टियामुलिन फीड प्रीमिक्स" },
    composition: ["Tiamulin hydrogen fumarate 100 g"],
    benefits: {
      en: ["Improves and sustains egg production", "Improves feed conversion ratio (FCR)", "Reduces respiratory problems such as CRD and complicated CRD caused by Mycoplasma"],
      hi: ["अंडा उत्पादन बढ़ाता और बनाए रखता है", "बेहतर FCR", "माइकोप्लाज़्मा से होने वाले CRD और कॉम्प्लिकेटेड CRD जैसी सांस की समस्याएं कम"],
    },
    dosage: {
      en: ["15–30 mg / kg body weight", "Or as advised by the veterinarian / nutritionist"],
      hi: ["15–30 mg / kg शरीर वज़न", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "kg" }],
    learn: {
      problem: {
        en: "Active CRD or complicated CRD outbreaks needing a strong anti-Mycoplasma treatment by body weight.",
        hi: "सक्रिय CRD या कॉम्प्लिकेटेड CRD, जहां शरीर वज़न के हिसाब से माइकोप्लाज़्मा का तेज़ इलाज चाहिए।",
      },
      how: {
        en: "The same tiamulin as Tiamumak 10%, in a concentrated form dosed by body weight for treatment rather than routine feed use.",
        hi: "Tiamumak 10% वाला ही टियामुलिन, गाढ़े रूप में, जो इलाज के लिए शरीर वज़न के हिसाब से दिया जाता है।",
      },
      pitch: {
        en: "For a CRD outbreak, a concentrated tiamulin the vet can dose precisely by body weight.",
        hi: "CRD के प्रकोप में गाढ़ा टियामुलिन, जिसे वेटेरिनेरियन शरीर वज़न से सटीक डोज़ कर सकें।",
      },
    },
  },
  {
    slug: "tylomak-h",
    name: "Tylomak-H",
    category: "antibiotics",
    form: "feed",
    rx: true,
    tagline: { en: "Tylosin phosphate 10% for feed", hi: "फीड के लिए टायलोसिन फॉस्फेट 10%" },
    composition: ["Each kg contains:", "Tylosin phosphate 10%"],
    benefits: {
      en: [
        "Prevention and treatment of infections from tylosin-sensitive organisms",
        "Mycoplasmosis, chronic respiratory disease (CRD) and infectious synovitis in chickens and turkeys",
        "Infectious sinusitis in turkeys",
        "Spirochetosis (borreliosis) in chickens",
      ],
      hi: [
        "टायलोसिन से ठीक होने वाले इन्फेक्शन की रोकथाम और इलाज",
        "मुर्गी और टर्की में माइकोप्लाज़्मोसिस, CRD और संक्रामक साइनोवाइटिस",
        "टर्की में संक्रामक साइनसाइटिस",
        "मुर्गी में स्पाइरोकीटोसिस (बोरेलियोसिस)",
      ],
    },
    dosage: {
      en: ["Mix 500 g – 1 kg per tonne of complete feed", "Or as advised by the veterinarian / nutritionist"],
      hi: ["500 ग्राम – 1 किलो प्रति टन तैयार फीड में मिलाएं", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 25, unit: "kg" }],
    learn: {
      problem: {
        en: "Mycoplasma problems — CRD, swollen joints (synovitis) — in chickens and turkeys.",
        hi: "माइकोप्लाज़्मा की समस्या — CRD, सूजे जोड़ (साइनोवाइटिस) — मुर्गी और टर्की में।",
      },
      how: {
        en: "Tylosin, a macrolide, stops Mycoplasma and gram-positive bacteria from making proteins.",
        hi: "टायलोसिन (मैक्रोलाइड) माइकोप्लाज़्मा और ग्राम-पॉज़िटिव बैक्टीरिया को प्रोटीन बनाने से रोकता है।",
      },
      pitch: {
        en: "The go-to feed antibiotic for Mycoplasma, CRD and synovitis, at 500 g – 1 kg per tonne as advised.",
        hi: "माइकोप्लाज़्मा, CRD और साइनोवाइटिस के लिए भरोसेमंद फीड एंटीबायोटिक, सलाह अनुसार 500 ग्राम – 1 किलो प्रति टन।",
      },
    },
  },
  {
    slug: "doxicon-n",
    name: "Doxicon-N",
    category: "antibiotics",
    form: "water",
    rx: true,
    tagline: { en: "Doxycycline + neomycin water-soluble powder", hi: "डॉक्सीसाइक्लिन + नियोमाइसिन, पानी में घुलने वाला पाउडर" },
    composition: ["Each gram contains:", "Doxycycline hydrochloride IP equivalent to doxycycline 100 mg", "Neomycin sulphate IP equivalent to neomycin 100 mg", "Excipients q.s."],
    benefits: {
      en: [
        "Effective against mixed infections: complicated CRD, non-specific diarrhoea, fowl cholera, colisepticaemia, pullorum disease and infectious synovitis",
        "Covers secondary infections from gram-positive and gram-negative bacteria",
        "Prevents first-week mortality in chicks",
      ],
      hi: [
        "मिले-जुले इन्फेक्शन पर असरदार: कॉम्प्लिकेटेड CRD, दस्त, फाउल कॉलरा, कोलीसेप्टीसीमिया, पुलोरम और साइनोवाइटिस",
        "ग्राम+ और ग्राम− बैक्टीरिया के सेकेंडरी इन्फेक्शन पर भी",
        "चूज़ों में पहले हफ्ते की मौतें रोकता है",
      ],
    },
    dosage: {
      en: ["Prophylactic: 1 g in 10 litres of water for 4–5 days", "Severe infection: 1 g in 4 litres of water for 3–5 days", "Or as advised by the veterinarian"],
      hi: ["बचाव: 1 ग्राम / 10 लीटर पानी, 4–5 दिन", "गंभीर इन्फेक्शन: 1 ग्राम / 4 लीटर पानी, 3–5 दिन", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [
      { size: 50, unit: "g" },
      { size: 100, unit: "g" },
      { size: 250, unit: "g" },
    ],
    learn: {
      problem: {
        en: "Chick placements (first-week mortality) and mixed respiratory-plus-gut infections.",
        hi: "चूज़ों की शुरुआत (पहले हफ्ते की मौतें) और सांस व आंत के मिले-जुले इन्फेक्शन।",
      },
      how: {
        en: "Doxycycline works throughout the body, including the airways; neomycin stays in the gut and acts on E. coli and Salmonella there. Together they cover respiratory and gut infections.",
        hi: "डॉक्सीसाइक्लिन पूरे शरीर में, सांस नली समेत, काम करता है; नियोमाइसिन आंत में रहकर वहां E. coli और साल्मोनेला पर असर करता है। साथ मिलकर ये सांस और आंत दोनों के इन्फेक्शन ढकते हैं।",
      },
      pitch: {
        en: "Two antibiotics, one sachet — covers both the airways and the gut, and protects chicks in their first week.",
        hi: "दो एंटीबायोटिक, एक पैकेट — सांस और आंत दोनों का इलाज, और चूज़ों के पहले हफ्ते की सुरक्षा।",
      },
    },
  },
  {
    slug: "primosol-s",
    name: "Primosol-S",
    category: "antibiotics",
    form: "water",
    rx: true,
    tagline: { en: "Sulphadiazine + trimethoprim water-soluble powder", hi: "सल्फाडायज़ीन + ट्राइमेथोप्रिम, पानी में घुलने वाला पाउडर" },
    composition: ["Sulphadiazine IP 10% w/w", "Trimethoprim IP 2% w/w"],
    benefits: {
      en: [
        "Combined antibiotic therapy against a wide range of gram-positive and gram-negative bacteria",
        "Manages respiratory infections, gastrointestinal infections and coccidiosis",
        "Supports overall flock health and productivity",
      ],
      hi: [
        "ग्राम+ और ग्राम− बैक्टीरिया की बड़ी रेंज पर संयुक्त एंटीबायोटिक",
        "सांस, आंत के इन्फेक्शन और कॉक्सीडियोसिस में उपयोगी",
        "फ्लॉक की सेहत और उत्पादकता बनाए रखता है",
      ],
    },
    dosage: {
      en: ["15–20 mg / kg body weight", "Or as advised by the veterinarian"],
      hi: ["15–20 mg / kg शरीर वज़न", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [
      { size: 100, unit: "g" },
      { size: 500, unit: "g" },
      { size: 1, unit: "kg" },
    ],
    learn: {
      problem: {
        en: "Bacterial gut and respiratory infections, and coccidiosis, as diagnosed by the veterinarian.",
        hi: "वेटेरिनेरियन द्वारा पहचाने गए आंत और सांस के बैक्टीरियल इन्फेक्शन, और कॉक्सीडियोसिस।",
      },
      how: {
        en: "Sulphadiazine and trimethoprim block two steps of the same pathway bacteria use to make folic acid, so together they are much stronger than either alone.",
        hi: "सल्फाडायज़ीन और ट्राइमेथोप्रिम उसी रास्ते के दो कदम रोकते हैं जिससे बैक्टीरिया फोलिक एसिड बनाते हैं, इसलिए साथ में ये अकेले से कहीं ज़्यादा ताकतवर हैं।",
      },
      pitch: {
        en: "A double-action combination that also covers coccidiosis — useful when gut and respiratory problems come together.",
        hi: "दोहरे असर वाला कॉम्बिनेशन जो कॉक्सीडियोसिस पर भी काम करता है — जब आंत और सांस की समस्या साथ हों।",
      },
    },
  },
  {
    slug: "respiflox-bh",
    name: "RespiFlox-BH",
    category: "antibiotics",
    form: "liquid",
    rx: true,
    tagline: { en: "Levofloxacin + bromhexine oral liquid", hi: "लेवोफ्लॉक्सासिन + ब्रोमहेक्सिन ओरल लिक्विड" },
    composition: ["Each ml contains:", "Levofloxacin hemihydrate IP equivalent to levofloxacin 100 mg", "Bromhexine hydrochloride IP 7.5 mg"],
    benefits: {
      en: [
        "Effective against CRD caused by Mycoplasma and secondary bacterial infections",
        "Treats bacterial enteritis from E. coli or Salmonella",
        "Manages mucus-heavy conditions like CRD and infectious bronchitis",
        "Bromhexine boosts levofloxacin's effect in the airways",
        "Clears mucus and improves oxygenation for faster recovery",
      ],
      hi: [
        "माइकोप्लाज़्मा से CRD और सेकेंडरी बैक्टीरियल इन्फेक्शन पर असरदार",
        "E. coli या साल्मोनेला से आंत के इन्फेक्शन का इलाज",
        "ज़्यादा बलगम वाली स्थितियां जैसे CRD और IB",
        "ब्रोमहेक्सिन सांस नली में लेवोफ्लॉक्सासिन का असर बढ़ाता है",
        "बलगम साफ, बेहतर ऑक्सीजन, जल्दी रिकवरी",
      ],
    },
    dosage: {
      en: ["10–15 mg / kg body weight continuously for 3–5 days", "Or as advised by the veterinarian"],
      hi: ["10–15 mg / kg शरीर वज़न, लगातार 3–5 दिन", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 1, unit: "L" }],
    learn: {
      problem: {
        en: "CRD with rattling breath and mucus, often mixed with E. coli — when birds are struggling to breathe.",
        hi: "घरघराती सांस और बलगम वाला CRD, अक्सर E. coli के साथ — जब पक्षियों को सांस लेने में तकलीफ हो।",
      },
      how: {
        en: "Levofloxacin kills the bacteria; bromhexine thins the mucus so it can be cleared, which also lets more antibiotic reach the infection.",
        hi: "लेवोफ्लॉक्सासिन बैक्टीरिया मारता है; ब्रोमहेक्सिन बलगम पतला करता है ताकि वह साफ हो, जिससे दवा भी इन्फेक्शन तक बेहतर पहुंचती है।",
      },
      pitch: {
        en: "Antibiotic plus mucus-clearer in one bottle — birds breathe easier sooner.",
        hi: "एंटीबायोटिक और बलगम साफ करने वाली दवा एक ही बोतल में — पक्षी जल्दी आराम से सांस लेते हैं।",
      },
    },
  },
  {
    slug: "gentazen",
    name: "GentaZen",
    category: "injectables",
    form: "injection",
    rx: true,
    tagline: { en: "Gentamicin sulphate injection", hi: "जेंटामाइसिन सल्फेट इंजेक्शन" },
    composition: ["Each ml contains:", "Gentamicin sulphate 40 mg"],
    benefits: {
      en: ["Treats diseases caused by E. coli, Salmonella pullorum, S. typhimurium, S. gallinarum and Pseudomonas aeruginosa"],
      hi: ["E. coli, साल्मोनेला पुलोरम, S. टाइफीम्यूरियम, S. गैलिनेरम और स्यूडोमोनास से होने वाली बीमारियों का इलाज"],
    },
    dosage: {
      en: ["2.5–5 mg / kg body weight (S/C, I/M or I/V)", "Or as advised by the veterinarian / nutritionist"],
      hi: ["2.5–5 mg / kg शरीर वज़न (S/C, I/M या I/V)", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 100, unit: "ml" }],
    learn: {
      problem: {
        en: "Salmonella and E. coli infections in breeders and other high-value birds, under a vet.",
        hi: "ब्रीडर और दूसरे कीमती पक्षियों में साल्मोनेला और E. coli इन्फेक्शन, वेटेरिनेरियन की देखरेख में।",
      },
      how: {
        en: "Gentamicin, an aminoglycoside, stops gram-negative bacteria from making proteins; injecting it gives every bird a full dose quickly.",
        hi: "जेंटामाइसिन (एमिनोग्लाइकोसाइड) ग्राम-नेगेटिव बैक्टीरिया का प्रोटीन बनना रोकता है; इंजेक्शन से हर पक्षी को पूरी डोज़ जल्दी मिलती है।",
      },
      pitch: {
        en: "Fast, precise treatment for Salmonella and E. coli in valuable birds.",
        hi: "कीमती पक्षियों में साल्मोनेला और E. coli का तेज़ और सटीक इलाज।",
      },
    },
  },
  {
    slug: "tylozen-20",
    name: "TyloZen-20",
    category: "injectables",
    form: "injection",
    rx: true,
    tagline: { en: "Tylosin tartrate injection", hi: "टायलोसिन टार्ट्रेट इंजेक्शन" },
    composition: ["Each ml contains:", "Tylosin tartrate 200 mg"],
    benefits: {
      en: [
        "Treats infections from gram-positive bacteria such as Clostridium, Staphylococcus and Streptococcus",
        "And from Mycoplasma, Chlamydophila and Pasteurella",
      ],
      hi: ["क्लोस्ट्रीडियम, स्टैफिलोकोकस और स्ट्रेप्टोकोकस जैसे ग्राम-पॉज़िटिव बैक्टीरिया के इन्फेक्शन का इलाज", "और माइकोप्लाज़्मा, क्लैमाइडोफिला और पाश्चुरेला पर भी"],
    },
    dosage: {
      en: ["15–30 mg / kg body weight (S/C or I/M)", "Or as advised by the veterinarian / nutritionist"],
      hi: ["15–30 mg / kg शरीर वज़न (S/C या I/M)", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 100, unit: "ml" }],
    learn: {
      problem: {
        en: "Mycoplasma and CRD in breeders and other valuable birds where an injection is preferred.",
        hi: "ब्रीडर और कीमती पक्षियों में माइकोप्लाज़्मा और CRD, जहां इंजेक्शन बेहतर हो।",
      },
      how: {
        en: "Tylosin, a macrolide, stops bacteria and Mycoplasma from making proteins. By injection it acts within hours.",
        hi: "टायलोसिन (मैक्रोलाइड) बैक्टीरिया और माइकोप्लाज़्मा का प्रोटीन बनना रोकता है। इंजेक्शन से कुछ घंटों में असर।",
      },
      pitch: {
        en: "Injectable tylosin for fast control of Mycoplasma in breeders.",
        hi: "ब्रीडर में माइकोप्लाज़्मा पर तेज़ नियंत्रण के लिए इंजेक्शन वाला टायलोसिन।",
      },
    },
  },
  {
    slug: "amikazen",
    name: "AmikaZen",
    category: "injectables",
    form: "injection",
    rx: true,
    tagline: { en: "Amikacin sulphate injection", hi: "एमिकासिन सल्फेट इंजेक्शन" },
    composition: ["Each ml contains:", "Amikacin sulphate 250 mg"],
    benefits: {
      en: [
        "Treats infections caused by Salmonella typhimurium, S. gallinarum, Pseudomonas aeruginosa and E. coli",
        "Also Mycobacterium avium, Klebsiella, Enterobacter and Corynebacterium",
      ],
      hi: ["साल्मोनेला टाइफीम्यूरियम, S. गैलिनेरम, स्यूडोमोनास और E. coli इन्फेक्शन का इलाज", "माइकोबैक्टीरियम एवियम, क्लेबसिएला, एंटेरोबैक्टर और कोरिनेबैक्टीरियम पर भी"],
    },
    dosage: {
      en: ["10–20 mg / kg body weight (S/C, I/M or I/V)", "Or as advised by the veterinarian / nutritionist"],
      hi: ["10–20 mg / kg शरीर वज़न (S/C, I/M या I/V)", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 100, unit: "ml" }],
    learn: {
      problem: {
        en: "Stubborn gram-negative infections (Salmonella, Pseudomonas, Klebsiella) that have not responded to other treatment, as decided by the vet.",
        hi: "ज़िद्दी ग्राम-नेगेटिव इन्फेक्शन (साल्मोनेला, स्यूडोमोनास, क्लेबसिएला) जिन पर दूसरा इलाज काम नहीं किया, वेटेरिनेरियन के निर्णय पर।",
      },
      how: {
        en: "Amikacin, an aminoglycoside, kills many gram-negative bacteria, including some that resist gentamicin.",
        hi: "एमिकासिन (एमिनोग्लाइकोसाइड) कई ग्राम-नेगेटिव बैक्टीरिया को मारता है, जिनमें कुछ जेंटामाइसिन से न मरने वाले भी शामिल हैं।",
      },
      pitch: {
        en: "A strong injectable for tough gram-negative infections, for the vet's toolkit.",
        hi: "कठिन ग्राम-नेगेटिव इन्फेक्शन के लिए ताकतवर इंजेक्शन, वेटेरिनेरियन के लिए।",
      },
    },
  },
  {
    slug: "zenoxy-la",
    name: "Zenoxy-LA",
    category: "injectables",
    form: "injection",
    rx: true,
    tagline: { en: "Long-acting oxytetracycline injection", hi: "लंबे असर वाला ऑक्सीटेट्रासाइक्लिन इंजेक्शन" },
    composition: ["Each ml contains:", "Oxytetracycline 200 mg"],
    benefits: {
      en: ["Treats infections by gram-positive and gram-negative organisms, including Mycoplasma, Pasteurella, E. coli, Haemophilus and Diplococcus"],
      hi: ["ग्राम+ और ग्राम− जीवाणुओं — माइकोप्लाज़्मा, पाश्चुरेला, E. coli, हीमोफिलस और डिप्लोकोकस — के इन्फेक्शन का इलाज"],
    },
    dosage: {
      en: ["50 mg / kg body weight (S/C or I/M)", "Or as advised by the veterinarian / nutritionist"],
      hi: ["50 mg / kg शरीर वज़न (S/C या I/M)", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 100, unit: "ml" }],
    learn: {
      problem: {
        en: "Fowl cholera, coryza and CRD where one long-acting dose is preferred over daily treatment.",
        hi: "फाउल कॉलरा, कोराइज़ा और CRD जहां रोज़ के इलाज के बजाय एक लंबे असर वाली डोज़ बेहतर हो।",
      },
      how: {
        en: "A long-acting oxytetracycline formulation keeps drug levels up for longer after a single injection.",
        hi: "लंबे असर वाला ऑक्सीटेट्रासाइक्लिन फॉर्मूला एक इंजेक्शन के बाद लंबे समय तक दवा का स्तर बनाए रखता है।",
      },
      pitch: {
        en: "Long-acting: fewer injections, less handling stress for the birds.",
        hi: "लंबा असर: कम इंजेक्शन, पक्षियों को कम पकड़ना-छोड़ना।",
      },
    },
  },
  {
    slug: "zenvita",
    name: "Zenvita",
    category: "injectables",
    form: "injection",
    rx: true,
    tagline: { en: "Multivitamin injection", hi: "मल्टीविटामिन इंजेक्शन" },
    composition: [
      "Vitamin A 4000 IU",
      "Vitamin D 4000 IU",
      "Vitamin E acetate 8 mg",
      "Niacinamide 20 mg",
      "Thiamine HCl 20 mg",
      "Pyridoxine HCl 10 mg",
      "Riboflavin phosphate sodium 2 mg",
      "D-Panthenol 2 mg",
      "Vitamin B12 20 mcg",
      "D-Biotin 20 mcg",
      "Phenol 0.5% w/v",
    ],
    benefits: {
      en: [
        "Quick stress reliever",
        "Better egg production and persistency, hatchability and shell thickness",
        "Prevents avitaminosis and malnutrition in chicks",
        "Stimulates antibody production for better immunity",
        "Anti-inflammatory and antioxidant",
        "Broiler chicks become more active, with better FCR and weight gain",
        "Faster recovery after bacterial and viral infection",
      ],
      hi: [
        "तनाव से तुरंत राहत",
        "बेहतर अंडा उत्पादन और उसकी निरंतरता, हैचेबिलिटी और मोटा छिलका",
        "चूज़ों में विटामिन की कमी और कुपोषण से बचाव",
        "एंटीबॉडी बनना बढ़ता है — बेहतर इम्युनिटी",
        "सूजन घटाने वाला और एंटीऑक्सीडेंट",
        "ब्रॉयलर चूज़े ज़्यादा फुर्तीले, बेहतर FCR और वज़न",
        "बैक्टीरियल और वायरल इन्फेक्शन के बाद जल्दी रिकवरी",
      ],
    },
    dosage: {
      en: ["1 ml / kg body weight (S/C or I/M)", "Or as advised by the veterinarian / nutritionist"],
      hi: ["1 ml / kg शरीर वज़न (S/C या I/M)", "या वेटेरिनेरियन / न्यूट्रिशनिस्ट की सलाह अनुसार"],
    },
    packs: [{ size: 100, unit: "ml" }],
    learn: {
      problem: {
        en: "Weak or recovering birds that are not eating or drinking enough to take vitamins orally, and valuable breeders under stress.",
        hi: "कमज़ोर या ठीक हो रहे पक्षी जो मुंह से विटामिन लेने लायक खा-पी नहीं रहे, और तनाव में कीमती ब्रीडर।",
      },
      how: {
        en: "Delivers vitamins A, D, E and the B-complex directly into the body, bypassing a sick gut, to restart appetite, metabolism and tissue repair.",
        hi: "विटामिन A, D, E और B-कॉम्प्लेक्स सीधे शरीर में पहुंचाता है, बीमार आंत को बायपास करके, ताकि भूख, मेटाबॉलिज़्म और ऊतकों की मरम्मत फिर शुरू हो।",
      },
      pitch: {
        en: "When a bird won't eat, the vitamins won't reach it — Zenvita by injection gets it back on its feet.",
        hi: "जब पक्षी खाएगा ही नहीं तो विटामिन कैसे पहुंचेगा — Zenvita इंजेक्शन उसे फिर खड़ा करता है।",
      },
    },
  },
  {
    slug: "cefton-tazo",
    name: "Cefton-Tazo",
    category: "injectables",
    form: "injection",
    rx: true,
    tagline: { en: "Ceftriaxone + tazobactam injection for I.M./I.V. use", hi: "सेफ्ट्रियाक्सोन + टैज़ोबैक्टम इंजेक्शन, I.M./I.V. के लिए" },
    composition: ["Ceftriaxone sodium 4000 mg", "Tazobactam 500 mg"],
    benefits: {
      en: [
        "Broad-spectrum antibiotic for bacterial infections in poultry",
        "Helps treat respiratory infections such as CRD caused by Mycoplasma or other pathogenic bacteria",
        "Tazobactam protects ceftriaxone from bacterial enzymes that would destroy it",
      ],
      hi: [
        "पोल्ट्री में बैक्टीरियल इन्फेक्शन के लिए ब्रॉड-स्पेक्ट्रम एंटीबायोटिक",
        "माइकोप्लाज़्मा या दूसरे बैक्टीरिया से होने वाले CRD जैसे सांस के इन्फेक्शन में मदद",
        "टैज़ोबैक्टम, सेफ्ट्रियाक्सोन को बैक्टीरिया के एंज़ाइम से बचाता है",
      ],
    },
    dosage: {
      en: ["15–20 mg / kg body weight", "Or as advised by the veterinarian"],
      hi: ["15–20 mg / kg शरीर वज़न", "या वेटेरिनेरियन की सलाह अनुसार"],
    },
    packs: [{ size: 4.5, unit: "g" }],
    learn: {
      problem: {
        en: "Serious respiratory and systemic bacterial infections where the vet needs a powerful injectable.",
        hi: "गंभीर सांस और पूरे शरीर के बैक्टीरियल इन्फेक्शन जहां वेटेरिनेरियन को ताकतवर इंजेक्शन चाहिए।",
      },
      how: {
        en: "Ceftriaxone, a cephalosporin, breaks the bacterial cell wall; tazobactam blocks the beta-lactamase enzymes some bacteria use to resist it.",
        hi: "सेफ्ट्रियाक्सोन (सेफालोस्पोरिन) बैक्टीरिया की कोशिका-दीवार तोड़ता है; टैज़ोबैक्टम उन बीटा-लैक्टामेज़ एंज़ाइम को रोकता है जिनसे कुछ बैक्टीरिया दवा से बचते हैं।",
      },
      pitch: {
        en: "A protected cephalosporin for when other antibiotics are not enough — the vet's choice for serious cases.",
        hi: "सुरक्षित सेफालोस्पोरिन, जब दूसरी एंटीबायोटिक काफी न हों — गंभीर केस में वेटेरिनेरियन की पसंद।",
      },
    },
  },
];
