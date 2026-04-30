// Navbar scroll effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Typing effect
const typed = document.getElementById("typed");
const words = [
  "Java Web Applications",
  "Backend Systems",
  "Database Projects",
  "IoT Solutions"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typed.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typingEffect, 1300);
      return;
    }
  } else {
    typed.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typingEffect, deleting ? 45 : 85);
}

typingEffect();

// Reveal on scroll
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach(item => revealObserver.observe(item));

// Active navbar link
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Cursor glow
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// Scroll top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 350 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  formNote.textContent = "Thank you. Your message is ready.";
  contactForm.reset();
});

// Close mobile menu after clicking a link
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
