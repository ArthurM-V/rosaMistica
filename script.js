// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => observer.observe(el));

// Copy to clipboard
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✓ Copiado!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "📋 Copiar chave";
      btn.classList.remove("copied");
    }, 2500);
  });
}

// Floating petals
const container = document.getElementById("petals-container");
const colors = [
  "rgba(245,212,216,0.6)",
  "rgba(228,160,168,0.5)",
  "rgba(201,112,122,0.35)",
  "rgba(253,240,242,0.7)",
];
for (let i = 0; i < 18; i++) {
  const petal = document.createElement("div");
  petal.className = "petal";
  const size = 8 + Math.random() * 18;
  petal.style.cssText = `
      width: ${size}px;
      height: ${size * 1.4}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${8 + Math.random() * 14}s;
      animation-delay: ${Math.random() * 10}s;
      border-radius: ${Math.random() > 0.5 ? "50% 0 50% 0" : "0 50% 0 50%"};
    `;
  container.appendChild(petal);
}
