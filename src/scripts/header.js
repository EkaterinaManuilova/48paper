const headerText = `
<div class="header__top">
      <address class="header__contacts">
        <p class="header__contacts-text">Владивосток, ул. Снеговая&nbsp;4</p>
        <p class="header__contacts-text">
          с&nbsp;9&nbsp;до&nbsp;18&nbsp;/ Пн.&mdash;Пт.
        </p>
        <p class="header__contacts-text">8 (423) 278-07-01 8 (423) 269-07-01</p>
      </address>
      <div class="header__com-link-container">
        <div class="header__com-link-devider"></div>
        <div class="header__com-link-content">
          <a href="http://www.48chasov.com/" class="header__com-link-item"
            >перейти на&nbsp;48chasov.com</a
          >
        </div>
      </div>
    </div>
    <div class="header__main">
      <div class="header__content">
        <a href="/src/index.html" class="logo"></a>
        <div class="header__inner-block">
          <div class="header__menu">
            <div class="header__menu-catalog-wrapper header__menu-item">
              <a
                href="/src/pages/catalog.html"
                class="header__menu-catalog-link"
              >
                <div class="burger-menu-icon"></div>
                Каталог товаров</a
              >
            </div>
            <nav class="header__navigation header__menu-item">
              <ul class="header__navigation-list">
                <li class="header__navigation-item">
                  <a href="#" class="header__navigation-link">Статьи</a>
                </li>
                <li class="header__navigation-item">
                  <a href="#" class="header__navigation-link">О компании</a>
                </li>
                <li class="header__navigation-item">
                  <a href="#" class="header__navigation-link">Контакты</a>
                </li>
                <li class="header__navigation-item">
                  <a href="#" class="header__navigation-link">Как купить</a>
                </li>
                <li class="header__navigation-item">
                  <a href="#" class="header__navigation-link">Доставка</a>
                </li>
                <li class="header__navigation-item">
                  <a href="#" class="header__navigation-link">Вопрос-ответ</a>
                </li>
              </ul>
            </nav>
            <div class="header__personal-block header__menu-item">
              <div class="header__personal-basket">
                <a href="#" class="header__personal-basket-link">
                  <span class="circle">
                    <div class="basket-icon"></div>
                  </span>
                </a>
                <span class="basket-count">45</span>
              </div>
              <div class="header__pesonal-profile">
                <div class="circle">
                  <div class="user-icon"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="header__search-block">
            <form class="search-form" name="searchForm">
              <div class="search-form__container">
                <input
                  class="search-form__input"
                  type="text"
                  placeholder="воспользуйтесь поиском, например: крафт-конверты"
                  required
                  autocomplete="off"
                />
                <button type="submit" class="search-form__submit">
                  <div class="search-form__submit-icon"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`;

 function setHeader() {
  const container = document.querySelector(".page-container");
  const header = document.createElement("header");
  header.innerHTML = headerText;
  header.className = "header";
  container.insertAdjacentElement("afterbegin", header);
}

setHeader();
