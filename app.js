const galleryItems = [
  {
    image: "assets/img/site/page-000.webp",
    eyebrow: "01 / Memorial setting",
    title: "A farewell arranged with meaning.",
    description: "A Kgotso-branded memorial setting with floral details, seating and a welcoming ceremony space.",
  },
  {
    image: "assets/img/site/page-001.webp",
    eyebrow: "02 / Ceremony arrival",
    title: "Every arrival feels considered.",
    description: "A carpeted ceremony entrance with formal seating, rope barriers and a Kgotso welcome under the tent.",
  },
  {
    image: "assets/img/site/page-002.webp",
    eyebrow: "03 / Hearse and cars",
    title: "A dignified journey, supported throughout.",
    description: "A polished hearse and service vehicle ready for a respectful procession.",
  },
  {
    image: "assets/img/site/page-003.webp",
    eyebrow: "04 / Floral tribute",
    title: "Details that hold the moment.",
    description: "A draped service tent with a floral spray, ceremony seating and a carefully prepared aisle.",
  },
  {
    image: "assets/img/site/page-004.webp",
    eyebrow: "05 / Cemetery decor",
    title: "A complete setting from entrance to graveside.",
    description: "Kgotso flags, floral decor, red carpet and rope barriers create a clear, composed graveside setting.",
  },
  {
    image: "assets/img/site/kgotso-staff-enhanced.webp",
    eyebrow: "06 / Care and guidance",
    title: "Support begins with a conversation.",
    description: "A Kgotso team member presents casket options and contact details for families.",
  },
  {
    image: "assets/img/site/page-006.webp",
    eyebrow: "07 / In good company",
    title: "A team built around dignity.",
    description: "A Kgotso team portrait beneath the branded service tent.",
  },
];

// Included in every package (David, 24 Oct 2026). Paper cups and plates kept pending confirmation.
const allPlanServices = [
  "Registration of the deceased",
  "Removals",
  "Hearse and family cars",
  "Graveyard transport",
];
const allPlanExtras = [
  "Gas stove with 3 pots and a full 9 kg gas bottle",
  "Paper cups and plates",
  "Graveside decor",
  "Refreshments",
];

const serviceItems = [
  "Headstone",
  ...allPlanServices,
  "50 chairs and 2 tables",
  "Toilet",
  ...allPlanExtras,
];

const planServices = (tent) => [
  ...allPlanServices,
  `${tent} tent`,
  "2 tables",
  "40 chairs and toilet",
  ...allPlanExtras,
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

const topCover = "Up to 8 members: 4 adults and 4 children";
const vegImage = "assets/img/site/vegetables-tableware.webp";
const fullImage = "assets/img/site/full-provisions.webp";

// casketImage: client-supplied PDF photos for the top 3. headstoneImage stays null
// until Bobo confirms which coffin and headstone belong to each plan.
const plans = [
  { name: "Premium", price: "R285", coffin: "Flat lid coffin", allowance: "R100 airtime and R100 data", graveFee: "Included", casketImage: "assets/img/site/premium-transparent.webp", casketAlt: "Polished warm-brown casket", headstoneImage: null, groceryImage: fullImage, groceryImageAlt: "Rice, flour, maize meal, cooking oil, vegetables, beef and chicken representing the Premium grocery allocation", cover: topCover, waiting: "6 months", description: "Core funeral support with a headstone, the listed groceries, and R100 airtime and R100 data.", serviceItems, groceries: [...commonGroceries, "10 kg beef stew", "10 kg chicken drumsticks"], eyebrow: "Refined protection" },
  { name: "Presidential", price: "R325", coffin: "Open face coffin or 3 tier coffin", allowance: "R150 airtime and R150 data", graveFee: "Included", casketImage: "assets/img/site/presidential-transparent.webp", casketAlt: "Ornate brown casket", headstoneImage: null, groceryImage: fullImage, groceryImageAlt: "Rice, flour, maize meal, cooking oil, vegetables, beef and chicken representing the Presidential grocery allocation", cover: topCover, waiting: "6 months", description: "A distinguished package with a headstone, expanded groceries, and R150 airtime and R150 data.", serviceItems, groceries: [...commonGroceries, "15 kg beef stew", "15 kg chicken drumsticks"], eyebrow: "Distinguished assurance" },
  { name: "Royal", price: "R355", coffin: "Open face casket", allowance: "R200 airtime and R200 data", graveFee: "Included", casketImage: "assets/img/site/royal-transparent.webp", casketAlt: "Carved brown casket", headstoneImage: null, groceryImage: fullImage, groceryImageAlt: "Rice, flour, maize meal, cooking oil, vegetables, beef and chicken representing the Royal grocery allocation", cover: topCover, waiting: "6 months", description: "An open face casket with a headstone, expanded groceries, and R200 airtime and R200 data.", serviceItems, groceries: [...commonGroceries, "20 kg beef stew", "20 kg chicken drumsticks"], eyebrow: "Ceremonial distinction" },
  { name: "Plan A", price: "R135", coffin: "Flat lid coffin", allowance: "Vegetables included", graveFee: "Included", headstoneImage: null, groceryImage: vegImage, groceryImageAlt: "Vegetables included with Plan A", cover: "Funeral service package", waiting: "6 months", description: "A flat lid coffin with the funeral-service inclusions listed below.", serviceItems: planServices("5 × 10"), groceries: ["Vegetables"], eyebrow: "Essential funeral support" },
  { name: "Plan B", price: "R155", coffin: "Open face coffin", allowance: "Vegetables included", graveFee: "Included", headstoneImage: null, groceryImage: vegImage, groceryImageAlt: "Vegetables included with Plan B", cover: "Funeral service package", waiting: "6 months", description: "An open face coffin with the funeral-service inclusions listed below.", serviceItems: planServices("5 × 10"), groceries: ["Vegetables"], eyebrow: "Open face farewell" },
  { name: "Plan C", price: "R165", coffin: "3 tier coffin", allowance: "Vegetables included", graveFee: "Included", headstoneImage: null, groceryImage: vegImage, groceryImageAlt: "Vegetables included with Plan C", cover: "Funeral service package", waiting: "6 months", description: "A 3 tier coffin with the funeral-service inclusions listed below.", serviceItems: planServices("5 × 10"), groceries: ["Vegetables"], eyebrow: "Three-tier comfort" },
  { name: "Plan D", price: "R185", coffin: "Open face casket", allowance: "Vegetables included", graveFee: "Included", headstoneImage: null, groceryImage: vegImage, groceryImageAlt: "Vegetables included with Plan D", cover: "Funeral service package", waiting: "6 months", description: "An open face casket with the larger 7 × 10 tent and the funeral-service inclusions listed below.", serviceItems: planServices("7 × 10"), groceries: ["Vegetables"], eyebrow: "Open face casket" },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const GALLERY_INTERVAL_MS = 4500;
const GALLERY_TIMELINE = "4.5s";

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  const header = $(".site-header");
  const offset = header ? header.offsetHeight + 18 : 18;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", selector);
}

$$('a[href^="#"]').forEach((link) => link.addEventListener("click", (event) => {
  const selector = link.getAttribute("href");
  if (!selector || selector === "#") return;
  if (!document.querySelector(selector)) return;
  event.preventDefault();
  scrollToSection(selector);
}));

let galleryIndex = 0;
let galleryTimer;

function renderGallery(index, animate = true) {
  const item = galleryItems[index];
  const imageWrap = $(".gallery-image-wrap");
  if (!imageWrap || !$("#gallery-image")) return;
  if (animate) {
    imageWrap.classList.remove("is-changing");
    void imageWrap.offsetWidth;
    imageWrap.classList.add("is-changing");
  }
  $("#gallery-image").src = item.image;
  $("#gallery-image").alt = item.description;
  $("#gallery-eyebrow").textContent = item.eyebrow;
  $("#gallery-title").textContent = item.title;
  $("#gallery-description").textContent = item.description;
  $("#gallery-count").textContent = `${String(index + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;
  $("#gallery-progress").style.setProperty("--gallery-progress-duration", GALLERY_TIMELINE);
  $$(".thumb").forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("active", thumbIndex === index);
    thumb.setAttribute("aria-selected", thumbIndex === index ? "true" : "false");
  });
}

function goToGallery(index) {
  galleryIndex = (index + galleryItems.length) % galleryItems.length;
  renderGallery(galleryIndex);
}

function restartGalleryTimer() {
  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => goToGallery(galleryIndex + 1), GALLERY_INTERVAL_MS);
}

$("#gallery-prev")?.addEventListener("click", () => { goToGallery(galleryIndex - 1); restartGalleryTimer(); });
$("#gallery-next")?.addEventListener("click", () => { goToGallery(galleryIndex + 1); restartGalleryTimer(); });
$$(".thumb").forEach((thumb) => thumb.addEventListener("click", () => { goToGallery(Number(thumb.dataset.gallery)); restartGalleryTimer(); }));

const galleryFeature = $(".gallery-feature");
galleryFeature?.addEventListener("mouseenter", () => clearInterval(galleryTimer));
galleryFeature?.addEventListener("mouseleave", restartGalleryTimer);
galleryFeature?.addEventListener("focusin", () => clearInterval(galleryTimer));
galleryFeature?.addEventListener("focusout", restartGalleryTimer);

function renderPlan(index) {
  const plan = plans[index];
  if (!plan || !$("#plan-overlay")) return;
  $("#overlay-plan-eyebrow").textContent = plan.eyebrow;
  $("#overlay-plan-name").textContent = plan.name;
  $("#overlay-plan-price").textContent = plan.price;
  $("#overlay-plan-description").textContent = plan.description;
  $("#overlay-plan-coffin").textContent = plan.coffin;
  $("#overlay-plan-cover").textContent = plan.cover;
  $("#overlay-plan-waiting").textContent = plan.waiting;
  $("#overlay-plan-note").textContent = plan.allowance;
  $("#overlay-plan-gravefee").textContent = plan.graveFee;
  const casketImage = $("#overlay-plan-casket");
  casketImage.hidden = !plan.casketImage;
  casketImage.closest(".plan-sheet-header").classList.toggle("has-visuals", Boolean(plan.groceryImage));
  if (plan.casketImage) {
    casketImage.src = plan.casketImage;
    casketImage.alt = plan.casketAlt;
  } else {
    casketImage.removeAttribute("src");
    casketImage.alt = "";
  }
  const groceryVisual = $("#overlay-plan-grocery-visual");
  groceryVisual.src = plan.groceryImage;
  groceryVisual.alt = plan.groceryImageAlt;
  const headstoneVisual = $("#overlay-plan-headstone");
  headstoneVisual.hidden = !plan.headstoneImage;
  if (plan.headstoneImage) {
    headstoneVisual.src = plan.headstoneImage;
    headstoneVisual.alt = `Headstone included with ${plan.name}`;
  } else {
    headstoneVisual.removeAttribute("src");
    headstoneVisual.alt = "";
  }
  $("#overlay-service-heading").textContent = plan.serviceItems.length ? "Included service items" : "Service items";
  $("#overlay-grocery-title").textContent = `Groceries included with ${plan.name}.`;
  $("#overlay-grocery-image").src = plan.groceryImage;
  $("#overlay-grocery-image").alt = plan.groceryImageAlt;
  $("#overlay-service-list").innerHTML = plan.serviceItems.length ? plan.serviceItems.map((item) => `<li>${item}</li>`).join("") : `<li>${plan.allowance}</li>`;
  $("#overlay-grocery-list").innerHTML = plan.groceries.map((item) => `<li>${item}</li>`).join("");
  $$(".package-card").forEach((card, cardIndex) => card.classList.toggle("active", cardIndex === index));
}

const planOverlay = $("#plan-overlay");
const planClose = $("#plan-close");
const openPlanOverlay = (index) => {
  renderPlan(index);
  planOverlay.hidden = false;
  planOverlay.setAttribute("aria-hidden", "false");
  planOverlay.classList.remove("is-opening");
  void planOverlay.offsetWidth;
  planOverlay.classList.add("is-opening");
  document.body.classList.add("plan-overlay-open");
  planClose?.focus();
};
const closePlanOverlay = () => {
  if (!planOverlay) return;
  planOverlay.hidden = true;
  planOverlay.setAttribute("aria-hidden", "true");
  planOverlay.classList.remove("is-opening");
  document.body.classList.remove("plan-overlay-open");
};
$$('.package-card').forEach((card) => card.addEventListener("click", () => openPlanOverlay(Number(card.dataset.plan))));
planClose?.addEventListener("click", closePlanOverlay);
planOverlay?.querySelector("[data-plan-close]")?.addEventListener("click", closePlanOverlay);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && planOverlay && !planOverlay.hidden) closePlanOverlay();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const PACKAGE_SLIDE_INTERVAL_MS = 4500;
const PACKAGE_FADE_DURATION_MS = 900;
const prepareImage = (image) => new Promise((resolve) => {
  const decode = () => {
    const decoding = typeof image.decode === "function" ? image.decode().catch(() => {}) : Promise.resolve();
    decoding.finally(resolve);
  };
  if (image.complete && image.naturalWidth) {
    decode();
    return;
  }
  image.addEventListener("load", decode, { once: true });
  image.addEventListener("error", resolve, { once: true });
});

const packageCarousels = $$(".package-visual[data-carousel]");
const packageCarouselControllers = packageCarousels.map((card) => {
  const slides = $$(".package-visual-slides img", card);
  card.classList.add("is-loading");
  let slideIndex = 0;
  let timer;
  const showNextSlide = () => {
    const previousSlide = slides[slideIndex];
    slideIndex = (slideIndex + 1) % slides.length;
    const nextSlide = slides[slideIndex];
    nextSlide.classList.add("is-active", "is-entering");
    window.setTimeout(() => {
      previousSlide.classList.remove("is-active");
      nextSlide.classList.remove("is-entering");
    }, PACKAGE_FADE_DURATION_MS + 50);
  };
  const start = () => {
    clearInterval(timer);
    timer = setInterval(showNextSlide, PACKAGE_SLIDE_INTERVAL_MS);
  };
  return Promise.all(slides.map(prepareImage)).then(() => {
    card.classList.remove("is-loading");
    card.classList.add("is-ready");
    return { card, start };
  });
});

Promise.all(packageCarouselControllers).then((controllers) => {
  if (reducedMotion) return;
  const startAllCarousels = () => controllers.forEach(({ start }) => start());
  if (!("IntersectionObserver" in window)) {
    startAllCarousels();
    return;
  }
  const carouselObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    startAllCarousels();
    observer.disconnect();
  }, { rootMargin: "220px 0px", threshold: 0.01 });
  carouselObserver.observe($(".package-visual-grid"));
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

const revealGroups = [
  ".gallery-heading",
  ".gallery-float",
  ".approach-art",
  ".approach-copy",
  ".section-heading",
  ".register-label",
  ".package-card",
  ".package-visual",
  ".contact-heading",
  ".contact-card",
  ".contact-info-panel",
  ".site-footer",
];
const revealItems = $$(revealGroups.join(","));

document.documentElement.classList.add("reveal-ready");
revealItems.forEach((item, index) => {
  item.classList.add("scroll-pop");
  item.style.setProperty("--pop-delay", `${(index % 4) * 70}ms`);
});

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
  revealItems.forEach((item) => revealObserver.observe(item));
}

renderGallery(0, false);
renderPlan(0);
restartGalleryTimer();

if (reducedMotion) clearInterval(galleryTimer);
