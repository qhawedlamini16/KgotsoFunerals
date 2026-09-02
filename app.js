const galleryItems = [
  {
    image: "assets/kgotso-vehicle-enhanced_64127719.png",
    eyebrow: "01 / Service vehicles",
    title: "Branded transport, prepared with care.",
    description: "A closer look at Kgotso BM Funeral Scheme service vehicles.",
  },
  {
    image: "assets/kgotso-fleet-enhanced_ea200429.png",
    eyebrow: "02 / Fleet",
    title: "A line-up ready to support families.",
    description: "Kgotso BM service vehicles photographed at the business location.",
  },
  {
    image: "assets/kgotso-staff-enhanced_47a6496d.png",
    eyebrow: "03 / Casket presentation",
    title: "A practical, respectful approach.",
    description: "A Kgotso BM team member presenting casket options and information.",
  },
  {
    image: "assets/kgotso-tent-enhanced_6a28bfc8.png",
    eyebrow: "04 / Outdoor setting",
    title: "A carefully arranged service space.",
    description: "White seating and a tented area prepared for an outdoor service.",
  },
  {
    image: "assets/kgotso-service-setting-enhanced_7cae64ba.png",
    eyebrow: "05 / Event preparation",
    title: "Details that make a setting feel considered.",
    description: "A branded Kgotso BM service setting with seating and floral details.",
  },
];

const serviceItems = [
  "Headstone",
  "Hearse and family cars",
  "50 chairs and 2 tables",
  "Toilet",
  "Gas stove with 3 pots",
  "5 taxis",
  "Paper cups and plates",
  "Grave decorations",
];

const commonGroceries = [
  "10 kg Spekko rice × 2",
  "10 kg Golden Cloud flour × 2",
  "10 kg White Star maize meal × 2",
  "5 L cooking oil × 2",
  "10 kg Iwisa stamp × 2",
  "10 kg mabele × 2",
  "10 kg brown sugar × 2",
  "10 kg potatoes × 2",
  "10 kg bag carrots × 2",
  "10 kg bag onions × 2",
  "Cabbage bag × 1",
  "Box tomatoes × 2",
];

const plans = [
  {
    name: "Premium",
    price: "R285",
    coffin: "Flat lid coffin",
    allowance: "R100 airtime and R100 data",
    cover: "Main member, spouse and 5 children",
    waiting: "6 months",
    description: "This refined protection package includes core funeral support, the listed groceries, and R100 airtime and R100 data.",
    serviceItems,
    groceries: [...commonGroceries, "10 kg beef stew", "10 kg chicken drumsticks"],
    eyebrow: "Refined protection",
  },
  {
    name: "Presidential",
    price: "R325",
    coffin: "Open face coffin or 3 tier coffin",
    allowance: "R150 airtime and R150 data",
    cover: "Main member, spouse and 5 children",
    waiting: "6 months",
    description: "A distinguished funeral support package with expanded groceries, practical service items, and R150 airtime and R150 data.",
    serviceItems,
    groceries: [...commonGroceries, "15 kg beef stew", "15 kg chicken drumsticks"],
    eyebrow: "Distinguished assurance",
  },
  {
    name: "Royal",
    price: "R355",
    coffin: "Open face casket",
    allowance: "R200 airtime and R200 data",
    cover: "Main member, spouse and 5 children",
    waiting: "6 months",
    description: "Ceremonial distinction with an open face casket, expanded groceries, and R200 airtime and R200 data.",
    serviceItems,
    groceries: [...commonGroceries, "20 kg beef stew", "20 kg chicken drumsticks"],
    eyebrow: "Ceremonial distinction",
  },
  {
    name: "Grocery plan",
    price: "R140",
    coffin: "Grocery-only plan",
    allowance: "No funeral-service items included",
    cover: "4 adults and 6 children",
    waiting: "6 months",
    description: "A grocery-only plan for household nourishment, with the listed grocery allocation and no funeral-service items included.",
    serviceItems: [],
    groceries: [
      "10 kg Spekko rice × 2",
      "10 kg Golden Cloud flour",
      "Parmalat box milk × 2",
      "500 g Rama × 10",
      "10 kg White Star maize meal",
      "5 L cooking oil × 2",
      "10 stamp Iwisa × 2",
      "10 kg mabele × 2",
      "10 kg brown sugar × 2",
      "750 g coffee × 2",
      "Joko tea box × 2",
      "25 kg chicken drumsticks",
      "Large baking powder",
      "Large dishwashing liquid",
      "750 g box Ellis Brown powder milk × 2",
      "Large box Rajah",
      "Large box chicken spice",
      "Large box Knorrox cubes × 2",
      "10 kg bag potatoes × 2",
      "10 kg bag carrots × 2",
      "Box tomatoes × 2",
      "10 kg onions × 2",
      "Bag cabbage",
    ],
    eyebrow: "Nourishment for home",
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function renderGallery(index) {
  const item = galleryItems[index];
  $("#gallery-image").src = item.image;
  $("#gallery-image").alt = item.description;
  $("#gallery-eyebrow").textContent = item.eyebrow;
  $("#gallery-title").textContent = item.title;
  $("#gallery-description").textContent = item.description;
  $("#gallery-count").textContent = `${String(index + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;
  $$(".thumb").forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("active", thumbIndex === index);
    thumb.setAttribute("aria-selected", thumbIndex === index ? "true" : "false");
  });
}

let galleryIndex = 0;
$("#gallery-prev").addEventListener("click", () => {
  galleryIndex = (galleryIndex - 1 + galleryItems.length) % galleryItems.length;
  renderGallery(galleryIndex);
});
$("#gallery-next").addEventListener("click", () => {
  galleryIndex = (galleryIndex + 1) % galleryItems.length;
  renderGallery(galleryIndex);
});
$$(".thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    galleryIndex = Number(thumb.dataset.gallery);
    renderGallery(galleryIndex);
  });
});

function renderPlan(index) {
  const plan = plans[index];
  $("#plan-eyebrow").textContent = plan.eyebrow;
  $("#plan-name").textContent = plan.name;
  $("#plan-price").textContent = plan.price;
  $("#plan-description").textContent = plan.description;
  $("#service-heading").textContent = plan.serviceItems.length ? "Included service items" : "Service items";
  $("#plan-cover").textContent = plan.cover;
  $("#plan-waiting").textContent = plan.waiting;
  $("#plan-note").textContent = plan.name === "Grocery plan" ? plan.allowance : "Grace fee excluded";
  $("#grocery-title").textContent = `Groceries included with ${plan.name}.`;
  $("#service-list").innerHTML = plan.serviceItems.length
    ? plan.serviceItems.map((item) => `<li>${item}</li>`).join("")
    : `<li>${plan.allowance}</li>`;
  $("#grocery-list").innerHTML = plan.groceries.map((item) => `<li>${item}</li>`).join("");
  $$(".package-card").forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === index));
}

$$(".package-card").forEach((card) => {
  card.addEventListener("click", () => renderPlan(Number(card.dataset.plan)));
});

const menuToggle = $(".menu-toggle");
const mobileNav = $(".mobile-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mobileNav.hidden = isOpen;
  menuToggle.textContent = isOpen ? "☰" : "×";
});
$$(".mobile-nav a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
  mobileNav.hidden = true;
}));

const reviewTabs = $$(".review-tab");
reviewTabs.forEach((tab, index) => tab.addEventListener("click", () => {
  reviewTabs.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === index));
  if (index === 1) {
    $("#review-title").textContent = "Your experience can help another family.";
    $("#review-copy").textContent = "Please contact the team directly to share your experience. Approved feedback will be reviewed before it is published here.";
  } else {
    $("#review-title").textContent = "No verified reviews have been published here yet.";
    $("#review-copy").textContent = "When customers choose to share approved feedback, it will appear in this space. We do not create or publish unverified testimonials.";
  }
}));

renderGallery(0);
renderPlan(0);
