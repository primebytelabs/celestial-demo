/**
 * CONTENT SOURCE OF TRUTH
 * 
 * Every fact here must be publicly verifiable.
 * Product lists and images are explicitly provided and verified by the user.
 */


export const company = {
  legalName: "Celestial Biolabs Limited",
  shortName: "Celestial Biolabs",
  founded: 1997,
  hq: "Hyderabad, Telangana, India",
  registeredOffice:
    "Plot No. 82, Venkat Reddy Nagar, Narapally, Medchal–Malkajgiri, Hyderabad, Telangana 500039",
  cin: "L72200TG1997PLC028374",
  isin: "INE221I01017",
  bseScrip: "532871",
  bseSymbol: "CELESTIAL",
};

export const investorLink = {
  label: "BSE: 532871 — Share price & filings",
  url: "https://www.equitymaster.com/share-price/CLAB/CELESTIAL-532871/CELESTIAL-BIOLABS-Share-Price",
};

export interface Product {
  name: string;
  slug: string;
  category: string;
  form: string;
  description: string;
  keyIngredients?: string[];
  image?: string;
}

export const proprietaryProducts: Product[] = [
  {
    name: "Celestial Bio Vita",
    slug: "bio-vita",
    category: "proprietary",
    form: "Granules",
    description: "Their flagship brain tonic and cognitive health formula made with Brahmi, Ashwagandha, and Shankhpushpi to alleviate stress and boost memory.",
    keyIngredients: ["Brahmi", "Ashwagandha", "Shankhpushpi"],
    image: "/images/biovita.png"
  },
  {
    name: "Bioliv",
    slug: "bioliv",
    category: "proprietary",
    form: "Syrup",
    description: "A targeted herbal liver tonic formulated to protect and stimulate hepatic functions.",
    image: "/images/biolive.png"
  },
  {
    name: "Cel-Digest",
    slug: "cel-digest",
    category: "proprietary",
    form: "Syrup",
    description: "A therapeutic formulation intended to ease indigestion, gas, and metabolic sluggishness.",
    image: "/images/cel-digest.png"
  },
  {
    name: "Rhumacel",
    slug: "rhumacel",
    category: "proprietary",
    form: "Oil / Capsules",
    description: "An anti-inflammatory ayurvedic treatment designed for joint mobility and arthritis relief.",
    image: "/images/rumacel-oil.png"
  },
  {
    name: "DermaCel",
    slug: "dermacel",
    category: "proprietary",
    form: "Capsules / Cream",
    description: "An internal blood purifier and topical skincare blend used for allergic dermatitis and acne management.",
    image: "/images/dermacel.png"
  },
  {
    name: "O-Kof",
    slug: "o-kof",
    category: "proprietary",
    form: "Syrup",
    description: "A natural, non-drowsy herbal cough syrup formulated for throat allergies and respiratory tract soothing.",
    image: "/images/okof.png"
  },
  {
    name: "Cel-Clear",
    slug: "cel-clear",
    category: "proprietary",
    form: "Liquid",
    description: "A traditional herbal liquid compound aimed at improving skin clarity and metabolic detox.",
    image: "/images/cel-clear.png"
  },
  {
    name: "Gynocel",
    slug: "gynocel",
    category: "proprietary",
    form: "Syrup / Capsules",
    description: "A specialized uterine health tonic and regulatory formula developed for women's wellness.",
    image: "/images/gynocel.png"
  },
  {
    name: "Healthon",
    slug: "healthon",
    category: "proprietary",
    form: "Capsules / Syrup",
    description: "A comprehensive daily health rejuvenator and vitalizer designed to boost immunity and energy.",
    image: "/images/healthon.png"
  },
  {
    name: "Trem Plus",
    slug: "trem-plus",
    category: "wellness",
    form: "Cream",
    description: "A cosmetic, herb-infused skin wellness and radiance cream.",
    image: "/images/tream-plus.png"
  }
];

export interface Herb {
  name: string;
  botanicalName: string;
  sanskritName: string;
  rasa: string;
  virya: string;
  action: string;
  description: string;
  formulations: string[];
}

export const sourcedHerbs: Herb[] = [
  {
    name: "Brahmi",
    botanicalName: "Bacopa monnieri",
    sanskritName: "ब्राह्मी",
    rasa: "Tikta, Kashaya (Bitter, Astringent)",
    virya: "Sheeta (Cooling)",
    action: "Cognitive support and memory enhancement",
    description: "Brahmi is traditionally categorized as a Medhya Rasayana (brain rejuvenator). It has been evaluated for supporting synaptic activity, reducing stress-induced cortisol levels, and aiding focus.",
    formulations: ["Celestial Bio Vita"]
  },
  {
    name: "Ashwagandha",
    botanicalName: "Withania somnifera",
    sanskritName: "अश्वगंधा",
    rasa: "Tikta, Katu, Madhura (Bitter, Pungent, Sweet)",
    virya: "Ushna (Heating)",
    action: "Adaptogen, strength and stress relief",
    description: "One of the most revered adaptogens in Ayurveda, Ashwagandha supports the body's natural response to physical and mental stress while reinforcing vitality and stamina.",
    formulations: ["Celestial Bio Vita", "Healthon"]
  },
  {
    name: "Shankhpushpi",
    botanicalName: "Convolvulus pluricaulis",
    sanskritName: "शंखपुष्पी",
    rasa: "Tikta (Bitter)",
    virya: "Sheeta (Cooling)",
    action: "Soothing nervous system, memory support",
    description: "Recognized for its calming effects on the central nervous system, Shankhpushpi aids in alleviating mental fatigue, promoting restful sleep, and clearing cognitive pathways.",
    formulations: ["Celestial Bio Vita"]
  },
  {
    name: "Shatavari",
    botanicalName: "Asparagus racemosus",
    sanskritName: "शतावरी",
    rasa: "Madhura, Tikta (Sweet, Bitter)",
    virya: "Sheeta (Cooling)",
    action: "Vitality, uterine and systemic cooling",
    description: "Shatavari acts as a nourishing tonic. It is traditionally used to support female reproductive wellness, regulate uterine balance, and supply organic antioxidants.",
    formulations: ["Gynocel"]
  },
  {
    name: "Amalaki",
    botanicalName: "Phyllanthus emblica",
    sanskritName: "आमलकी",
    rasa: "Pancha Rasa (Five Tastes, except Salty)",
    virya: "Sheeta (Cooling)",
    action: "Antioxidant, digestive wellness",
    description: "Amalaki (Indian Gooseberry) is an abundant natural source of Vitamin C and tannins. It supports digestive fire (Agni), liver health, and systemic immunity.",
    formulations: ["Cel-Clear", "Healthon"]
  },
  {
    name: "Tulsi",
    botanicalName: "Ocimum sanctum",
    sanskritName: "तुलसी",
    rasa: "Katu, Tikta (Pungent, Bitter)",
    virya: "Ushna (Heating)",
    action: "Respiratory support, immune defense",
    description: "Known as Holy Basil, Tulsi is traditionally prepared for respiratory tract soothing, throat allergies, and supporting the body's natural defense against seasonal stressors.",
    formulations: ["O-Kof"]
  }
];

export const productCategories = [
  {
    id: "proprietary",
    label: "Proprietary Ayurvedic Medicine",
    description:
      "Ayurvedic formulations developed for targeted health needs like memory, digestive, joint, and liver health.",
  },
  {
    id: "wellness",
    label: "Ayurvedic Wellness & Cosmetics",
    description:
      "Cosmetic, herb-infused skin wellness and radiance formulations rooted in traditional care.",
  },
  {
    id: "nutraceuticals",
    label: "Nutraceuticals",
    description:
      "Nutrition-focused formulations that bridge the gap between food and medicine.",
  },
  {
    id: "enzymes",
    label: "Enzymes",
    description:
      "Enzyme-based formulations supporting digestion and metabolic functions.",
  },
];

export const expertise = [
  {
    title: "Pharmaceutical Manufacturing",
    body: "End-to-end production of Ayurvedic and proprietary medicine formulations under controlled manufacturing conditions.",
  },
  {
    title: "Nutraceutical Development",
    body: "Formulation of nutrition-based health products that meet modern quality expectations.",
  },
  {
    title: "Research & Development",
    body: "Ongoing commitment to improving formulations, exploring new health applications, and advancing product quality.",
  },
  {
    title: "Quality Assurance",
    body: "Systematic quality control at every stage — from raw material sourcing through final product release.",
  },
];

export const strengths = [
  {
    title: "Quality-focused approach",
    body: "Every product undergoes rigorous quality checks before it reaches the market.",
  },
  {
    title: "Scientific mindset",
    body: "Formulations grounded in established Ayurvedic science and modern manufacturing practice.",
  },
  {
    title: "Reliable manufacturing",
    body: "Consistent production processes designed for safety, precision, and repeatability.",
  },
  {
    title: "Publicly listed company",
    body: "Transparent governance as a BSE-listed entity with public regulatory filings.",
  },
];
