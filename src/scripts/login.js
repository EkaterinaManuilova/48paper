const loginPopupText = `
<div class="popup popup_type_login">
      <div class="popup__container">
        <button type="button" class="btn button-login-close"></button>
        <h2 class="popup__title">Вход в кабинет</h2>
        <form
          id="loginForm"
          class="form form_type_login"
          name="loginForm"
          novalidate
        >
          <div class="form__content">
            <label class="form__field">
              <span class="form-input-name">Номер телефона</span>
              <input
                class="form__input form__input_name_phone"
                type="tel"
                name="phone"
                id="phone-input"
                maxlength="50"
                autofocus="autofocus"
                required="required"
                value="+7(___)___-__-__"
                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                placeholder="+7(___)___-__-__"
              />
              <span
                class="form__input-error phone-input-error"
                id="phone-input-error"
              ></span>
            </label>
            <label class="form__field">
              <span class="form-input-name">Пароль</span>
              <input
                class="form__input form__input_name_password"
                type="password"
                name="password"
                id="password-input"
                minlength="4"
                maxlength="10"
                autocomplete="off"
                required
              />
              <span
                class="form__input-error password-input-error"
                id="password-input-error"
              ></span>
            </label>
          </div>
          <div class="form-res">
            <a href="#" class="forgot-link">Забыли пароль?</a>
            <button type="submit" class="btn button_type_submit">Войти</button>
          </div>
        </form>
      </div>
    </div>
`
function setLoginPopup() {
    const loginPopup = document.createElement("div");
    loginPopup.innerHTML = loginPopupText;
    loginPopup.className = "popup popup_type_login";
    document.body.insertAdjacentElement("afterbegin", loginPopup);
  }
  
  setLoginPopup();