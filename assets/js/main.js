const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

if (toggle && nav) {
  const setNavigationState = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    setNavigationState(!nav.classList.contains('open'));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavigationState(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNavigationState(false);
      toggle.focus();
    }
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const serviceRequestForm = document.getElementById('service-request-form');
if (serviceRequestForm) {
  const referenceField = document.getElementById('enquiry-reference');
  const submittedAtField = document.getElementById('submitted-at');
  const status = document.getElementById('form-status');
  const submitButton = document.getElementById('service-request-submit');
  const endpoint = (serviceRequestForm.dataset.formEndpoint || '').trim();

  const createReference = () => {
    const now = new Date();
    const stamp = [now.getUTCFullYear(), String(now.getUTCMonth() + 1).padStart(2, '0'), String(now.getUTCDate()).padStart(2, '0')].join('');
    const random = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `WEB-${stamp}-${random}`;
  };

  if (referenceField && !referenceField.value) referenceField.value = createReference();

  if (!endpoint) {
    serviceRequestForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (status) {
        status.textContent = 'Online submission is not active yet. Please contact Ahotosoɔ through the Contact page while the secure form endpoint is being configured.';
        status.classList.add('is-error');
      }
    });
  } else {
    if (status) {
      status.textContent = 'Secure online submission is available.';
      status.classList.add('is-ready');
    }
    serviceRequestForm.addEventListener('submit', () => {
      if (submittedAtField) submittedAtField.value = new Date().toISOString();
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting…';
      }
    });
  }
}
