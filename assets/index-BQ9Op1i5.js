// ===== Icon definitions =====
const S = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-down-right": '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>',
  "badge-check": '<path d="M12 3l2.2 1.4 2.6.1.8 2.5 1.9 1.8-1 2.4.3 2.6-2.1 1.6-1.2 2.4-2.6-.3L12 19l-2.3 1.4-2.6-.5-.9-2.4-1.9-1.8 1-2.4-.3-2.6 2.1-1.6 1.2-2.4 2.6.3z"/><path d="m9 12 2 2 4-4"/>',
  "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  handshake: '<path d="m11 17 2 2a2 2 0 0 0 3-3"/><path d="m14 14 4 4a2 2 0 0 0 3-3l-7-7-3 1"/><path d="m3 11 5-5 4 1 2-1 3 3"/><path d="m4 10-2 2 5 5a2 2 0 0 0 3-3"/><path d="m8 13 4 4"/><path d="m12 9-3 3"/>',
  "shield-check": '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15 14c.5-.5 2-1.4 2-4a5 5 0 0 0-10 0c0 2.6 1.5 3.5 2 4 .5.5 1 1 1 2h4c0-1 .5-1.5 1-2Z"/>',
  "circle-dollar": '<circle cx="12" cy="12" r="9"/><path d="M16 8.5c-.7-.8-1.8-1.2-3-1.2-1.7 0-3 .8-3 2s1 1.8 3 2.2 3 .9 3 2.2-1.3 2.2-3 2.2c-1.3 0-2.5-.5-3.2-1.4"/><path d="M12 5.5v13"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M8 9v.01M8 12v.01M8 15v.01M8 18v.01M16 14v.01M16 17v.01"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  megaphone: '<path d="m3 11 18-5v12L3 13v-2Z"/><path d="M11.6 14.4 14 21h-4l-2-7"/><path d="M7 14v4"/>',
  chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/><path d="M15 9h4v4"/>',
  store: '<path d="m2 9 2-6h16l2 6"/><path d="M4 9v12h16V9"/><path d="M9 21v-7h6v7"/><path d="M2 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>',
  utensils: '<path d="M7 3v7"/><path d="M10 3v7"/><path d="M7 7h3"/><path d="M8.5 10v11"/><path d="M17 3c-2 2-3 4.5-3 7v1h4V3"/><path d="M16 11v10"/>',
  briefcase: '<rect x="3" y="7" width="18" height="14" rx="1"/><path d="M8 7V4h8v3"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.5 5.9-5.9 2.5 2.5-5.9 5.9-2.5Z"/>',
  "lock-keyhole": '<rect x="4" y="10" width="16" height="11" rx="1"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/><circle cx="12" cy="15" r="1.2"/><path d="M12 16.2V18"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="1"/><path d="m22 7-10 6L2 7"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>'
};

const d = (e, n = "") =>
  `<svg class="${n}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${S[e] ?? ""}</svg>`;

document.querySelectorAll("[data-icon]").forEach(el => {
  el.innerHTML = d(el.dataset.icon);
});

// ===== Service grid =====
const w = [
  ["lightbulb", "Business Ideation", "Translate local demand and your strengths into a concept with a credible path to market."],
  ["circle-dollar", "Investment Strategy", "Align available capital with the right opportunity, structure and measured risk."],
  ["building", "Operational Setup", "Build the operating model, vendor relationships and systems required to open well."],
  ["users", "Hiring & Team Building", "Define key roles and connect your plan to capable people who can deliver."],
  ["megaphone", "Marketing & Branding", "Establish a clear market position and a practical plan to earn local attention."],
  ["chart", "Ongoing Advisory", "Stay close through launch and growth with disciplined decision support."]
];
const serviceGrid = document.querySelector("#service-grid");
if (serviceGrid) {
  serviceGrid.innerHTML = w.map(([icon, title, body]) =>
    `<article class="service-card">${d(icon, "service-icon")}<h3>${title}</h3><p>${body}</p></article>`
  ).join("");
}

// ===== Industry grid + category dropdown =====
const M = [
  ["Tea Shop", "store"],
  ["Tiffin Centre", "utensils"],
  ["Fast Food", "utensils"],
  ["Bakery", "briefcase"],
  ["Cloud Kitchen", "building"],
  ["Mini Supermarket", "store"],
  ["Ice Cream Shop", "lightbulb"],
  ["Other Business", "compass"]
];

const industryGrid = document.querySelector("#industry-grid");
if (industryGrid) {
  industryGrid.innerHTML = M.map(([name, icon]) =>
    `<div class="industry">${d(icon)}<span>${name}</span></div>`
  ).join("");
}

const L = document.querySelector("#category");
if (L) {
  M.forEach(([name]) => {
    const opt = document.createElement("option");
    opt.textContent = name;
    L.append(opt);
  });
}

const yearEl = document.querySelector("#current-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Mobile menu =====
const a = document.querySelector("#menu-toggle");
const u = document.querySelector("#mobile-menu");

if (a && u) {
  const h = (open) => {
    a.setAttribute("aria-expanded", String(open));
    a.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    u.setAttribute("aria-hidden", String(!open));
    u.inert = !open;
    u.classList.toggle("is-open", open);
    a.innerHTML = d(open ? "close" : "menu");
  };

  a.addEventListener("click", () => h(a.getAttribute("aria-expanded") !== "true"));
  u.querySelectorAll("a").forEach(link => link.addEventListener("click", () => h(false)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && a.getAttribute("aria-expanded") === "true") {
      h(false);
      a.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) h(false);
  });
}

// ===== Consultation form (Web3Forms) =====
(function () {
  const form        = document.getElementById('consultation-form');
  const formView    = document.getElementById('form-view');
  const successView = document.getElementById('form-success');
  const errorBox    = document.getElementById('form-error');
  const submitBtn   = document.getElementById('submit-button');
  const newEnquiry  = document.getElementById('new-enquiry');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.hidden = true;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      const json = await res.json();
      console.log('Web3Forms response:', json);

      if (res.ok && json.success) {
        form.reset();
        formView.hidden = true;
        successView.hidden = false;
        successView.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        throw new Error(json.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      errorBox.textContent = err.message || 'Network error. Please try again.';
      errorBox.hidden = false;
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalLabel;
    }
  });

  if (newEnquiry) {
    newEnquiry.addEventListener('click', () => {
      form.reset();
      successView.hidden = true;
      formView.hidden = false;
      formView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
})();