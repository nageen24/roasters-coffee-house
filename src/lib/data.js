// Roasters Coffee House & Grill - Restaurant Data

export const restaurantInfo = {
  name: "Roasters Coffee House & Grill",
  tagline: "Premium Coffee & Grill Experience",
  description:
    "Experience the finest blend of premium coffee and expertly grilled dishes. Roasters Coffee House & Grill has been serving Islamabad's food lovers with exceptional quality, warm ambiance, and unforgettable flavors since our establishment.",
  shortDescription:
    "Where every cup tells a story and every bite is a journey. We blend the art of coffee roasting with the craft of grilling to bring you an unparalleled dining experience.",
  locations: [
    {
      id: 1,
      name: "F-6 Markaz, Islamabad",
      address: "Plot No. 1, First Floor, Agha Khan Road, F-6 Markaz, Islamabad",
      phone: "+92 51 272 6861",
      phone2: "+92 314 520 9300",
      mapLink: "https://maps.google.com/?q=Roasters+Coffee+House+Grill+F6+Islamabad",
    },
    {
      id: 2,
      name: "F-7 Markaz, Islamabad",
      address: "Main Bhittai Road, Plot 6-B, F-7 Markaz, Islamabad 45600",
      phone: "+92 51 265 6544",
      phone2: "+92 51 220 1470",
      mapLink: "https://maps.google.com/?q=Roasters+Coffee+House+Grill+F7+Islamabad",
    },
    {
      id: 3,
      name: "Bahria Town, Rawalpindi",
      address: "Bahria Town, Rawalpindi, Pakistan",
      phone: "+92 51 272 8010",
      phone2: "+92 331 544 9424",
      mapLink: "https://maps.google.com/?q=Roasters+Coffee+House+Bahria+Town",
    },
  ],
  hours: [
    { days: "Monday – Thursday", open: "12:00 PM", close: "11:30 PM" },
    { days: "Friday – Saturday", open: "12:00 PM", close: "12:00 AM" },
    { days: "Sunday", open: "11:00 AM", close: "11:30 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/roasterspakistan/",
    facebook: "https://www.facebook.com/roasterspakistan",
    twitter: "#",
    youtube: "#",
  },
  email: "info@roasterscoffeehouse.pk",
  website: "www.roasterscoffeehouse.pk",
};

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "coffee", label: "Signature Coffee" },
  { id: "grill", label: "Grill & Steaks" },
  { id: "burgers", label: "Burgers" },
  { id: "starters", label: "Starters" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Cold Drinks" },
];

export const menuItems = [
  // Signature Coffee
  {
    id: 1, category: "coffee", name: "Roasters Signature Blend",
    price: "Rs. 450", description: "Our house specialty — rich, smooth espresso with notes of dark chocolate and caramel",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80", featured: true,
    badge: "Bestseller",
  },
  {
    id: 2, category: "coffee", name: "Creamy Cappuccino",
    price: "Rs. 380", description: "Perfectly balanced espresso with velvety steamed milk foam",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80", featured: false,
  },
  {
    id: 3, category: "coffee", name: "Classic Americano",
    price: "Rs. 350", description: "Bold and smooth — double espresso with hot water",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80", featured: false,
  },
  {
    id: 4, category: "coffee", name: "Caramel Latte",
    price: "Rs. 490", description: "Espresso with steamed milk, topped with rich caramel drizzle",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", featured: false,
    badge: "Popular",
  },
  {
    id: 5, category: "coffee", name: "Cold Brew",
    price: "Rs. 520", description: "Slow-steeped for 24 hours — bold, smooth, and refreshing",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80", featured: false,
  },
  {
    id: 6, category: "coffee", name: "Hazelnut Mocha",
    price: "Rs. 510", description: "Rich espresso blended with chocolate and hazelnut syrup",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80", featured: false,
  },

  // Grill & Steaks
  {
    id: 7, category: "grill", name: "Ribeye Steak",
    price: "Rs. 2,850", description: "Prime 300g ribeye grilled to perfection, served with garlic butter, fries & salad",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80", featured: true,
    badge: "Chef's Special",
  },
  {
    id: 8, category: "grill", name: "Tenderloin Steak",
    price: "Rs. 3,200", description: "The most tender cut — 250g filet, served with mushroom sauce & seasonal vegetables",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", featured: false,
  },
  {
    id: 9, category: "grill", name: "Mixed Grill Platter",
    price: "Rs. 3,800", description: "A feast for two — chicken, lamb chops, seekh kebab, and grilled veggies",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80", featured: true,
    badge: "For 2",
  },
  {
    id: 10, category: "grill", name: "Grilled Chicken Supreme",
    price: "Rs. 1,850", description: "Herb-marinated whole chicken, slow-grilled and served with peri-peri sauce",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&q=80", featured: false,
  },
  {
    id: 11, category: "grill", name: "Lamb Chops",
    price: "Rs. 2,400", description: "Tender marinated lamb chops, char-grilled with rosemary and garlic",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80", featured: false,
  },
  {
    id: 12, category: "grill", name: "Roasters BBQ Ribs",
    price: "Rs. 2,650", description: "Slow-smoked pork-style beef ribs glazed with our signature BBQ sauce",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", featured: false,
    badge: "New",
  },

  // Burgers
  {
    id: 13, category: "burgers", name: "Roasters Classic Burger",
    price: "Rs. 980", description: "Double beef patty, cheddar cheese, lettuce, tomato, pickles & special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", featured: true,
    badge: "Bestseller",
  },
  {
    id: 14, category: "burgers", name: "Crispy Chicken Burger",
    price: "Rs. 850", description: "Juicy crispy fried chicken with coleslaw, jalapeños & honey mustard",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80", featured: false,
  },
  {
    id: 15, category: "burgers", name: "BBQ Smash Burger",
    price: "Rs. 1,150", description: "Smashed double patty, crispy bacon bits, BBQ sauce, caramelized onions",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80", featured: false,
    badge: "Popular",
  },
  {
    id: 16, category: "burgers", name: "Mushroom Swiss Burger",
    price: "Rs. 1,050", description: "Beef patty topped with sautéed mushrooms, Swiss cheese & truffle aioli",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", featured: false,
  },

  // Starters
  {
    id: 17, category: "starters", name: "Loaded Nachos",
    price: "Rs. 750", description: "Crispy tortilla chips with salsa, guacamole, sour cream & cheese sauce",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80", featured: false,
    badge: "Shareable",
  },
  {
    id: 18, category: "starters", name: "Crispy Wings",
    price: "Rs. 850", description: "8 pieces of crispy chicken wings with choice of buffalo, BBQ or garlic sauce",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80", featured: true,
  },
  {
    id: 19, category: "starters", name: "Garlic Bread",
    price: "Rs. 380", description: "Toasted artisan bread with garlic herb butter and melted mozzarella",
    image: "https://images.unsplash.com/photo-1619531040576-f9416740661d?w=400&q=80", featured: false,
  },
  {
    id: 20, category: "starters", name: "Creamy Soup of the Day",
    price: "Rs. 450", description: "Chef's daily selection — ask your server for today's special",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80", featured: false,
  },
  {
    id: 21, category: "starters", name: "Shrimp Tempura",
    price: "Rs. 1,100", description: "Lightly battered king prawns with sweet chili dipping sauce",
    image: "https://images.unsplash.com/photo-1593253756563-e5b6b5b4b2c1?w=400&q=80", featured: false,
    badge: "New",
  },

  // Desserts
  {
    id: 22, category: "desserts", name: "Chocolate Lava Cake",
    price: "Rs. 650", description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", featured: true,
    badge: "Must Try",
  },
  {
    id: 23, category: "desserts", name: "New York Cheesecake",
    price: "Rs. 580", description: "Classic baked cheesecake with strawberry compote",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80", featured: false,
  },
  {
    id: 24, category: "desserts", name: "Tiramisu",
    price: "Rs. 620", description: "Italian classic — espresso-soaked ladyfingers with mascarpone cream",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", featured: false,
  },
  {
    id: 25, category: "desserts", name: "Crème Brûlée",
    price: "Rs. 590", description: "Silky vanilla custard with a perfectly caramelized sugar crust",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80", featured: false,
  },

  // Cold Drinks
  {
    id: 26, category: "drinks", name: "Fresh Lemonade",
    price: "Rs. 320", description: "Freshly squeezed lemons with mint and a hint of ginger",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=80", featured: false,
  },
  {
    id: 27, category: "drinks", name: "Mango Smoothie",
    price: "Rs. 380", description: "Fresh Pakistani mangoes blended with milk and a drizzle of honey",
    image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=400&q=80", featured: false,
    badge: "Seasonal",
  },
  {
    id: 28, category: "drinks", name: "Virgin Mojito",
    price: "Rs. 350", description: "Fresh mint, lime, soda water with a touch of sugar",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80", featured: false,
  },
  {
    id: 29, category: "drinks", name: "Iced Caramel Frappe",
    price: "Rs. 550", description: "Blended espresso, caramel, milk and ice — topped with whipped cream",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", featured: true,
    badge: "Favorite",
  },
];

export const chefs = [
  {
    id: 1,
    name: "Chef Arshad Malik",
    role: "Executive Chef & Founder",
    bio: "With over 15 years of culinary experience across Europe and Pakistan, Chef Arshad brings an extraordinary palate and passion for perfection to every dish.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
    specialty: "Grills & Steaks",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Chef Sana Iqbal",
    role: "Head Pastry Chef",
    bio: "Trained in Paris and London, Chef Sana creates desserts that are as beautiful as they are delicious. Her signature lava cake has become an Islamabad legend.",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80",
    specialty: "Desserts & Pastries",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Chef Tariq Hussain",
    role: "Coffee Master & Barista",
    bio: "A certified Q Grader and master barista, Tariq has won multiple national coffee competitions. He personally curates and roasts every bean we serve.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    specialty: "Coffee & Beverages",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
];

export const events = [
  {
    id: 1,
    title: "Live Jazz Night",
    date: "Every Friday",
    time: "8:00 PM – 11:00 PM",
    description:
      "Unwind with soulful live jazz performances while enjoying our full dinner menu. Reserve your table early — these evenings fill up fast.",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80",
    tag: "Weekly",
  },
  {
    id: 2,
    title: "Coffee Tasting Experience",
    date: "Every Saturday",
    time: "3:00 PM – 5:00 PM",
    description:
      "Join our master barista Tariq for a guided coffee tasting journey. Explore single-origin beans from Ethiopia, Colombia, and Guatemala.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    tag: "Weekend",
  },
  {
    id: 3,
    title: "Weekend BBQ Festival",
    date: "Last Weekend of Month",
    time: "12:00 PM – 10:00 PM",
    description:
      "Celebrate the weekend with our outdoor BBQ festival featuring live grilling, special cuts, and family packages at exclusive prices.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    tag: "Monthly",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Food Blogger",
    text: "Roasters has completely changed my understanding of what a burger can be. The ribeye steak is out of this world, and the ambiance is perfect for dates or business dinners alike.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Regular Customer",
    text: "I visit Roasters every week — the coffee is absolutely exceptional. The Hazelnut Mocha is the best I've ever had in Islamabad. Highly recommend to anyone who appreciates quality.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 3,
    name: "Bilal Chaudhry",
    role: "Corporate Client",
    text: "We've hosted multiple corporate dinners at Roasters F-7. The staff is professional, the food is consistently excellent, and the private dining area is a fantastic touch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    id: 4,
    name: "Sara Malik",
    role: "Food Enthusiast",
    text: "The mixed grill platter for two is phenomenal value. Every piece was perfectly cooked and seasoned. The chocolate lava cake for dessert sealed the deal — will be back!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

export const galleryImages = [
  { id: 1, category: "dishes", src: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80", alt: "Ribeye Steak", span: "col-span-1" },
  { id: 2, category: "restaurant", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Restaurant Interior", span: "col-span-2" },
  { id: 3, category: "coffee", src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", alt: "Signature Coffee", span: "col-span-1" },
  { id: 4, category: "dishes", src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", alt: "Classic Burger", span: "col-span-1" },
  { id: 5, category: "events", src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80", alt: "Jazz Night", span: "col-span-1" },
  { id: 6, category: "restaurant", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Dining Area", span: "col-span-2" },
  { id: 7, category: "coffee", src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80", alt: "Cappuccino", span: "col-span-1" },
  { id: 8, category: "dishes", src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80", alt: "Mixed Grill", span: "col-span-1" },
  { id: 9, category: "restaurant", src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80", alt: "Bar Area", span: "col-span-1" },
  { id: 10, category: "events", src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", alt: "Coffee Tasting", span: "col-span-1" },
  { id: 11, category: "dishes", src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80", alt: "Lava Cake", span: "col-span-1" },
  { id: 12, category: "restaurant", src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80", alt: "Rooftop Seating", span: "col-span-1" },
];

export const blogPosts = [
  {
    id: 1,
    slug: "art-of-coffee-roasting",
    title: "The Art of Coffee Roasting",
    excerpt: "Discover how we select, roast, and brew each cup with precision and passion. From bean to cup, every step matters.",
    content: "At Roasters Coffee House & Grill, we believe that great coffee starts long before it reaches your cup...",
    category: "Coffee",
    date: "February 15, 2026",
    author: "Chef Tariq Hussain",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tags: ["Coffee", "Behind the Scenes", "Recipes"],
    comments: 12,
    views: 845,
  },
  {
    id: 2,
    slug: "perfect-steak-guide",
    title: "The Perfect Steak: Our Chef's Guide",
    excerpt: "Executive Chef Arshad Malik shares the secrets behind our legendary steaks — from choosing the right cut to achieving the perfect sear.",
    content: "The perfect steak is both a science and an art...",
    category: "Grill",
    date: "February 8, 2026",
    author: "Chef Arshad Malik",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    tags: ["Grill", "Steak", "Chef Tips"],
    comments: 8,
    views: 1204,
  },
  {
    id: 3,
    slug: "islamabad-food-scene-2026",
    title: "Islamabad's Food Scene in 2026",
    excerpt: "How the capital's dining culture has evolved and where Roasters fits in the city's culinary renaissance.",
    content: "Islamabad's food scene has never been more vibrant...",
    category: "Food & Culture",
    date: "January 28, 2026",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["Islamabad", "Food Culture", "Events"],
    comments: 24,
    views: 2187,
  },
  {
    id: 4,
    slug: "chocolate-lava-cake-recipe",
    title: "Our Famous Chocolate Lava Cake Recipe",
    excerpt: "Chef Sana reveals the technique behind our most-loved dessert. Now you can recreate this magic at home.",
    content: "The chocolate lava cake has been on our menu since day one...",
    category: "Recipes",
    date: "January 20, 2026",
    author: "Chef Sana Iqbal",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    tags: ["Desserts", "Recipes", "Chocolate"],
    comments: 31,
    views: 3456,
  },
];

export const shopProducts = [
  {
    id: 1,
    name: "Roasters Signature Blend (250g)",
    price: "Rs. 1,800",
    priceNum: 1800,
    description: "Our award-winning house blend — dark roasted Arabica beans from Ethiopia and Colombia.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
    category: "Coffee Beans",
    rating: 5,
    reviews: 48,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Single Origin Ethiopian (250g)",
    price: "Rs. 2,200",
    priceNum: 2200,
    description: "Light-medium roast with bright fruit notes of blueberry and jasmine.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
    category: "Coffee Beans",
    rating: 5,
    reviews: 22,
  },
  {
    id: 3,
    name: "Roasters Branded Mug",
    price: "Rs. 1,200",
    priceNum: 1200,
    description: "Premium ceramic mug with our signature logo — perfect for your morning brew.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
    category: "Merchandise",
    rating: 4,
    reviews: 15,
  },
  {
    id: 4,
    name: "Coffee Gift Set",
    price: "Rs. 4,500",
    priceNum: 4500,
    description: "The perfect gift — includes 2 blends, a Roasters mug, and our special filter kit.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    category: "Gift Sets",
    rating: 5,
    reviews: 33,
    badge: "Gift Pick",
  },
  {
    id: 5,
    name: "French Press (600ml)",
    price: "Rs. 3,200",
    priceNum: 3200,
    description: "Stainless steel French press — the best way to brew our whole bean coffee at home.",
    image: "https://images.unsplash.com/photo-1519082274554-1ca37f8b14f6?w=400&q=80",
    category: "Brewing Equipment",
    rating: 4,
    reviews: 19,
  },
  {
    id: 6,
    name: "Roasters BBQ Sauce (300ml)",
    price: "Rs. 650",
    priceNum: 650,
    description: "Our signature house BBQ sauce — smoky, tangy, and perfect on everything grilled.",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&q=80",
    category: "Condiments",
    rating: 5,
    reviews: 67,
    badge: "New",
  },
];

export const stats = [
  { number: 12, suffix: "+", label: "Years of Experience" },
  { number: 45000, suffix: "+", label: "Happy Customers" },
  { number: 3, suffix: "", label: "Premium Locations" },
  { number: 85, suffix: "+", label: "Menu Items" },
];
