// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to Top
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hero Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

// Buat dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot", "cursor-pointer", "h-3", "w-3", "rounded-full", "inline-block", "bg-white", "opacity-50");
  if (i === 0) dot.classList.add("active", "opacity-100");
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
    dots[i].classList.remove("active", "opacity-100");
    dots[i].classList.add("opacity-50");
  });

  // munculkan slide
  const activeSlide = slides[n];
  activeSlide.classList.remove("hidden");

  // reset animasi
  const text = activeSlide.querySelector(".text-section");
  const img = activeSlide.querySelector(".image-section");
  text.classList.remove("animate-pop-up");
  img.classList.remove("animate-slide-right");
  void text.offsetWidth; // trigger reflow
  void img.offsetWidth;
  text.classList.add("animate-pop-up");
  img.classList.add("animate-slide-right");

  dots[n].classList.add("active", "opacity-100");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
dots.forEach((dot, i) => dot.addEventListener("click", () => { slideIndex = i; showSlide(i); }));

// Auto Slide
setInterval(nextSlide, 6000);
