const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thank you! Please visit our office to confirm your reservation.";
    contactForm.reset();
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay");
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`;
          }
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}
