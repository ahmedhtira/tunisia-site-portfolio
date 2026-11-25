/* Change text and imagery here to make a client version. All businesses are fictional. */
const DESIGNS = {
  lowlight: {
    title: "Low Light", category: "Cocktail bar", brand: "NOCTURNE", city: "La Marsa",
    line: "The night looks better from here.", intro: "Cocktails made slowly. Music played loud enough. Evenings worth staying for.",
    accent: "#d5bc86", contact: "Reserve a table",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1600&q=85",
    extra: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1000&q=85",
    items: [["SIGNATURE", "The Golden Hour", "A bright, citrus-forward classic"], ["LOW & SLOW", "After Dark", "A little spice, a long finish"], ["ZERO PROOF", "First Light", "All the ritual, no alcohol"]]
  },
  aura: {
    title: "Aura Residencies", category: "Real estate", brand: "AURA", city: "Tunis",
    line: "A place to call extraordinary.", intro: "Thoughtful spaces for the way you want to live. Discover a new perspective on home.",
    accent: "#b7a78d", contact: "Explore residences",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85",
    extra: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
    items: [["01", "The architecture", "Considered from every angle"], ["02", "The spaces", "Room to live beautifully"], ["03", "The neighbourhood", "Connected to everything"]]
  },
  brasa: {
    title: "Brasa", category: "Café & bakery", brand: "CAFÉ NOURA", city: "La Marsa",
    line: "Good mornings start here.", intro: "Coffee worth slowing down for, fresh pastries, and a table waiting for you.",
    accent: "#68370d", contact: "Explore the menu",
    image: "https://images.unsplash.com/photo-1643245253892-11f9af8a7306?w=1500&q=90",
    extra: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=85",
    items: [["01", "Cappuccino", "Rich espresso, silky milk"], ["02", "Morning pastry", "Baked fresh every day"], ["03", "Brunch", "Your favourite slow morning"]]
  },
  bruma: {
    title: "Bruma", category: "Fashion store", brand: "MIRA", city: "Tunis",
    line: "Nine looks. One floor.", intro: "The new collection is here. Pieces made for wherever your day takes you.",
    accent: "#aeb9dc", contact: "Shop the collection",
    image: "https://images.unsplash.com/photo-1639370225665-4c061b9f7e32?w=1600&q=90",
    extra: "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?w=1000&q=85",
    thirdImage: "https://images.unsplash.com/photo-1517894775688-07292b9d37d3?w=1000&q=85",
    items: [["01", "Everyday layers", "Easy by design"], ["02", "The denim edit", "Wear it your way"], ["03", "New arrivals", "Find your next favourite"]]
  },
  ripe: {
    title: "Ripe", category: "Food & drink", brand: "PRESSÉ", city: "Tunis",
    line: "Fresh has a new flavour.", intro: "Fruit first. Nothing complicated. Just bright blends made to wake up your day.",
    accent: "#a8bb52", contact: "See the blends",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1500&q=90",
    extra: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1000&q=85",
    items: [["01", "Berry rush", "Strawberry · cherry · apple"], ["02", "Golden hour", "Mango · orange · ginger"], ["03", "Green glow", "Kiwi · mint · cucumber"]]
  },
  vyre: {
    title: "Vyre", category: "Apparel", brand: "ATELIER 216", city: "Tunis",
    line: "Made to be worn your way.", intro: "An edit of essentials with a little more character. Small runs, considered details.",
    accent: "#e9c5b2", contact: "Explore the drop",
    image: "https://images.unsplash.com/photo-1778671394516-8270eac13c42?w=1200&q=90",
    extra: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1000&q=85",
    items: [["01", "The essential tee", "Your daily uniform"], ["02", "The overshirt", "A little more texture"], ["03", "The next drop", "Coming soon"]]
  },
  bruta: {
    title: "bruta", category: "Restaurant", brand: "BUN CLUB", city: "Tunis",
    line: "Built different. Eaten fast.", intro: "Big flavour, honest ingredients, no reason to play it safe.",
    accent: "#ce282a", contact: "See the menu",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1500&q=90",
    extra: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=1000&q=85",
    items: [["01", "The original", "Beef · cheddar · house sauce"], ["02", "The hot one", "A little fire in every bite"], ["03", "Crispy chicken", "Crunch first, questions later"]]
  },
  bocado: {
    title: "Bocado", category: "Restaurant", brand: "BISTRO BAYA", city: "Sidi Bou Saïd",
    line: "Come hungry. Stay a while.", intro: "Food for the table, stories for the road, and something good in every bite.",
    accent: "#efb08f", contact: "Discover the menu",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1500&q=90",
    extra: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000&q=85",
    items: [["01", "All-day brunch", "Fresh, generous, unapologetic"], ["02", "Lunch plates", "Your new regular order"], ["03", "Something sweet", "Always room for one more"]]
  },
  aether: {
    title: "Aether", category: "E-commerce", brand: "NOVA STUDIO", city: "Tunis",
    line: "For wherever you go next.", intro: "The pieces you reach for again and again. A collection made to move with you.",
    accent: "#d1d1d1", contact: "Explore the collection",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85",
    extra: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=85",
    items: [["01", "Shell jacket", "The light layer"], ["02", "Everyday bomber", "Built to go further"], ["03", "Studio overshirt", "A fresh perspective"], ["04", "Weekend layer", "Ready when you are"]]
  }
};
const ALIASES = { cafe: "brasa", service: "aura", wellness: "lowlight", shop: "bruma" };
