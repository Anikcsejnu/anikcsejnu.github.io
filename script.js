/* ─── NAV SCROLL ─── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── HAMBURGER ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', !open);
});
mobileMenu.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', true);
  });
});

/* ─── TYPING ANIMATION ─── */
const phrases = [
  '.NET / C# Developer',
  'Backend Specialist',
  'Software Engineer',
  'API Architect',
  'Problem Solver'
];
let pIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');
function type() {
  const phrase = phrases[pIdx];
  if (deleting) {
    typedEl.textContent = phrase.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
    setTimeout(type, 60);
  } else {
    typedEl.textContent = phrase.slice(0, ++cIdx);
    if (cIdx === phrase.length) {
      deleting = true;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  }
}
setTimeout(type, 500);

/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('.reveal, .reveal-item');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

/* ─── ACTIVE NAV LINK ─── */
const sections = document.querySelectorAll('section[id], .contact-section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));
