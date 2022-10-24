const footerText = `
<div class="footer__container">
  <div class="footer__left-block">
    <a href="/src/index.html" class="logo footer__logo"></a>
    <div class="social">
      <div class="social__vk"></div>
      <div class="social__inst"></div>
      <div class="social__wapp"></div>
    </div>
    <div class="statistic"></div>
    <div class="copyright">
      <p class="copyright__text">
        2010-2018 &copy; Магазин бумаги 48Paper
      </p>
    </div>
  </div>
  <div class="footer__content">
    <div class="footer__top-block">
      <div class="catalog">
      <a class="catalog-link"  href="/src/pages/catalog.html">
      <h2 class="catalog__title">Продукция</h2>
    </a>
       
        <div class="catalog__columns">
          <ul class="catalog-list">
            <li class="catalog-item">Бейджи</li>
            <li class="catalog-item">Бумага и картон</li>
            <li class="catalog-item">Для деколи</li>
            <li class="catalog-item">Конверты</li>
            <li class="catalog-item">Коробки и пакеты</li>
            <li class="catalog-item">Магнитный винил</li>
            <li class="catalog-item">Материалы для календарей</li>
            <li class="catalog-item">Материалы для наружной рекламы</li>
            <li class="catalog-item">Материалы для офсетной печати</li>
            <li class="catalog-item">Материалы для переплета</li>
            <li class="catalog-item">Материалы для пигментной печати</li>
            <li class="catalog-item">Материалы для ризографов</li>
            <li class="catalog-item">Материалы для сублимации</li>
            <li class="catalog-item">
              Материалы для шелкотрафаретной печати
            </li>
            <li class="catalog-item">Оборудование</li>
            <li class="catalog-item">Пленка для ламинирования</li>
            <li class="catalog-item">Прочие товары</li>
            <li class="catalog-item">Ручки для пакетов</li>
            <li class="catalog-item">Сувенирная продукция</li>
            <li class="catalog-item">Футболки, толстовки, бейсболки</li>
          </ul>
        </div>
      </div>
      <div class="market">
        <h2 class="market__title">Магазин</h2>
        <div class="market__column">
          <ul class="market-list">
            <li class="market-item">Статьи</li>
            <li class="market-item">О компании</li>
            <li class="market-item">Контакты</li>
            <li class="market-item">Как купить</li>
            <li class="market-item">Доставка</li>
          </ul>
        </div>
        <div class="tipografy">
          <a href="" class="tipografy__link">48 Типография</a>
        </div>
      </div>
      <div class="info">
        <address class="footer__contacts">
          <div class="footer__contacts-info">
            <p class="footer__contacts-info-text">
              Владивосток, ул. Снеговая&nbsp;4
            </p>
            <p class="footer__contacts-info-text">
              с&nbsp;9&nbsp;до&nbsp;18&nbsp;/ Пн.&mdash;Пт.
            </p>
          </div>
          <div class="footer__contacts-phones">
            <p class="footer__contacts-phones-text">8 (423) 278-07-01</p>
            <p class="footer__contacts-phones-text">8 (423) 269-07-01</p>
          </div>
        </address>
        <div class="subscribe">
          <div class="subscribe__conteiner">
            <h2 class="subscribe__title">Рассылка</h2>
            <form id ="subscribe-form" class="subscribe-form" novalidate>
              <label>
                <span class="subscribe-form__input-title"
                  >Ваша электронная почта</span
                >
                <span class="visually-hidden"
                  >Ваша электронная почта</span
                >
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  class="subscribe-form__input"
                  minlength="8"
                  maxlength="100"
                  required
                />
                <span
                  class="subscribe-form__input-error"
                  aria-live="polite"
                ></span>
              </label>
              <button type="submit" class="subscribe-form__button">
                Подписаться
                <span class="visually-hidden">Подписаться</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom-block">
      <p class="footer__persdata">
        Получение и обработка персональных данных происходит в
        соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О
        персональных данных", на условиях и для целей, определенных
        Политикой конфиденциальности. Вся информация на сайте
        собственность интернет-магазина 48Paper.ru. Все права защищены.
        Использование информации с сайта без разрешения запрещено.
        Информация, указанная на сайте, не является публичной офертой. ООО
        "48Paper" ИНН: 5190904233 ОГРН: 1095190006383
      </p>
      <p class="footer__cookies">
        Мы применяем файлы cookie, чтобы сделать наш интернет-магазин
        лучше для вас. Находясь на 48Paper.ru вы даете согласие на
        использование файлов cookie и принимаете нашу политику
        конфиденциальности.
      </p>
    </div>
  </div>
</div>`;

function setHeader() {
  const footer =  document.createElement("footer");
  footer.innerHTML = footerText ;
  footer.className = "footer";
  document.body.insertAdjacentElement('beforeend', footer );
}

setHeader();