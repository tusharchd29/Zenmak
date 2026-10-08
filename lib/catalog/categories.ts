import type { Category } from "./types";

// Order here is the order of the product manual's index, which is also the
// order courses appear in on the Learning page.
export const CATEGORIES: Category[] = [
  {
    id: "enzymes",
    icon: "flask-conical",
    name: { en: "Enzymes", hi: "एंज़ाइम" },
    intro: {
      en: "Maize, soybean, wheat and DORB carry fibre (NSP) and phytate that birds cannot digest on their own. That locked-up energy and protein comes out in the droppings as wet litter. Feed enzymes break these down so the same feed gives more growth and more eggs, and let the nutritionist cut feed cost.",
      hi: "मक्का, सोयाबीन, गेहूं और DORB में ऐसा फाइबर (NSP) और फाइटेट होता है जिसे पक्षी खुद नहीं पचा पाते। यह बंद ऊर्जा और प्रोटीन बीट में बाहर निकल जाता है और लिटर गीला होता है। फीड एंज़ाइम इन्हें तोड़ते हैं, जिससे उसी फीड से ज़्यादा वज़न और ज़्यादा अंडे मिलते हैं और फीड की लागत भी घटती है।",
    },
  },
  {
    id: "acidifiers",
    icon: "beaker",
    name: { en: "Acidifiers", hi: "एसिडिफ़ायर" },
    intro: {
      en: "Organic acids keep feed free of mould and bacteria and lower the pH in the crop and gut. Low pH switches on digestive enzymes and stops E. coli, Salmonella and Clostridia from multiplying. The result is better villi, better FCR and fewer gut problems, without antibiotics.",
      hi: "ऑर्गेनिक एसिड फीड को फफूंद और बैक्टीरिया से बचाते हैं और क्रॉप व आंत का pH कम करते हैं। कम pH से पाचन एंज़ाइम सक्रिय होते हैं और E. coli, साल्मोनेला व क्लोस्ट्रीडिया नहीं बढ़ पाते। नतीजा: अच्छे विली, बेहतर FCR और आंत की कम समस्याएं, बिना एंटीबायोटिक के।",
    },
  },
  {
    id: "performance",
    icon: "zap",
    name: { en: "Performance Enhancers", hi: "परफॉर्मेंस बढ़ाने वाले" },
    intro: {
      en: "Some farm problems cost money every day without killing birds: dirty eggs, loose droppings, production that will not climb back after a disease. Performance enhancers target exactly these, so the farmer sees the difference in the egg tray and the production register.",
      hi: "कुछ समस्याएं पक्षी नहीं मारतीं पर रोज़ पैसा खाती हैं: गंदे अंडे, पतली बीट, बीमारी के बाद प्रोडक्शन का वापस न आना। परफॉर्मेंस बढ़ाने वाले प्रोडक्ट इन्हीं को ठीक करते हैं, ताकि किसान को फर्क अंडे की ट्रे और प्रोडक्शन रजिस्टर में दिखे।",
    },
  },
  {
    id: "emulsifiers",
    icon: "droplets",
    name: { en: "Emulsifiers", hi: "इमल्सीफ़ायर" },
    intro: {
      en: "Oil is the costliest energy in the feed. Young chicks make little bile, so much of the oil passes out undigested. An emulsifier breaks oil into tiny droplets that enzymes can digest, so every kilo of oil gives full energy, or the nutritionist can use less oil for the same result.",
      hi: "फीड में तेल सबसे महंगी ऊर्जा है। छोटे चूज़ों में पित्त (bile) कम बनता है, इसलिए बहुत सा तेल बिना पचे निकल जाता है। इमल्सीफ़ायर तेल को छोटी बूंदों में तोड़ता है ताकि एंज़ाइम उसे पचा सकें। इससे हर किलो तेल की पूरी ऊर्जा मिलती है, या उतने ही रिज़ल्ट के लिए कम तेल लगता है।",
    },
  },
  {
    id: "toxin-binders",
    icon: "shield",
    name: { en: "Toxin Binders", hi: "टॉक्सिन बाइंडर" },
    intro: {
      en: "Damp maize and DORB grow fungus that leaves mycotoxins (like aflatoxin) in feed. They cannot be seen or cooked out. Mycotoxins damage the liver and kidneys, lower immunity and cause vaccine failures, poor growth and low egg production. A toxin binder traps them in the gut so they leave in the droppings.",
      hi: "नम मक्का और DORB में फफूंद लगती है जो फीड में माइकोटॉक्सिन (जैसे अफ्लाटॉक्सिन) छोड़ती है। ये न दिखते हैं, न पकाने से जाते हैं। माइकोटॉक्सिन लीवर और किडनी खराब करते हैं, इम्युनिटी घटाते हैं, वैक्सीन फेल कराते हैं और वज़न व अंडा उत्पादन गिराते हैं। टॉक्सिन बाइंडर इन्हें आंत में ही पकड़कर बीट के साथ बाहर निकाल देता है।",
    },
  },
  {
    id: "probiotics",
    icon: "sprout",
    name: { en: "Probiotics", hi: "प्रोबायोटिक" },
    intro: {
      en: "A healthy gut is full of good bacteria that crowd out the harmful ones. Stress, antibiotics and bad water upset this balance and cause loose droppings and wet litter. Probiotics put good bacteria back, so digestion, immunity and litter all improve.",
      hi: "स्वस्थ आंत में अच्छे बैक्टीरिया भरे होते हैं जो बुरे बैक्टीरिया को जगह नहीं देते। तनाव, एंटीबायोटिक और खराब पानी से यह संतुलन बिगड़ता है, बीट पतली होती है और लिटर गीला होता है। प्रोबायोटिक अच्छे बैक्टीरिया वापस लाते हैं, जिससे पाचन, इम्युनिटी और लिटर सब सुधरते हैं।",
    },
  },
  {
    id: "trace-minerals",
    icon: "gem",
    name: { en: "Trace Minerals", hi: "ट्रेस मिनरल" },
    intro: {
      en: "Zinc, manganese, copper, iron, selenium, iodine and chromium are needed in tiny amounts but control bones, feathers, eggshell, fertility and immunity. Organic (chelated) minerals are absorbed far better than ordinary salts and do not get locked up by toxin binders.",
      hi: "ज़िंक, मैंगनीज़, कॉपर, आयरन, सेलेनियम, आयोडीन और क्रोमियम बहुत कम मात्रा में चाहिए, पर हड्डी, पंख, अंडे का छिलका, फर्टिलिटी और इम्युनिटी इन्हीं पर टिकी है। ऑर्गेनिक (चीलेटेड) मिनरल आम नमक वाले मिनरल से कहीं बेहतर पचते हैं और टॉक्सिन बाइंडर से बंधते नहीं।",
    },
  },
  {
    id: "eggshell",
    icon: "egg",
    name: { en: "Eggshell Quality", hi: "अंडे के छिलके की क्वालिटी" },
    intro: {
      en: "Every cracked or thin-shelled egg is a lost sale. Strong shells need more than calcium: the hen needs the right protein frame, vitamin D3 and trace elements to lay the calcium down properly, especially in older flocks and in summer.",
      hi: "हर टूटा या पतले छिलके वाला अंडा घाटा है। मज़बूत छिलके के लिए सिर्फ कैल्शियम काफी नहीं: मुर्गी को सही प्रोटीन ढांचा, विटामिन D3 और ट्रेस मिनरल चाहिए ताकि कैल्शियम ठीक से जमे, खासकर बूढ़े फ्लॉक में और गर्मी में।",
    },
  },
  {
    id: "anti-stress",
    icon: "thermometer",
    name: { en: "Anti-Stress Agents", hi: "एंटी-स्ट्रेस" },
    intro: {
      en: "Heat, vaccination, debeaking, transport and feed changes all stress birds. Stressed birds eat less, drink unevenly, lose electrolytes and drop production. Anti-stress products keep water and salt balance and help birds keep eating, so weight and eggs do not fall.",
      hi: "गर्मी, वैक्सीनेशन, डीबीकिंग, ट्रांसपोर्ट और फीड बदलना — सब पक्षियों पर तनाव डालते हैं। तनाव में पक्षी कम खाते हैं, इलेक्ट्रोलाइट खोते हैं और प्रोडक्शन गिरता है। एंटी-स्ट्रेस प्रोडक्ट पानी और नमक का संतुलन बनाए रखते हैं और पक्षी खाते रहते हैं, ताकि वज़न और अंडे न गिरें।",
    },
  },
  {
    id: "growth-promoters",
    icon: "trending-up",
    name: { en: "Growth Promoters (Tonics)", hi: "ग्रोथ प्रमोटर (टॉनिक)" },
    intro: {
      en: "Liquid tonics give amino acids and minerals straight through the water, so birds get them even on days they eat less: during brooding, heat, disease or vaccination. They are the quickest way to support weight gain and keep production steady.",
      hi: "लिक्विड टॉनिक पानी के ज़रिए सीधे अमीनो एसिड और मिनरल देते हैं, ताकि जिन दिनों पक्षी कम खाएं (ब्रूडिंग, गर्मी, बीमारी, वैक्सीनेशन) तब भी पोषण मिलता रहे। वज़न बढ़ाने और प्रोडक्शन स्थिर रखने का यह सबसे तेज़ तरीका है।",
    },
  },
  {
    id: "liver-tonics",
    icon: "heart-pulse",
    name: { en: "Liver Tonics", hi: "लीवर टॉनिक" },
    intro: {
      en: "The liver turns feed into meat and eggs and cleans out toxins. Mycotoxins, medicines and high-energy feed overload it and cause fatty liver, poor FCR and sudden deaths in layers. A liver tonic protects and repairs liver cells and moves fat out of the liver.",
      hi: "लीवर फीड को मांस और अंडे में बदलता है और ज़हर साफ करता है। माइकोटॉक्सिन, दवाइयां और हाई-एनर्जी फीड लीवर पर बोझ डालते हैं, जिससे फैटी लीवर, खराब FCR और लेयर में अचानक मौतें होती हैं। लीवर टॉनिक लीवर की कोशिकाओं को बचाता और ठीक करता है और लीवर से चर्बी हटाता है।",
    },
  },
  {
    id: "herbal",
    icon: "leaf",
    name: { en: "Herbal", hi: "हर्बल" },
    intro: {
      en: "Herbal products use turmeric, garlic, ginger and other plants to do jobs that used to need antibiotics: fight bacteria, boost immunity, help digestion, ease breathing and support laying. They leave no residue in meat or eggs, which matters more every year.",
      hi: "हर्बल प्रोडक्ट हल्दी, लहसुन, अदरक और दूसरे पौधों से वह काम करते हैं जिसके लिए पहले एंटीबायोटिक लगती थी: बैक्टीरिया से लड़ना, इम्युनिटी बढ़ाना, पाचन, सांस में आराम और अंडा उत्पादन। मांस और अंडे में कोई रेसिड्यू नहीं रहता, जो हर साल ज़्यादा ज़रूरी हो रहा है।",
    },
  },
  {
    id: "fly-control",
    icon: "bug",
    name: { en: "House Fly Control", hi: "मक्खी नियंत्रण" },
    intro: {
      en: "Flies spread disease between sheds, bother birds and workers, and bring complaints from neighbours. A good fly programme attracts and kills adult flies where they gather, alongside dry litter that stops larvae from breeding.",
      hi: "मक्खियां शेड से शेड बीमारी फैलाती हैं, पक्षियों और मज़दूरों को परेशान करती हैं और पड़ोसियों से शिकायत लाती हैं। अच्छा मक्खी नियंत्रण वयस्क मक्खियों को उनके जमावड़े वाली जगह पर आकर्षित करके मारता है, और सूखा लिटर लार्वा को पनपने नहीं देता।",
    },
  },
  {
    id: "agps",
    icon: "shield-plus",
    name: { en: "AGPs (Antibiotic Growth Promoters)", hi: "AGP (एंटीबायोटिक ग्रोथ प्रमोटर)" },
    intro: {
      en: "Necrotic enteritis, caused by Clostridium perfringens, quietly damages the gut lining of broilers, spoils FCR and can kill birds suddenly. Low doses of these feed additives keep Clostridium in check. Use them only as advised by the veterinarian or nutritionist.",
      hi: "नेक्रोटिक एंटेराइटिस (क्लोस्ट्रीडियम परफ्रिंजेंस से) चुपचाप ब्रॉयलर की आंत की परत खराब करता है, FCR बिगाड़ता है और अचानक मौतें करता है। इन फीड एडिटिव की कम मात्रा क्लोस्ट्रीडियम को काबू में रखती है। इनका इस्तेमाल केवल वेटेरिनेरियन या न्यूट्रिशनिस्ट की सलाह पर करें।",
    },
  },
  {
    id: "antibiotics",
    icon: "pill",
    name: { en: "Antibiotics", hi: "एंटीबायोटिक" },
    intro: {
      en: "When bacteria cause CRD, coryza, fowl cholera, E. coli or Salmonella infections, the right antibiotic at the right dose saves the flock. Recommend them only on a veterinarian's diagnosis and advice, give the full course, and respect withdrawal periods before sale.",
      hi: "जब बैक्टीरिया से CRD, कोराइज़ा, फाउल कॉलरा, E. coli या साल्मोनेला इन्फेक्शन हो, तो सही एंटीबायोटिक सही डोज़ में फ्लॉक बचाती है। इन्हें केवल वेटेरिनेरियन की जांच और सलाह पर दें, पूरा कोर्स कराएं, और बिक्री से पहले विदड्रॉल पीरियड का पालन करें।",
    },
  },
  {
    id: "anti-pyretic",
    icon: "thermometer-sun",
    name: { en: "Anti-Pyretic", hi: "बुखार की दवा" },
    intro: {
      en: "During viral diseases and extreme heat, birds run a fever, stop eating and pant. Bringing the temperature down keeps them eating and drinking while the main treatment works.",
      hi: "वायरल बीमारियों और तेज़ गर्मी में पक्षियों को बुखार होता है, वे खाना छोड़ देते हैं और हांफते हैं। तापमान कम करने से वे खाते-पीते रहते हैं, जब तक मुख्य इलाज असर करता है।",
    },
  },
  {
    id: "vitamins",
    icon: "sun",
    name: { en: "Vitamins & Minerals", hi: "विटामिन और मिनरल" },
    intro: {
      en: "Vitamins A, D3, E and C are used up quickly during stress, disease and vaccination. Topping them up through the water protects immunity, bones, fertility and hatchability exactly when the bird needs it most.",
      hi: "विटामिन A, D3, E और C तनाव, बीमारी और वैक्सीनेशन के समय तेज़ी से खर्च होते हैं। पानी से इनकी पूर्ति ठीक उसी समय इम्युनिटी, हड्डियों, फर्टिलिटी और हैचेबिलिटी को बचाती है जब पक्षी को सबसे ज़्यादा ज़रूरत होती है।",
    },
  },
  {
    id: "bio-security",
    icon: "shield-check",
    name: { en: "Bio-Security (Disinfectants)", hi: "बायो-सिक्योरिटी (डिसइन्फेक्टेंट)" },
    intro: {
      en: "Medicines treat disease; bio-security stops it from entering. Cleaning and disinfecting sheds between batches, foot dips at the gate, clean drinking water and hatchery hygiene are the cheapest protection a farm can buy. Different disinfectants suit different jobs.",
      hi: "दवाई बीमारी का इलाज करती है; बायो-सिक्योरिटी बीमारी को अंदर आने ही नहीं देती। बैच के बीच शेड की सफाई और डिसइन्फेक्शन, गेट पर फुट-डिप, साफ पीने का पानी और हैचरी की सफाई — फार्म के लिए सबसे सस्ती सुरक्षा है। अलग-अलग काम के लिए अलग डिसइन्फेक्टेंट सही रहता है।",
    },
  },
  {
    id: "injectables",
    icon: "syringe",
    name: { en: "Injectables", hi: "इंजेक्शन" },
    intro: {
      en: "Injections act fastest and reach the right dose in every bird, which matters for valuable breeders and for sick birds that have stopped eating and drinking. They are given by or under a veterinarian.",
      hi: "इंजेक्शन सबसे तेज़ असर करते हैं और हर पक्षी को सही डोज़ मिलती है — यह कीमती ब्रीडर और खाना-पानी छोड़ चुके बीमार पक्षियों के लिए ज़रूरी है। इन्हें वेटेरिनेरियन द्वारा या उनकी देखरेख में दिया जाता है।",
    },
  },
];
