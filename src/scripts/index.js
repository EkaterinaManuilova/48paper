const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.subscribe-form__input-error');
// const subscrButton = document.querySelector('subscribe-form__button');

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    email.className = 'subscribe-form__input valid';
    emailError.textContent = '';
    emailError.className = 'subscribe-form__input-error';
    // subscrButton.className = 'subscribe-form__button';
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
    emailError.textContent = 'Не правильные данные';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email должен содержать ${ email.minLength } символов.`;
  }
  email.className = 'subscribe-form__input invalid';
  emailError.className = 'subscribe-form__input-error active';
  // subscrButton.className = 'subscribe-form__button disabled';
}