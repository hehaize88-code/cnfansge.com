export const categories = ["Shoes", "Hoodies", "T-Shirts", "Jackets", "Pants", "Headwear", "Accessories", "Jerseys", "Electronics", "Other"];

const catalog = "https://www.hipobuys.net";
const search = (term: string) => `${catalog}/?s=${encodeURIComponent(term)}`;

export const products = [
  { id: "6127", name: "Shoes", category: "Shoes", tags: ["sneakers", "footwear", "shoes"], image: "https://cnfansge.com/uploads/allimg/20260415/1-260415150J2P3.jpg", url: search("shoes") },
  { id: "6126", name: "Shoes · row 59", category: "Shoes", tags: ["sneakers", "footwear", "shoes"], image: "https://cnfansge.com/uploads/allimg/20260415/1-260415150J2P3.jpg", url: search("sneakers") },
  { id: "6682", name: "Sweatshirt · row 1", category: "Hoodies", tags: ["hoodie", "sweatshirt", "sweater"], image: "https://cnfansge.com/uploads/allimg/20260512/1-26051211044c26.webp", url: search("hoodie") },
  { id: "6227", name: "T-Shirt · row 45", category: "T-Shirts", tags: ["t-shirt", "tee", "top"], image: "https://cnfansge.com/uploads/allimg/20260421/1-2604211FJ0J9.jpg", url: search("t-shirt") },
  { id: "607", name: "Puffer jacket · 10+ options", category: "Jackets", tags: ["jacket", "outerwear", "coat"], image: "https://cnfansge.com/uploads/allimg/20251021/1-2510211H63I46.webp", url: search("puffer jacket") },
  { id: "6328", name: "Pants / Shorts · row 36", category: "Pants", tags: ["pants", "shorts", "bottoms"], image: "https://cnfansge.com/uploads/allimg/20260421/1-260421223TO21.jpg", url: search("pants shorts") },
  { id: "6401", name: "Headwear · row 53", category: "Headwear", tags: ["cap", "hat", "headwear"], image: "https://cnfansge.com/uploads/allimg/20260422/1-260422145A1600.jpg", url: search("headwear") },
  { id: "6416", name: "Accessories · row 13", category: "Accessories", tags: ["accessory", "jewelry", "belt"], image: "https://cnfansge.com/uploads/allimg/20260422/1-260422153942322.jpg", url: search("accessories") },
  { id: "6679", name: "Jersey · row 55", category: "Jerseys", tags: ["jersey", "football", "sports"], image: "https://cnfansge.com/uploads/allimg/20260422/1-2604222250014B.jpg", url: search("jersey") },
  { id: "6559", name: "Electronics · row 46", category: "Electronics", tags: ["electronics", "gadget", "tech"], image: "https://cnfansge.com/uploads/allimg/20260422/1-260422205302T3.jpg", url: search("electronics") },
  { id: "6678", name: "Jersey · row 54", category: "Jerseys", tags: ["jersey", "football", "sports"], image: "https://cnfansge.com/uploads/allimg/20260422/1-260422225000a6.jpg", url: search("football jersey") },
  { id: "6624", name: "Other find · row 56", category: "Other", tags: ["other", "miscellaneous", "find"], image: "https://cnfansge.com/uploads/allimg/20260422/1-260422215514938.jpg", url: search("finds") },
];
