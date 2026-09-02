export const languages = ["en", "de", "es", "fr", "it"];

export const languageNames = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano"
};

export const coreRoutes = ["", "spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"];
export const articleRoutes = [
  "articles/use-usfans-spreadsheet",
  "articles/beginner-ordering-guide",
  "articles/qc-photo-checklist",
  "articles/international-shipping-cost",
  "articles/warehouse-returns-guide",
  "articles/taobao-weidian-1688"
];
export const routes = [...coreRoutes, ...articleRoutes];

export const categories = [
  { key: "shoes", href: "https://cnfansge.com/shoes/", image: "https://cnfansge.com/uploads/allimg/20251124/1-25112410262D60.webp" },
  { key: "hoodies", href: "https://cnfansge.com/hoodies-sweaters/", image: "https://cnfansge.com/uploads/allimg/20251223/1-25122309433JH.webp" },
  { key: "tshirts", href: "https://cnfansge.com/t-shirts/", image: "https://cnfansge.com/uploads/allimg/20260126/1-2601261GRV60.jpg" },
  { key: "jackets", href: "https://cnfansge.com/jackets/", image: "https://cnfansge.com/uploads/allimg/20260113/1-2601131KF0D7.webp" },
  { key: "pants", href: "https://cnfansge.com/pants-shorts/", image: "https://cnfansge.com/uploads/allimg/20260105/1-260105155946335.webp" },
  { key: "accessories", href: "https://cnfansge.com/accessories/", image: "https://cnfansge.com/uploads/allimg/20251204/1-2512041152124B.webp" },
  { key: "jerseys", href: "https://cnfansge.com/Jersey/", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422223KK55.jpg" },
  { key: "electronics", href: "https://cnfansge.com/electronics/", image: "https://cnfansge.com/uploads/allimg/20251030/1-25103010423V57.webp" }
];

export const products = [
  { id: 2586, title: "Nike Legacy 312 Low", category: "Shoes", price: "$30.90", cny: "¥220", image: "https://cnfansge.com/uploads/allimg/20251124/1-25112410262D60.webp" },
  { id: 1180, title: "MLB Chunk", category: "Shoes", price: "$35.05", cny: "¥249.60", image: "https://cnfansge.com/uploads/allimg/20251030/1-2510300943102W.webp" },
  { id: 891, title: "Nike Air Cushion Shoes", category: "Shoes", price: "$29.50", cny: "¥210", image: "https://cnfansge.com/uploads/allimg/20251027/1-25102F91P9547.webp" },
  { id: 2502, title: "Track-Style Sneakers", category: "Shoes", price: "$81.45", cny: "¥580", image: "https://cnfansge.com/uploads/allimg/20251121/1-251121121013138.webp" },
  { id: 5869, title: "Dragon Ball Graphic Hoodie", category: "Hoodies", price: "$25.30", cny: "¥180", image: "https://cnfansge.com/uploads/allimg/20260126/1-2601261GRV60.jpg" },
  { id: 4322, title: "Dior-Style Hoodie", category: "Hoodies", price: "$15.60", cny: "¥111", image: "https://cnfansge.com/uploads/allimg/20251223/1-25122309433JH.webp" },
  { id: 3149, title: "Moncler-Style Windbreaker", category: "Outerwear", price: "$40.75", cny: "¥290", image: "https://cnfansge.com/uploads/allimg/20251202/1-251202122330596.webp" },
  { id: 5084, title: "Prada-Style Jacket", category: "Outerwear", price: "$32.30", cny: "¥230", image: "https://cnfansge.com/uploads/allimg/20260113/1-2601131KF0D7.webp" },
  { id: 593, title: "North Face-Style Jacket", category: "Outerwear", price: "$40.60", cny: "¥289", image: "https://cnfansge.com/uploads/allimg/20251021/1-2510211A33J50.webp" },
  { id: 3300, title: "FF Canvas Belt", category: "Accessories", price: "$10.25", cny: "¥73", image: "https://cnfansge.com/uploads/allimg/20251204/1-2512041152124B.webp" },
  { id: 2189, title: "Moonwatch-Style Watch", category: "Accessories", price: "$24.60", cny: "¥175", image: "https://cnfansge.com/uploads/allimg/20251117/1-25111G05252F3.webp" },
  { id: 5458, title: "Valentino-Style Bracelet", category: "Accessories", price: "$15.20", cny: "¥108", image: "https://cnfansge.com/uploads/allimg/20260120/1-2601201229555U.jpg" }
].map((product) => ({ ...product, href: `https://cnfansge.com/AllProducts/${product.id}.html` }));

export const articleCards = [
  { slug: "use-usfans-spreadsheet", contentKey: "use-sugargoo-spreadsheet", number: "01", read: "11 min", wordCount: 1381 },
  { slug: "beginner-ordering-guide", contentKey: "beginner-ordering-guide", number: "02", read: "11 min", wordCount: 1357 },
  { slug: "qc-photo-checklist", contentKey: "qc-photo-checklist", number: "03", read: "11 min", wordCount: 1339 },
  { slug: "international-shipping-cost", contentKey: "uk-shipping-cost", number: "04", read: "11 min", wordCount: 1366 },
  { slug: "warehouse-returns-guide", contentKey: "warehouse-returns-guide", number: "05", read: "11 min", wordCount: 1333 },
  { slug: "taobao-weidian-1688", contentKey: "taobao-weidian-1688", number: "06", read: "11 min", wordCount: 1326 }
];
