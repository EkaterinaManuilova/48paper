const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.subscribe-form__input-error');

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'subscribe-form__input-error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {
  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'Введите адрес электронной почты.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Введенные данные не являются электронной почтой.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email должен содержать ${ email.minLength } символов; Вы ввели ${ email.value.length }.`;
  }
  emailError.className = 'subscribe-form__input-error active';
}