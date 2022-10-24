const headerText = `

<div class="header__top">
  <div class="header__top-content-wrapper">
    <div class="header__top-content">
      <address class="header__contacts">
        <p class="header__contacts-text">
          Владивосток, ул. Снеговая&nbsp;4
        </p>
        <p class="header__contacts-text">
          с&nbsp;9&nbsp;до&nbsp;18&nbsp;/ Пн.&mdash;Пт.
        </p>
        <p class="header__contacts-text">8 (423) 278-07-01</p>
        <p class="header__contacts-text">8 (423) 269-07-01</p>
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
  </div>
</div>

<div class="header__main">
  <div class="header__content">
    <a href="/src/index.html" class="logo"></a>
    <div class="header__inner-block">
      <div class="header__menu">
        <div class="header__menu-catalog-wrapper">
          <a href="/src/pages/catalog.html" class="header__menu-catalog-link">
            <div class="burger-menu-icon">
              <img
                class="burger-menu-icon-img"
                src="/src/images/burger-icon.svg"
                width="12"
                height="10"
              />
            </div>
            Каталог товаров</a
          >
        </div>
        <nav class="header__navigation">
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
        <div class="header__personal-block">
          <div class="header__personal-basket">
            <a href="#" class="header__personal-basket-link">
              <span class="circle">
                <img
                  class="basket-icon"
                  src="/src/images/basket.svg"
                  width="38"
                  height="32"
                />
              </span>
            </a>
            <span class="basket-count">45</span>
          </div>
          <div class="header__pesonal-profile">
            <div class="circle">
              <img
                class="user-icon"
                src="/src/images/user.svg"
                width="24"
                height="27"
              />
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
              <img
                src="/src/images/search-icon.svg"
                class="search-form__submit-icon"
                width="18"
                height="18"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
`;

function setHeader() {
  const header = document.createElement("header");
  header.innerHTML = headerText;
  header.className = "header";
  document.body.insertAdjacentElement("afterbegin", header);
}

setHeader();
