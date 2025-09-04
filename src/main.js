document.querySelector('.contact__form').addEventListener('submit', (e) => {
  e.preventDefault();

  /* Reset errors */
  document.querySelectorAll('.contact__form-error').forEach((error) => {
    error.textContent = '';
  });

  let isValid = true;

  const firstName = document.getElementById('firstName').value.trim();
  if (!firstName) {
    document.getElementById('first-name-error').textContent =
      'Please enter your first name.';
    isValid = false;
  }

  const lastName = document.getElementById('lastName').value.trim();
  if (!lastName) {
    document.getElementById('last-name-error').textContent =
      'Please enter your last name.';
    isValid = false;
  }

  const queryType = document.querySelector('input[name="queryType"]:checked');
  if (!queryType) {
    document.getElementById('query-type-error').textContent =
      'Please select a query type.';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted!');
  }
});
