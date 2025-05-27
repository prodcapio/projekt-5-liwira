document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-toggle");
  const menu = document.querySelector(".mobile-menu");

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menu.setAttribute("aria-hidden", !isOpen);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".kategoribar-link");
  const btnLeft = document.querySelector(".scroll-btn.left");
  const btnRight = document.querySelector(".scroll-btn.right");

  // Pile til scroll
  btnLeft.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
  });

  // Swipe og mouse drag
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("dragging");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-hastighed
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch swipe
  let touchStartX = 0;

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  container.addEventListener("touchmove", (e) => {
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    container.scrollLeft += deltaX;
    touchStartX = touchEndX;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;

  const headers = document.querySelectorAll(".header-mobile, .navbar");
  const kategoribarElements = document.querySelectorAll(".kategoribar");
  const burgerIcon = document.querySelector(".header-mobile .img[src*='menu-m']");
  const dropdown = document.querySelector(".mobile-dropdown");

  // Scroll hide/reveal logic
  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const action = currentScroll > lastScrollTop ? "add" : "remove";

    headers.forEach(el => el.classList[action]("hide-on-scroll"));
    kategoribarElements.forEach(el => el.classList[action]("hide-on-scroll"));

    lastScrollTop = Math.max(currentScroll, 0);
  });

  // Burger menu toggle
  if (burgerIcon && dropdown) {
    burgerIcon.addEventListener("click", function () {
      dropdown.classList.toggle("open");
    });
  }
});
