
const leftMenuItems = [
  {
      link: '#',
      name: 'Бейджи',
      count: '14',
      submenu: '',
  },
  {
      link: '#',
      name: 'Бумаги и картон',
      count: '898',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Конверты',
      count: '10',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Коробки и пакеты',
      count: '42',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Магнитный винил',
      count: '14',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Материалы для календарей',
      count: '5',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Материалы для наружной рекламы',
      count: '95',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Материалы для офсетной печати',
      count: '10',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Материалы для переплета',
      count: '109',
      submenu: 'true',
  },
  {
      link: '#',
      name: 'Материалы для пигментной печати',
      count: '89',
      submenu: '',
  },
  {
      link: '#',
      name: 'Материалы для ризографов',
      count: '3',
      submenu: '',
  },
  {
      link: '#',
      name: 'Материалы для сублимации',
      count: '30',
      submenu: '',
  },
  {
      link: '#',
      name: 'Материалы для шелкотрафаретной печати',
      count: '61',
      submenu: '',
  },
  {
      link: '#',
      name: 'Оборудование',
      count: '151',
      submenu: '',
  },
  {
      link: '#',
      name: 'Пленка для ламинирования',
      count: '26',
      submenu: '',
  },
  {
      link: '#',
      name: 'Прочие товары',
      count: '49',
      submenu: '',
  },
  {
      link: '#',
      name: 'Ручки для пакетов',
      count: '4',
      submenu: '',
  },
  {
      link: '#',
      name: 'Сувенирная продукция',
      count: '4',
      submenu: '',
  },
  {
      link: '#',
      name: 'Футболки, толстовки, бейсболки',
      count: '26',
      submenu: '',
  },
]

const leftMenuContainer = document.querySelector('.left-menu__navbar-list');
//загрузка левого меню
function loadLeftMenu(linkValue, nameValue, countValue, subMenu) {
  const leftMenuTemplate = document.querySelector('.left-menu-item-template').content;
  console.log(leftMenuTemplate);
  
  const leftMenuElement = leftMenuTemplate.querySelector('.left-menu__navbar-item').cloneNode(true);
  const leftMenuLink = leftMenuElement.querySelector('.left-menu__navbar-link-first-level');
  const leftMenuName = leftMenuElement.querySelector('.menu-item-name');
  const leftMenuCount = leftMenuElement.querySelector('.menu-item-count');
  const leftMenuSub = leftMenuElement.querySelector('.menu-arrow');


  leftMenuLink.setAttribute('href', linkValue);
  leftMenuName.textContent = nameValue;
  leftMenuCount.textContent = countValue;
  
  if (!subMenu) {
    leftMenuSub.removeAttribute('class', leftMenuSub)
  }


  leftMenuContainer.append(leftMenuElement);
}

leftMenuItems.forEach((element) => {
  loadLeftMenu(element.link, element.name, element.count, element.submenu);
});

const articleItems = [
  {
    name: 'Как выбрать биговщик',
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
    link: '#'
  },
  {
    name: 'какая бумага лучше?',
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: '#'
  },
  {
    name: 'печатаем на одежде без проблем',
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: '#'
  },
  {
    name: 'Как выбрать ризограф?',
    text: `Биговка — это продавливание тонкой бороздки на листе бумаги, чтобы
    его можно было аккуратно сложить. В типографии устройства для
    биговки используются для нанесения бороздок на бумажные или
    картонные листы плотностью Биговка — это продавливание тонкой
    бороздки на листе бумаги, чтобы его можно было аккуратно сложить. В
    типографии устройства для биговки используются для нанесения
    бороздок на бумажные или картонные листы плотностью`,
    link: '#'
  }
]

const articlesContainer = document.querySelector('.articles__content');

//загрузка статей
function loadArticle(nameValue, textValue, linkValue) {
  const articleTemplate = document.querySelector('.article-item-template').content;
  
  const articleElement = articleTemplate.querySelector('.article').cloneNode(true);
  const articleLink = articleElement.querySelector('.article__link');
  const articleName = articleElement.querySelector('.article__title');
  const articleText = articleElement.querySelector('.article__text');

  articleLink.setAttribute('href', linkValue);
  articleName.textContent = nameValue;
  articleText.textContent = textValue;

  articlesContainer.append(articleElement);
}

articleItems.forEach((element) => {
  loadArticle(element.name, element.text, element.link);
});



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

