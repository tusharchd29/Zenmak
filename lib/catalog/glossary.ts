import type { L } from "./types";

// Technical terms a rep should use confidently with farmers, vets and
// nutritionists. Each lesson shows the terms that appear in its product's
// text (matched on `match`), and /learn/glossary lists them all.

export type Term = {
  id: string;
  term: string;
  /** Regexes (as source strings) matched against a product's English text.
   * Acronyms are matched case-sensitively with word boundaries. */
  match: string[];
  meaning: L;
  /** A sentence the rep can actually say. */
  say: L;
};

export const GLOSSARY: Term[] = [
  {
    id: "fcr",
    term: "FCR (Feed Conversion Ratio)",
    match: ["\\bFCR\\b"],
    meaning: {
      en: "Kilograms of feed eaten for each kilogram of live weight (or eggs) produced. Lower is better: FCR 1.55 means 1.55 kg feed per kg of bird.",
      hi: "हर 1 किलो वज़न (या अंडे) के लिए कितना किलो फीड लगा। कम FCR बेहतर है: FCR 1.55 यानी 1 किलो पक्षी पर 1.55 किलो फीड।",
    },
    say: {
      en: "Even 3 points of FCR (1.55 to 1.52) on a 10,000-bird batch saves about 700 kg of feed.",
      hi: "10,000 पक्षियों के बैच में FCR सिर्फ 3 पॉइंट (1.55 से 1.52) सुधरे तो लगभग 700 किलो फीड बचता है।",
    },
  },
  {
    id: "nsp",
    term: "NSP (Non-Starch Polysaccharides)",
    match: ["\\bNSPs?\\b", "arabinoxylan", "fibre"],
    meaning: {
      en: "Fibre in cereals and meals (arabinoxylans, beta-glucans, cellulose, mannans) that birds have no enzymes to digest. Soluble NSP makes gut contents sticky and traps nutrients.",
      hi: "अनाज और खली का फाइबर (अरेबिनोज़ाइलन, बीटा-ग्लूकन, सेल्युलोज़, मैनन) जिसे पचाने के एंज़ाइम पक्षी में नहीं होते। घुलनशील NSP आंत को चिपचिपा बनाकर पोषण फंसा लेता है।",
    },
    say: {
      en: "Wheat, DORB and DDGS are high in NSP — that is where an NSP enzyme earns its money.",
      hi: "गेहूं, DORB और DDGS में NSP ज़्यादा होता है — वहीं NSP एंज़ाइम सबसे ज़्यादा फायदा देता है।",
    },
  },
  {
    id: "phytase",
    term: "Phytate / Phytase",
    match: ["phytase", "phytate", "\\bDCP\\b"],
    meaning: {
      en: "About two-thirds of the phosphorus in plant feed is locked in phytate. Phytase enzyme releases it, so less DCP (dicalcium phosphate) needs to be added.",
      hi: "पौधों वाले फीड का लगभग दो-तिहाई फॉस्फोरस फाइटेट में बंद रहता है। फाइटेज़ एंज़ाइम उसे छुड़ाता है, इसलिए कम DCP डालना पड़ता है।",
    },
    say: {
      en: "The phytase activity lets you cut DCP — that is a direct saving in the formula.",
      hi: "फाइटेज़ से DCP कम किया जा सकता है — यह फॉर्मूले में सीधी बचत है।",
    },
  },
  {
    id: "matrix",
    term: "Matrix value",
    match: ["matrix value"],
    meaning: {
      en: "The nutrients (energy, protein, phosphorus) a nutritionist can 'credit' to an enzyme in the formula, so cheaper raw materials or less supplement can be used.",
      hi: "वे पोषक तत्व (ऊर्जा, प्रोटीन, फॉस्फोरस) जो न्यूट्रिशनिस्ट फॉर्मूले में एंज़ाइम के नाम लिखता है, ताकि सस्ता कच्चा माल या कम सप्लीमेंट लगे।",
    },
    say: {
      en: "At 500 g/t you can take a matrix of 25–50 kcal ME, 0.5% protein and replace 0.75–1 kg DCP.",
      hi: "500 ग्राम/टन पर 25–50 kcal ME, 0.5% प्रोटीन और 0.75–1 किलो DCP का मैट्रिक्स लिया जा सकता है।",
    },
  },
  {
    id: "me",
    term: "ME (Metabolisable Energy)",
    match: ["\\bME\\b"],
    meaning: {
      en: "The energy in feed the bird can actually use, in kcal per kg. Energy is the most expensive part of a poultry diet.",
      hi: "फीड की वह ऊर्जा जो पक्षी सच में इस्तेमाल कर पाता है, kcal प्रति किलो में। पोल्ट्री फीड का सबसे महंगा हिस्सा ऊर्जा ही है।",
    },
    say: {
      en: "Every kcal of ME the bird recovers is energy you didn't have to buy as oil or maize.",
      hi: "पक्षी जो भी ME वापस पाता है, वह ऊर्जा आपको तेल या मक्के के रूप में खरीदनी नहीं पड़ी।",
    },
  },
  {
    id: "viscosity",
    term: "Digesta viscosity",
    match: ["viscosity"],
    meaning: {
      en: "How thick and sticky the gut contents are. High viscosity slows digestion, feeds harmful bacteria and causes wet, sticky litter.",
      hi: "आंत के अंदर का खाना कितना गाढ़ा और चिपचिपा है। ज़्यादा चिपचिपाहट से पाचन धीमा, बुरे बैक्टीरिया ज़्यादा और लिटर गीला होता है।",
    },
    say: {
      en: "Sticky litter usually starts with high digesta viscosity — fix the gut and the litter follows.",
      hi: "चिपचिपा लिटर अक्सर आंत की चिपचिपाहट से शुरू होता है — आंत ठीक करो, लिटर अपने आप ठीक होगा।",
    },
  },
  {
    id: "villi",
    term: "Villi",
    match: ["\\bvill(i|us)\\b"],
    meaning: {
      en: "Finger-like projections lining the small intestine where nutrients are absorbed. Taller villi = more absorbing surface = better growth.",
      hi: "छोटी आंत की अंदरूनी परत पर उंगली जैसे उभार, जहां से पोषण सोखा जाता है। लंबे विली = ज़्यादा सतह = बेहतर ग्रोथ।",
    },
    say: {
      en: "Butyric acid is the main fuel for gut cells — it builds taller villi.",
      hi: "ब्यूटिरिक एसिड आंत की कोशिकाओं का मुख्य ईंधन है — इससे विली लंबे होते हैं।",
    },
  },
  {
    id: "organic-acid",
    term: "Organic acids (undissociated)",
    match: ["organic acid", "acidifier", "buffering capacity"],
    meaning: {
      en: "Formic, propionic, lactic, citric, fumaric and similar acids. In their undissociated form they enter bacteria and release H⁺ inside, which pH-sensitive bacteria like E. coli and Salmonella cannot handle.",
      hi: "फॉर्मिक, प्रोपियोनिक, लैक्टिक, साइट्रिक, फ्यूमेरिक जैसे एसिड। बिना टूटे (undissociated) रूप में ये बैक्टीरिया के अंदर जाकर H⁺ छोड़ते हैं, जिसे E. coli और साल्मोनेला जैसे बैक्टीरिया सह नहीं पाते।",
    },
    say: {
      en: "A blend of acids works across the crop, stomach and intestine because each acid has a different pKa.",
      hi: "एसिड का मिश्रण क्रॉप, पेट और आंत — हर जगह काम करता है क्योंकि हर एसिड का pKa अलग होता है।",
    },
  },
  {
    id: "coated",
    term: "Coated / micro-encapsulated",
    match: ["coated", "encapsulat"],
    meaning: {
      en: "The active is wrapped in a fat or matrix coat so it is not used up in the feed or upper gut and is released further down, where it is needed.",
      hi: "सक्रिय तत्व को फैट या परत में लपेटा जाता है ताकि वह फीड या ऊपरी आंत में खर्च न हो और नीचे जाकर, जहां ज़रूरत है, वहां निकले।",
    },
    say: {
      en: "Uncoated butyric acid is absorbed in the crop; coating carries it to the hind gut where Salmonella lives.",
      hi: "बिना कोटिंग का ब्यूटिरिक एसिड क्रॉप में ही सोख लिया जाता है; कोटिंग उसे पिछली आंत तक ले जाती है जहां साल्मोनेला रहता है।",
    },
  },
  {
    id: "scfa",
    term: "SCFA / MCFA",
    match: ["\\bSCFAs?\\b", "\\bMCFAs?\\b", "butyric"],
    meaning: {
      en: "Short-chain fatty acids (like butyric) feed and repair gut cells; medium-chain fatty acids (C8–C12) are quick energy and break the membranes of bacteria and enveloped viruses.",
      hi: "शॉर्ट-चेन फैटी एसिड (जैसे ब्यूटिरिक) आंत की कोशिकाओं को पोषण और मरम्मत देते हैं; मीडियम-चेन फैटी एसिड (C8–C12) तुरंत ऊर्जा देते हैं और बैक्टीरिया व आवरण वाले वायरस की झिल्ली तोड़ते हैं।",
    },
    say: {
      en: "SCFAs heal the gut lining, MCFAs attack the bugs — that's why the combination works.",
      hi: "SCFA आंत की परत ठीक करते हैं, MCFA कीटाणुओं पर हमला करते हैं — इसीलिए यह जोड़ी काम करती है।",
    },
  },
  {
    id: "hlb",
    term: "Emulsifier & HLB",
    match: ["emulsif", "\\bHLB\\b", "lysophospho", "lysolecithin", "bile salt"],
    meaning: {
      en: "An emulsifier has a water-loving and a fat-loving end, so it breaks oil into tiny droplets that lipase can digest. HLB (hydrophilic–lipophilic balance) above ~10 means it works well in the watery gut.",
      hi: "इमल्सीफ़ायर का एक सिरा पानी पसंद और दूसरा तेल पसंद होता है, इसलिए वह तेल को बारीक बूंदों में तोड़ता है जिसे लाइपेज़ पचा सके। HLB (हाइड्रोफिलिक–लाइपोफिलिक बैलेंस) ~10 से ऊपर हो तो वह पानी वाली आंत में अच्छा काम करता है।",
    },
    say: {
      en: "Chicks make little bile in the first weeks, so without an emulsifier much of the oil you pay for is wasted.",
      hi: "पहले हफ्तों में चूज़ों में पित्त कम बनता है, इसलिए इमल्सीफ़ायर के बिना जिस तेल के पैसे दिए उसका बड़ा हिस्सा बेकार जाता है।",
    },
  },
  {
    id: "mycotoxin",
    term: "Mycotoxin (aflatoxin, ochratoxin, T-2, DON, ZEN)",
    match: ["mycotoxin", "aflatoxin", "ochratoxin", "\\bT-2\\b"],
    meaning: {
      en: "Poisons made by moulds on grains. Aflatoxin damages the liver and immunity, ochratoxin the kidneys, T-2 causes mouth lesions. Even low levels cut growth, eggs and vaccine response.",
      hi: "अनाज पर फफूंद से बनने वाले ज़हर। अफ्लाटॉक्सिन लीवर और इम्युनिटी, ओक्राटॉक्सिन किडनी खराब करता है, T-2 से मुंह में छाले होते हैं। कम मात्रा भी वज़न, अंडे और वैक्सीन असर घटाती है।",
    },
    say: {
      en: "The guideline limit for aflatoxin in poultry feed is 20 ppb — monsoon maize often crosses it.",
      hi: "पोल्ट्री फीड में अफ्लाटॉक्सिन की सीमा 20 ppb है — बरसात का मक्का अक्सर इसे पार कर जाता है।",
    },
  },
  {
    id: "ppb",
    term: "ppm / ppb",
    match: ["\\bppm\\b", "\\bppb\\b"],
    meaning: {
      en: "Parts per million / parts per billion. 1 ppm = 1 gram per tonne; 1 ppb = 1 milligram per tonne.",
      hi: "पार्ट्स पर मिलियन / पार्ट्स पर बिलियन। 1 ppm = 1 ग्राम प्रति टन; 1 ppb = 1 मिलीग्राम प्रति टन।",
    },
    say: {
      en: "20 ppb of aflatoxin is just 20 milligrams in a tonne of feed — that's why you can't see it.",
      hi: "20 ppb अफ्लाटॉक्सिन यानी एक टन फीड में सिर्फ 20 मिलीग्राम — इसीलिए यह दिखता नहीं।",
    },
  },
  {
    id: "hscas",
    term: "HSCAS / phyllosilicate clay",
    match: ["\\bHSCAS\\b", "phyllosilicate"],
    meaning: {
      en: "Hydrated sodium calcium aluminosilicate — a layered clay with a huge surface. Flat, polar toxins like aflatoxin B1 get trapped between its layers.",
      hi: "हाइड्रेटेड सोडियम कैल्शियम एल्युमिनोसिलिकेट — परतों वाली क्ले जिसकी सतह बहुत बड़ी होती है। अफ्लाटॉक्सिन B1 जैसे चपटे, ध्रुवीय ज़हर इसकी परतों के बीच फंस जाते हैं।",
    },
    say: {
      en: "Our HSCAS binds aflatoxin B1 and stays stable from pH 2 to 10, so the toxin isn't released again in the intestine.",
      hi: "हमारा HSCAS अफ्लाटॉक्सिन B1 को बांधता है और pH 2 से 10 तक स्थिर रहता है, इसलिए आंत में ज़हर फिर से नहीं छूटता।",
    },
  },
  {
    id: "mos",
    term: "MOS (Mannan Oligosaccharides)",
    match: ["\\bMOS\\b", "mannan"],
    meaning: {
      en: "Sugars from yeast cell walls. E. coli and Salmonella grab onto mannose with their fimbriae, so MOS acts as a decoy that carries them out instead of letting them attach to the gut.",
      hi: "यीस्ट की कोशिका-दीवार से मिलने वाली शक्कर। E. coli और साल्मोनेला अपने फिम्ब्रिया से मैनोज़ पकड़ते हैं, इसलिए MOS चारे की तरह उन्हें पकड़कर बाहर ले जाता है, आंत से चिपकने नहीं देता।",
    },
    say: {
      en: "MOS doesn't kill bacteria — it stops them sticking to the gut, so there's no resistance issue.",
      hi: "MOS बैक्टीरिया को मारता नहीं — उन्हें आंत से चिपकने नहीं देता, इसलिए रेज़िस्टेंस का सवाल ही नहीं।",
    },
  },
  {
    id: "beta-glucan",
    term: "Beta-glucans (1,3-1,6)",
    match: ["beta-glucans"],
    meaning: {
      en: "Yeast-derived 1,3/1,6 beta-glucans prime immune cells (macrophages). Note: cereal beta-glucans are different — those are an anti-nutritional NSP.",
      hi: "यीस्ट से मिलने वाले 1,3/1,6 बीटा-ग्लूकन इम्यून कोशिकाओं (मैक्रोफेज) को सक्रिय करते हैं। ध्यान दें: अनाज वाले बीटा-ग्लूकन अलग हैं — वे पचने में बाधा डालने वाला NSP हैं।",
    },
    say: {
      en: "The 1,3-1,6 beta-glucans in this product are the immune-boosting yeast type, not the cereal fibre.",
      hi: "इस प्रोडक्ट में 1,3-1,6 बीटा-ग्लूकन इम्युनिटी बढ़ाने वाले यीस्ट प्रकार के हैं, अनाज वाला फाइबर नहीं।",
    },
  },
  {
    id: "cfu",
    term: "Probiotic, cfu & spore-formers",
    match: ["\\bcfu\\b", "probiotic", "Bacillus"],
    meaning: {
      en: "cfu = colony-forming units, the count of live organisms per gram. Bacillus strains form spores, which survive pelleting heat and storage; Lactobacillus does not, so it must be encapsulated or given in water.",
      hi: "cfu = कॉलोनी-फॉर्मिंग यूनिट, यानी प्रति ग्राम ज़िंदा जीवाणुओं की गिनती। बैसिलस स्पोर बनाते हैं जो पेलेटिंग की गर्मी और स्टोरेज में बच जाते हैं; लैक्टोबैसिलस नहीं, इसलिए उसे कैप्सूल में या पानी में देना पड़ता है।",
    },
    say: {
      en: "Always ask a competitor for the strain number and cfu per gram — ours declares both on the label.",
      hi: "दूसरी कंपनी से हमेशा स्ट्रेन नंबर और cfu प्रति ग्राम पूछिए — हमारे लेबल पर दोनों लिखे हैं।",
    },
  },
  {
    id: "dysbacteriosis",
    term: "Dysbacteriosis",
    match: ["dysbacteriosis"],
    meaning: {
      en: "An imbalance in gut bacteria (too many harmful, too few beneficial) without a single specific disease — signs are watery droppings, undigested feed in droppings and wet litter.",
      hi: "आंत के बैक्टीरिया का असंतुलन (बुरे ज़्यादा, अच्छे कम), बिना किसी एक खास बीमारी के — लक्षण: पानी जैसी बीट, बीट में बिना पचा फीड और गीला लिटर।",
    },
    say: {
      en: "Undigested feed in the droppings is a classic sign of dysbacteriosis.",
      hi: "बीट में बिना पचा फीड डिसबैक्टीरियोसिस का पक्का लक्षण है।",
    },
  },
  {
    id: "chelate",
    term: "Chelated / proteinate (organic) minerals",
    match: ["chelat", "proteinate", "organic trace mineral", "\\bOTM\\b"],
    meaning: {
      en: "A mineral bound to amino acids or peptides. It is absorbed through amino-acid pathways, is protected from phytate and binders, and has higher bioavailability than inorganic salts like sulphates and oxides.",
      hi: "अमीनो एसिड या पेप्टाइड से जुड़ा मिनरल। यह अमीनो एसिड के रास्ते सोखा जाता है, फाइटेट और बाइंडर से सुरक्षित रहता है, और सल्फेट/ऑक्साइड जैसे इनऑर्गेनिक मिनरल से ज़्यादा बायोअवेलेबल है।",
    },
    say: {
      en: "With organic minerals you feed less and the bird retains more — less zinc and copper go out in the manure.",
      hi: "ऑर्गेनिक मिनरल कम डालना पड़ता है और पक्षी ज़्यादा रखता है — खाद में ज़िंक और कॉपर कम निकलते हैं।",
    },
  },
  {
    id: "bioavailability",
    term: "Bioavailability",
    match: ["bioavailab", "bio-available", "bioavailable"],
    meaning: {
      en: "The share of a nutrient that is actually absorbed and used by the body, not just eaten.",
      hi: "पोषक तत्व का वह हिस्सा जो सिर्फ खाया नहीं गया, बल्कि सच में शरीर में सोखा और इस्तेमाल हुआ।",
    },
    say: {
      en: "What matters is not what's in the bag, it's what's bioavailable to the bird.",
      hi: "ज़रूरी यह नहीं कि बोरी में क्या है, ज़रूरी यह है कि पक्षी को कितना मिला।",
    },
  },
  {
    id: "perosis",
    term: "Perosis / leg weakness",
    match: ["perosis", "chondrodystrophy", "lameness", "leg weakness"],
    meaning: {
      en: "Slipped tendon and twisted legs in fast-growing birds, mainly from manganese, choline or biotin deficiency.",
      hi: "तेज़ी से बढ़ने वाले पक्षियों में नस खिसकना और टांगें मुड़ना, मुख्य रूप से मैंगनीज़, कोलीन या बायोटिन की कमी से।",
    },
    say: {
      en: "Perosis points to manganese and choline — check the premix before blaming the hatchery.",
      hi: "पेरोसिस मैंगनीज़ और कोलीन की कमी बताता है — हैचरी को दोष देने से पहले प्रीमिक्स जांचिए।",
    },
  },
  {
    id: "betaine",
    term: "Betaine (osmolyte & methyl donor)",
    match: ["betaine", "osmo-regulator", "methyl donor"],
    meaning: {
      en: "Betaine holds water inside cells during heat stress (osmolyte), saving energy the cell would spend pumping ions. It also donates methyl groups, sparing methionine and choline.",
      hi: "गर्मी के तनाव में बीटाइन कोशिका के अंदर पानी रोकता है (ऑस्मोलाइट), जिससे आयन पंप करने में लगने वाली ऊर्जा बचती है। यह मिथाइल ग्रुप भी देता है, जिससे मेथियोनिन और कोलीन बचते हैं।",
    },
    say: {
      en: "In summer betaine keeps gut cells hydrated, so digestion doesn't collapse when birds pant.",
      hi: "गर्मी में बीटाइन आंत की कोशिकाओं में पानी रखता है, इसलिए हांफते समय भी पाचन नहीं बिगड़ता।",
    },
  },
  {
    id: "electrolytes",
    term: "Electrolyte balance & panting",
    match: ["electrolyte", "panting", "heat stress"],
    meaning: {
      en: "Birds cannot sweat; they cool by panting, which blows off CO₂ and raises blood pH (respiratory alkalosis) and loses Na⁺ and K⁺. Bicarbonate, potassium and sodium salts restore the balance.",
      hi: "पक्षियों को पसीना नहीं आता; वे हांफकर ठंडे होते हैं, जिससे CO₂ निकलती है, खून का pH बढ़ता है (रेस्पिरेटरी एल्केलोसिस) और Na⁺ व K⁺ घटते हैं। बाइकार्बोनेट, पोटैशियम और सोडियम लवण संतुलन लौटाते हैं।",
    },
    say: {
      en: "Thin shells in summer come from panting — the blood loses the bicarbonate the shell gland needs.",
      hi: "गर्मी में पतला छिलका हांफने से होता है — खून से वह बाइकार्बोनेट निकल जाता है जो छिलका बनाने वाली ग्रंथि को चाहिए।",
    },
  },
  {
    id: "mha",
    term: "MHA (Methionine Hydroxy Analogue)",
    match: ["\\bMHA\\b", "methionine"],
    meaning: {
      en: "A liquid source of methionine that the bird converts to L-methionine. Methionine is the first limiting amino acid in poultry diets — growth stops when it runs short.",
      hi: "मेथियोनिन का लिक्विड स्रोत जिसे पक्षी L-मेथियोनिन में बदलता है। पोल्ट्री फीड में मेथियोनिन पहला 'लिमिटिंग' अमीनो एसिड है — इसकी कमी होते ही ग्रोथ रुक जाती है।",
    },
    say: {
      en: "Methionine is the first limiting amino acid — topping it up in water protects growth on off-feed days.",
      hi: "मेथियोनिन पहला लिमिटिंग अमीनो एसिड है — कम खाने वाले दिनों में पानी से देने पर ग्रोथ बची रहती है।",
    },
  },
  {
    id: "flhs",
    term: "Fatty liver (FLHS)",
    match: ["fatty liver", "choline"],
    meaning: {
      en: "Fatty liver haemorrhagic syndrome: high-producing layers store too much fat in the liver, which turns pale and fragile and can bleed — causing sudden deaths in good-looking birds.",
      hi: "फैटी लीवर हेमरेजिक सिंड्रोम: ज़्यादा अंडे देने वाली लेयर के लीवर में बहुत चर्बी जमती है, लीवर पीला और नाज़ुक होकर फट सकता है — अच्छे दिखने वाले पक्षी अचानक मरते हैं।",
    },
    say: {
      en: "Choline and lipotropic herbs move fat out of the liver as lipoprotein — that's the core of fatty-liver prevention.",
      hi: "कोलीन और लिपोट्रॉपिक जड़ी-बूटियां लीवर से चर्बी को लिपोप्रोटीन के रूप में बाहर ले जाती हैं — फैटी लीवर से बचाव का यही आधार है।",
    },
  },
  {
    id: "hepatoprotective",
    term: "Hepatoprotective",
    match: ["hepato", "silymarin", "Phyllanthus", "liver tonic"],
    meaning: {
      en: "Protecting liver cells (hepatocytes) from damage by toxins, drugs and free radicals, and helping them regenerate. Silymarin, Phyllanthus and Picrorhiza are classic hepatoprotective herbs.",
      hi: "लीवर की कोशिकाओं (हेपेटोसाइट) को ज़हर, दवाओं और फ्री रेडिकल से बचाना और दोबारा बनने में मदद करना। सिलीमारिन, भुई आंवला और कुटकी जानी-मानी लीवर-रक्षक जड़ी-बूटियां हैं।",
    },
    say: {
      en: "After an antibiotic course the liver has done the detox work — a hepatoprotective tonic speeds recovery.",
      hi: "एंटीबायोटिक कोर्स के बाद ज़हर साफ करने का काम लीवर ने किया है — लीवर टॉनिक से रिकवरी जल्दी होती है।",
    },
  },
  {
    id: "antioxidant",
    term: "Antioxidant / oxidative stress",
    match: ["antioxidant", "anti-oxidant", "oxidative", "free radical", "selenium"],
    meaning: {
      en: "Heat, disease and fast growth create free radicals that damage cell membranes. Vitamin E, selenium (via glutathione peroxidase), vitamin C and plant polyphenols neutralise them.",
      hi: "गर्मी, बीमारी और तेज़ ग्रोथ से फ्री रेडिकल बनते हैं जो कोशिका-झिल्ली को नुकसान पहुंचाते हैं। विटामिन E, सेलेनियम (ग्लूटाथियोन पेरोक्सीडेज़ से), विटामिन C और पौधों के पॉलीफेनॉल इन्हें बेअसर करते हैं।",
    },
    say: {
      en: "Vitamin E protects the membrane, selenium clears the peroxides — together they're stronger than either alone.",
      hi: "विटामिन E झिल्ली बचाता है, सेलेनियम पेरोक्साइड साफ करता है — दोनों साथ में अकेले से ज़्यादा ताकतवर हैं।",
    },
  },
  {
    id: "phytogenic",
    term: "Phytogenic (phytobiotic)",
    match: ["phyto", "herbal", "essential oil", "curcumin", "allicin", "cinnamaldehyde", "thymol"],
    meaning: {
      en: "Plant-derived actives (curcumin, allicin, cinnamaldehyde, thymol, piperine) used in feed for antimicrobial, anti-inflammatory, antioxidant and digestive effects, with no residue.",
      hi: "पौधों से मिले सक्रिय तत्व (करक्यूमिन, एलिसिन, सिनेमाल्डिहाइड, थाइमोल, पिपेरिन) जो फीड में कीटाणुनाशक, सूजन-रोधी, एंटीऑक्सीडेंट और पाचन के लिए इस्तेमाल होते हैं, बिना रेसिड्यू के।",
    },
    say: {
      en: "Phytogenics give part of the AGP effect without residue or resistance — that's the direction the market is moving.",
      hi: "फाइटोजेनिक बिना रेसिड्यू और रेज़िस्टेंस के AGP जैसा असर देते हैं — बाज़ार इसी दिशा में जा रहा है।",
    },
  },
  {
    id: "agp",
    term: "AGP (Antibiotic Growth Promoter)",
    match: ["\\bAGPs?\\b"],
    meaning: {
      en: "An antibiotic fed at low, continuous levels to control gut bacteria (especially Clostridium) and improve FCR. India banned colistin for this use in 2019; the trend is to reduce AGPs.",
      hi: "कम मात्रा में लगातार फीड में दी जाने वाली एंटीबायोटिक, आंत के बैक्टीरिया (खासकर क्लोस्ट्रीडियम) काबू करने और FCR सुधारने के लिए। भारत ने 2019 में इस काम के लिए कोलिस्टिन पर रोक लगाई; AGP कम करने का रुझान है।",
    },
    say: {
      en: "Use AGPs only on the nutritionist's advice and pair them with gut-health products to reduce dependence.",
      hi: "AGP सिर्फ न्यूट्रिशनिस्ट की सलाह पर दें और साथ में गट-हेल्थ प्रोडक्ट दें ताकि इन पर निर्भरता घटे।",
    },
  },
  {
    id: "ne",
    term: "Necrotic enteritis (NE)",
    match: ["necrotic enteritis", "Clostridium perfringens"],
    meaning: {
      en: "Gut disease caused by toxins of Clostridium perfringens. Acute NE kills suddenly; sub-clinical NE has no deaths but quietly ruins FCR. Triggers: coccidiosis, high NSP, fishmeal, wet litter.",
      hi: "क्लोस्ट्रीडियम परफ्रिंजेंस के ज़हर से होने वाली आंत की बीमारी। तेज़ NE में अचानक मौतें; छिपे (सब-क्लिनिकल) NE में मौत नहीं पर FCR चुपचाप खराब होता है। कारण: कॉक्सीडियोसिस, ज़्यादा NSP, फिशमील, गीला लिटर।",
    },
    say: {
      en: "Sub-clinical NE is the expensive one — no deaths, just a bad FCR at the end of the batch.",
      hi: "छिपा NE सबसे महंगा पड़ता है — मौत नहीं, बस बैच के आखिर में खराब FCR।",
    },
  },
  {
    id: "crd",
    term: "Mycoplasma / CRD",
    match: ["Mycoplasma", "\\bCRD\\b", "\\bCCRD\\b"],
    meaning: {
      en: "Mycoplasma gallisepticum causes chronic respiratory disease (CRD); with E. coli it becomes complicated CRD (CCRD). Mycoplasma has no cell wall, so cell-wall antibiotics (penicillins, cephalosporins) don't work on it — tiamulin, tylosin, doxycycline and quinolones do.",
      hi: "माइकोप्लाज़्मा गैलिसेप्टिकम से क्रोनिक रेस्पिरेटरी डिज़ीज़ (CRD) होती है; E. coli साथ हो तो कॉम्प्लिकेटेड CRD (CCRD)। माइकोप्लाज़्मा की कोशिका-दीवार नहीं होती, इसलिए दीवार पर काम करने वाली एंटीबायोटिक (पेनिसिलिन, सेफालोस्पोरिन) उस पर असर नहीं करतीं — टियामुलिन, टायलोसिन, डॉक्सीसाइक्लिन और क्विनोलोन करती हैं।",
    },
    say: {
      en: "For pure Mycoplasma choose tiamulin or tylosin; if E. coli is also involved, the vet will cover it with a broad-spectrum drug.",
      hi: "सिर्फ माइकोप्लाज़्मा हो तो टियामुलिन या टायलोसिन; E. coli भी हो तो वेटेरिनेरियन ब्रॉड-स्पेक्ट्रम दवा जोड़ेंगे।",
    },
  },
  {
    id: "gram",
    term: "Gram-positive / Gram-negative",
    match: ["gram[- ]?(positive|negative)", "gram ?[+−-]", "\\bG\\(\\+\\)"],
    meaning: {
      en: "Two big groups of bacteria. Gram-positive (Clostridium, Staphylococcus, Streptococcus) have a thick cell wall; Gram-negative (E. coli, Salmonella, Pasteurella, Pseudomonas) have an extra outer membrane that blocks many drugs.",
      hi: "बैक्टीरिया के दो बड़े समूह। ग्राम-पॉज़िटिव (क्लोस्ट्रीडियम, स्टैफिलोकोकस, स्ट्रेप्टोकोकस) की दीवार मोटी होती है; ग्राम-नेगेटिव (E. coli, साल्मोनेला, पाश्चुरेला, स्यूडोमोनास) में एक अतिरिक्त बाहरी झिल्ली होती है जो कई दवाओं को रोकती है।",
    },
    say: {
      en: "E. coli and Salmonella are Gram-negative — that's why the vet picks drugs that cover Gram-negatives for them.",
      hi: "E. coli और साल्मोनेला ग्राम-नेगेटिव हैं — इसीलिए उनके लिए वेटेरिनेरियन ग्राम-नेगेटिव पर असर करने वाली दवा चुनते हैं।",
    },
  },
  {
    id: "withdrawal",
    term: "Withdrawal period",
    match: ["withdrawal"],
    meaning: {
      en: "The minimum time between the last dose of a medicine and the sale of meat or eggs, so drug residues fall below safe limits. It is printed on each label.",
      hi: "दवा की आखिरी डोज़ और मांस या अंडे की बिक्री के बीच का न्यूनतम समय, ताकि दवा का रेसिड्यू सुरक्षित सीमा से नीचे आ जाए। यह हर लेबल पर लिखा होता है।",
    },
    say: {
      en: "Plan antibiotic courses so the withdrawal period ends before the lifting date.",
      hi: "एंटीबायोटिक कोर्स ऐसे प्लान करें कि लिफ्टिंग की तारीख से पहले विदड्रॉल पीरियड पूरा हो जाए।",
    },
  },
  {
    id: "amr",
    term: "Antimicrobial resistance (AMR)",
    match: ["antibiotic"],
    meaning: {
      en: "Bacteria surviving drugs that used to kill them, mainly from under-dosing, short courses and routine use. Full dose, full course, right diagnosis is the rule.",
      hi: "बैक्टीरिया का उन दवाओं से बच जाना जो पहले उन्हें मारती थीं, मुख्य कारण: कम डोज़, अधूरा कोर्स और बिना ज़रूरत इस्तेमाल। सही जांच, पूरी डोज़, पूरा कोर्स — यही नियम है।",
    },
    say: {
      en: "Stopping the course on day 2 because birds look better is how resistance starts.",
      hi: "पक्षी ठीक दिखें तो दूसरे दिन कोर्स रोक देना — रेज़िस्टेंस यहीं से शुरू होता है।",
    },
  },
  {
    id: "routes",
    term: "S/C, I/M, I/V; mg/kg body weight",
    match: ["\\bS/C\\b", "\\bI/M\\b", "\\bI/V\\b", "I\\.M\\.", "mg ?/ ?kg"],
    meaning: {
      en: "Subcutaneous (under the skin), intramuscular (into the breast or thigh muscle), intravenous (into a vein). mg/kg body weight dosing means the total daily drug depends on the flock's weight, not the number of birds.",
      hi: "सबक्यूटेनियस (त्वचा के नीचे), इंट्रामस्कुलर (ब्रेस्ट या जांघ की मांसपेशी में), इंट्रावीनस (नस में)। mg/kg शरीर वज़न का मतलब — रोज़ की कुल दवा पक्षियों की गिनती से नहीं, फ्लॉक के कुल वज़न से तय होती है।",
    },
    say: {
      en: "At 10 mg/kg, 5,000 birds of 2 kg need 100 g of active a day — that's 1 kg of a 10% product.",
      hi: "10 mg/kg पर 2 किलो के 5,000 पक्षियों को रोज़ 100 ग्राम सक्रिय दवा चाहिए — यानी 10% प्रोडक्ट का 1 किलो।",
    },
  },
  {
    id: "disinfection",
    term: "Routine vs terminal disinfection; contact time",
    match: ["terminal", "routine disinfection", "contact time", "organic matter"],
    meaning: {
      en: "Terminal = deep disinfection of an empty, washed shed between batches (stronger dilution). Routine = regular use with birds present or on equipment. Every disinfectant needs a contact time and works poorly on dirt, so clean first.",
      hi: "टर्मिनल = बैच के बीच खाली, धुले शेड का गहरा डिसइन्फेक्शन (ज़्यादा गाढ़ा घोल)। रूटीन = पक्षियों के रहते या उपकरण पर नियमित उपयोग। हर डिसइन्फेक्टेंट को संपर्क समय चाहिए और गंदगी पर कम काम करता है, इसलिए पहले सफाई।",
    },
    say: {
      en: "Wash first, then disinfect — dung and dust use up the disinfectant before it reaches the germs.",
      hi: "पहले धुलाई, फिर डिसइन्फेक्शन — गोबर और धूल कीटाणुओं तक पहुंचने से पहले ही दवा खा जाते हैं।",
    },
  },
  {
    id: "qac",
    term: "QAC (Quaternary ammonium compounds)",
    match: ["\\bQACs?\\b", "quaternary ammonium"],
    meaning: {
      en: "Positively charged disinfectants (like benzalkonium, DDAC) that bind to and break microbial membranes. Low smell and non-corrosive; weaker against non-enveloped viruses and in hard water unless chelators (like EDTA) are added.",
      hi: "पॉज़िटिव चार्ज वाले डिसइन्फेक्टेंट (जैसे बेंज़ालकोनियम, DDAC) जो कीटाणुओं की झिल्ली से चिपककर उसे तोड़ते हैं। कम गंध, जंग नहीं; पर बिना आवरण वाले वायरस पर और खारे पानी में कमज़ोर, जब तक EDTA जैसा चीलेटर न मिलाया जाए।",
    },
    say: {
      en: "QAC plus glutaraldehyde covers each other's gaps — that's why Hygin-Tact combines them.",
      hi: "QAC और ग्लूटाराल्डिहाइड एक-दूसरे की कमी पूरी करते हैं — इसीलिए Hygin-Tact में दोनों हैं।",
    },
  },
  {
    id: "glutaraldehyde",
    term: "Glutaraldehyde",
    match: ["glutaraldehyde"],
    meaning: {
      en: "An aldehyde disinfectant that cross-links microbial proteins. Kills bacteria, fungi, viruses and even spores; works in organic matter better than many others. Irritant — used for empty sheds and equipment at the right dilution.",
      hi: "एल्डिहाइड डिसइन्फेक्टेंट जो कीटाणुओं के प्रोटीन को आपस में जोड़ देता है। बैक्टीरिया, फंगस, वायरस और स्पोर तक को मारता है; गंदगी में भी कई दूसरों से बेहतर। जलन देता है — खाली शेड और उपकरण पर सही घोल में इस्तेमाल।",
    },
    say: {
      en: "For the terminal wash, glutaraldehyde is the spore-killer.",
      hi: "टर्मिनल धुलाई के लिए ग्लूटाराल्डिहाइड स्पोर तक मारता है।",
    },
  },
  {
    id: "oxidiser",
    term: "Oxidising disinfectant (potassium monopersulphate)",
    match: ["monopersulphate", "triple salt", "oxidi"],
    meaning: {
      en: "Potassium monopersulphate (triple salt) releases active oxygen that oxidises proteins and membranes. Very broad spectrum including tough non-enveloped viruses, low toxicity, can be sprayed with birds present, breaks down to harmless salts.",
      hi: "पोटैशियम मोनोपरसल्फेट (ट्रिपल सॉल्ट) सक्रिय ऑक्सीजन छोड़ता है जो प्रोटीन और झिल्ली को ऑक्सीडाइज़ करती है। बहुत ब्रॉड स्पेक्ट्रम, कठिन बिना-आवरण वायरस समेत; कम ज़हरीला, पक्षियों के रहते स्प्रे हो सकता है, फिर बेकार नमक में टूट जाता है।",
    },
    say: {
      en: "During an outbreak you need something safe enough to spray over birds — that's the oxidiser's job.",
      hi: "बीमारी के समय पक्षियों पर छिड़कने लायक सुरक्षित दवा चाहिए — यह काम ऑक्सीडाइज़र का है।",
    },
  },
  {
    id: "enveloped",
    term: "Enveloped vs non-enveloped viruses",
    match: ["enveloped", "viral envelope"],
    meaning: {
      en: "Enveloped viruses (Newcastle disease, avian influenza, IB) have a fatty coat that most disinfectants destroy easily. Non-enveloped viruses (IBD/Gumboro, adenovirus, reovirus) lack it and survive much longer — they need oxidisers or aldehydes.",
      hi: "आवरण वाले वायरस (रानीखेत, बर्ड फ्लू, IB) पर चर्बी की परत होती है जिसे ज़्यादातर डिसइन्फेक्टेंट आसानी से तोड़ देते हैं। बिना आवरण वाले वायरस (गम्बोरो/IBD, एडिनोवायरस, रियोवायरस) में यह परत नहीं होती और ये बहुत दिन बचते हैं — इनके लिए ऑक्सीडाइज़र या एल्डिहाइड चाहिए।",
    },
    say: {
      en: "Gumboro keeps coming back on the same farm because it's non-enveloped — the shed needs an oxidiser, not just a QAC.",
      hi: "गम्बोरो एक ही फार्म पर बार-बार आता है क्योंकि वह बिना आवरण वाला वायरस है — शेड में सिर्फ QAC नहीं, ऑक्सीडाइज़र चाहिए।",
    },
  },
  {
    id: "biofilm",
    term: "Biofilm",
    match: ["biofilm"],
    meaning: {
      en: "A slimy layer of bacteria inside water tanks and nipple lines that protects germs from disinfectants and keeps re-infecting drinking water.",
      hi: "पानी की टंकी और निप्पल लाइन के अंदर बैक्टीरिया की चिकनी परत, जो कीटाणुओं को डिसइन्फेक्टेंट से बचाती है और पीने के पानी को बार-बार गंदा करती है।",
    },
    say: {
      en: "If your vaccine or medicine results are poor, check the water lines for biofilm first.",
      hi: "अगर वैक्सीन या दवा का असर कम है, तो पहले पानी की लाइन में बायोफिल्म जांचिए।",
    },
  },
  {
    id: "nucleotides",
    term: "Nucleotides",
    match: ["nucleotide"],
    meaning: {
      en: "Building blocks of DNA and RNA. The bird can make them, but in fast-dividing tissue (gut lining, ovary, immune cells) extra dietary nucleotides save energy and speed up cell building.",
      hi: "DNA और RNA की ईंटें। पक्षी इन्हें खुद बना सकता है, पर तेज़ी से बंटने वाले ऊतकों (आंत की परत, अंडाशय, इम्यून कोशिकाएं) में बाहर से मिले न्यूक्लियोटाइड ऊर्जा बचाते हैं और कोशिका बनना तेज़ करते हैं।",
    },
    say: {
      en: "Every egg is a burst of cell division — nucleotides supply the raw material.",
      hi: "हर अंडा तेज़ कोशिका-विभाजन का नतीजा है — न्यूक्लियोटाइड उसका कच्चा माल देते हैं।",
    },
  },
];
