import type { LList } from "./types";

// "Talk like an expert": 3–4 technical points per product — the active,
// how it acts, and the numbers to quote — so a rep can hold a conversation
// with a nutritionist or vet, not just a farmer. Every product must have an
// entry (checked in lib/catalog/index.ts).
export const TECHNICAL: Record<string, LList> = {
  "makzyme-c": {
    en: [
      "8 declared activities per kg: xylanase 1 crore U, cellulase 63 lakh U, protease 30 lakh U, alpha-amylase 8 lakh U, beta-glucanase 7.5 lakh U, phytase 6 lakh U, pectinase 80,000 U, lipase 7,000 U.",
      "It is an NSP + phytase + protease cocktail: xylanase/beta-glucanase cut soluble fibre and lower viscosity; phytase frees phytate-P; protease cuts trypsin inhibitors in soybean meal.",
      "Matrix at 500 g/t: ME 25–50 kcal/kg, crude protein 0.5%, replaces 0.75–1 kg DCP — say this to the nutritionist, not the farmer.",
      "Trial: intestinal viscosity fell from 1.87 to 1.32 cP and FCR from 1.68 to 1.62 at 34 days — viscosity is the mechanism, FCR is the result.",
    ],
    hi: [
      "हर किलो में 8 एंज़ाइम: ज़ाइलेनेज़ 1 करोड़ U, सेल्युलेज़ 63 लाख U, प्रोटिएज़ 30 लाख U, एल्फा-एमाइलेज़ 8 लाख U, बीटा-ग्लूकानेज़ 7.5 लाख U, फाइटेज़ 6 लाख U, पेक्टिनेज़ 80,000 U, लाइपेज़ 7,000 U।",
      "यह NSP + फाइटेज़ + प्रोटिएज़ कॉकटेल है: ज़ाइलेनेज़/बीटा-ग्लूकानेज़ घुलनशील फाइबर काटकर चिपचिपाहट घटाते हैं; फाइटेज़ फाइटेट-फॉस्फोरस छुड़ाता है; प्रोटिएज़ सोयाबीन मील के ट्रिप्सिन इनहिबिटर तोड़ता है।",
      "500 ग्राम/टन पर मैट्रिक्स: ME 25–50 kcal/kg, प्रोटीन 0.5%, 0.75–1 किलो DCP की बचत — यह बात न्यूट्रिशनिस्ट से कहिए, किसान से नहीं।",
      "ट्रायल: 34 दिन पर आंत की चिपचिपाहट 1.87 से 1.32 cP और FCR 1.68 से 1.62 — चिपचिपाहट कारण है, FCR नतीजा।",
    ],
  },
  "makzyme-xpl": {
    en: [
      "Per gram: 1,4-endo-xylanase 1,80,000 BXU, protease 40,000 U, amylase 2,000 U on a starch carrier.",
      "Endo-xylanase cuts the arabinoxylan backbone in the middle, which drops viscosity fastest; the arabino-xylo-oligosaccharides released act as a prebiotic.",
      "Thermostable — the activity survives pelleting/conditioning temperatures, which is the usual failure point of cheaper xylanases.",
      "Best fit: wheat, rice by-products, sorghum and corn DDGS diets; 100 g/t only.",
    ],
    hi: [
      "हर ग्राम में: 1,4-एंडो-ज़ाइलेनेज़ 1,80,000 BXU, प्रोटिएज़ 40,000 U, एमाइलेज़ 2,000 U, स्टार्च कैरियर पर।",
      "एंडो-ज़ाइलेनेज़ अरेबिनोज़ाइलन की मुख्य चेन को बीच से काटता है, जिससे चिपचिपाहट सबसे जल्दी गिरती है; निकले ओलिगोसैकेराइड प्रीबायोटिक का काम करते हैं।",
      "थर्मोस्टेबल — पेलेटिंग/कंडीशनिंग की गर्मी में भी असर बचा रहता है, जहां सस्ते ज़ाइलेनेज़ अक्सर फेल होते हैं।",
      "सबसे सही: गेहूं, चावल के उप-उत्पाद, ज्वार और कॉर्न DDGS वाले फीड; सिर्फ 100 ग्राम/टन।",
    ],
  },
  "sal-o-mak-plus": {
    en: [
      "Seven buffered organic-acid salts (citric, propionic, formic, acetic, fumaric, benzoic, lactic) + coated butyric acid + essential oils.",
      "Different pKa values mean different acids work at different gut sites — formic/propionic early, the coated butyrate in the hind gut (caeca), where Salmonella colonises.",
      "Breeder dose is 1–2 kg/t (vs 500 g/t for broilers/layers) because the target is vertical transmission: Salmonella-free hind gut → clean hatching eggs → healthier chicks.",
    ],
    hi: [
      "सात बफ़र्ड ऑर्गेनिक एसिड लवण (साइट्रिक, प्रोपियोनिक, फॉर्मिक, एसिटिक, फ्यूमेरिक, बेंज़ोइक, लैक्टिक) + कोटेड ब्यूटिरिक एसिड + एसेंशियल ऑयल।",
      "हर एसिड का pKa अलग है, इसलिए अलग एसिड आंत की अलग जगह काम करते हैं — फॉर्मिक/प्रोपियोनिक ऊपर, कोटेड ब्यूटिरेट पिछली आंत (सीकम) में, जहां साल्मोनेला बसता है।",
      "ब्रीडर डोज़ 1–2 किलो/टन (ब्रॉयलर/लेयर में 500 ग्राम) क्योंकि लक्ष्य वर्टिकल ट्रांसमिशन रोकना है: साल्मोनेला-मुक्त पिछली आंत → साफ हैचिंग अंडा → स्वस्थ चूज़ा।",
    ],
  },
  "sal-o-mak": {
    en: [
      "48–50% total acid concentration; buffered salts plus esterified coated butyric acid and essential oils (cinnamaldehyde, thymol).",
      "Undissociated acids diffuse into bacteria and acidify the inside; essential oils increase membrane permeability, so the two work synergistically against E. coli, Salmonella, Clostridium and Pasteurella.",
      "Micro-encapsulated sustained-release pellets: no pungent fumes, less corrosion of mixers, and the acid is released along the gut, not all in the crop.",
      "Lowers feed buffering capacity, so gastric pH drops faster and pepsin activates — better protein digestion.",
    ],
    hi: [
      "कुल एसिड 48–50%; बफ़र्ड लवण, एस्टरीफाइड कोटेड ब्यूटिरिक एसिड और एसेंशियल ऑयल (सिनेमाल्डिहाइड, थाइमोल)।",
      "बिना टूटे एसिड बैक्टीरिया के अंदर जाकर उसे अंदर से अम्लीय करते हैं; एसेंशियल ऑयल झिल्ली को खोलते हैं, इसलिए दोनों मिलकर E. coli, साल्मोनेला, क्लोस्ट्रीडियम और पाश्चुरेला पर ज़्यादा असर करते हैं।",
      "माइक्रो-एनकैप्सुलेटेड धीरे निकलने वाले पेलेट: तीखी भाप नहीं, मिक्सर में कम जंग, और एसिड पूरी आंत में धीरे-धीरे निकलता है, सिर्फ क्रॉप में नहीं।",
      "फीड की बफ़रिंग क्षमता घटाता है, इसलिए पेट का pH जल्दी गिरता है और पेप्सिन सक्रिय होता है — बेहतर प्रोटीन पाचन।",
    ],
  },
  "sal-o-zen": {
    en: [
      "Buffered acid blend in which propionic acid is present as ammonium dipropionate — the most effective mould inhibitor form.",
      "Two jobs: feed preservation (stops mould growth in stored feed) and gut acidification (lower pathogen load).",
      "Orange droppings in broilers usually signal gut lining damage / sloughed mucosa; SAL-O-ZEN's pitch is cleaning up the gut environment behind it.",
    ],
    hi: [
      "बफ़र्ड एसिड मिश्रण जिसमें प्रोपियोनिक एसिड अमोनियम डाइप्रोपियोनेट रूप में है — फफूंद रोकने का सबसे असरदार रूप।",
      "दो काम: फीड सुरक्षा (स्टोर फीड में फफूंद नहीं) और आंत का अम्लीकरण (बीमारी वाले बैक्टीरिया कम)।",
      "ब्रॉयलर में नारंगी बीट आमतौर पर आंत की परत के नुकसान का संकेत है; SAL-O-ZEN उसके पीछे का आंत का माहौल साफ करता है।",
    ],
  },
  "perfom-x": {
    en: [
      "Three actives: marine algae (polyphenols, flavonoids, carotenoids, linoleic acid), yeast nucleotide concentrate, and a micro/macro nutrient blend for layers.",
      "Nucleotides are the DNA/RNA building blocks for the rapid cell division in follicles and oviduct; dietary supply spares the bird's own synthesis.",
      "Seaweed antioxidants reduce oxidative stress in reproductive tissue; linoleic acid supports yolk weight and chick quality.",
      "Field data: ILT-hit breeders near Palladam dropped from 83.4% to 65% and recovered to ~80% on 2 kg/t — quote the recovery phase dose (1–2 kg/t).",
    ],
    hi: [
      "तीन सक्रिय तत्व: समुद्री शैवाल (पॉलीफेनॉल, फ्लेवोनॉइड, कैरोटिनॉइड, लिनोलिक एसिड), यीस्ट न्यूक्लियोटाइड कंसन्ट्रेट, और लेयर के लिए सूक्ष्म/मुख्य पोषक मिश्रण।",
      "न्यूक्लियोटाइड फॉलिकल और अंडवाहिनी में तेज़ कोशिका-विभाजन के लिए DNA/RNA की ईंटें हैं; बाहर से मिलने पर पक्षी को खुद नहीं बनाने पड़ते।",
      "शैवाल के एंटीऑक्सीडेंट प्रजनन अंगों का ऑक्सीडेटिव तनाव घटाते हैं; लिनोलिक एसिड ज़र्दी का वज़न और चूज़ा क्वालिटी बढ़ाता है।",
      "फील्ड डेटा: पल्लडम के ILT प्रभावित ब्रीडर 83.4% से 65% पर गिरे और 2 किलो/टन पर ~80% पर लौटे — रिकवरी डोज़ (1–2 किलो/टन) बताइए।",
    ],
  },
  "zenact-pro": {
    en: [
      "Multi-mechanism gut product: probiotic strains + epithelial cell enhancer + SCFAs + MCFAs + mannans + catalytic proteins/NSP enzymes + astringents.",
      "Astringents bind water in the gut content → firmer droppings → drier litter → fewer dirty eggs and less ammonia and fly breeding.",
      "Replacement value: 2 kg/t replaces enzymes and probiotics completely; 1 kg/t replaces half their dose — position it as consolidation, not an add-on cost.",
      "Trial: 64-week layers, dirty eggs 4.7% → 2.0% within 13 days of use.",
    ],
    hi: [
      "कई तरीकों से काम करने वाला गट प्रोडक्ट: प्रोबायोटिक + एपिथीलियल सेल एनहांसर + SCFA + MCFA + मैनन + कैटेलिटिक प्रोटीन/NSP एंज़ाइम + एस्ट्रिंजेंट।",
      "एस्ट्रिंजेंट आंत के पानी को बांधते हैं → सख्त बीट → सूखा लिटर → कम गंदे अंडे, कम अमोनिया और मक्खी।",
      "बदलाव मूल्य: 2 किलो/टन एंज़ाइम और प्रोबायोटिक पूरी तरह बदलता है; 1 किलो/टन आधी डोज़ — इसे अतिरिक्त खर्च नहीं, दो प्रोडक्ट को एक करना बताइए।",
      "ट्रायल: 64 हफ्ते की लेयर में गंदे अंडे 13 दिन में 4.7% → 2.0%।",
    ],
  },
  "lipolyse-c": {
    en: [
      "Composition: GPGR (glyceryl polyethylene glycol ricinoleate, a synthetic high-HLB emulsifier), lysophospholipids, phospholipids, soluble caseinates, lipase and synthetic bile salt.",
      "Fats give >2× the energy of carbohydrate; most feed oils are long-chain (>C14) and saturated fats are hardest to digest — that's where emulsification is limiting.",
      "Young chicks have limited bile salt secretion; synthetic bile salt + lipase compensate and increase ME.",
      "Trial at 42 days: 2,410 g vs 2,370 g body weight, FCR 1.52 vs 1.55.",
    ],
    hi: [
      "संरचना: GPGR (ग्लिसरिल पॉलीएथिलीन ग्लाइकोल रिसिनोलिएट, हाई-HLB सिंथेटिक इमल्सीफ़ायर), लाइसोफॉस्फोलिपिड, फॉस्फोलिपिड, घुलनशील केसीनेट, लाइपेज़ और सिंथेटिक बाइल सॉल्ट।",
      "फैट कार्बोहाइड्रेट से 2 गुना से ज़्यादा ऊर्जा देता है; फीड के ज़्यादातर तेल लंबी चेन (>C14) के होते हैं और सैचुरेटेड फैट सबसे मुश्किल से पचता है — यहीं इमल्सीफिकेशन की कमी होती है।",
      "छोटे चूज़ों में पित्त लवण कम बनते हैं; सिंथेटिक बाइल सॉल्ट + लाइपेज़ इसकी भरपाई करके ME बढ़ाते हैं।",
      "42 दिन का ट्रायल: वज़न 2,410 बनाम 2,370 ग्राम, FCR 1.52 बनाम 1.55।",
    ],
  },
  "lipolyse-l": {
    en: [
      "Lysophosphatidylcholine is the key: it is both an emulsifier and a bioavailable choline source.",
      "Choline is needed to make phosphatidylcholine, which packages liver fat into VLDL for export to the ovary — without it fat stays in the liver (FLHS).",
      "Replacement rule: 750 g Lipolyse-L replaces 1 kg choline chloride — a formula change the nutritionist can make directly.",
    ],
    hi: [
      "मुख्य तत्व लाइसोफॉस्फेटिडाइलकोलीन है: यह इमल्सीफ़ायर भी है और आसानी से उपलब्ध कोलीन का स्रोत भी।",
      "कोलीन से फॉस्फेटिडाइलकोलीन बनता है, जो लीवर की चर्बी को VLDL में पैक करके अंडाशय तक भेजता है — इसके बिना चर्बी लीवर में ही रहती है (FLHS)।",
      "बदलाव नियम: 750 ग्राम Lipolyse-L = 1 किलो कोलीन क्लोराइड — न्यूट्रिशनिस्ट सीधे फॉर्मूले में बदल सकता है।",
    ],
  },
  "ditox-regular": {
    en: [
      "Natural dipolar phyllosilicates + liver stimulants — the entry-level binder for routine protection.",
      "Dipolar clay attracts polar mycotoxins (especially aflatoxins) into its interlayer spaces; liver stimulants support phase I/II detox enzymes.",
      "Dose logic: 1 kg/t routine, 2 kg/t for high-moisture or suspect raw material — upgrade to DiTox-3 when multiple toxins are suspected.",
    ],
    hi: [
      "प्राकृतिक डाइपोलर फाइलोसिलिकेट + लीवर स्टिमुलेंट — रोज़ की सुरक्षा के लिए बेसिक बाइंडर।",
      "डाइपोलर क्ले ध्रुवीय माइकोटॉक्सिन (खासकर अफ्लाटॉक्सिन) को अपनी परतों के बीच खींचती है; लीवर स्टिमुलेंट डिटॉक्स एंज़ाइम को सहारा देते हैं।",
      "डोज़ नियम: रोज़ 1 किलो/टन, नम या संदिग्ध कच्चे माल पर 2 किलो/टन — कई टॉक्सिन का शक हो तो DiTox-3 पर जाएं।",
    ],
  },
  "ditox-3-plus": {
    en: [
      "Three binding systems: activated HSCAS (aflatoxin B1 — stable at 25–37°C and pH 2–10), activated charcoal (ochratoxin, T-2) and yeast MOS (bacterial toxins/pathogen adhesion).",
      "Neem adds antibacterial/antifungal and immunomodulatory activity; liver and kidney rejuvenators target the organs aflatoxin and ochratoxin attack.",
      "Know the guideline limits: aflatoxin 20 ppb, ochratoxin A 40 ppb, citrinin 100 ppb, zearalenone 400 ppb, DON 5 ppm, T-2 200 ppb.",
      "Also binds chemical toxins in feed.",
    ],
    hi: [
      "तीन बाइंडिंग सिस्टम: एक्टिवेटेड HSCAS (अफ्लाटॉक्सिन B1 — 25–37°C और pH 2–10 पर स्थिर), एक्टिवेटेड चारकोल (ओक्राटॉक्सिन, T-2) और यीस्ट MOS (बैक्टीरिया के ज़हर/चिपकना)।",
      "नीम बैक्टीरिया-फंगस रोधी और इम्युनिटी बढ़ाने वाला असर जोड़ता है; लीवर और किडनी रिजुविनेटर उन्हीं अंगों को बचाते हैं जिन पर अफ्लाटॉक्सिन और ओक्राटॉक्सिन हमला करते हैं।",
      "सीमाएं याद रखें: अफ्लाटॉक्सिन 20 ppb, ओक्राटॉक्सिन A 40 ppb, सिट्रिनिन 100 ppb, ज़ीयरालेनोन 400 ppb, DON 5 ppm, T-2 200 ppb।",
      "फीड के केमिकल टॉक्सिन भी बांधता है।",
    ],
  },
  "ditox-3-premium": {
    en: [
      "DiTox-3 Plus binders (HSCAS, activated carbon, MOS) + beta-glucans + organic acids + Phyllanthus niruri + liver/kidney rejuvenators.",
      "Organic acids lower gut pH, which disrupts Gram-negative bacteria and reduces endotoxin load — so it covers mycotoxins, chemical toxins AND bacterial toxins.",
      "Phyllanthus niruri is a documented hepatoprotective herb; the brochure positions Premium as completely replacing separate liver-tonic use in feed and water.",
    ],
    hi: [
      "DiTox-3 Plus के बाइंडर (HSCAS, एक्टिवेटेड कार्बन, MOS) + बीटा-ग्लूकन + ऑर्गेनिक एसिड + भुई आंवला + लीवर/किडनी रिजुविनेटर।",
      "ऑर्गेनिक एसिड आंत का pH घटाकर ग्राम-नेगेटिव बैक्टीरिया को बाधित करते हैं और एंडोटॉक्सिन कम करते हैं — यानी माइकोटॉक्सिन, केमिकल टॉक्सिन और बैक्टीरियल टॉक्सिन तीनों।",
      "भुई आंवला (फिलैन्थस नीरुरी) जानी-मानी लीवर-रक्षक जड़ी-बूटी है; ब्रोशर के अनुसार Premium फीड और पानी में अलग लीवर टॉनिक की पूरी जगह लेता है।",
    ],
  },
  "prozenbio-bsb": {
    en: [
      "Four strain-declared organisms: B. subtilis 2057 and B. licheniformis PBL01 at 2 × 10⁹ cfu/g; B. amyloliquefaciens 10440 and S. boulardii 5375 at 5 × 10⁸ cfu/g.",
      "Bacillus spores are thermostable — highest recovery after pelleting, which non-spore probiotics can't claim.",
      "Modes: competitive exclusion, antimicrobial peptides (bacteriocins) against E. coli, Salmonella and Clostridia, and stronger mucosal barrier (mucins, defensins).",
    ],
    hi: [
      "स्ट्रेन नंबर के साथ चार जीवाणु: B. subtilis 2057 और B. licheniformis PBL01 — 2 × 10⁹ cfu/g; B. amyloliquefaciens 10440 और S. boulardii 5375 — 5 × 10⁸ cfu/g।",
      "बैसिलस स्पोर गर्मी सहते हैं — पेलेटिंग के बाद भी सबसे ज़्यादा ज़िंदा रहते हैं, जो बिना-स्पोर प्रोबायोटिक नहीं कर सकते।",
      "काम करने के तरीके: अच्छे जीवाणु जगह घेरते हैं, E. coli, साल्मोनेला और क्लोस्ट्रीडिया के खिलाफ एंटीमाइक्रोबियल पेप्टाइड (बैक्टीरियोसिन) बनाते हैं, और म्यूसिन व डिफेन्सिन से आंत की परत मज़बूत करते हैं।",
    ],
  },
  "prozenbio-ws-plus": {
    en: [
      "Water-soluble: B. subtilis, B. licheniformis, B. coagulans + encapsulated Lactobacillus acidophilus + digestive enzymes + water-soluble MOS.",
      "Lyophilised (freeze-dried) organisms reactivate in the gut; encapsulation protects Lactobacillus from stomach acid.",
      "Use window: 5–10 g/100 birds for 5–7 days after antibiotics, vaccination or feed change, and for chicks — don't mix with antibiotics or chlorinated water on the same day.",
    ],
    hi: [
      "पानी में घुलनशील: B. subtilis, B. licheniformis, B. coagulans + कैप्सूल में लैक्टोबैसिलस एसिडोफिलस + पाचन एंज़ाइम + घुलनशील MOS।",
      "फ्रीज़-ड्राइड (लायोफिलाइज़्ड) जीवाणु आंत में फिर सक्रिय होते हैं; कैप्सूल लैक्टोबैसिलस को पेट के एसिड से बचाता है।",
      "कब दें: एंटीबायोटिक, वैक्सीनेशन या फीड बदलने के बाद और चूज़ों में 5–10 ग्राम/100 पक्षी, 5–7 दिन — उसी दिन एंटीबायोटिक या क्लोरीन वाले पानी के साथ न मिलाएं।",
    ],
  },
  "mak-min-premium": {
    en: [
      "Per kg: Mn 100 g, Fe 90 g, Zn 85 g, Cu 15 g, I 1.8 g, Se 0.45 g, organic Cr 0.15 g.",
      "Mn and Zn drive bone/cartilage and eggshell matrix; Cu and Fe drive haemoglobin and collagen; Se is part of glutathione peroxidase; Cr improves insulin sensitivity under heat stress.",
      "Dose 1–1.5 kg/t broiler/layer, 2 kg/t breeder — the inorganic reference against which Mak Min-Org is compared.",
    ],
    hi: [
      "हर किलो में: Mn 100 ग्राम, Fe 90 ग्राम, Zn 85 ग्राम, Cu 15 ग्राम, I 1.8 ग्राम, Se 0.45 ग्राम, ऑर्गेनिक Cr 0.15 ग्राम।",
      "Mn और Zn हड्डी/कार्टिलेज और छिलके के ढांचे के लिए; Cu और Fe हीमोग्लोबिन और कोलेजन के लिए; Se ग्लूटाथियोन पेरोक्सीडेज़ का हिस्सा; Cr गर्मी में इंसुलिन संवेदनशीलता सुधारता है।",
      "डोज़: ब्रॉयलर/लेयर 1–1.5 किलो/टन, ब्रीडर 2 किलो/टन — Mak Min-Org की तुलना इसी इनऑर्गेनिक प्रीमिक्स से होती है।",
    ],
  },
  "mak-min-org": {
    en: [
      "Proteinate technology: per kg Zn 60 g, Mn 60 g, Fe 30 g, Cu 10 g, I 4 g, Cr 1 g, Se 0.6 g.",
      "Controlled protein hydrolysis gives a peptide mix that keeps minerals bound through changing gut pH — so no binding with toxin binders, no loss of phytase/xylanase activity, and better vitamin stability.",
      "Dose is about half of the inorganic premix (broiler 500–650 g/t; breeder 1–1.2 kg/t) because bioavailability is higher.",
      "Outcomes to name: fewer culls and lameness, less wooden breast and drip loss in broilers, better shell and shelf life in layers.",
    ],
    hi: [
      "प्रोटीनेट टेक्नोलॉजी: हर किलो में Zn 60 ग्राम, Mn 60 ग्राम, Fe 30 ग्राम, Cu 10 ग्राम, I 4 ग्राम, Cr 1 ग्राम, Se 0.6 ग्राम।",
      "नियंत्रित प्रोटीन हाइड्रोलिसिस से बना पेप्टाइड मिश्रण आंत के बदलते pH में भी मिनरल को बांधे रखता है — इसलिए टॉक्सिन बाइंडर से नहीं बंधता, फाइटेज़/ज़ाइलेनेज़ का असर नहीं घटता, विटामिन स्थिर रहते हैं।",
      "डोज़ इनऑर्गेनिक प्रीमिक्स की लगभग आधी (ब्रॉयलर 500–650 ग्राम/टन; ब्रीडर 1–1.2 किलो/टन) क्योंकि अवशोषण ज़्यादा है।",
      "नतीजे बताइए: कम कल और लंगड़ापन, ब्रॉयलर में कम वुडन ब्रेस्ट और ड्रिप लॉस, लेयर में बेहतर छिलका और शेल्फ-लाइफ।",
    ],
  },
  "mak-min-org-layer-pack": {
    en: [
      "Organic Zn, Mn, Cu, I, Fe, Se and Cr + plant-origin vitamin D3, formulated for layer requirements; 500–750 g/t.",
      "Mn and Zn are cofactors in eggshell matrix formation (Zn in carbonic anhydrase); D3 drives calcium absorption from the gut and bone.",
      "Targets: shell strength and homogeneity, egg size, bone and footpad health, and prevention of chondrodystrophy and perosis.",
    ],
    hi: [
      "ऑर्गेनिक Zn, Mn, Cu, I, Fe, Se और Cr + पौधों से बना विटामिन D3, लेयर की ज़रूरत के अनुसार; 500–750 ग्राम/टन।",
      "Mn और Zn छिलके के ढांचे बनाने वाले एंज़ाइम के सहायक हैं (Zn कार्बोनिक एनहाइड्रेज़ में); D3 आंत और हड्डी से कैल्शियम अवशोषण चलाता है।",
      "लक्ष्य: छिलके की मज़बूती और एकरूपता, अंडे का आकार, हड्डी और पैर की सेहत, और कॉन्ड्रोडिस्ट्रॉफी व पेरोसिस से बचाव।",
    ],
  },
  "xshell-ds": {
    en: [
      "SCFAs + MCFAs + plant-origin vitamin D3 + essential trace elements; 500 g–1 kg/t.",
      "Shell formation chain: ovocleidin-17 forms the organic scaffold → carbonic anhydrase (a zinc enzyme) supplies carbonate → collagen cross-linking builds the shell membranes. XShell-DS supports each step.",
      "Positioning: when the calcium level is already right but shells are still weak — the problem is calcium deposition, not calcium supply.",
    ],
    hi: [
      "SCFA + MCFA + पौधों से बना विटामिन D3 + ज़रूरी ट्रेस मिनरल; 500 ग्राम–1 किलो/टन।",
      "छिलका बनने की कड़ी: ओवोक्लेडिन-17 ढांचा बनाता है → कार्बोनिक एनहाइड्रेज़ (ज़िंक एंज़ाइम) कार्बोनेट देता है → कोलेजन क्रॉस-लिंकिंग से छिलके की झिल्ली बनती है। XShell-DS हर कदम को सहारा देता है।",
      "कब बताएं: जब कैल्शियम पहले से सही है फिर भी छिलका कमज़ोर — समस्या कैल्शियम जमने की है, कैल्शियम की मात्रा की नहीं।",
    ],
  },
  "probeta-ns": {
    en: [
      "Natural betaine + natural benzophenones + methyl donors + phytogenics (moringa, dill, vetiver, fenugreek, chia).",
      "Betaine is an osmolyte (keeps intestinal and muscle cells hydrated in heat) and a methyl donor (spares methionine and choline).",
      "Feed-based anti-stress: 500 g/t all year, 1 kg/t in summer — ideal for integrators who prefer feed over daily water dosing.",
    ],
    hi: [
      "प्राकृतिक बीटाइन + प्राकृतिक बेंज़ोफिनोन + मिथाइल डोनर + फाइटोजेनिक (सहजन, सोआ, खस, मेथी, चिया)।",
      "बीटाइन ऑस्मोलाइट है (गर्मी में आंत और मांसपेशी की कोशिकाओं में पानी रखता है) और मिथाइल डोनर भी (मेथियोनिन और कोलीन बचाता है)।",
      "फीड वाला एंटी-स्ट्रेस: साल भर 500 ग्राम/टन, गर्मी में 1 किलो/टन — जो इंटीग्रेटर रोज़ पानी में डालने के बजाय फीड पसंद करते हैं।",
    ],
  },
  "probeta-ws": {
    en: [
      "Betaine HCl + electrolytes + vitamin C + organic chromium + heat-regulating factors, in liquid form.",
      "Panting causes respiratory alkalosis and Na⁺/K⁺ loss; electrolytes restore acid–base balance, vitamin C lowers corticosterone, chromium improves glucose use under stress.",
      "Two doses: 10–20 ml/100 birds routine; 1 ml/L of drinking water during heat or other stress — start a day before planned stress (vaccination, debeaking, transport).",
    ],
    hi: [
      "बीटाइन HCl + इलेक्ट्रोलाइट + विटामिन C + ऑर्गेनिक क्रोमियम + गर्मी नियंत्रित करने वाले तत्व, लिक्विड रूप में।",
      "हांफने से रेस्पिरेटरी एल्केलोसिस और Na⁺/K⁺ की कमी होती है; इलेक्ट्रोलाइट एसिड–बेस संतुलन लौटाते हैं, विटामिन C कॉर्टिकोस्टेरोन (तनाव हार्मोन) घटाता है, क्रोमियम तनाव में ग्लूकोज़ का उपयोग सुधारता है।",
      "दो डोज़: नियमित 10–20 ml/100 पक्षी; गर्मी या तनाव में 1 ml/लीटर पानी — तय तनाव (वैक्सीनेशन, डीबीकिंग, ट्रांसपोर्ट) से एक दिन पहले शुरू करें।",
    ],
  },
  "electrol-plus-ws": {
    en: [
      "Per kg: dextrose 500 g, vitamin C 50 g, KCl 30 g, Na citrate 25 g, NaCl 20 g, monosodium phosphate 20 g, Na gluconate 11 g, betaine HCl 11 g, NaHCO₃ 10 g, MgSO₄ 9 g, probiotic 1 g, bioactive Cr 0.02 g.",
      "Bicarbonate and citrate are alkalinising buffers that correct the acid–base disturbance of panting; dextrose speeds sodium and water absorption (like ORS in humans).",
      "Bicarbonate also supplies carbonate for the shell gland — the reason for 'better shell thickness in summer'. Dose 1–2 g/L.",
    ],
    hi: [
      "हर किलो में: डेक्सट्रोज़ 500 ग्राम, विटामिन C 50 ग्राम, KCl 30 ग्राम, सोडियम साइट्रेट 25 ग्राम, NaCl 20 ग्राम, मोनोसोडियम फॉस्फेट 20 ग्राम, सोडियम ग्लूकोनेट 11 ग्राम, बीटाइन HCl 11 ग्राम, NaHCO₃ 10 ग्राम, MgSO₄ 9 ग्राम, प्रोबायोटिक 1 ग्राम, बायोएक्टिव Cr 0.02 ग्राम।",
      "बाइकार्बोनेट और साइट्रेट बफ़र हैं जो हांफने से बिगड़ा एसिड–बेस संतुलन ठीक करते हैं; डेक्सट्रोज़ सोडियम और पानी का अवशोषण तेज़ करता है (इंसानों के ORS जैसा)।",
      "बाइकार्बोनेट छिलका ग्रंथि को कार्बोनेट भी देता है — 'गर्मी में मोटा छिलका' का यही कारण है। डोज़ 1–2 ग्राम/लीटर।",
    ],
  },
  "electrol-plus-feed": {
    en: [
      "Same electrolyte, vitamin C, betaine, probiotic and chromium blend as the water-soluble form, without dextrose, for mixing in feed at 1–2 kg/t.",
      "Feed form suits integrators and feed mills: every bird gets a fixed dose with no daily labour, through the whole summer.",
      "Explain the chemistry the same way: bicarbonate/citrate buffer the alkalosis-driven imbalance; K⁺ and Na⁺ replace losses.",
    ],
    hi: [
      "पानी वाले फॉर्म जैसा ही इलेक्ट्रोलाइट, विटामिन C, बीटाइन, प्रोबायोटिक और क्रोमियम मिश्रण, बिना डेक्सट्रोज़, फीड में 1–2 किलो/टन मिलाने के लिए।",
      "फीड फॉर्म इंटीग्रेटर और फीड मिल के लिए सही: पूरी गर्मी हर पक्षी को तय डोज़, रोज़ की मेहनत के बिना।",
      "रसायन वैसे ही समझाएं: बाइकार्बोनेट/साइट्रेट एल्केलोसिस से बिगड़े संतुलन को संभालते हैं; K⁺ और Na⁺ कमी पूरी करते हैं।",
    ],
  },
  "gromak-liquid": {
    en: [
      "Per 100 ml: methionine (as MHA) 23.2 g, choline chloride 11.52 g, lysine HCl 11.52 g, plus chelated Mg, Na, Mn, Fe, Co, Zn, Cu, P and yeast protein.",
      "Methionine and lysine are the first and second limiting amino acids in poultry diets; choline protects the liver and spares methionine.",
      "Dose by bird type: broiler 10–20 ml, layer 20 ml, breeder 20–30 ml per 100 birds.",
    ],
    hi: [
      "हर 100 ml में: मेथियोनिन (MHA रूप) 23.2 ग्राम, कोलीन क्लोराइड 11.52 ग्राम, लाइसिन HCl 11.52 ग्राम, साथ में चीलेटेड Mg, Na, Mn, Fe, Co, Zn, Cu, P और यीस्ट प्रोटीन।",
      "मेथियोनिन और लाइसिन पोल्ट्री फीड के पहले और दूसरे लिमिटिंग अमीनो एसिड हैं; कोलीन लीवर बचाता है और मेथियोनिन की बचत करता है।",
      "पक्षी के हिसाब से डोज़: ब्रॉयलर 10–20 ml, लेयर 20 ml, ब्रीडर 20–30 ml प्रति 100 पक्षी।",
    ],
  },
  "gromak-gold-liquid": {
    en: [
      "Per 500 ml: MHA 145 g, choline chloride 72 g, lysine HCl 72 g, nano minerals 1095.7 mg, plus Na, Fe, Co, Cu, P and yeast protein.",
      "MHA is a precursor of DL-methionine, absorbed quickly from the intestine — results even on off-feed days (heat, disease, vaccination).",
      "Nano minerals: very small particle size = larger surface area = better absorption and utilisation; chelated Zn supports production.",
      "Concentrated: broiler dose 5–10 ml/100 birds vs 10–20 ml for GroMak Liquid.",
    ],
    hi: [
      "हर 500 ml में: MHA 145 ग्राम, कोलीन क्लोराइड 72 ग्राम, लाइसिन HCl 72 ग्राम, नैनो मिनरल 1095.7 mg, साथ में Na, Fe, Co, Cu, P और यीस्ट प्रोटीन।",
      "MHA, DL-मेथियोनिन का पूर्ववर्ती है, आंत से जल्दी सोखा जाता है — कम खाने वाले दिनों (गर्मी, बीमारी, वैक्सीनेशन) में भी असर।",
      "नैनो मिनरल: बहुत बारीक कण = बड़ी सतह = बेहतर अवशोषण; चीलेटेड Zn उत्पादन में मदद करता है।",
      "गाढ़ा फॉर्मूला: ब्रॉयलर डोज़ 5–10 ml/100 पक्षी, जबकि GroMak Liquid की 10–20 ml।",
    ],
  },
  "livomak-powder": {
    en: [
      "Phyllanthus niruri, Picrorhiza kurroa (kutki), neem, curcumin + lipotropes (choline chloride, tricholine citrate) + liver extract.",
      "Two-pronged: hepatoprotective herbs protect and regenerate hepatocytes; lipotropes mobilise liver fat to prevent fatty liver.",
      "In-feed at 250–500 g/t for continuous protection; switch to LivoMak Liquid for quick, short courses.",
    ],
    hi: [
      "भुई आंवला, कुटकी, नीम, करक्यूमिन + लिपोट्रोप (कोलीन क्लोराइड, ट्राइकोलीन साइट्रेट) + लीवर एक्सट्रैक्ट।",
      "दो तरफा असर: लीवर-रक्षक जड़ी-बूटियां हेपेटोसाइट बचाती और बनाती हैं; लिपोट्रोप लीवर की चर्बी हटाकर फैटी लीवर रोकते हैं।",
      "फीड में 250–500 ग्राम/टन लगातार सुरक्षा के लिए; जल्दी और छोटे कोर्स के लिए LivoMak Liquid।",
    ],
  },
  "livomak-liquid": {
    en: [
      "11 actives: tricholine citrate, Eclipta alba (bhringraj), liver extract, Phyllanthus niruri, Picrorhiza kurroa, clove oil, ferrous gluconate, silymarin, Andrographis, Ocimum sanctum (tulsi), protein hydrolysate.",
      "Silymarin (milk thistle) stabilises hepatocyte membranes and is antioxidant; Andrographis is choleretic (increases bile flow); protein hydrolysate supplies amino acids for liver regeneration.",
      "Course dosing: chicks 5–10 ml/100 birds/day; growers and layers 15–20 ml/100 birds for 5–7 days — typically after mycotoxicosis or antibiotic courses.",
    ],
    hi: [
      "11 सक्रिय तत्व: ट्राइकोलीन साइट्रेट, भृंगराज, लीवर एक्सट्रैक्ट, भुई आंवला, कुटकी, लौंग का तेल, फेरस ग्लूकोनेट, सिलीमारिन, कालमेघ, तुलसी, प्रोटीन हाइड्रोलाइसेट।",
      "सिलीमारिन लीवर कोशिका की झिल्ली को स्थिर रखता है और एंटीऑक्सीडेंट है; कालमेघ पित्त का बहाव बढ़ाता है; प्रोटीन हाइड्रोलाइसेट लीवर की मरम्मत के लिए अमीनो एसिड देता है।",
      "कोर्स डोज़: चूज़े 5–10 ml/100 पक्षी/दिन; ग्रोवर और लेयर 15–20 ml/100 पक्षी, 5–7 दिन — आमतौर पर माइकोटॉक्सिकोसिस या एंटीबायोटिक कोर्स के बाद।",
    ],
  },
  "natumeric-plus": {
    en: [
      "Phytogenic blend: turmeric (curcumin, demethoxycurcumin), ginger (gingerols, shogaols, zingerone), black pepper (piperine), cinnamon (cinnamaldehyde).",
      "Piperine is the bio-enhancer — it increases absorption of curcumin, selenium, B vitamins and beta-carotene; cinnamaldehyde raises pancreatic and intestinal enzymes.",
      "Mode of action from the brochure: reduces harmful gut microflora and toxic metabolites, and helps block mycotoxin-induced DNA adduct formation.",
      "Positioned as replacing in-feed AGPs (CTC, tylosin) at 500 g/ton, residue-free.",
    ],
    hi: [
      "फाइटोजेनिक मिश्रण: हल्दी (करक्यूमिन, डिमेथॉक्सीकरक्यूमिन), अदरक (जिंजरॉल, शोगॉल, ज़िंजरोन), काली मिर्च (पिपेरिन), दालचीनी (सिनेमाल्डिहाइड)।",
      "पिपेरिन बायो-एनहांसर है — करक्यूमिन, सेलेनियम, B विटामिन और बीटा-कैरोटीन का अवशोषण बढ़ाता है; सिनेमाल्डिहाइड पैंक्रियास और आंत के एंज़ाइम बढ़ाता है।",
      "ब्रोशर के अनुसार काम: आंत के बुरे जीवाणु और ज़हरीले पदार्थ घटाता है, और माइकोटॉक्सिन से DNA को होने वाले नुकसान (DNA adduct) को रोकने में मदद करता है।",
      "फीड के AGP (CTC, टायलोसिन) की जगह 500 ग्राम/टन पर, बिना रेसिड्यू।",
    ],
  },
  "allivisat": {
    en: [
      "Garlic actives: allicin (diallyl thiosulfinate), alliin, ajoene, diallyl sulfide, dithiin, S-allylcysteine, plus organo-selenium.",
      "Alliin is converted to allicin by the enzyme alliinase when garlic is crushed; a 45-day pre- and post-curing extraction preserves real allicin.",
      "Allicin's primary target is RNA synthesis; it also reacts with sulphur-containing (thiol) proteins of microbes. Activity covers Staphylococcus, Streptococcus, Salmonella, E. coli, Aspergillus, Candida and several viruses.",
      "Multi-route dosing: 0.5 ml/L water for 5 days; 250 g/t (powder) or 1 L/t (liquid) in feed; 5 ml/L with QAC/phenol/glutaraldehyde for disinfection.",
    ],
    hi: [
      "लहसुन के सक्रिय तत्व: एलिसिन (डायलिल थायोसल्फिनेट), एलीन, एजोइन, डायलिल सल्फाइड, डिथीन, S-एलिलसिस्टीन, साथ में ऑर्गेनो-सेलेनियम।",
      "लहसुन कुचलने पर एलीनेज़ एंज़ाइम एलीन को एलिसिन में बदलता है; 45 दिन की प्री- और पोस्ट-क्योरिंग प्रक्रिया असली एलिसिन बचाती है।",
      "एलिसिन का मुख्य निशाना RNA बनना है; यह कीटाणुओं के सल्फर (थायोल) वाले प्रोटीन से भी जुड़ता है। असर: स्टैफिलोकोकस, स्ट्रेप्टोकोकस, साल्मोनेला, E. coli, एस्परजिलस, कैंडिडा और कई वायरस।",
      "कई तरह से डोज़: पानी में 0.5 ml/लीटर 5 दिन; फीड में 250 ग्राम/टन (पाउडर) या 1 लीटर/टन (लिक्विड); डिसइन्फेक्शन में QAC/फिनोल/ग्लूटाराल्डिहाइड के साथ 5 ml/लीटर।",
    ],
  },
  "ovitone-100": {
    en: [
      "Ayurvedic actives: Shatavari (Asparagus racemosus), hibiscus, kamboji, jeevanti + natural micronutrients on a curcumin base.",
      "Shatavari is a classic female reproductive tonic (phyto-oestrogenic saponins) — supports follicle development, ovulation and endometrial receptivity.",
      "Three programmes: weeks 15–25 and after week 40 at 500 g/t; 1 kg/t for a month for reproduction problems; top-feed 5–10 g/bird for 10 days.",
    ],
    hi: [
      "आयुर्वेदिक तत्व: शतावरी, गुड़हल, कम्बोजी, जीवन्ती + प्राकृतिक सूक्ष्म पोषक, करक्यूमिन आधार पर।",
      "शतावरी मादा प्रजनन का पुराना टॉनिक है (फाइटो-एस्ट्रोजेनिक सैपोनिन) — फॉलिकल विकास, अंडोत्सर्ग और गर्भाशय की ग्रहणशीलता में मदद।",
      "तीन प्रोग्राम: 15–25वें हफ्ते और 40वें हफ्ते के बाद 500 ग्राम/टन; प्रजनन समस्या में 1 किलो/टन एक महीना; टॉप-फीड 5–10 ग्राम/पक्षी 10 दिन।",
    ],
  },
  "respogreen-100": {
    en: [
      "Menthol crystals, eucalyptol (eucalyptus oil), vasaka (Adhatoda vasica — vasicine), Piper longum (pippali), Glycyrrhiza glabra (mulethi).",
      "Vasicine is a bronchodilator and mucolytic (the parent molecule of bromhexine); menthol and eucalyptol open airways; liquorice is soothing and anti-inflammatory.",
      "Two routes: 0.2 ml/L drinking water for 4–5 days, and 50 ml/10 L as a shed spray — use as supportive care alongside any vet-prescribed antibiotic.",
    ],
    hi: [
      "मेंथॉल क्रिस्टल, यूकेलिप्टॉल (नीलगिरी तेल), अडूसा (वासा — वैसिसीन), पिप्पली, मुलेठी।",
      "वैसिसीन सांस नली खोलता और बलगम पतला करता है (ब्रोमहेक्सिन इसी से बना है); मेंथॉल और यूकेलिप्टॉल नली खोलते हैं; मुलेठी सूजन घटाती और आराम देती है।",
      "दो तरीके: पानी में 0.2 ml/लीटर 4–5 दिन, और शेड में 50 ml/10 लीटर स्प्रे — वेटेरिनेरियन की एंटीबायोटिक के साथ सहायक के रूप में।",
    ],
  },
  "att2": {
    en: [
      "Bait system: biosensory attractants + insecticidal phytochemicals/phytosterols + tender coconut, stabilised with yeast-metabolite biopreservation.",
      "Works on adult flies at resting/feeding sites — combine with dry litter and manure management, which control larvae.",
      "Placement rules matter: large exposed surface (gunny bags, trays), fly hot spots (litter, feed stores), ≥3 m apart, wash and refill every 3–4 days.",
    ],
    hi: [
      "चारा सिस्टम: आकर्षित करने वाले तत्व + कीटनाशक फाइटोकेमिकल/फाइटोस्टेरॉल + नारियल पानी, यीस्ट मेटाबोलाइट से सुरक्षित।",
      "वयस्क मक्खियों पर उनके बैठने/खाने की जगह काम करता है — साथ में सूखा लिटर और खाद प्रबंधन ज़रूरी, जो लार्वा रोकते हैं।",
      "रखने के नियम: खुली बड़ी सतह (बोरी, ट्रे), मक्खी वाली जगह (लिटर, फीड गोदाम), कम से कम 3 मीटर दूरी, हर 3–4 दिन धोकर फिर भरें।",
    ],
  },
  "avilomak-10": {
    en: [
      "Avilamycin 10% — an orthosomycin antibiotic acting on the 50S ribosome of Gram-positive bacteria, chiefly Clostridium perfringens.",
      "100–150 g per tonne gives 10–15 ppm avilamycin (10% × 100 g = 10 g active per tonne = 10 ppm).",
      "Not used in human medicine, which is why it is a preferred AGP class — still, use only on nutritionist/vet advice.",
    ],
    hi: [
      "एविलामाइसिन 10% — ऑर्थोसोमाइसिन एंटीबायोटिक जो ग्राम-पॉज़िटिव बैक्टीरिया, मुख्य रूप से क्लोस्ट्रीडियम परफ्रिंजेंस, के 50S राइबोसोम पर काम करती है।",
      "100–150 ग्राम प्रति टन = 10–15 ppm एविलामाइसिन (10% × 100 ग्राम = 10 ग्राम सक्रिय प्रति टन = 10 ppm)।",
      "इंसानों की दवा में इस्तेमाल नहीं होती, इसलिए AGP के रूप में पसंद की जाती है — फिर भी केवल न्यूट्रिशनिस्ट/वेटेरिनेरियन की सलाह पर।",
    ],
  },
  "zenbracin-4": {
    en: [
      "Bambermycin (flavophospholipol) 4% — inhibits bacterial cell-wall synthesis (transglycosylase) in Gram-positive bacteria.",
      "125–150 g/t = 5–6 ppm active (4% × 125 g = 5 g per tonne).",
      "Not used in human medicine; indicated for NE prevention and to help control Streptococcus, Staphylococcus, Clostridium, E. coli, Pasteurella and Salmonella infections.",
    ],
    hi: [
      "बैम्बरमाइसिन (फ्लेवोफॉस्फोलिपोल) 4% — ग्राम-पॉज़िटिव बैक्टीरिया की कोशिका-दीवार बनना (ट्रांसग्लाइकोसिलेज़) रोकता है।",
      "125–150 ग्राम/टन = 5–6 ppm सक्रिय (4% × 125 ग्राम = 5 ग्राम प्रति टन)।",
      "इंसानों की दवा में इस्तेमाल नहीं; NE से बचाव और स्ट्रेप्टोकोकस, स्टैफिलोकोकस, क्लोस्ट्रीडियम, E. coli, पाश्चुरेला और साल्मोनेला इन्फेक्शन रोकने में मदद।",
    ],
  },
  "zee-md-plus": {
    en: [
      "Bacitracin methylene disalicylate (BMD) 10% — bacitracin blocks cell-wall synthesis by binding the lipid carrier (bactoprenol pyrophosphate) in Gram-positives.",
      "Poorly absorbed from the gut, so it acts where Clostridium lives — the intestine.",
      "Two dose levels: 500 g/t (50 ppm) prevention, 1 kg/t (100 ppm) treatment of NE; also controls dysbacteriosis.",
    ],
    hi: [
      "बैसिट्रेसिन मिथाइलीन डाइसैलिसिलेट (BMD) 10% — बैसिट्रेसिन ग्राम-पॉज़िटिव बैक्टीरिया में लिपिड कैरियर (बैक्टोप्रेनॉल पायरोफॉस्फेट) से जुड़कर कोशिका-दीवार बनना रोकता है।",
      "आंत से बहुत कम सोखा जाता है, इसलिए वहीं काम करता है जहां क्लोस्ट्रीडियम रहता है — आंत में।",
      "दो डोज़: 500 ग्राम/टन (50 ppm) बचाव, 1 किलो/टन (100 ppm) NE का इलाज; डिसबैक्टीरियोसिस पर भी नियंत्रण।",
    ],
  },
  "ciprozen-10": {
    en: [
      "Ciprofloxacin HCl 10% — a fluoroquinolone that inhibits DNA gyrase and topoisomerase IV; bactericidal and concentration-dependent.",
      "Spectrum: mainly Gram-negatives (E. coli, Salmonella, Pasteurella, Haemophilus, Campylobacter) plus Mycoplasma and some Gram-positives (Staphylococcus).",
      "1 g/L for 3–5 days ≈ 100 mg active per litre; 10–15 mg/kg BW. Quinolones are critically important in human medicine — reserve for confirmed cases on vet advice.",
    ],
    hi: [
      "सिप्रोफ्लॉक्सासिन HCl 10% — फ्लोरोक्विनोलोन जो DNA जाइरेज़ और टोपोआइसोमरेज़ IV को रोकता है; बैक्टीरिया को मारता है, असर सांद्रता पर निर्भर।",
      "स्पेक्ट्रम: मुख्य रूप से ग्राम-नेगेटिव (E. coli, साल्मोनेला, पाश्चुरेला, हीमोफिलस, कैम्पिलोबैक्टर) और माइकोप्लाज़्मा व कुछ ग्राम-पॉज़िटिव (स्टैफिलोकोकस)।",
      "1 ग्राम/लीटर, 3–5 दिन ≈ 100 mg सक्रिय प्रति लीटर; 10–15 mg/kg वज़न। क्विनोलोन इंसानी दवा में बहुत ज़रूरी हैं — केवल पुष्ट केस में वेटेरिनेरियन की सलाह पर।",
    ],
  },
  "tetramak-otc-feed": {
    en: [
      "Oxytetracycline 20% — a tetracycline that binds the 30S ribosome and stops protein synthesis; bacteriostatic, broad spectrum including Mycoplasma and Chlamydia.",
      "500 g/t of a 20% product = 100 g OTC per tonne (100 ppm).",
      "Tetracyclines are chelated by calcium and iron — high-calcium layer feed or mineral-rich water reduces absorption.",
    ],
    hi: [
      "ऑक्सीटेट्रासाइक्लिन 20% — टेट्रासाइक्लिन जो 30S राइबोसोम से जुड़कर प्रोटीन बनना रोकता है; बैक्टीरिया की बढ़त रोकता है, माइकोप्लाज़्मा और क्लैमाइडिया समेत ब्रॉड स्पेक्ट्रम।",
      "20% प्रोडक्ट का 500 ग्राम/टन = 100 ग्राम OTC प्रति टन (100 ppm)।",
      "टेट्रासाइक्लिन कैल्शियम और आयरन से बंध जाती है — ज़्यादा कैल्शियम वाला लेयर फीड या खारा पानी अवशोषण घटाता है।",
    ],
  },
  "tetramak-otc-ws": {
    en: [
      "Oxytetracycline 10% water-soluble — 1 g/L gives 100 mg OTC per litre.",
      "Water route reaches sick birds that still drink but have stopped eating.",
      "Avoid giving with calcium supplements, milk products or hard water at the same time — calcium binds tetracyclines.",
    ],
    hi: [
      "ऑक्सीटेट्रासाइक्लिन 10% पानी में घुलनशील — 1 ग्राम/लीटर = 100 mg OTC प्रति लीटर।",
      "पानी से दवा उन बीमार पक्षियों तक पहुंचती है जो पी रहे हैं पर खाना छोड़ चुके हैं।",
      "साथ में कैल्शियम सप्लीमेंट, दूध उत्पाद या खारा पानी न दें — कैल्शियम टेट्रासाइक्लिन को बांध लेता है।",
    ],
  },
  "tiamumak-10": {
    en: [
      "Tiamulin hydrogen fumarate 100 g/kg (10%) — a pleuromutilin that binds the peptidyl-transferase centre of the 50S ribosome; very active against Mycoplasma.",
      "Micro-encapsulated, free-flowing premix for even mixing and stability in feed.",
      "200 g/t (20 ppm) as growth promoter, 500 g/t (50 ppm) regular dose. Caution: tiamulin interacts with ionophore coccidiostats (monensin, salinomycin, narasin) — check the feed's coccidiostat first.",
    ],
    hi: [
      "टियामुलिन हाइड्रोजन फ्यूमरेट 100 ग्राम/किलो (10%) — प्लूरोम्यूटिलिन जो 50S राइबोसोम के पेप्टिडाइल-ट्रांसफ़रेज़ केंद्र से जुड़ता है; माइकोप्लाज़्मा पर बहुत असरदार।",
      "माइक्रो-एनकैप्सुलेटेड, आसानी से बहने वाला प्रीमिक्स — बराबर मिक्सिंग और फीड में स्थिरता।",
      "ग्रोथ प्रमोटर 200 ग्राम/टन (20 ppm), नियमित 500 ग्राम/टन (50 ppm)। सावधानी: टियामुलिन आयनोफोर कॉक्सीडियोस्टैट (मोनेन्सिन, सैलिनोमाइसिन, नारासिन) के साथ खतरनाक प्रतिक्रिया करता है — पहले फीड का कॉक्सीडियोस्टैट जांचें।",
    ],
  },
  "tiamumak-80": {
    en: [
      "Concentrated tiamulin hydrogen fumarate premix, dosed by body weight (15–30 mg/kg BW) for treatment.",
      "Pleuromutilin class — 50S ribosome, peptidyl transferase; drug of choice for Mycoplasma gallisepticum/synoviae (CRD, CCRD).",
      "Same ionophore warning as Tiamumak 10%: never with monensin, salinomycin or narasin.",
    ],
    hi: [
      "गाढ़ा टियामुलिन हाइड्रोजन फ्यूमरेट प्रीमिक्स, इलाज के लिए शरीर वज़न से डोज़ (15–30 mg/kg)।",
      "प्लूरोम्यूटिलिन वर्ग — 50S राइबोसोम, पेप्टिडाइल ट्रांसफ़रेज़; माइकोप्लाज़्मा गैलिसेप्टिकम/साइनोवी (CRD, CCRD) की पहली पसंद।",
      "Tiamumak 10% वाली ही चेतावनी: मोनेन्सिन, सैलिनोमाइसिन या नारासिन के साथ कभी नहीं।",
    ],
  },
  "tylomak-h": {
    en: [
      "Tylosin phosphate 10% — a 16-membered macrolide binding the 50S ribosome; active on Mycoplasma and Gram-positives.",
      "The phosphate salt is the in-feed form (acts largely in the gut and respiratory tract via feed); tartrate is the water-soluble/injectable salt (TyloZen-20).",
      "500 g–1 kg per tonne = 50–100 ppm tylosin. Indications: mycoplasmosis, CRD, infectious synovitis (chickens, turkeys), infectious sinusitis (turkeys), spirochetosis.",
    ],
    hi: [
      "टायलोसिन फॉस्फेट 10% — 16-सदस्यीय मैक्रोलाइड जो 50S राइबोसोम से जुड़ता है; माइकोप्लाज़्मा और ग्राम-पॉज़िटिव पर असर।",
      "फॉस्फेट लवण फीड वाला रूप है; टार्ट्रेट पानी/इंजेक्शन वाला लवण है (TyloZen-20)।",
      "500 ग्राम–1 किलो प्रति टन = 50–100 ppm टायलोसिन। उपयोग: माइकोप्लाज़्मोसिस, CRD, संक्रामक साइनोवाइटिस (मुर्गी, टर्की), संक्रामक साइनसाइटिस (टर्की), स्पाइरोकीटोसिस।",
    ],
  },
  "doxicon-n": {
    en: [
      "Per gram: doxycycline 100 mg + neomycin 100 mg.",
      "Doxycycline is a lipophilic tetracycline — well absorbed, reaches the lungs and air sacs, less affected by calcium than OTC. Neomycin is an aminoglycoside that is hardly absorbed orally, so it stays in the gut against E. coli and Salmonella.",
      "Systemic + gut coverage in one sachet: 1 g/10 L for 4–5 days (prophylactic), 1 g/4 L for 3–5 days (severe).",
    ],
    hi: [
      "हर ग्राम में: डॉक्सीसाइक्लिन 100 mg + नियोमाइसिन 100 mg।",
      "डॉक्सीसाइक्लिन लिपोफिलिक टेट्रासाइक्लिन है — अच्छी तरह सोखी जाती है, फेफड़ों और एयर सैक तक पहुंचती है, OTC से कम कैल्शियम से प्रभावित। नियोमाइसिन एमिनोग्लाइकोसाइड है जो मुंह से लगभग नहीं सोखा जाता, इसलिए आंत में रहकर E. coli और साल्मोनेला पर काम करता है।",
      "पूरे शरीर + आंत — एक पैकेट में: बचाव 1 ग्राम/10 लीटर 4–5 दिन, गंभीर 1 ग्राम/4 लीटर 3–5 दिन।",
    ],
  },
  "primosol-s": {
    en: [
      "Sulphadiazine 10% + trimethoprim 2% (5:1 ratio — the classic 'potentiated sulphonamide').",
      "Sequential blockade of folate synthesis: sulphadiazine blocks dihydropteroate synthase, trimethoprim blocks dihydrofolate reductase — together bactericidal.",
      "Covers Gram-positives, Gram-negatives and coccidia (sulphonamides are anticoccidial). Dose 15–20 mg/kg BW; keep water intake good to avoid kidney crystal issues.",
    ],
    hi: [
      "सल्फाडायज़ीन 10% + ट्राइमेथोप्रिम 2% (5:1 अनुपात — क्लासिक 'पोटेंशिएटेड सल्फोनामाइड')।",
      "फोलेट बनने के दो लगातार कदम रोकता है: सल्फाडायज़ीन डाइहाइड्रोप्टेरोएट सिंथेज़, ट्राइमेथोप्रिम डाइहाइड्रोफोलेट रिडक्टेज़ — साथ में बैक्टीरिया को मारते हैं।",
      "ग्राम-पॉज़िटिव, ग्राम-नेगेटिव और कॉक्सीडिया पर असर (सल्फोनामाइड कॉक्सीडिया-रोधी हैं)। डोज़ 15–20 mg/kg; किडनी में क्रिस्टल से बचने के लिए पानी पूरा पिलाएं।",
    ],
  },
  "respiflox-bh": {
    en: [
      "Per ml: levofloxacin 100 mg + bromhexine HCl 7.5 mg.",
      "Levofloxacin is a third-generation fluoroquinolone with better Gram-positive and Mycoplasma activity than older quinolones; bromhexine is a mucolytic that thins secretions and increases antibiotic levels in respiratory mucus.",
      "Dose 10–15 mg/kg BW for 3–5 days. Fluoroquinolone stewardship applies — vet-confirmed cases only.",
    ],
    hi: [
      "हर ml में: लेवोफ्लॉक्सासिन 100 mg + ब्रोमहेक्सिन HCl 7.5 mg।",
      "लेवोफ्लॉक्सासिन तीसरी पीढ़ी का फ्लोरोक्विनोलोन है, पुराने क्विनोलोन से ग्राम-पॉज़िटिव और माइकोप्लाज़्मा पर बेहतर; ब्रोमहेक्सिन बलगम पतला करता है और सांस के बलगम में एंटीबायोटिक का स्तर बढ़ाता है।",
      "डोज़ 10–15 mg/kg, 3–5 दिन। फ्लोरोक्विनोलोन का ज़िम्मेदार उपयोग — केवल वेटेरिनेरियन द्वारा पुष्ट केस में।",
    ],
  },
  "gentazen": {
    en: [
      "Gentamicin sulphate 40 mg/ml — an aminoglycoside binding the 30S ribosome; bactericidal against Gram-negatives (E. coli, Salmonella pullorum/typhimurium/gallinarum, Pseudomonas).",
      "Not absorbed orally, which is why it is given by injection (S/C, I/M or I/V) at 2.5–5 mg/kg BW.",
      "Aminoglycosides can harm the kidneys — exact dosing by weight and adequate water are important.",
    ],
    hi: [
      "जेंटामाइसिन सल्फेट 40 mg/ml — एमिनोग्लाइकोसाइड जो 30S राइबोसोम से जुड़ता है; ग्राम-नेगेटिव (E. coli, साल्मोनेला पुलोरम/टाइफीम्यूरियम/गैलिनेरम, स्यूडोमोनास) को मारता है।",
      "मुंह से सोखा नहीं जाता, इसीलिए इंजेक्शन (S/C, I/M या I/V) से 2.5–5 mg/kg दिया जाता है।",
      "एमिनोग्लाइकोसाइड किडनी को नुकसान पहुंचा सकते हैं — वज़न से सटीक डोज़ और पूरा पानी ज़रूरी।",
    ],
  },
  "tylozen-20": {
    en: [
      "Tylosin tartrate 200 mg/ml — the water-soluble/injectable macrolide salt; 50S ribosome.",
      "Spectrum: Mycoplasma, Chlamydophila, Pasteurella and Gram-positives (Clostridium, Staphylococcus, Streptococcus).",
      "15–30 mg/kg BW S/C or I/M — useful for individual valuable birds (breeders) where feed or water dosing is unreliable.",
    ],
    hi: [
      "टायलोसिन टार्ट्रेट 200 mg/ml — पानी/इंजेक्शन वाला मैक्रोलाइड लवण; 50S राइबोसोम।",
      "स्पेक्ट्रम: माइकोप्लाज़्मा, क्लैमाइडोफिला, पाश्चुरेला और ग्राम-पॉज़िटिव (क्लोस्ट्रीडियम, स्टैफिलोकोकस, स्ट्रेप्टोकोकस)।",
      "15–30 mg/kg S/C या I/M — कीमती पक्षियों (ब्रीडर) के लिए जहां फीड/पानी से डोज़ भरोसेमंद नहीं।",
    ],
  },
  "amikazen": {
    en: [
      "Amikacin sulphate 250 mg/ml — a semi-synthetic aminoglycoside designed to resist the enzymes that inactivate gentamicin.",
      "Spectrum: Salmonella, E. coli, Pseudomonas, Klebsiella, Enterobacter, Corynebacterium, Mycobacterium avium.",
      "10–20 mg/kg BW (S/C, I/M or I/V); a reserve option for gentamicin-resistant Gram-negative infections, on vet advice.",
    ],
    hi: [
      "एमिकासिन सल्फेट 250 mg/ml — अर्ध-सिंथेटिक एमिनोग्लाइकोसाइड, जिसे उन एंज़ाइम से बचने के लिए बनाया गया है जो जेंटामाइसिन को बेकार कर देते हैं।",
      "स्पेक्ट्रम: साल्मोनेला, E. coli, स्यूडोमोनास, क्लेबसिएला, एंटेरोबैक्टर, कोरिनेबैक्टीरियम, माइकोबैक्टीरियम एवियम।",
      "10–20 mg/kg (S/C, I/M या I/V); जेंटामाइसिन-रेज़िस्टेंट ग्राम-नेगेटिव इन्फेक्शन के लिए रिज़र्व विकल्प, वेटेरिनेरियन की सलाह पर।",
    ],
  },
  "zenoxy-la": {
    en: [
      "Oxytetracycline 200 mg/ml long-acting — the LA vehicle releases drug slowly from the injection site, keeping blood levels up for longer.",
      "Broad spectrum: Mycoplasma, Pasteurella, E. coli, Haemophilus, Diplococcus.",
      "50 mg/kg BW S/C or I/M — fewer injections means less catching and handling stress.",
    ],
    hi: [
      "ऑक्सीटेट्रासाइक्लिन 200 mg/ml लंबे असर वाला — LA फॉर्मूला इंजेक्शन की जगह से दवा धीरे छोड़ता है, खून में स्तर लंबे समय तक बना रहता है।",
      "ब्रॉड स्पेक्ट्रम: माइकोप्लाज़्मा, पाश्चुरेला, E. coli, हीमोफिलस, डिप्लोकोकस।",
      "50 mg/kg S/C या I/M — कम इंजेक्शन यानी पक्षी पकड़ने का कम तनाव।",
    ],
  },
  "zenvita": {
    en: [
      "Composition: vitamin A 4000 IU, vitamin D 4000 IU, vitamin E acetate 8 mg, niacinamide 20 mg, thiamine 20 mg, pyridoxine 10 mg, riboflavin 2 mg, D-panthenol 2 mg, B12 20 mcg, biotin 20 mcg.",
      "B-complex vitamins are coenzymes of energy metabolism (thiamine for carbohydrates, riboflavin/niacin for oxidation, B12 for cell division); A, D and E support immunity, bone and fertility.",
      "1 ml/kg BW by injection bypasses a sick gut — for birds off feed and water.",
    ],
    hi: [
      "संरचना: विटामिन A 4000 IU, विटामिन D 4000 IU, विटामिन E एसीटेट 8 mg, नियासिनामाइड 20 mg, थायमिन 20 mg, पाइरिडॉक्सिन 10 mg, राइबोफ्लेविन 2 mg, D-पैन्थेनॉल 2 mg, B12 20 mcg, बायोटिन 20 mcg।",
      "B-कॉम्प्लेक्स विटामिन ऊर्जा मेटाबॉलिज़्म के सहायक एंज़ाइम हैं (थायमिन कार्बोहाइड्रेट के लिए, राइबोफ्लेविन/नियासिन ऑक्सीकरण के लिए, B12 कोशिका-विभाजन के लिए); A, D और E इम्युनिटी, हड्डी और फर्टिलिटी के लिए।",
      "इंजेक्शन से 1 ml/kg — बीमार आंत को बायपास करता है, खाना-पानी छोड़ चुके पक्षियों के लिए।",
    ],
  },
  "cefton-tazo": {
    en: [
      "Ceftriaxone sodium 4000 mg + tazobactam 500 mg per vial — a third-generation cephalosporin with a beta-lactamase inhibitor.",
      "Ceftriaxone blocks cell-wall cross-linking (penicillin-binding proteins); tazobactam protects it from beta-lactamase enzymes made by resistant E. coli and Klebsiella.",
      "Important: cephalosporins act on the cell wall, so they do NOT work on Mycoplasma itself — in CRD they treat the secondary bacterial infection. Third-generation cephalosporins are critically important for humans — last-line, vet-only use.",
    ],
    hi: [
      "हर वायल में सेफ्ट्रियाक्सोन सोडियम 4000 mg + टैज़ोबैक्टम 500 mg — तीसरी पीढ़ी का सेफालोस्पोरिन, बीटा-लैक्टामेज़ इनहिबिटर के साथ।",
      "सेफ्ट्रियाक्सोन कोशिका-दीवार की क्रॉस-लिंकिंग (पेनिसिलिन-बाइंडिंग प्रोटीन) रोकता है; टैज़ोबैक्टम उसे रेज़िस्टेंट E. coli और क्लेबसिएला के बीटा-लैक्टामेज़ एंज़ाइम से बचाता है।",
      "ज़रूरी: सेफालोस्पोरिन दीवार पर काम करते हैं, इसलिए माइकोप्लाज़्मा पर खुद असर नहीं करते — CRD में ये सेकेंडरी बैक्टीरियल इन्फेक्शन का इलाज करते हैं। तीसरी पीढ़ी के सेफालोस्पोरिन इंसानों के लिए बेहद ज़रूरी हैं — आखिरी विकल्प, केवल वेटेरिनेरियन द्वारा।",
    ],
  },
  "paracip-oral": {
    en: [
      "Paracetamol IP 250 mg per 5 ml (50 mg/ml).",
      "Inhibits COX mainly in the central nervous system, lowering prostaglandin E2 in the hypothalamus — reduces fever without affecting normal temperature, with minimal gut irritation compared with NSAIDs.",
      "15–20 mg/kg BW three times a day = 0.3–0.4 ml per kg per dose. Supportive only — the cause (e.g. ND, IB) still needs its own management.",
    ],
    hi: [
      "पैरासिटामोल IP 250 mg प्रति 5 ml (50 mg/ml)।",
      "मुख्य रूप से दिमाग (CNS) में COX रोकता है, हाइपोथैलेमस में प्रोस्टाग्लैंडिन E2 घटाता है — सामान्य तापमान बदले बिना बुखार उतारता है, NSAID से कम पेट में जलन।",
      "15–20 mg/kg दिन में तीन बार = हर डोज़ में 0.3–0.4 ml प्रति किलो। सिर्फ सहायक — कारण (जैसे ND, IB) का इलाज अलग से ज़रूरी।",
    ],
  },
  "zenmix-ad3ec": {
    en: [
      "Per ml: vitamin A 50,000 IU, D3 5,000 IU, E 30 IU, C 100 mg.",
      "Vitamin A maintains epithelial (mucosal) integrity and supports T-cell and antibody development; D3 regulates Ca/P for bone and shell; E protects membranes and fertility; C is the anti-stress vitamin (birds make it, but not enough under stress).",
      "Short courses: chicks/broilers 4–5 ml/100 chicks, layers/breeders 10 ml/100 birds, 5–7 days around stress events.",
    ],
    hi: [
      "हर ml में: विटामिन A 50,000 IU, D3 5,000 IU, E 30 IU, C 100 mg।",
      "विटामिन A झिल्ली (म्यूकोसा) को स्वस्थ रखता है और T-सेल व एंटीबॉडी बनने में मदद करता है; D3 हड्डी और छिलके के लिए Ca/P संभालता है; E झिल्ली और फर्टिलिटी बचाता है; C एंटी-स्ट्रेस विटामिन है (पक्षी बनाते हैं, पर तनाव में काफी नहीं)।",
      "छोटे कोर्स: चूज़े/ब्रॉयलर 4–5 ml/100 चूज़े, लेयर/ब्रीडर 10 ml/100 पक्षी, तनाव के आसपास 5–7 दिन।",
    ],
  },
  "zenvit-e-plus": {
    en: [
      "Per gram: vitamin E 100 mg + selenium 1 mg + 1,3-1,6 beta-glucans.",
      "Selenium is part of glutathione peroxidase, which destroys hydrogen peroxide and lipid peroxides; it also regenerates oxidised vitamin E — a true synergy.",
      "Deficiency diseases it prevents: muscular dystrophy, exudative diathesis (Se/E) and encephalomalacia — 'crazy chick disease' (E). Works in water (5 g/100 or 50 birds) or feed (100–250 g/t).",
    ],
    hi: [
      "हर ग्राम में: विटामिन E 100 mg + सेलेनियम 1 mg + 1,3-1,6 बीटा-ग्लूकन।",
      "सेलेनियम ग्लूटाथियोन पेरोक्सीडेज़ का हिस्सा है जो हाइड्रोजन पेरोक्साइड और लिपिड पेरोक्साइड नष्ट करता है; यह इस्तेमाल हो चुके विटामिन E को फिर से सक्रिय भी करता है — असली तालमेल।",
      "जिन कमी-रोगों से बचाता है: मस्कुलर डिस्ट्रॉफी, एक्सुडेटिव डायथेसिस (Se/E) और एन्सेफेलोमलेशिया — 'क्रेज़ी चिक' (E)। पानी (5 ग्राम/100 या 50 पक्षी) या फीड (100–250 ग्राम/टन) दोनों में।",
    ],
  },
  "bio-triple-care-20": {
    en: [
      "Per 100 g: glutaraldehyde 12 g + 1,6-dihydroxy-2,5-dioxahexane 10.5 g + polymethyl derivatives 4.6 g.",
      "Glutaraldehyde cross-links amine and thiol groups of microbial proteins; the dioxahexane is a non-oxidising biocide that is fungicidal, sporicidal and tuberculocidal with long residual action.",
      "Dilution maths: routine 5 ml/L (1:200), terminal 15 ml/L (≈1:67) — use on a cleaned, empty shed and give adequate contact time.",
    ],
    hi: [
      "हर 100 ग्राम में: ग्लूटाराल्डिहाइड 12 ग्राम + 1,6-डाइहाइड्रॉक्सी-2,5-डाइऑक्साहेक्सेन 10.5 ग्राम + पॉलीमिथाइल डेरिवेटिव 4.6 ग्राम।",
      "ग्लूटाराल्डिहाइड कीटाणुओं के प्रोटीन के एमीन और थायोल ग्रुप को आपस में जोड़ता है; डाइऑक्साहेक्सेन नॉन-ऑक्सीडाइज़िंग बायोसाइड है जो फंगस, स्पोर और TB कीटाणु तक मारता है और लंबे समय असर रखता है।",
      "घोल का हिसाब: रूटीन 5 ml/लीटर (1:200), टर्मिनल 15 ml/लीटर (≈1:67) — साफ, खाली शेड पर और पूरा संपर्क समय दें।",
    ],
  },
  "hygin-tact-20": {
    en: [
      "QAC 6% w/v (alkyl, octyldecyl, dioctyl and didecyl dimethyl ammonium chlorides) + glutaraldehyde 3.1% + pine oil 1.7% + terpineol 1.7%.",
      "QAC + glutaraldehyde synergy: QAC damages membranes so glutaraldehyde penetrates faster — kill within 10 minutes of contact, residual activity 7 days, effective with organic matter.",
      "Dilutions: terminal 10 ml/L, routine 5 ml/L, foot/equipment dip 20 ml/L; aquaculture 400–900 ml per acre at 1–1.2 m depth.",
    ],
    hi: [
      "QAC 6% w/v (एल्काइल, ऑक्टाइलडेसिल, डाइऑक्टाइल और डाइडेसिल डाइमिथाइल अमोनियम क्लोराइड) + ग्लूटाराल्डिहाइड 3.1% + पाइन ऑयल 1.7% + टर्पिनियोल 1.7%।",
      "QAC + ग्लूटाराल्डिहाइड तालमेल: QAC झिल्ली तोड़ता है ताकि ग्लूटाराल्डिहाइड तेज़ी से अंदर जाए — 10 मिनट में कीटाणु खत्म, 7 दिन असर, गंदगी में भी काम।",
      "घोल: टर्मिनल 10 ml/लीटर, रूटीन 5 ml/लीटर, फुट/उपकरण डिप 20 ml/लीटर; मछली 400–900 ml प्रति एकड़ (1–1.2 मीटर गहराई)।",
    ],
  },
  "saniquat-20": {
    en: [
      "Twin-chain QAC (di-C8–10 alkyldimethyl ammonium chlorides, 4%) + benzalkonium-type QAC (benzyl-C12–16, 2%) + tetrasodium EDTA 4%.",
      "EDTA chelates calcium and magnesium, so the QAC is not neutralised by hard water; it also loosens biofilm. QACs carry a permanent positive charge, effective regardless of pH.",
      "Water sanitation at 1 ml/10 L; disinfection 4 ml/L; severe contamination 10 ml/L. Non-corrosive — safe on hatchery equipment.",
    ],
    hi: [
      "ट्विन-चेन QAC (डाई-C8–10 एल्काइलडाइमिथाइल अमोनियम क्लोराइड, 4%) + बेंज़ालकोनियम-प्रकार QAC (बेंज़ाइल-C12–16, 2%) + टेट्रासोडियम EDTA 4%।",
      "EDTA कैल्शियम और मैग्नीशियम को बांधता है, इसलिए खारा पानी QAC को बेअसर नहीं करता; यह बायोफिल्म भी ढीली करता है। QAC पर स्थायी पॉज़िटिव चार्ज है, हर pH पर असरदार।",
      "पानी की सफाई 1 ml/10 लीटर; डिसइन्फेक्शन 4 ml/लीटर; ज़्यादा संक्रमण 10 ml/लीटर। जंग नहीं — हैचरी उपकरण के लिए सुरक्षित।",
    ],
  },
  "triox-3": {
    en: [
      "Potassium monopersulphate triple salt (KHSO₅·0.5KHSO₄·0.5K₂SO₄) 49.8% + NaCl 1.5%.",
      "In water it generates active oxygen (and, with chloride, some hypochlorous acid) that oxidises proteins, lipids and nucleic acids — effective against non-enveloped viruses (IBD/Gumboro, adenovirus) that resist QACs.",
      "Low toxicity and biodegradable, so it can be fogged at 5 g/L with birds present during outbreaks; water sanitation 1 g/10 L routine, 1 g/L in outbreaks; foot/vehicle dip 5–10 g/L.",
    ],
    hi: [
      "पोटैशियम मोनोपरसल्फेट ट्रिपल सॉल्ट (KHSO₅·0.5KHSO₄·0.5K₂SO₄) 49.8% + NaCl 1.5%।",
      "पानी में सक्रिय ऑक्सीजन (और क्लोराइड के साथ कुछ हाइपोक्लोरस एसिड) बनाता है जो प्रोटीन, लिपिड और न्यूक्लिक एसिड को ऑक्सीडाइज़ करता है — QAC से न मरने वाले बिना-आवरण वायरस (गम्बोरो/IBD, एडिनोवायरस) पर असरदार।",
      "कम ज़हरीला और पर्यावरण में टूट जाता है, इसलिए बीमारी में पक्षियों के रहते 5 ग्राम/लीटर फॉगिंग; पानी की सफाई रूटीन 1 ग्राम/10 लीटर, बीमारी में 1 ग्राम/लीटर; फुट/गाड़ी डिप 5–10 ग्राम/लीटर।",
    ],
  },
};
