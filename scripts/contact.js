document.addEventListener('DOMContentLoaded', () => {
  // Get references to the form elements
  const nameInput = document.getElementById('name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const phoneNumberInput = document.getElementById('phone-number');
  const messageTextarea = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const formErrorMessage = document.getElementById('form-error-message');

  // Load data from localStorage
  const savedData = JSON.parse(localStorage.getItem('contactFormData'));
  if (savedData) {
    nameInput.value = savedData.name || '';
    lastNameInput.value = savedData.lastName || '';
    emailInput.value = savedData.email || '';
    phoneNumberInput.value = savedData.phoneNumber || '';
    messageTextarea.value = savedData.message || '';
  }

  // Function to save data to localStorage
  function saveToLocalStorage() {
    const formData = {
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value.toLowerCase(), // Convert to lowercase before saving
      phoneNumber: phoneNumberInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }

  // Real-time validation functions with error messages
  function validateName() {
    const name = nameInput.value.trim();
    if (name.length > 0 && name.length <= 30) {
      nameInput.classList.add('valid');
      nameInput.classList.remove('invalid');
      document
        .getElementById('name-feedback')
        .classList.remove('error', 'hidden');
      document.getElementById('name-feedback').textContent = 'Name looks good!';
      document.getElementById('name-feedback').classList.add('success');
    } else if (name.length > 30) {
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      document
        .getElementById('name-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('name-feedback').textContent = 'Name cant be more than 30 characters.';
      document.getElementById('name-feedback').classList.add('error');
    } else if (name.length > 0) {
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      document
        .getElementById('name-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('name-feedback').textContent = 'Name must be between 1 and 30 characters.';
      document.getElementById('name-feedback').classList.add('error');
    } else {
      nameInput.classList.remove('valid', 'invalid');
      document.getElementById('name-feedback').classList.add('hidden');
    }
  }

  function validateLastName() {
    const lastName = lastNameInput.value.trim();
    if (lastName.length >= 4) {
      lastNameInput.classList.add('valid');
      lastNameInput.classList.remove('invalid');
      document
        .getElementById('last-name-feedback')
        .classList.remove('error', 'hidden');
      document.getElementById('last-name-feedback').textContent = 'Last name looks good!';
      document.getElementById('last-name-feedback').classList.add('success');
    } else if (lastName.length > 0) {
      lastNameInput.classList.add('invalid');
      lastNameInput.classList.remove('valid');
      document
        .getElementById('last-name-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('last-name-feedback').textContent =
        'Last name must be at least 4 characters.';
      document.getElementById('last-name-feedback').classList.add('error');
    } else {
      lastNameInput.classList.remove('valid', 'invalid');
      document.getElementById('last-name-feedback').classList.add('hidden');
    }
  }

  function validateEmail() {
    const email = emailInput.value.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value !== email) {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      document
        .getElementById('email-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('email-feedback').textContent = 'Please use lowercase letters for the email address.';
      document.getElementById('email-feedback').classList.add('error');
      return;
    }
    if (emailRegex.test(email)) {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      document
        .getElementById('email-feedback')
        .classList.remove('error', 'hidden');
      document.getElementById('email-feedback').textContent = 'Email looks good!';
      document.getElementById('email-feedback').classList.add('success');
    } else {
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      document
        .getElementById('email-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('email-feedback').textContent = 'Please enter a valid email address.';
      document.getElementById('email-feedback').classList.add('error');
    }
  }

  function validatePhoneNumber() {
    const phoneNumber = phoneNumberInput.value.trim();
    if (phoneNumber.length === 10 && /^\d{10}$/.test(phoneNumber)) {
      phoneNumberInput.classList.add('valid');
      phoneNumberInput.classList.remove('invalid');
      document
        .getElementById('phone-number-feedback')
        .classList.remove('error', 'hidden');
      document.getElementById('phone-number-feedback').textContent = 'Phone number looks good!';
      document.getElementById('phone-number-feedback').classList.add('success');
    } else if (phoneNumber.length > 0) {
      phoneNumberInput.classList.add('invalid');
      phoneNumberInput.classList.remove('valid');
      document
        .getElementById('phone-number-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('phone-number-feedback').textContent = 'Phone number must be exactly 10 digits.';
      document.getElementById('phone-number-feedback').classList.add('error');
    } else {
      phoneNumberInput.classList.remove('valid', 'invalid');
      document.getElementById('phone-number-feedback').classList.add('hidden');
    }
  }

  function validateMessage() {
    const message = messageTextarea.value.trim();
    if (message.length > 0 && message.length <= 500) {
      messageTextarea.classList.add('valid');
      messageTextarea.classList.remove('invalid');
      document
        .getElementById('message-feedback')
        .classList.remove('error', 'hidden');
      document.getElementById('message-feedback').textContent = 'Message looks good!';
      document.getElementById('message-feedback').classList.add('success');
    } else if (message.length > 500) {
      messageTextarea.classList.add('invalid');
      messageTextarea.classList.remove('valid');
      document
        .getElementById('message-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('message-feedback').textContent = 'Message cannot be more than 500 characters.';
      document.getElementById('message-feedback').classList.add('error');
    } else if (message.length === 0) {
      messageTextarea.classList.add('invalid');
      messageTextarea.classList.remove('valid');
      document
        .getElementById('message-feedback')
        .classList.remove('success', 'hidden');
      document.getElementById('message-feedback').textContent = 'Message cannot be empty.';
      document.getElementById('message-feedback').classList.add('error');
    } else {
      messageTextarea.classList.remove('valid', 'invalid');
      document.getElementById('message-feedback').classList.add('hidden');
    }
  }

  // Validate all fields on input
  nameInput.addEventListener('input', () => {
    validateName();
    saveToLocalStorage();
  });

  lastNameInput.addEventListener('input', () => {
    validateLastName();
    saveToLocalStorage();
  });

  emailInput.addEventListener('input', () => {
    validateEmail();
    saveToLocalStorage();
  });

  phoneNumberInput.addEventListener('input', () => {
    validatePhoneNumber();
    saveToLocalStorage();
  });

  messageTextarea.addEventListener('input', () => {
    validateMessage();
    saveToLocalStorage();
  });

  // Form submission
  submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    // Validate all fields
    validateName();
    validateLastName();
    validateEmail();
    validatePhoneNumber();
    validateMessage();

    // Check if all fields are valid
    const isValid = nameInput.classList.contains('valid')
      && lastNameInput.classList.contains('valid')
      && emailInput.classList.contains('valid')
      && phoneNumberInput.classList.contains('valid')
      && messageTextarea.classList.contains('valid');

    if (!isValid) {
      formErrorMessage.textContent = 'Please fix the errors above.';
      formErrorMessage.classList.add('error');
      return;
    }

    // Clear the error message
    formErrorMessage.textContent = '';
    formErrorMessage.classList.remove('error');

    const name = nameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const phoneNumber = phoneNumberInput.value.trim();
    const message = messageTextarea.value.trim();

    const formData = {
      name,
      lastName,
      email,
      phoneNumber,
      message,
    };

    try {
      const response = await fetch('https://formspree.io/f/xyzgkjne', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        formErrorMessage.textContent = 'Form submitted successfully!';
        formErrorMessage.classList.remove('error');
        formErrorMessage.classList.add('success');

        // Clear local storage and form fields
        localStorage.removeItem('contactFormData');
        nameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        phoneNumberInput.value = '';
        messageTextarea.value = '';

        // Clear feedback messages
        document.querySelectorAll('.feedback').forEach((feedback) => {
          feedback.classList.add('hidden');
        });
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      formErrorMessage.textContent = error.message;
      formErrorMessage.classList.add('error');
      formErrorMessage.classList.remove('success');
    }
  });

  // Validate fields on blur
  nameInput.addEventListener('blur', validateName);
  lastNameInput.addEventListener('blur', validateLastName);
  emailInput.addEventListener('blur', validateEmail);
  phoneNumberInput.addEventListener('blur', validatePhoneNumber);
  messageTextarea.addEventListener('blur', validateMessage);
});
