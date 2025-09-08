const modalEl = document.getElementById('successModal');

modalEl.addEventListener('click', (e) => {
  modalEl.style.display = 'none';
});

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const emailEl = document.getElementById('email');
const messageEl = document.getElementById('message');
const consentEl = document.getElementById('consent');

const contactFormEl = document.querySelector('.contact__form');

contactFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  /* Reset errors */
  document.querySelectorAll('.contact__form-error').forEach((error) => {
    error.textContent = '';
  });

  /* Reset classes */
  document.querySelectorAll('.contact__form-input').forEach((input) => {
    input.classList.remove('contact__form-input--error');
  });

  /* Reset classes for textarea */
  document.querySelectorAll('.contact__form-textarea').forEach((textarea) => {
    textarea.classList.remove('contact__form-textarea--error');
  });

  let isValid = true;

  const firstName = firstNameEl.value.trim();
  if (!firstName) {
    document
      .getElementById('firstName')
      .classList.add('contact__form-input--error');
    document.getElementById('first-name-error').textContent =
      'This field is required';
    isValid = false;
  }

  const lastName = lastNameEl.value.trim();
  if (!lastName) {
    document
      .getElementById('lastName')
      .classList.add('contact__form-input--error');
    document.getElementById('last-name-error').textContent =
      'This field is required';
    isValid = false;
  }

  const email = emailEl.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document
      .getElementById('email')
      .classList.add('contact__form-input--error');
    document.getElementById('email-error').textContent =
      'This field is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document
      .getElementById('email')
      .classList.add('contact__form-input--error');
    document.getElementById('email-error').textContent =
      'Please enter a valid email address';
    isValid = false;
  }

  const queryType = document.querySelector('input[name="queryType"]:checked');
  if (!queryType) {
    document.getElementById('query-type-error').textContent =
      'Please select a query type';
    isValid = false;
  }

  const message = messageEl.value.trim();
  if (!message) {
    document
      .getElementById('message')
      .classList.add('contact__form-textarea--error');
    document.getElementById('message-error').textContent =
      'This field is required';
    isValid = false;
  }

  const consent = consentEl.checked;
  if (!consent) {
    document.getElementById('consent-error').textContent =
      'To submit this form, please consent to being contacted';
    isValid = false;
  }

  if (isValid) {
    modalEl.style.display = 'flex';

    contactFormEl.reset();

    setTimeout(() => {
      modalEl.style.display = 'none';
    }, 3000);
  }
});
