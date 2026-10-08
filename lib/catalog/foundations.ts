import type { CategoryId, LList } from "./types";

// Technical foundations for each Learning course: the science and numbers
// a rep needs before the product lessons, so they can talk to a
// nutritionist or vet on equal terms.
export const FOUNDATIONS: Record<CategoryId, LList> = {
  enzymes: {
    en: [
      "Poultry lack enzymes for NSP (arabinoxylans in wheat/DORB, beta-glucans in barley, mannans in soybean meal) and for phytate; soluble NSP raises digesta viscosity.",
      "Enzymes work in three ways: release trapped nutrients, lower viscosity, and produce oligosaccharides that feed good bacteria.",
      "Nutritionists value enzymes by 'matrix' — the ME, protein, Ca and P credited in the formula. Talk matrix to nutritionists, FCR and litter to farmers.",
      "Thermostability matters for pelleted feed: conditioning at 80–90°C destroys unprotected enzymes.",
    ],
    hi: [
      "पक्षियों में NSP (गेहूं/DORB का अरेबिनोज़ाइलन, जौ का बीटा-ग्लूकन, सोयाबीन मील का मैनन) और फाइटेट पचाने के एंज़ाइम नहीं होते; घुलनशील NSP आंत की चिपचिपाहट बढ़ाता है।",
      "एंज़ाइम तीन तरह काम करते हैं: बंद पोषण छुड़ाना, चिपचिपाहट घटाना, और ओलिगोसैकेराइड बनाना जो अच्छे बैक्टीरिया का भोजन हैं।",
      "न्यूट्रिशनिस्ट एंज़ाइम को 'मैट्रिक्स' से आंकते हैं — फॉर्मूले में मिलने वाला ME, प्रोटीन, Ca और P। न्यूट्रिशनिस्ट से मैट्रिक्स, किसान से FCR और लिटर की बात करें।",
      "पेलेट फीड में थर्मोस्टेबिलिटी ज़रूरी: 80–90°C कंडीशनिंग में बिना सुरक्षा वाले एंज़ाइम खत्म हो जाते हैं।",
    ],
  },
  acidifiers: {
    en: [
      "Each acid has a pKa; below its pKa an acid stays undissociated and can enter bacteria. Blends cover crop, gizzard and intestine.",
      "Short-chain acids (formic, propionic) are strongly antimicrobial and anti-mould; butyric acid is the main energy source for colon/caecal cells.",
      "Feed 'buffering capacity' (from limestone, protein) resists acidification in the stomach; acidifiers lower it so pepsin activates.",
      "Coating/encapsulation and buffering (salts) reduce corrosion and carry acids further down the gut.",
    ],
    hi: [
      "हर एसिड का एक pKa होता है; उससे कम pH पर एसिड बिना टूटा रहता है और बैक्टीरिया में घुस सकता है। मिश्रण क्रॉप, गिज़र्ड और आंत — सबको ढकता है।",
      "छोटी चेन वाले एसिड (फॉर्मिक, प्रोपियोनिक) तेज़ कीटाणुनाशक और फफूंद-रोधी हैं; ब्यूटिरिक एसिड बड़ी आंत/सीकम की कोशिकाओं का मुख्य ईंधन है।",
      "फीड की 'बफ़रिंग क्षमता' (चूना पत्थर, प्रोटीन से) पेट में अम्लीकरण रोकती है; एसिडिफ़ायर इसे घटाते हैं ताकि पेप्सिन सक्रिय हो।",
      "कोटिंग/एनकैप्सुलेशन और बफ़रिंग (लवण) जंग घटाते हैं और एसिड को आंत में आगे तक ले जाते हैं।",
    ],
  },
  performance: {
    en: [
      "Dirty eggs and wet litter are usually gut problems (poor digestion, dysbacteriosis, high water intake), not hygiene problems alone.",
      "Production recovery after disease (ILT, IB, ND) depends on rebuilding ovarian and oviduct tissue — nutrients for cell division and antioxidants help.",
      "Always tie the product to a measurable number: dirty-egg %, hen-day production %, hatchability %.",
    ],
    hi: [
      "गंदे अंडे और गीला लिटर अक्सर आंत की समस्या हैं (कम पाचन, डिसबैक्टीरियोसिस, ज़्यादा पानी पीना), सिर्फ सफाई की नहीं।",
      "बीमारी (ILT, IB, ND) के बाद प्रोडक्शन वापसी अंडाशय और अंडवाहिनी के ऊतक दोबारा बनने पर निर्भर है — कोशिका-विभाजन के पोषक तत्व और एंटीऑक्सीडेंट मदद करते हैं।",
      "प्रोडक्ट को हमेशा एक नापने लायक संख्या से जोड़ें: गंदे अंडे %, हेन-डे प्रोडक्शन %, हैचेबिलिटी %।",
    ],
  },
  emulsifiers: {
    en: [
      "Fat digestion needs three steps: emulsification (bile salts), hydrolysis (lipase) and micelle formation for absorption.",
      "Unsaturated oils (soy) digest better than saturated fats (palm, animal fat); long-chain fatty acids (>C14) need the most help.",
      "Young chicks (first 2–3 weeks) have low bile and lipase output — emulsifiers give the biggest return there.",
      "HLB: a higher value means more water-loving; gut emulsifiers need a high HLB to work in the watery intestine.",
    ],
    hi: [
      "फैट पचने के तीन कदम: इमल्सीफिकेशन (पित्त लवण), हाइड्रोलिसिस (लाइपेज़) और अवशोषण के लिए माइसेल बनना।",
      "असंतृप्त तेल (सोयाबीन) संतृप्त फैट (पाम, पशु चर्बी) से बेहतर पचते हैं; लंबी चेन (>C14) वाले फैटी एसिड को सबसे ज़्यादा मदद चाहिए।",
      "छोटे चूज़ों (पहले 2–3 हफ्ते) में पित्त और लाइपेज़ कम बनता है — वहीं इमल्सीफ़ायर का सबसे ज़्यादा फायदा।",
      "HLB: ज़्यादा मान यानी पानी-पसंद; आंत के इमल्सीफ़ायर को पानी वाली आंत में काम करने के लिए ऊंचा HLB चाहिए।",
    ],
  },
  "toxin-binders": {
    en: [
      "Main mycotoxins: aflatoxin (liver, immunity), ochratoxin (kidney), T-2/DON (mouth lesions, feed refusal), zearalenone (reproduction), fumonisin.",
      "Guideline limits in poultry feed: aflatoxin 20 ppb, ochratoxin A 40 ppb, citrinin 100 ppb, zearalenone 400 ppb, DON 5 ppm, T-2 200 ppb.",
      "No single binder catches everything: clays (HSCAS) bind polar toxins like aflatoxin; activated charcoal and yeast cell wall (MOS/glucans) cover others.",
      "Mycotoxins add up (synergy) — two toxins below their limits can still hurt together. That is the case for multi-component binders.",
    ],
    hi: [
      "मुख्य माइकोटॉक्सिन: अफ्लाटॉक्सिन (लीवर, इम्युनिटी), ओक्राटॉक्सिन (किडनी), T-2/DON (मुंह के छाले, फीड न खाना), ज़ीयरालेनोन (प्रजनन), फ्यूमोनिसिन।",
      "पोल्ट्री फीड की सीमाएं: अफ्लाटॉक्सिन 20 ppb, ओक्राटॉक्सिन A 40 ppb, सिट्रिनिन 100 ppb, ज़ीयरालेनोन 400 ppb, DON 5 ppm, T-2 200 ppb।",
      "कोई एक बाइंडर सब नहीं पकड़ता: क्ले (HSCAS) अफ्लाटॉक्सिन जैसे ध्रुवीय ज़हर बांधती है; एक्टिवेटेड चारकोल और यीस्ट दीवार (MOS/ग्लूकन) बाकी को।",
      "माइकोटॉक्सिन का असर जुड़ता है — सीमा से कम दो ज़हर मिलकर भी नुकसान करते हैं। मल्टी-कंपोनेंट बाइंडर का यही आधार है।",
    ],
  },
  probiotics: {
    en: [
      "Probiotics work by competitive exclusion, producing antimicrobial peptides and organic acids, and strengthening the gut barrier.",
      "Spore-formers (Bacillus) survive pelleting and storage; Lactobacillus and yeast need encapsulation or water delivery.",
      "Judge a probiotic by declared strain + cfu/g at expiry, not just species name.",
      "Don't give water probiotics together with antibiotics or chlorinated water — they kill the live organisms.",
    ],
    hi: [
      "प्रोबायोटिक जगह घेरकर, एंटीमाइक्रोबियल पेप्टाइड व ऑर्गेनिक एसिड बनाकर, और आंत की दीवार मज़बूत करके काम करते हैं।",
      "स्पोर बनाने वाले (बैसिलस) पेलेटिंग और स्टोरेज में बचते हैं; लैक्टोबैसिलस और यीस्ट को कैप्सूल या पानी से देना पड़ता है।",
      "प्रोबायोटिक को घोषित स्ट्रेन + एक्सपायरी पर cfu/ग्राम से परखें, सिर्फ नाम से नहीं।",
      "पानी वाले प्रोबायोटिक को एंटीबायोटिक या क्लोरीन वाले पानी के साथ न दें — ये ज़िंदा जीवाणुओं को मार देते हैं।",
    ],
  },
  "trace-minerals": {
    en: [
      "Zn: immunity, skin, feathering, carbonic anhydrase. Mn: bone/cartilage, eggshell matrix, perosis prevention. Cu: collagen, haemoglobin. Fe: haemoglobin. Se: antioxidant enzyme. I: thyroid. Cr: glucose use under stress.",
      "Inorganic sources (sulphates, oxides) dissociate in the gut and can bind phytate, other minerals and clay binders; organic (chelated/proteinate) minerals stay protected.",
      "Organic minerals are fed at lower doses and excreted less — better for the bird and the environment.",
    ],
    hi: [
      "Zn: इम्युनिटी, त्वचा, पंख, कार्बोनिक एनहाइड्रेज़। Mn: हड्डी/कार्टिलेज, छिलके का ढांचा, पेरोसिस से बचाव। Cu: कोलेजन, हीमोग्लोबिन। Fe: हीमोग्लोबिन। Se: एंटीऑक्सीडेंट एंज़ाइम। I: थायरॉइड। Cr: तनाव में ग्लूकोज़ उपयोग।",
      "इनऑर्गेनिक स्रोत (सल्फेट, ऑक्साइड) आंत में टूटकर फाइटेट, दूसरे मिनरल और क्ले बाइंडर से बंध सकते हैं; ऑर्गेनिक (चीलेटेड/प्रोटीनेट) मिनरल सुरक्षित रहते हैं।",
      "ऑर्गेनिक मिनरल कम डोज़ में दिए जाते हैं और कम बाहर निकलते हैं — पक्षी और पर्यावरण दोनों के लिए बेहतर।",
    ],
  },
  eggshell: {
    en: [
      "An eggshell is ~95% calcium carbonate laid on an organic matrix over about 20 hours in the shell gland, mostly at night.",
      "Carbonate comes from blood bicarbonate via carbonic anhydrase (a zinc enzyme); panting in heat lowers blood bicarbonate → thin shells.",
      "Shell quality falls with age as egg size rises but calcium deposition doesn't keep pace — late-lay flocks need the most support.",
      "Vitamin D3 (active form made in liver/kidney) controls calcium absorption from gut and bone.",
    ],
    hi: [
      "अंडे का छिलका ~95% कैल्शियम कार्बोनेट है जो छिलका ग्रंथि में लगभग 20 घंटे में, ज़्यादातर रात में, एक ऑर्गेनिक ढांचे पर जमता है।",
      "कार्बोनेट खून के बाइकार्बोनेट से कार्बोनिक एनहाइड्रेज़ (ज़िंक एंज़ाइम) के ज़रिए आता है; गर्मी में हांफने से बाइकार्बोनेट घटता है → पतला छिलका।",
      "उम्र के साथ अंडा बड़ा होता है पर कैल्शियम उतना नहीं जमता, इसलिए छिलका कमज़ोर होता है — देर वाले फ्लॉक को सबसे ज़्यादा सहारा चाहिए।",
      "विटामिन D3 (लीवर/किडनी में सक्रिय रूप बनता है) आंत और हड्डी से कैल्शियम अवशोषण नियंत्रित करता है।",
    ],
  },
  "anti-stress": {
    en: [
      "Birds have no sweat glands; above ~28–30°C they pant, losing CO₂ (respiratory alkalosis), Na⁺, K⁺ and water.",
      "Heat stress cuts feed intake, damages the gut lining (leaky gut) and raises corticosterone, lowering immunity.",
      "Tools: electrolytes and bicarbonate (acid–base), betaine (osmolyte), vitamin C (stress hormone), chromium (glucose use).",
      "Give anti-stress a day before planned stress (vaccination, debeaking, transport), not after birds are already down.",
    ],
    hi: [
      "पक्षियों में पसीने की ग्रंथियां नहीं होतीं; ~28–30°C से ऊपर वे हांफते हैं और CO₂ (रेस्पिरेटरी एल्केलोसिस), Na⁺, K⁺ और पानी खोते हैं।",
      "गर्मी का तनाव फीड खपत घटाता है, आंत की परत खराब करता है (लीकी गट) और कॉर्टिकोस्टेरोन बढ़ाकर इम्युनिटी गिराता है।",
      "उपाय: इलेक्ट्रोलाइट और बाइकार्बोनेट (एसिड–बेस), बीटाइन (ऑस्मोलाइट), विटामिन C (तनाव हार्मोन), क्रोमियम (ग्लूकोज़ उपयोग)।",
      "तय तनाव (वैक्सीनेशन, डीबीकिंग, ट्रांसपोर्ट) से एक दिन पहले एंटी-स्ट्रेस दें, पक्षी गिरने के बाद नहीं।",
    ],
  },
  "growth-promoters": {
    en: [
      "Limiting amino acids in poultry: methionine first, lysine second, then threonine. Growth is capped by the most limiting one.",
      "Water-soluble tonics are absorbed fast and still reach birds when feed intake drops (brooding, heat, vaccination, disease).",
      "Dose per 100 birds per day, given in the morning water and finished within a few hours, is the usual practice.",
    ],
    hi: [
      "पोल्ट्री में लिमिटिंग अमीनो एसिड: पहला मेथियोनिन, दूसरा लाइसिन, फिर थ्रियोनिन। ग्रोथ सबसे कम वाले अमीनो एसिड पर रुकती है।",
      "पानी वाले टॉनिक जल्दी सोखे जाते हैं और फीड कम खाने पर भी (ब्रूडिंग, गर्मी, वैक्सीनेशन, बीमारी) पक्षियों तक पहुंचते हैं।",
      "आमतौर पर डोज़ प्रति 100 पक्षी प्रति दिन, सुबह के पानी में, जो कुछ घंटों में खत्म हो जाए।",
    ],
  },
  "liver-tonics": {
    en: [
      "The liver makes egg yolk proteins and fat (VLDL), detoxifies mycotoxins and drugs, and makes bile for fat digestion.",
      "Two liver tonic roles: hepatoprotection (silymarin, Phyllanthus, Picrorhiza, Andrographis) and lipotropic action (choline, tricholine citrate, methionine) to export fat.",
      "Typical triggers to recommend: after mycotoxin exposure, after antibiotic courses, layers past peak with fatty-liver signs.",
    ],
    hi: [
      "लीवर ज़र्दी के प्रोटीन और फैट (VLDL) बनाता है, माइकोटॉक्सिन और दवाओं का ज़हर साफ करता है, और फैट पचाने के लिए पित्त बनाता है।",
      "लीवर टॉनिक के दो काम: लीवर रक्षा (सिलीमारिन, भुई आंवला, कुटकी, कालमेघ) और लिपोट्रॉपिक (कोलीन, ट्राइकोलीन साइट्रेट, मेथियोनिन) — चर्बी बाहर भेजना।",
      "कब सलाह दें: माइकोटॉक्सिन के बाद, एंटीबायोटिक कोर्स के बाद, पीक के बाद फैटी लीवर के लक्षण वाली लेयर।",
    ],
  },
  herbal: {
    en: [
      "Phytogenics act through specific molecules: curcumin, gingerols, piperine, cinnamaldehyde, allicin, menthol, eucalyptol, vasicine.",
      "Main effects: antimicrobial (membrane damage), antioxidant, anti-inflammatory, digestive stimulation and immunomodulation.",
      "They leave no drug residue and don't drive antibiotic resistance — the strongest selling point as AGPs are restricted.",
      "Be precise: herbals support and prevent; diagnosed bacterial disease still needs vet treatment.",
    ],
    hi: [
      "फाइटोजेनिक खास अणुओं से काम करते हैं: करक्यूमिन, जिंजरॉल, पिपेरिन, सिनेमाल्डिहाइड, एलिसिन, मेंथॉल, यूकेलिप्टॉल, वैसिसीन।",
      "मुख्य असर: कीटाणुनाशक (झिल्ली तोड़ना), एंटीऑक्सीडेंट, सूजन-रोधी, पाचन बढ़ाना और इम्युनिटी संतुलन।",
      "दवा का रेसिड्यू नहीं और एंटीबायोटिक रेज़िस्टेंस नहीं बढ़ाते — AGP पर रोक के दौर में सबसे बड़ा फायदा।",
      "साफ कहें: हर्बल सहारा और बचाव हैं; पुष्ट बैक्टीरियल बीमारी में वेटेरिनेरियन का इलाज ज़रूरी।",
    ],
  },
  "fly-control": {
    en: [
      "A house fly lifecycle is about 7–10 days in hot weather; one female lays hundreds of eggs, mostly in wet manure and litter.",
      "Integrated control: keep manure/litter dry (stops larvae) + kill adults with baits where they rest and feed.",
      "Flies mechanically carry Salmonella, E. coli and coccidia between sheds — fly control is also bio-security.",
    ],
    hi: [
      "गर्मी में मक्खी का जीवन-चक्र लगभग 7–10 दिन का है; एक मादा सैकड़ों अंडे देती है, ज़्यादातर गीली खाद और लिटर में।",
      "एकीकृत नियंत्रण: खाद/लिटर सूखा रखें (लार्वा रुकता है) + वयस्क मक्खियों को उनके बैठने-खाने की जगह चारे से मारें।",
      "मक्खियां साल्मोनेला, E. coli और कॉक्सीडिया एक शेड से दूसरे में ले जाती हैं — मक्खी नियंत्रण भी बायो-सिक्योरिटी है।",
    ],
  },
  agps: {
    en: [
      "AGPs are low-dose in-feed antibiotics (measured in ppm = g/tonne of active) that control Gram-positive gut bacteria, mainly Clostridium perfringens.",
      "Calculating ppm: product % × g/tonne. Example: 10% × 100 g/t = 10 g active/t = 10 ppm.",
      "Preferred AGPs are classes not used in human medicine (avilamycin, bambermycin) or poorly absorbed (bacitracin). India banned colistin in food animals in 2019.",
      "Coccidiosis control is part of NE control — coccidia damage the gut and open the door for Clostridium.",
    ],
    hi: [
      "AGP कम मात्रा वाली फीड एंटीबायोटिक हैं (ppm = सक्रिय ग्राम/टन में), जो आंत के ग्राम-पॉज़िटिव बैक्टीरिया, मुख्य रूप से क्लोस्ट्रीडियम परफ्रिंजेंस, को काबू करती हैं।",
      "ppm का हिसाब: प्रोडक्ट % × ग्राम/टन। उदाहरण: 10% × 100 ग्राम/टन = 10 ग्राम सक्रिय/टन = 10 ppm।",
      "पसंदीदा AGP वे हैं जो इंसानी दवा में इस्तेमाल नहीं होते (एविलामाइसिन, बैम्बरमाइसिन) या कम सोखे जाते हैं (बैसिट्रेसिन)। भारत ने 2019 में पशुओं में कोलिस्टिन पर रोक लगाई।",
      "कॉक्सीडियोसिस नियंत्रण NE नियंत्रण का हिस्सा है — कॉक्सीडिया आंत को नुकसान पहुंचाकर क्लोस्ट्रीडियम का रास्ता खोलते हैं।",
    ],
  },
  antibiotics: {
    en: [
      "Know the class and target: quinolones (DNA gyrase), tetracyclines (30S), macrolides and pleuromutilins (50S), aminoglycosides (30S), sulpha + trimethoprim (folate), beta-lactams/cephalosporins (cell wall).",
      "Mycoplasma has no cell wall → beta-lactams don't work on it; choose tiamulin, tylosin, doxycycline or quinolones.",
      "Dose by body weight: total mg/day = mg/kg × flock weight in kg. Water medication should be consumed within a few hours; withdraw water briefly before dosing if advised.",
      "Responsible use: diagnosis first, full course, respect withdrawal periods, and keep critically important drugs (quinolones, 3rd-gen cephalosporins) as last resort.",
    ],
    hi: [
      "वर्ग और निशाना जानें: क्विनोलोन (DNA जाइरेज़), टेट्रासाइक्लिन (30S), मैक्रोलाइड और प्लूरोम्यूटिलिन (50S), एमिनोग्लाइकोसाइड (30S), सल्फा + ट्राइमेथोप्रिम (फोलेट), बीटा-लैक्टम/सेफालोस्पोरिन (कोशिका-दीवार)।",
      "माइकोप्लाज़्मा की दीवार नहीं होती → बीटा-लैक्टम उस पर काम नहीं करते; टियामुलिन, टायलोसिन, डॉक्सीसाइक्लिन या क्विनोलोन चुनें।",
      "शरीर वज़न से डोज़: कुल mg/दिन = mg/kg × फ्लॉक का कुल वज़न (किलो)। दवा वाला पानी कुछ घंटों में खत्म होना चाहिए; सलाह हो तो डोज़ से पहले थोड़ी देर पानी रोकें।",
      "ज़िम्मेदार उपयोग: पहले जांच, पूरा कोर्स, विदड्रॉल पीरियड का पालन, और बेहद ज़रूरी दवाओं (क्विनोलोन, तीसरी पीढ़ी सेफालोस्पोरिन) को आखिरी विकल्प रखें।",
    ],
  },
  "anti-pyretic": {
    en: [
      "Normal chicken body temperature is about 41–42°C; fever comes from prostaglandin E2 resetting the hypothalamus.",
      "Antipyretics treat the symptom (fever, pain, off-feed), not the cause — always pair with diagnosis and the main treatment.",
      "mg/kg dosing applies: calculate on total flock weight.",
    ],
    hi: [
      "मुर्गी का सामान्य तापमान लगभग 41–42°C होता है; बुखार प्रोस्टाग्लैंडिन E2 से हाइपोथैलेमस का सेट-पॉइंट बदलने से होता है।",
      "बुखार की दवा लक्षण (बुखार, दर्द, खाना छोड़ना) का इलाज करती है, कारण का नहीं — हमेशा जांच और मुख्य इलाज के साथ दें।",
      "mg/kg डोज़ लागू: फ्लॉक के कुल वज़न से हिसाब लगाएं।",
    ],
  },
  vitamins: {
    en: [
      "Fat-soluble vitamins (A, D3, E, K) are stored; water-soluble (B-complex, C) are not and need regular supply.",
      "Requirements rise sharply under stress, disease and vaccination, while feed intake often drops — water supplementation bridges the gap.",
      "Vitamin E and selenium work as a pair against oxidation; deficiency shows as crazy chick disease, exudative diathesis and muscular dystrophy.",
      "Vitamin C is made by birds but not enough under heat stress — it lowers stress hormones.",
    ],
    hi: [
      "फैट में घुलने वाले विटामिन (A, D3, E, K) शरीर में जमा रहते हैं; पानी में घुलने वाले (B-कॉम्प्लेक्स, C) नहीं, इसलिए नियमित चाहिए।",
      "तनाव, बीमारी और वैक्सीनेशन में ज़रूरत तेज़ी से बढ़ती है जबकि फीड खपत घटती है — पानी से विटामिन यह कमी पूरी करते हैं।",
      "विटामिन E और सेलेनियम जोड़ी में ऑक्सीकरण से लड़ते हैं; कमी से क्रेज़ी चिक, एक्सुडेटिव डायथेसिस और मस्कुलर डिस्ट्रॉफी।",
      "विटामिन C पक्षी खुद बनाते हैं पर गर्मी में काफी नहीं — यह तनाव हार्मोन घटाता है।",
    ],
  },
  "bio-security": {
    en: [
      "Disinfectant classes: aldehydes (glutaraldehyde — broad, works in dirt), QACs (non-corrosive, low smell, weak on non-enveloped viruses), oxidisers (monopersulphate — very broad, safe with birds), phenols, chlorine.",
      "Spectrum ladder (easiest to hardest to kill): enveloped viruses → vegetative bacteria → fungi → non-enveloped viruses → mycobacteria → bacterial spores.",
      "Five rules: dry clean → wash with detergent → let dry → disinfect at the right dilution → respect contact time and downtime.",
      "Drinking-water sanitation and biofilm removal are as important as shed disinfection.",
    ],
    hi: [
      "डिसइन्फेक्टेंट वर्ग: एल्डिहाइड (ग्लूटाराल्डिहाइड — ब्रॉड, गंदगी में भी), QAC (जंग नहीं, कम गंध, बिना-आवरण वायरस पर कमज़ोर), ऑक्सीडाइज़र (मोनोपरसल्फेट — बहुत ब्रॉड, पक्षियों के साथ सुरक्षित), फिनोल, क्लोरीन।",
      "मारने में आसान से कठिन: आवरण वाले वायरस → सामान्य बैक्टीरिया → फंगस → बिना-आवरण वायरस → माइकोबैक्टीरिया → बैक्टीरियल स्पोर।",
      "पांच नियम: सूखी सफाई → डिटर्जेंट से धुलाई → सूखने दें → सही घोल में डिसइन्फेक्शन → संपर्क समय और खाली रखने का समय पूरा करें।",
      "पीने के पानी की सफाई और बायोफिल्म हटाना शेड डिसइन्फेक्शन जितना ही ज़रूरी है।",
    ],
  },
  injectables: {
    en: [
      "Routes: S/C (under the skin of the neck), I/M (breast muscle), I/V (vein — vet only). Injections give exact dosing and fastest blood levels.",
      "Aminoglycosides (gentamicin, amikacin) are not absorbed orally — that is why they are injected.",
      "Long-acting (LA) formulations reduce handling; vitamins by injection bypass a sick gut.",
      "Use clean needles and correct site; injection-site residues mean withdrawal periods are especially important.",
    ],
    hi: [
      "तरीके: S/C (गर्दन की त्वचा के नीचे), I/M (ब्रेस्ट की मांसपेशी), I/V (नस — केवल वेटेरिनेरियन)। इंजेक्शन से सटीक डोज़ और सबसे तेज़ असर।",
      "एमिनोग्लाइकोसाइड (जेंटामाइसिन, एमिकासिन) मुंह से नहीं सोखे जाते — इसीलिए इंजेक्शन से दिए जाते हैं।",
      "लंबे असर वाले (LA) फॉर्मूले पक्षी पकड़ने की ज़रूरत घटाते हैं; इंजेक्शन से विटामिन बीमार आंत को बायपास करते हैं।",
      "साफ सुई और सही जगह; इंजेक्शन की जगह पर रेसिड्यू रहता है, इसलिए विदड्रॉल पीरियड बहुत ज़रूरी।",
    ],
  },
};
