function validateContactForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear all previous styles and errors
  [name, email, message].forEach(field => {
    field.classList.remove('input-error', 'input-success');
  });

  // Name validation
const namePattern = /^[A-Za-z\s'-]{2,}$/;

if (name.value.trim() === '') {
  showError(name, 'Name is required', 'name-error');
  isValid = false;
} else if (!namePattern.test(name.value.trim())) {
  showError(name, 'Enter a valid name (letters, spaces, - or \') only', 'name-error');
  isValid = false;
} else {
  name.classList.add('input-success');
}

  // Email validation
  if (email.value.trim() === '') {
    showError(email, 'Email is required', 'email-error');
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    showError(email, 'Invalid email format', 'email-error');
    isValid = false;
  } else {
    email.classList.add('input-success');
  }

  // Message validation
  if (message.value.trim() === '') {
    showError(message, 'Message is required', 'message-error');
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, 'Message must be at least 10 characters', 'message-error');
    isValid = false;
  } else {
    message.classList.add('input-success');
  }

  return isValid;
}

// On blur (real-time feedback)
document.getElementById('name').addEventListener('blur', function () {
  if (this.value.trim() === '') {
    showError(this, 'Name is required', 'name-error');
  } else {
    this.classList.remove('input-error');
    this.classList.add('input-success');
  }
});

document.getElementById('email').addEventListener('blur', function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (this.value.trim() === '') {
    showError(this, 'Email is required', 'email-error');
  } else if (!emailPattern.test(this.value)) {
    showError(this, 'Invalid email format', 'email-error');
  } else {
    this.classList.remove('input-error');
    this.classList.add('input-success');
  }
});

document.getElementById('message').addEventListener('blur', function () {
  if (this.value.trim() === '') {
    showError(this, 'Message is required', 'message-error');
  } else if (this.value.trim().length < 10) {
    showError(this, 'Message must be at least 10 characters', 'message-error');
  } else {
    this.classList.remove('input-error');
    this.classList.add('input-success');
  }
});

// Submission handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validateContactForm()) return;
  document.getElementById('time-input').value = new Date().toLocaleString();
  emailjs.sendForm('52mill5', 'template_94sqxtc', this)
    .then(function (response) {
      document.getElementById('form-response').style.color = 'limegreen';
      document.getElementById('form-response').innerText = '✅ Message sent successfully!';
    }, function (error) {
      document.getElementById('form-response').style.color = 'red';
      document.getElementById('form-response').innerText = '❌ Failed to send message. Please try again.';
      console.error('FAILED...', error);
    });

  this.reset();
});

function showError(input, message, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
  input.classList.remove('input-success');
  input.classList.add('input-error');

  setTimeout(() => {
    errorElement.innerText = '';
    input.classList.remove('input-error');
  }, 3000);
}


function toggleSidePanel() {
  const sidePanel = document.getElementById('side-panel');
  sidePanel.classList.toggle('minimized');
}