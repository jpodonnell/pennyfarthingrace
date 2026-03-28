/* ============================================================
   Ohio High Wheel Race — main.js
   ============================================================ */

/* --- Shared Header HTML --- */
const HEADER_HTML = `
<header id="site-header">
  <div class="header-inner">
    <a href="index.html" class="header-logo" aria-label="Ohio High Wheel Race Home">
      <svg viewBox="0 0 112 82" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!--
          Front large wheel (cx=44,cy=46,r=32), rear small wheel almost touching (cx=94,cy=64,r=14)
          Fork nearly vertical. Backbone tight curve from fork crown to rear axle.
        -->
        <!-- Speed lines -->
        <line x1="2"  y1="38" x2="11" y2="38" stroke="#B87333" stroke-width="2"   stroke-linecap="round"/>
        <line x1="2"  y1="46" x2="11" y2="46" stroke="#B87333" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="2"  y1="54" x2="11" y2="54" stroke="#B87333" stroke-width="1.5" stroke-linecap="round"/>
        <!-- Large front wheel -->
        <g class="wheel-anim">
          <circle cx="44" cy="46" r="32" stroke="#B87333" stroke-width="2" fill="none"/>
          <line x1="44" y1="14" x2="44" y2="78" stroke="#B87333" stroke-width="1" opacity="0.55"/>
          <line x1="12" y1="46" x2="76" y2="46" stroke="#B87333" stroke-width="1" opacity="0.55"/>
          <line x1="21" y1="23" x2="67" y2="69" stroke="#B87333" stroke-width="1" opacity="0.55"/>
          <line x1="67" y1="23" x2="21" y2="69" stroke="#B87333" stroke-width="1" opacity="0.55"/>
          <circle cx="44" cy="46" r="4" fill="#B87333"/>
          <!-- Pedal cranks -->
          <line x1="44" y1="46" x2="37" y2="53" stroke="#B87333" stroke-width="2" stroke-linecap="round"/>
          <line x1="37" y1="53" x2="33" y2="50" stroke="#B87333" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="44" y1="46" x2="51" y2="39" stroke="#B87333" stroke-width="2" stroke-linecap="round"/>
          <line x1="51" y1="39" x2="55" y2="42" stroke="#B87333" stroke-width="1.8" stroke-linecap="round"/>
        </g>
        <!-- Small rear wheel (almost touching front wheel) -->
        <g class="wheel-anim" style="animation-duration:3.6s">
          <circle cx="94" cy="64" r="14" stroke="#B87333" stroke-width="1.8" fill="none"/>
          <line x1="94" y1="50" x2="94" y2="78" stroke="#B87333" stroke-width="0.9" opacity="0.55"/>
          <line x1="80" y1="64" x2="108" y2="64" stroke="#B87333" stroke-width="0.9" opacity="0.55"/>
          <line x1="84" y1="54" x2="104" y2="74" stroke="#B87333" stroke-width="0.9" opacity="0.55"/>
          <line x1="104" y1="54" x2="84"  y2="74" stroke="#B87333" stroke-width="0.9" opacity="0.55"/>
          <circle cx="94" cy="64" r="2.5" fill="#B87333"/>
        </g>
        <!-- Fork: nearly vertical, fork crown to front axle -->
        <line x1="42" y1="14" x2="44" y2="46" stroke="#B87333" stroke-width="2.2" stroke-linecap="round"/>
        <!-- Backbone: tight curve from fork crown sweeping to rear axle -->
        <path d="M 42,14 C 56,30 76,52 94,64" stroke="#B87333" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <!-- Seat post -->
        <line x1="51" y1="24" x2="50" y2="13" stroke="#B87333" stroke-width="2" stroke-linecap="round"/>
        <!-- Saddle -->
        <path d="M 43,12 C 47,9 54,9 58,12" stroke="#B87333" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <!-- Handlebar stem -->
        <line x1="42" y1="14" x2="41" y2="5" stroke="#B87333" stroke-width="2" stroke-linecap="round"/>
        <!-- Handlebars -->
        <path d="M 34,6 C 36,4 39,5 41,5 L 43,5 C 45,5 48,4 50,6" stroke="#B87333" stroke-width="2" fill="none" stroke-linecap="round"/>
        <!-- Rider head -->
        <circle cx="53" cy="7" r="5" stroke="#B87333" stroke-width="1.8" fill="none"/>
        <!-- Torso -->
        <line x1="53" y1="12" x2="51" y2="11" stroke="#B87333" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Arms to handlebars -->
        <line x1="53" y1="9"  x2="41" y2="5"  stroke="#B87333" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
      <div class="header-logo-text">
        Ohio High Wheel Race
        <span>Plain City &middot; 2026</span>
      </div>
    </a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav>
      <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="racerregistration.html">Registration</a></li>
        <li><a href="registered-racers.html">Racers</a></li>
        <li><a href="info.html">Info &amp; Directions</a></li>
        <li><a href="volunteer.html">Volunteer</a></li>
        <li><a href="sponsors.html">Sponsors</a></li>
      </ul>
    </nav>
  </div>
</header>
`;

/* --- Shared Footer HTML --- */
const FOOTER_HTML = `
<footer id="site-footer">
  <div class="footer-inner">
    <div class="footer-col">
      <h4>Contact</h4>
      <a href="mailto:info@highwheelraceohio.com">info@highwheelraceohio.com</a>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="racerregistration.html">Racer Registration</a>
      <a href="registered-racers.html">Registered Racers</a>
      <a href="info.html">Info &amp; Directions</a>
      <a href="volunteer.html">Volunteer</a>
      <a href="sponsors.html">Sponsors</a>
    </div>
    <div class="footer-col">
      <h4>Related Events</h4>
      <a href="https://www.theclocktowerkitchenandbar.com/" target="_blank" rel="noopener noreferrer">The Clock Tower Kitchen &amp; Bar ↗</a>
      <a href="https://www.plaincityohio.gov/residents/corncarnival2026.php" target="_blank" rel="noopener noreferrer">Plain City Corn Carnival 2026 ↗</a>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; 2026 Ohio High Wheel Race &mdash; Plain City, Ohio
  </div>
</footer>
`;

/* --- Inject Header & Footer --- */
function injectLayout() {
  // Header
  const headerSlot = document.getElementById('header-slot');
  if (headerSlot) headerSlot.outerHTML = HEADER_HTML;

  // Footer
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
}

/* --- Set Active Nav Link --- */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- Mobile Nav Toggle --- */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen.toString());
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- Registration Form (Formspree) --- */
function initRegistrationForm() {
  const form = document.getElementById('registration-form');
  if (!form) return;

  const successMsg = document.getElementById('form-success');
  const errorMsg   = document.getElementById('form-error');
  const submitBtn  = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic validation
    const waiver = form.querySelector('#waiver');
    if (waiver && !waiver.checked) {
      errorMsg.textContent = 'Please agree to the rules and waiver before submitting.';
      errorMsg.style.display = 'block';
      return;
    }

    errorMsg.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
        window.scrollTo({ top: successMsg.offsetTop - 100, behavior: 'smooth' });
      } else {
        const json = await response.json();
        const msg = (json.errors || []).map(e => e.message).join(', ') || 'Submission failed. Please try again.';
        errorMsg.textContent = msg;
        errorMsg.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Register for the Race';
      }
    } catch (err) {
      errorMsg.textContent = 'Network error. Please check your connection and try again.';
      errorMsg.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Register for the Race';
    }
  });
}

/* --- Ride Sign-Up Forms --- */
function initRideForm(formId, successId, errorId, btnLabel) {
  const form = document.getElementById(formId);
  if (!form) return;

  const successMsg = document.getElementById(successId);
  const errorMsg   = document.getElementById(errorId);
  const submitBtn  = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const reqCheck = form.querySelector('input[type="checkbox"][name="requirements_confirmed"]');
    if (reqCheck && !reqCheck.checked) {
      errorMsg.textContent = 'Please confirm you will have a helmet and your own penny farthing.';
      errorMsg.style.display = 'block';
      return;
    }

    errorMsg.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
      } else {
        const json = await response.json();
        const msg = (json.errors || []).map(e => e.message).join(', ') || 'Submission failed. Please try again.';
        errorMsg.textContent = msg;
        errorMsg.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = btnLabel;
      }
    } catch (err) {
      errorMsg.textContent = 'Network error. Please check your connection and try again.';
      errorMsg.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = btnLabel;
    }
  });
}

/* --- Racer Bio Form --- */
function initBioForm() {
  const form = document.getElementById('bio-form');
  if (!form) return;

  const successMsg = document.getElementById('bio-success');
  const errorMsg   = document.getElementById('bio-error');
  const submitBtn  = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    errorMsg.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
        window.scrollTo({ top: successMsg.offsetTop - 100, behavior: 'smooth' });
      } else {
        const json = await response.json();
        const msg = (json.errors || []).map(e => e.message).join(', ') || 'Submission failed. Please try again.';
        errorMsg.textContent = msg;
        errorMsg.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Racer Bio';
      }
    } catch (err) {
      errorMsg.textContent = 'Network error. Please check your connection and try again.';
      errorMsg.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Racer Bio';
    }
  });
}

/* --- Smooth scroll for anchor links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  setActiveNav();
  initMobileNav();
  initRegistrationForm();
  initRideForm('form-40', 'success-40', 'error-40', 'Sign Up for 40-Mile Ride');
  initRideForm('form-21', 'success-21', 'error-21', 'Sign Up for 21-Mile Ride');
  initBioForm();
  initSmoothScroll();
});
