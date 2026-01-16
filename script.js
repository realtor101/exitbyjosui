/* ============================
   SCROLL REVEAL ANIMATIONS
   ============================ */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // reveal once
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));



/* ============================
   BUTTON MICRO-INTERACTION
   ============================ */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow =
      "0 0 22px rgba(201,162,77,0.9), 0 0 45px rgba(201,162,77,0.6)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow =
      "0 0 16px rgba(201,162,77,0.6), 0 0 30px rgba(201,162,77,0.35)";
  });
});
