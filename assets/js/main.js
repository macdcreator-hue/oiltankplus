/* ============================================================
   OIL TANKS PLUS — Main JS v2
   ============================================================ */

/* --- NAV HTML --- */
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
<nav class="nav-wrap" id="mainNav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Oil Tanks Plus – Home">
      <img src="assets/images/logo-dark.svg" alt="Oil Tanks Plus" width="180" height="38" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <span style="display:none;align-items:center;gap:8px;font-family:'Playfair Display',serif;font-weight:800;font-size:1.1rem;color:#0d2e2c">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#0d2e2c"/><path d="M8 28 C8 18 16 10 20 8 C24 10 32 18 32 28 C32 32 28 34 24 32 C22 30 20 30 18 30 C14 30 8 32 8 28Z" fill="#2a7f7a"/><circle cx="20" cy="20" r="4" fill="#fff"/></svg>
        Oil Tanks Plus
      </span>
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
            Single-Skin Tanks
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
      <li><a href="locations.html">Locations</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="tel:03332224037" class="nav-phone" aria-label="Call 0333 222 4037">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        0333 222 4037
      </a>
      <a href="quote.html" class="btn btn-primary btn-sm">Get a Free Quote</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="navMobile" aria-hidden="true">
  <nav class="nav-mobile-links" aria-label="Mobile navigation">
    <a href="installations.html">Installations</a>
    <a href="tank-disposal.html">Tank Disposal</a>
    <a href="oil-tank-range.html">Oil Tank Range</a>
    <a href="commercial.html">Commercial</a>
    <a href="locations.html">Locations</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
  </nav>
  <div class="nav-mobile-actions">
    <a href="quote.html" class="btn btn-primary" style="width:100%;justify-content:center">Get a Free Quote</a>
    <a href="tel:03332224037" class="btn btn-secondary" style="width:100%;justify-content:center">0333 222 4037</a>
  </div>
</div>
`;

/* --- FOOTER HTML --- */
const FOOTER_HTML = `
<div class="container">
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" aria-label="Oil Tanks Plus – Home">
        <img src="assets/images/logo-light.svg" alt="Oil Tanks Plus" width="160" height="34" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span style="display:none;font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:800;color:#fff">Oil Tanks Plus</span>
      </a>
      <p>The UK's largest family-owned oil tank installation company. 25+ years of experience, OFTEC &amp; APHC registered, covering the entire nation.</p>
      <div class="footer-accreds">
        <span class="footer-accred">OFTEC</span>
        <span class="footer-accred">APHC</span>
        <span class="footer-accred">Made in Britain</span>
      </div>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <ul class="footer-links">
        <li><a href="installations.html">Tank Installations</a></li>
        <li><a href="tank-disposal.html">Tank Disposal</a></li>
        <li><a href="oil-tank-range.html">Oil Tank Range</a></li>
        <li><a href="commercial.html">Commercial Services</a></li>
        <li><a href="quote.html">Get a Quote</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul class="footer-links">
        <li><a href="about.html">About Us</a></li>
        <li><a href="locations.html">Locations</a></li>
        <li><a href="news.html">News &amp; Advice</a></li>
        <li><a href="about.html#faqs">FAQs</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Contact</h5>
      <div class="footer-contact">
        <div class="footer-contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.01 4a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:03332224037">0333 222 4037</a>
        </div>
        <div class="footer-contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:sales@oiltanksplus.co.uk">sales@oiltanksplus.co.uk</a>
        </div>
        <div class="footer-contact-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Fri: 8am–6pm<br>Sat: 9am–1pm</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Oil Tanks Plus Ltd. Registered in England &amp; Wales. All rights reserved.</p>
    <nav class="footer-legal" aria-label="Legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Cookie Policy</a>
    </nav>
  </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Oil Tanks Plus",
  "description": "UK's largest family-owned oil tank installation company. OFTEC & APHC registered.",
  "url": "https://www.oiltanksplus.co.uk",
  "telephone": "+443332224037",
  "email": "sales@oiltanksplus.co.uk",
  "areaServed": "GB",
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-13:00"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Oil Tank Services",
    "itemListElement": [
      {"@type": "Offer","itemOffered": {"@type": "Service","name": "Oil Tank Installation"}},
      {"@type": "Offer","itemOffered": {"@type": "Service","name": "Oil Tank Disposal"}},
      {"@type": "Offer","itemOffered": {"@type": "Service","name": "Commercial Tank Services"}}
    ]
  }
}
</script>
`;

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  initNav();
  initParallax();
  initReveal();
  initCounters();
  initAccordion();
  initTankFilter();
  initQuoteForm();
  markActivePage();
});

/* --- Inject shared components --- */
function injectComponents() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = NAV_HTML;
  if (footer) footer.innerHTML = FOOTER_HTML;
}

/* --- Mark active nav link --- */
function markActivePage() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-links a').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.closest('li')?.classList.add('active');
    }
  });
}

/* ============================================================
   NAV SCROLL + MOBILE TOGGLE
   ============================================================ */
function initNav() {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!nav) return;

  /* Scroll shadow */
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.classList.toggle('active', !open);
      mobile.classList.toggle('open', !open);
      mobile.setAttribute('aria-hidden', String(open));
      document.body.style.overflow = open ? '' : 'hidden';
    });

    /* Close on link click */
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        mobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && !mobile.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        mobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }
}

/* ============================================================
   PARALLAX
   ============================================================ */
function initParallax() {
  const elements = document.querySelectorAll('.hero-bg, .page-hero-bg');
  if (!elements.length) return;

  /* Skip parallax on touch / reduced-motion */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (prefersReduced || isTouch) return;

  const update = () => {
    const sy = window.scrollY;
    elements.forEach(el => {
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const ratio = (sy - (sy + rect.top)) / window.innerHeight;
      el.style.transform = `translateY(${ratio * 22}%)`;
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

/* ============================================================
   COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const ease = t => t < .5 ? 2*t*t : -1+(4-2*t)*t;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const duration = 1800;
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const decimals = String(target).includes('.') ? 1 : 0;
      const start = performance.now();

      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const val = (target * ease(p)).toFixed(decimals);
        el.textContent = prefix + val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

/* ============================================================
   ACCORDION
   ============================================================ */
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const content = btn.nextElementSibling;

      /* Close siblings */
      btn.closest('.accordion-item')?.parentElement
        ?.querySelectorAll('.accordion-trigger').forEach(b => {
          if (b !== btn) {
            b.setAttribute('aria-expanded', 'false');
            b.nextElementSibling.style.maxHeight = '0';
          }
        });

      btn.setAttribute('aria-expanded', String(!expanded));
      content.style.maxHeight = expanded ? '0' : content.scrollHeight + 'px';
    });
  });
}

/* ============================================================
   TANK RANGE FILTER
   ============================================================ */
function initTankFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.tank-card[data-type]');
  if (!filterBtns.length || !cards.length) return;

  const activeFilters = { type: 'all', material: 'all', use: 'all' };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const val   = btn.dataset.filter;

      /* Toggle active within group */
      document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters[group] = val;

      /* Filter cards */
      cards.forEach(card => {
        const matchType = activeFilters.type === 'all' || card.dataset.type?.split(' ').includes(activeFilters.type);
        const matchMat  = activeFilters.material === 'all' || card.dataset.material === activeFilters.material;
        const matchUse  = activeFilters.use === 'all' || card.dataset.use?.split(' ').includes(activeFilters.use);

        const show = matchType && matchMat && matchUse;
        card.style.display = show ? '' : 'none';
        card.style.opacity = show ? '' : '0';
      });
    });
  });
}

/* ============================================================
   MULTI-STEP QUOTE FORM
   ============================================================ */
function initQuoteForm() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 4;

  const panels   = form.querySelectorAll('.quote-panel');
  const dots     = form.querySelectorAll('.quote-step-dot');
  const lines    = form.querySelectorAll('.quote-step-line');
  const nextBtns = form.querySelectorAll('[data-next]');
  const prevBtns = form.querySelectorAll('[data-prev]');

  /* Option card selection */
  form.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', () => {
      const group = card.dataset.group;
      form.querySelectorAll(`.option-card[data-group="${group}"]`).forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  function goTo(step) {
    panels.forEach((p, i) => p.classList.toggle('active', i + 1 === step));
    dots.forEach((d, i) => {
      d.classList.toggle('active', i + 1 === step);
      d.classList.toggle('done', i + 1 < step);
    });
    lines.forEach((l, i) => l.classList.toggle('done', i + 1 < step));
    currentStep = step;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < totalSteps) goTo(currentStep + 1);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) goTo(currentStep - 1);
    });
  });

  /* Submit */
  form.addEventListener('submit', e => {
    e.preventDefault();
    const panel = form.querySelector('.quote-panel.active');
    if (panel) {
      panel.innerHTML = `
        <div style="text-align:center;padding:48px 0">
          <div style="width:72px;height:72px;background:var(--teal-pale);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 style="margin-bottom:12px">Quote Request Received!</h2>
          <p style="color:var(--text-muted);margin-inline:auto">Our team will be in touch within 2 hours during business hours. We'll confirm availability and arrange your free site survey.</p>
          <a href="index.html" class="btn btn-primary" style="margin-top:32px">Back to Home</a>
        </div>
      `;
    }
  });

  goTo(1);
}

/* ============================================================
   LOCATIONS SEARCH
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('locationSearch');
  const countyBadges = document.querySelectorAll('.county-badge');
  if (!searchInput || !countyBadges.length) return;

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    countyBadges.forEach(badge => {
      const text = badge.textContent.toLowerCase();
      badge.style.opacity = (!q || text.includes(q)) ? '1' : '0.25';
    });
  });
});
