// ------------------ Бургер-меню ------------------

document.addEventListener("click", burgerInit);

function burgerInit(e) {
  const burgerIcon = e.target.closest(".menu-btn");
  const burgerNavLinl = e.target.closest(".nav__link");

  if (!burgerIcon && !burgerNavLinl) return;
  if (document.documentElement.clientWidth > 1298) return; //условия, после соблюдения которых запускается нижний скрипт

  if (!document.body.classList.contains("body--opened-menu")) {
    document.body.classList.add("body--opened-menu");
  } else {
    document.body.classList.remove("body--opened-menu");
  }
}

// ------------------ Слайдер "О нас" ------------------

$(document).ready(function () {
  $(".about__slider").slick({
    arrows: false, // убрать стрелки
    dots: true, // добавить точки
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false, // предел пролистывания

    fade: true, //для плавного перехода картинок
    appendDots: $(".about__dots"), //для переноса точек в созданный контейнер
    verticalSwiping: true, //разворачивает пролистывание вертикально

    // изменение галлереи от ширины экрана
    responsive: [
      {
        breakpoint: 750,
        settings: {
          verticalSwiping: false,
        },
      },
    ],
  });

  // Переключение счета PROTEIN и BCAAS
  $(".about__slider").on("afterChange", function (event, slick, currentSlide) {
    // Скрываем все декоративные элементы
    $(".img__inner").fadeOut(500); // 300 мс — длительность анимации

    // Получаем id декоративного элемента для текущего слайда
    var decorId = $(".about__slide").eq(currentSlide).data("decor-id");

    // Показываем соответствующий декоративный элемент
    $("#" + decorId).fadeIn(300); // 300 мс — длительность анимации
  });

  // Отображение первого декоративного элемента
  $(".img__inner").hide(); // Скрываем все
  $("#decor-1").fadeIn(500); // Показываем первый элемент по умолчанию
});

// ------------------ Табы секции "Описание" ------------------

// Общая функция для обработки вкладок
function setupTabs(tabSelector, linkSelector, activeClass, contentShowClass) {
  const tabControls = document.querySelector(tabSelector);

  tabControls.addEventListener("click", (e) => {
    const tabControl = e.target.closest(linkSelector);

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains(activeClass)) return; // отменяет запуск, если кнопка уже активна

    const tabContentID = tabControl.getAttribute("href");

    // Убираем активный класс у текущей активной кнопки
    const activeTabLink = document.querySelector(`.${activeClass}`);
    if (activeTabLink) {
      activeTabLink.classList.remove(activeClass);
    }

    // Добавляем активный класс к нажатой кнопке
    tabControl.classList.add(activeClass);

    // Убираем класс показа контента
    const activeContent = document.querySelector(`.${contentShowClass}`);
    if (activeContent) {
      activeContent.classList.remove(contentShowClass);
    }

    // Показываем новый контент
    document.querySelector(tabContentID).classList.add(contentShowClass);
  });
}

// Инициализация для секции description
setupTabs(
  ".description__tab",
  ".description__tab-link",
  "description__tab-link--active",
  "tab-content--show",
);

// Инициализация для секции timetable
setupTabs(
  ".timetable__tab",
  ".timetable__tab-link",
  "timetable__tab-link--active",
  "table-content--show",
);

// ------------------ Слайдер секции "Блог" ------------------

$(document).ready(function () {
  $(".blog__slider").slick({
    arrows: false, // убрать стрелки
    variableWidth: true, // убрать отступы
    // slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false, // предел пролистывания

    // изменение галлереи от ширины экрана
    responsive: [
      {
        breakpoint: 1298,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
