const footerText = `
<div class="footer__container">
      <div class="footer__left-block">
        <div class="footer__left">
          <a href="/" class="logo footer__logo"></a>
          <div class="social">
            <div class="social__vk"></div>
            <div class="social__inst"></div>
            <div class="social__wapp"></div>
          </div>
        </div>
        <div class="footer__left">
          <div class="statistic"></div>
          <div class="copyright">
            <p class="copyright__text">
              2010-2018 &copy; Магазин бумаги 48Paper
            </p>
          </div>
        </div>
      </div>
      <div class="footer__content">
        <div class="footer__top-block">
          <div class="catalog">
            <a class="catalog-link" href="././src/pages/catalog.html">
              <h2 class="catalog__title">Продукция</h2>
            </a>

            <ul class="catalog-list">
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Бейджи</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Бумага и картон</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Для деколи</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Конверты</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Коробки и пакеты</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Магнитный винил</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для календарей</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для наружной рекламы</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для офсетной печати</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для переплета</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для пигментной печати</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для ризографов</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для сублимации</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Материалы для шелкотрафаретной печати</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Оборудование</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Пленка для ламинирования</a
                >
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Прочие товары</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Ручки для пакетов</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link"> Сувенирная продукция</a>
              </li>
              <li class="catalog-item">
                <a href="#" class="catalog-item-link">
                  Футболки, толстовки, бейсболки</a
                >
              </li>
            </ul>
          </div>
          <div class="market">
            <h2 class="market__title">Магазин</h2>
            <div class="market__column">
              <ul class="market-list">
                <li class="market-item">
                  <a href="#" class="market-item-link">Статьи</a>
                </li>
                <li class="market-item">
                  <a href="#" class="market-item-link">О компании</a>
                </li>
                <li class="market-item">
                  <a href="#" class="market-item-link">Контакты</a>
                </li>
                <li class="market-item">
                  <a href="#" class="market-item-link">Как купить</a>
                </li>
                <li class="market-item">
                  <a href="#" class="market-item-link">Доставка</a>
                </li>
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
                <form id="subscribe-form" class="subscribe-form" novalidate>
                  <label>
                    <span class="subscribe-form__input-title"
                      >Ваша электронная почта</span
                    >
                    <span class="visually-hidden">Ваша электронная почта</span>
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
            Получение и обработка персональных данных происходит в соответствии
            с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных
            данных", на условиях и для целей, определенных Политикой
            конфиденциальности. Вся информация на сайте собственность
            интернет-магазина 48Paper.ru. Все права защищены. Использование
            информации с сайта без разрешения запрещено. Информация, указанная
            на сайте, не является публичной офертой. ООО "48Paper" ИНН:
            5190904233 ОГРН: 1095190006383
          </p>
          <p class="footer__cookies">
            Мы применяем файлы cookie, чтобы сделать наш интернет-магазин лучше
            для вас. Находясь на 48Paper.ru вы даете согласие на использование
            файлов cookie и принимаете нашу политику конфиденциальности.
          </p>
        </div>
      </div>
    </div>`;

function setFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = footerText;
  footer.className = "footer";
  document.body.insertAdjacentElement("beforeend", footer);
}
setFooter();
