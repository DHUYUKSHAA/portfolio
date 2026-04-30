// Navbar scroll shadow
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Typing effect
const typedText = document.getElementById("typed");
const words = ["Java Web Applications", "Backend Systems", "IoT Solutions", "Database-Driven Projects"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const word = words[wordIndex];

  typedText.textContent = isDeleting
    ? word.substring(0, charIndex--)
    : word.substring(0, charIndex++);

  if (!isDeleting && charIndex === word.length + 1) {
    isDeleting = true;
    setTimeout(typeText, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeText, isDeleting ? 45 : 85);
}

typeText();

// Reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Skill bars
const skillBars = document.querySelectorAll(".bar-fill");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + "%";
    }
  });
}, { threshold: 0.4 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Contact form
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  formNote.textContent = "Thank you. Your message is ready.";
  contactForm.reset();
});
