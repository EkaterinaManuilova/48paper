//загрузка каталога на стр Каталог
const catalogItems = [
  {
    link: "#",
    name: "Бейджи",
    count: "14",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Бумаги и картон",
    count: "898",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Конверты",
    count: "10",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Коробки и пакеты",
    count: "42",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Магнитный винил",
    count: "14",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для календарей",
    count: "5",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для наружной рекламы",
    count: "95",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для офсетной печати",
    count: "10",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для переплета",
    count: "109",
    submenu: "true",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для пигментной печати",
    count: "89",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для ризографов",
    count: "3",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для сублимации",
    count: "30",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Материалы для шелкотрафаретной печати",
    count: "61",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Оборудование",
    count: "151",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Пленка для ламинирования",
    count: "26",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Прочие товары",
    count: "49",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Ручки для пакетов",
    count: "4",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Сувенирная продукция",
    count: "4",
    submenu: "",
    image: "../images/category.png",
  },
  {
    link: "#",
    name: "Футболки, толстовки, бейсболки",
    count: "26",
    submenu: "",
    image: "../images/category.png",
  },
];

const categoryContainer = document.querySelector(".category-catalog__list");
//загрузка каталога
function loadCatalog(linkValue, nameValue, imageValue) {
  const categoryTemplate = document.querySelector(".category-template").content;

  const categoryElement = categoryTemplate
    .querySelector(".category-catalog__item")
    .cloneNode(true);
  const categoryLink = categoryElement.querySelector(
    ".category-catalog__item-link"
  );
  const categoryName = categoryElement.querySelector(
    ".category-catalog__item-title"
  );
  const categoryImage = categoryElement.querySelector(
    ".category-catalog__item-img"
  );

  categoryLink.setAttribute("href", linkValue);
  categoryName.textContent = nameValue;
  categoryImage.setAttribute("src", imageValue);

  categoryContainer.append(categoryElement);
}

catalogItems.forEach((element) => {
  loadCatalog(element.link, element.name, element.image);
});
