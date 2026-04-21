/* ============================================================
   OIL TANKS PLUS — Main JS
   - Component injection (shared nav + footer)
   - Scroll effects (nav, reveal animations)
   - Counter animations
   - Mobile menu
   - Accordion / FAQ
   - Quote form handling
   ============================================================ */

/* --- Shared Components --- */

const NAV_HTML = `
<div class="top-bar">
  <div class="top-bar-inner">
    <div class="top-bar-left">
      <div class="top-bar-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        <a href="tel:03332224037">0333 222 4037</a>
      </div>
      <div class="top-bar-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:sales@oiltanksplus.co.uk">sales@oiltanksplus.co.uk</a>
      </div>
    </div>
    <div class="top-bar-right">
      <div class="top-bar-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>Nationwide Coverage — 40+ Engineer Locations</span>
      </div>
    </div>
  </div>
</div>
<nav class="nav-wrap" id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Oil Tanks Plus - Home">
      <img src="assets/images/logo-light.svg" alt="Oil Tanks Plus" width="180" height="37">
    </a>
    <ul class="nav-links" role="list">
      <li><a href="installations.html">Installations</a></li>
      <li><a href="tank-disposal.html">Tank Disposal</a></li>
      <li class="has-dropdown">
        <a href="oil-tank-range.html">Oil Tank Range</a>
        <ul class="dropdown" role="list">
          <li><a href="oil-tank-range.html#bunded">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"/><rect x="5" y="4" width="14" height="16" rx="2" opacity=".4"/></svg>
            Bunded Tanks
          </a></li>
          <li><a href="oil-tank-range.html#single-skin">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"/></svg>
            Single Skinned Tanks
          </a></li>
          <li><a href="oil-tank-range.html#steel">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            Steel Tanks
          </a></li>
          <li><a href="oil-tank-range.html#fire-rated">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-7-7c0-1.48.4-2.9 1-4.1L8.5 14.5z"/></svg>
            Fire Rated Tanks
          </a></li>
        </ul>
      </li>
      <li><a href="commercial.html">Commercial</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="tel:03332224037" class="nav-phone" aria-label="Call us">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        0333 222 4037
      </a>
      <a href="contact.html" class="btn btn-primary btn-sm">Get a Quote</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="navMobile" aria-hidden="true">
  <nav class="nav-mobile-links">
    <a href="installations.html">Installations</a>
    <div class="sub-label">Oil Tank Range</div>
    <div class="sub-links">
      <a href="oil-tank-range.html#bunded">Bunded Tanks</a>
      <a href="oil-tank-range.html#single-skin">Single Skinned Tanks</a>
      <a href="oil-tank-range.html#steel">Steel Tanks</a>
      <a href="oil-tank-range.html#fire-rated">Fire Rated Tanks</a>
    </div>
    <a href="tank-disposal.html">Tank Disposal</a>
    <a href="commercial.html">Commercial</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
  </nav>
  <div style="display:flex;flex-direction:column;gap:12px">
    <a href="contact.html" class="btn btn-primary w-full" style="justify-content:center">Get a Free Quote</a>
    <a href="tel:03332224037" class="btn btn-outline w-full" style="justify-content:center;color:#fff;border-color:rgba(255,255,255,.25)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      0333 222 4037
    </a>
  </div>
</div>`;

const FOOTER_HTML = `
<div class="footer-top">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" aria-label="Oil Tanks Plus">
          <img src="assets/images/logo-light.svg" alt="Oil Tanks Plus" width="160" height="33">
        </a>
        <p>The UK's largest oil tank installation company. Family-owned with over 25 years of experience delivering quality, value and a seamless service nationwide.</p>
        <div class="footer-contact-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:03332224037">0333 222 4037</a>
        </div>
        <div class="footer-contact-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:sales@oiltanksplus.co.uk">sales@oiltanksplus.co.uk</a>
        </div>
        <div class="footer-contact-item" style="align-items:flex-start">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-top:2px"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Top Floor Suite, 25 Cottesbrooke Park,<br>Heartlands Business Park, Daventry, NN11 8YL</span>
        </div>
        <div class="footer-social">
          <a href="https://facebook.com/OilTanksPlus" class="social-link" aria-label="Facebook" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://instagram.com/oiltanksplus" class="social-link" aria-label="Instagram" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://uk.trustpilot.com/review/www.oiltanksplus.co.uk" class="social-link" aria-label="Trustpilot" target="_blank" rel="noopener">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <p class="footer-heading">Services</p>
        <ul class="footer-links">
          <li><a href="installations.html">Oil Tank Installation</a></li>
          <li><a href="tank-disposal.html">Tank Disposal &amp; Recycling</a></li>
          <li><a href="commercial.html">Commercial Services</a></li>
          <li><a href="commercial.html#boilers">Boiler Installation</a></li>
          <li><a href="commercial.html#environmental">Environmental Services</a></li>
          <li><a href="commercial.html#maintenance">Tank Maintenance</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Tank Range</p>
        <ul class="footer-links">
          <li><a href="oil-tank-range.html#bunded">Bunded Oil Tanks</a></li>
          <li><a href="oil-tank-range.html#single-skin">Single Skinned Tanks</a></li>
          <li><a href="oil-tank-range.html#steel">Steel Oil Tanks</a></li>
          <li><a href="oil-tank-range.html#fire-rated">Fire Rated Tanks</a></li>
        </ul>
        <p class="footer-heading" style="margin-top:24px">Company</p>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#faqs">FAQs</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="about.html#locations">Our Locations</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Get a Free Quote</p>
        <p style="font-size:.875rem;color:rgba(255,255,255,.5);margin-bottom:16px;line-height:1.65">Free site survey included. Our experts will assess your requirements and provide a competitive, no-obligation quote.</p>
        <a href="contact.html" class="btn btn-primary w-full" style="justify-content:center;margin-bottom:24px">Request a Quote</a>
        <p class="footer-heading" style="margin-top:0">Accreditations</p>
        <div class="footer-certs">
          <span class="footer-cert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/></svg>
            OFTEC
          </span>
          <span class="footer-cert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/></svg>
            APHC
          </span>
          <span class="footer-cert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Made in Britain
          </span>
          <span class="footer-cert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
            12yr Warranty
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="footer-bottom">
    <p>&copy; ${new Date().getFullYear()} Oil Tanks Plus Ltd. Company No. 09688340. All rights reserved.</p>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
</div>`;

/* --- Inject Components --- */
function injectComponents() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = NAV_HTML;
  if (footer) footer.innerHTML = FOOTER_HTML;
  setActiveNav();
  initMobileMenu();
  initNavScroll();
}

/* --- Active Nav Link --- */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('#')[0] === path) link.classList.add('active');
  });
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const open = mobile.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    mobile.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('#site-header') && mobile.classList.contains('open')) {
      mobile.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      mobile.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

/* --- Nav Scroll Effect --- */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Scroll Reveal --- */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
}

/* --- Counter Animation --- */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
  const duration = 2000;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = eased * target;
    el.textContent = prefix + value.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => io.observe(el));
}

/* --- Accordion / FAQ --- */
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = trigger.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-trigger.open').forEach(t => {
        t.classList.remove('open');
        t.closest('.accordion-item').querySelector('.accordion-content').classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        trigger.classList.add('open');
        content.classList.add('open');
      }
    });
  });
}

/* --- Smooth Scroll for Hash Links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* --- Quote Form --- */
function initQuoteForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate success
    setTimeout(() => {
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) { successMsg.style.display = 'block'; form.style.display = 'none'; }
      else { btn.textContent = 'Message Sent!'; }
    }, 1200);
  });
}

/* --- Init on DOM ready --- */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  initReveal();
  initCounters();
  initAccordion();
  initSmoothScroll();
  initQuoteForm();
});
