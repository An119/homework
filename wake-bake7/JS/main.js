(function () {
  // ------------------ Бургер-меню ------------------

  document.addEventListener("click", burgerInit);

  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLinl = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLinl) return;
    if (document.documentElement.clientWidth > 900) return; //условия, после соблюдения которых запускается нижний скрипт

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  // ------------------ Модальное окно ------------------
  const modal = document.querySelector(".modal");
  const modalButton = document.querySelector(".about__img-btn");

  modalButton.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);

  function openModal(e) {
    e.preventDefault();
    document.body.classList.toggle("body--opened-modal");
  }

  function closeModal(e) {
    e.preventDefault();

    const target = e.target;

    if (
      target.closest(".modal__cancel") ||
      target.classList.contains("modal")
    ) {
      document.body.classList.remove("body--opened-modal");
    }
  }

  // ------------------ Табы ------------------
  const tabControls = document.querySelector(".tab-controls");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link");

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains("tab-controls__link--active")) return; //отменяет запуск нижней функции если кнопка уже активна и описание открыто

    const tabContentID = tabControl.getAttribute("href");

    //перемещает открашивание на активную кнопку (при нажатии на нее)
    document
      .querySelector(".tab-controls__link--active")
      .classList.remove("tab-controls__link--active"); //отменяет класс
    tabControl.classList.add("tab-controls__link--active"); //добавляет класс

    //открывает описание обучения при нажатии на кнопки(сслыки)
    document
      .querySelector(".tab-content--show")
      .classList.remove("tab-content--show"); //отменяет класс
    document.querySelector(tabContentID).classList.add("tab-content--show"); //добавляет класс
  }

  // ------------------ Аккордион ------------------

  //появление контента в развернутом состоянии
  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      //дополнительный функционал, закрытие предыдущего модуля при открытиии другого
      // const accordionList = e.currentTarget
      // const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      // const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      // if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
      //     accordionOpenedItem.classList.remove('accordion-list__item--opened');
      //     accordionOpenedContent.style.maxHeight = null;
      // }
      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // ------------------ Слайдер ------------------
  const swiper = new Swiper(".gallery__slider", {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    // изменение галлереи от ширины экрана
    breakpoints: {
      786: {
        slidesPerView: 3,
      },
      901: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1036: {
        slidesPerView: 4,
      }
    }
  });


  // ------------------ Слайдер-отзывы ------------------
   new Swiper(".testimonials__slider", {
    spaceBetween: 0, // отступы между друг другом
    slidesPerView: 1, // кол-во видимых слайдеров
    centeredSlides: true, // размещение активного слайда по центру

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
    
    // скролл-бар
    scrollbar:{
      el: '.swiper-scrollbar',
      draggable: true,
    },

    // изменение галлереи от ширины экрана
    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.1,
      }
    }
  });

  // ------------------ Маска для телефона секции контакты ------------------
  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999)-999-99-99')
  im.mask(telInputs)

})();
