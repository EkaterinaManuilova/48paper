const leftMenuItems = [
  {
    link: "#",
    name: "Бейджи",
    count: "14",
    submenu: "",
    image: "/src/images/category.png",
  },
  {
    link: "#",
    name: "Бумаги и картон",
    count: "898",
    submenu: "true",
  },
  {
    link: "#",
    name: "Конверты",
    count: "10",
    submenu: "true",
  },
  {
    link: "#",
    name: "Коробки и пакеты",
    count: "42",
    submenu: "true",
  },
  {
    link: "#",
    name: "Магнитный винил",
    count: "14",
    submenu: "true",
  },
  {
    link: "#",
    name: "Материалы для календарей",
    count: "5",
    submenu: "true",
  },
  {
    link: "#",
    name: "Материалы для наружной рекламы",
    count: "95",
    submenu: "true",
  },
  {
    link: "#",
    name: "Материалы для офсетной печати",
    count: "10",
    submenu: "true",
  },
  {
    link: "#",
    name: "Материалы для переплета",
    count: "109",
    submenu: "true",
  },
  {
    link: "#",
    name: "Материалы для пигментной печати",
    count: "89",
    submenu: "",
  },
  {
    link: "#",
    name: "Материалы для ризографов",
    count: "3",
    submenu: "",
  },
  {
    link: "#",
    name: "Материалы для сублимации",
    count: "30",
    submenu: "",
  },
  {
    link: "#",
    name: "Материалы для шелкотрафаретной печати",
    count: "61",
    submenu: "",
  },
  {
    link: "#",
    name: "Оборудование",
    count: "151",
    submenu: "",
  },
  {
    link: "#",
    name: "Пленка для ламинирования",
    count: "26",
    submenu: "",
  },
  {
    link: "#",
    name: "Прочие товары",
    count: "49",
    submenu: "",
  },
  {
    link: "#",
    name: "Ручки для пакетов",
    count: "4",
    submenu: "",
  },
  {
    link: "#",
    name: "Сувенирная продукция",
    count: "4",
    submenu: "",
  },
  {
    link: "#",
    name: "Футболки, толстовки, бейсболки",
    count: "26",
    submenu: "",
  },
];

const leftMenuContainer = document.querySelector(".left-menu__navbar-list");
//загрузка левого меню
function loadLeftMenu(linkValue, nameValue, countValue, subMenu) {
  const leftMenuTemplate = document.querySelector(
    ".left-menu-item-template"
  ).content;

  const leftMenuElement = leftMenuTemplate
    .querySelector(".left-menu__navbar-item")
    .cloneNode(true);
  const leftMenuLink = leftMenuElement.querySelector(
    ".left-menu__navbar-link-first-level"
  );
  const leftMenuName = leftMenuElement.querySelector(".menu-item-name");
  const leftMenuCount = leftMenuElement.querySelector(".menu-item-count");
  const leftMenuSub = leftMenuElement.querySelector(".menu-arrow");

  leftMenuLink.setAttribute("href", linkValue);
  leftMenuName.textContent = nameValue;
  leftMenuCount.textContent = countValue;

  if (!subMenu) {
    leftMenuSub.removeAttribute("class", leftMenuSub);
  }

  leftMenuContainer.append(leftMenuElement);
}

leftMenuItems.forEach((element) => {
  loadLeftMenu(element.link, element.name, element.count, element.submenu);
});

const articleItems = [
  {
    name: "Как выбрать биговщик",
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: "#",
  },
  {
    name: "какая бумага лучше?",
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: "#",
  },
  {
    name: "печатаем на одежде без проблем",
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: "#",
  },
  {
    name: "Как выбрать ризограф?",
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: "#",
  },
  // {
  //   name: 'Как выбрать ризограф?',
  //   text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
  //   его можно было аккуратно сложить. В типографии устройства для
  //   биговки используются для нанесения бороздок на бумажные или
  //   картонные листы плотностью Биговка — это продавливание тонкой
  //   бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
  //   типографии устройства для биговки используются для нанесения
  //   бороздок на бумажные или картонные листы плотностью`,
  //   link: '#'
  // },
  // {
  //   name: 'Как выбрать ризограф?',
  //   text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
  //   его можно было аккуратно сложить. В типографии устройства для
  //   биговки используются для нанесения бороздок на бумажные или
  //   картонные листы плотностью Биговка — это продавливание тонкой
  //   бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
  //   типографии устройства для биговки используются для нанесения
  //   бороздок на бумажные или картонные листы плотностью`,
  //   link: '#'
  // }
];

const articlesContainer = document.querySelector(".articles__content");

//загрузка статей
function loadArticle(nameValue, textValue, linkValue) {
  const articleTemplate = document.querySelector(
    ".article-item-template"
  ).content;

  const articleElement = articleTemplate
    .querySelector(".article")
    .cloneNode(true);
  const articleLink = articleElement.querySelector(".article__link");
  const articleName = articleElement.querySelector(".article__title");
  const articleText = articleElement.querySelector(".article__text");

  articleLink.setAttribute("href", linkValue);
  articleName.textContent = nameValue;
  articleText.textContent = textValue;

  articlesContainer.append(articleElement);
}

articleItems.forEach((element) => {
  loadArticle(element.name, element.text, element.link);
});

//валидация формы подписки на раасылку
const formSub = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector(
  "#mail + span.subscribe-form__input-error"
);
const subscrButton = document.querySelector(".subscribe-form__button");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    email.className = "subscribe-form__input valid";
    emailError.textContent = "";
    emailError.className = "subscribe-form__input-error";
    subscrButton.className = "subscribe-form__button";
  } else {
    showError();
  }
});

formSub.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    event.preventDefault();
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Введите адрес электронной почты.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Не правильные данные";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email должен содержать ${email.minLength} символов.`;
  }
  email.className = "form__input invalid";
  emailError.className = "form__input-error active";
  subscrButton.classList.add("disabled");
  subscrButton.setAttribute("disabled", true);
}

//проверка номера телефона
function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

function mask(e) {
  //console.log('mask',e);
  var matrix = this.placeholder, // .defaultValue
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_";
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder
    ? i++
    : (i = matrix.indexOf("_"));
  setCursorPosition(i, this);
}
window.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#phone-input");
  input.addEventListener("input", mask, false);
  input.focus();
  setCursorPosition(3, input);
});

//открытие и закрытие попапа логина
const loginPopup = document.querySelector(".popup_type_login");
const loginCloseButton = loginPopup.querySelector(".button-login-close");

const personal = document.querySelector(".header__pesonal-profile");

personal.addEventListener("click", () => {
  openPopup(loginPopup);
});
loginCloseButton.addEventListener("click", () => {
  closePopup(loginPopup);
});

const closePopupOnEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

const closePopupClickOverlay = (evt) => {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
};
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("click", closePopupClickOverlay);
  document.addEventListener("keydown", closePopupOnEscape);
};
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("click", closePopupClickOverlay);
  document.removeEventListener("keydown", closePopupOnEscape);
};

//валидация формы логинаб пока только поле пароля

const pass = document.getElementById("password-input");

const passError = document.querySelector(
  "#password-input + span.form__input-error"
);

const loginButton = document.querySelector(".button_type_submit");

pass.addEventListener("input", function (event) {
  if (pass.validity.valid) {
    pass.className = "form__input valid";
    passError.textContent = "";
    passError.className = "form__input-error";
    loginButton.className = "button_type_submit";
    loginButton.classList.remove("disabled");
    loginButton.setAttribute("disabled", false);
  } else {
    showLogError();
  }
});

function showLogError() {
  if (pass.validity.valueMissing) {
    passError.textContent = "Введите пароль.";
  } else if (pass.validity.typeMismatch) {
    passError.textContent = "Не правильные данные";
  } else if (pass.validity.tooShort) {
    passError.textContent = `Пароль должен содержать минимум ${pass.minLength} символа.`;
  }

  pass.className = "form__input invalid";
  passError.className = "form__input-error active";

  loginButton.classList.add("disabled");
  loginButton.setAttribute("disabled", true);
}
