export const categories = [
  { name: "Shoes", count: "Footwear", href: "https://cnfansge.com/shoes/", code: "SH" },
  { name: "Hoodies", count: "Sweats", href: "https://cnfansge.com/hoodies-sweaters/", code: "HD" },
  { name: "T-Shirts", count: "Tees", href: "https://cnfansge.com/t-shirts/", code: "TS" },
  { name: "Jackets", count: "Outerwear", href: "https://cnfansge.com/jackets/", code: "JK" },
  { name: "Pants", count: "Bottoms", href: "https://cnfansge.com/pants-shorts/", code: "PT" },
  { name: "Headwear", count: "Caps & more", href: "https://cnfansge.com/headwear/", code: "HW" },
  { name: "Accessories", count: "Daily carry", href: "https://cnfansge.com/accessories/", code: "AC" },
  { name: "Jerseys", count: "Sportswear", href: "https://cnfansge.com/Jersey/", code: "JY" },
  { name: "Electronics", count: "Tech", href: "https://cnfansge.com/electronics/", code: "EL" },
  { name: "Other finds", count: "Mixed shelf", href: "https://cnfansge.com/other-stuff/", code: "OT" },
];

export const products = [
  { title: "Sweatshirts — latest listing", category: "Sweatshirts", id: "6681", image: "https://cnfansge.com/uploads/allimg/20260506/1-260506103535537.webp" },
  { title: "Pants / Shorts — latest listing", category: "Pants", id: "6680", image: "https://cnfansge.com/uploads/allimg/20260506/1-26050610331M37.webp" },
  { title: "Jersey find no. 55", category: "Jerseys", id: "6679", image: "https://cnfansge.com/uploads/allimg/20260422/1-2604222250014B.jpg" },
  { title: "Jersey find no. 54", category: "Jerseys", id: "6678", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422225000a6.jpg" },
  { title: "Jersey find no. 53", category: "Jerseys", id: "6677", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422224959349.jpg" },
  { title: "Jersey find no. 52", category: "Jerseys", id: "6676", image: "https://cnfansge.com/uploads/allimg/20260422/1-260422224959462.jpg" },
].map((item) => ({ ...item, href: `https://cnfansge.com/AllProducts/${item.id}.html` }));
