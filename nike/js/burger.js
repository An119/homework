// Работа с бургер-меню

 export function burgerMenu() { 
  
  // Получаем элементы DOM
  const menu = document.querySelector('.header__menu');  // Контейнер меню
  const burgerBtn = document.querySelector('.header__burger'); // Кнопка меню
  const iconMenu = document.querySelector('.burger__icon-menu'); // Иконка меню
  const iconCross = document.querySelector('.burger__icon-cross');  // Иконка закрытия меню

  // Обработчик клика на кнопку
  burgerBtn.addEventListener('click', toggleMenu);

  // Функция переключения (открыть, закрыть)
  function toggleMenu() {
    // Проверяем класс header__menu--open - меню открыто
    if (menu.classList.contains('header__menu--open')) { // Если меню открыто, то закрываем
      menu.classList.remove('header__menu--open'); // Убираем класс  
      iconCross.style.display = 'none'; // Скрываем иконку крестика
      iconMenu.style.display = 'block'; // Показываем иконку меню
    
    } else { // Если меню закрыто, то открываем
      menu.classList.add('header__menu--open'); // Добавляем класс
      iconCross.style.display = 'block';            
      iconMenu.style.display = 'none';          
    }
  }

  // Получаем все ссылки внутри меню
  const menuLinks = document.querySelectorAll('.menu__link');

  // Для ссылки добавляем клик
  menuLinks.forEach(
    function (menuLink) {
      menuLink.addEventListener('click', toggleMenu)
    }
  );

  // Закрытие по клику вне меню
  document.addEventListener('click', function(event) { // Проверка клика по меню или его элементам
  
    const clickMenu = menu.contains(event.target);
    const clickBurger = burgerBtn.contains(event.target);

    // Если клик был вне меню и оно открыто, то закрываем 
    if (!clickMenu && !clickBurger && menu.classList.contains('header__menu--open')) {
      toggleMenu(); // Вызываем закрытие меню
    }
  });
}









// export default class BurgerMenu {
// 	constructor(config, headerFixedInstance = null) {
// 		this.config = config;
// 		this.burgerButton = document.querySelector(`.${this.config.BURGER}`);
// 		this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`);
// 		this.body = document.querySelector(`.${this.config.PAGE_BODY}`);
// 		this.headerFixedInstance = headerFixedInstance;
// 		this.main = document.querySelector(`.${this.config.MAIN}`);

// 		if (!this.burgerButton || !this.burgerMenu || !this.body) {
// 			throw new Error('Required DOM elements are missing.');
// 		}

// 		this.isMobileView = window.innerWidth <= this.config.BREAKPOINT;

// 		this.onBurgerClick = this.onBurgerClick.bind(this);
// 		this.onBodyClick = this.onBodyClick.bind(this);
// 		this.handleTouchStart = this.handleTouchStart.bind(this);
// 		this.handleTouchMove = this.handleTouchMove.bind(this);
// 		this.handleTouchEnd = this.handleTouchEnd.bind(this);
// 		this.onWindowResize = this.onWindowResize.bind(this);

// 		this.manageEvents();
// 		window.addEventListener('resize', this.onWindowResize);
// 	}

// 	manageEvents() {
// 		if (this.isMobileView) {
// 			this.initEvents();
// 		} else {
// 			this.removeEvents();
// 			this.hideBurgerMenu();
// 		}
// 	}

// 	initEvents() {
// 		// Click events
// 		this.burgerButton.addEventListener('click', this.onBurgerClick);
// 		this.body.addEventListener('click', this.onBodyClick);

// 		// Touch events
// 		this.body.addEventListener('touchstart', this.handleTouchStart);
// 		this.body.addEventListener('touchmove', this.handleTouchMove);
// 		this.body.addEventListener('touchend', this.handleTouchEnd);
// 	}

// 	removeEvents() {
// 		// Click events
// 		this.burgerButton.removeEventListener('click', this.onBurgerClick);
// 		this.body.removeEventListener('click', this.onBodyClick);

// 		// Touch events
// 		this.body.removeEventListener('touchstart', this.handleTouchStart);
// 		this.body.removeEventListener('touchmove', this.handleTouchMove);
// 		this.body.removeEventListener('touchend', this.handleTouchEnd);
// 	}

// 	onWindowResize() {
// 		const isNowMobileView = window.innerWidth <= this.config.BREAKPOINT;

// 		if (this.isMobileView !== isNowMobileView) {
// 			this.isMobileView = isNowMobileView;
// 			this.manageEvents();
// 		}
// 	}

// 	// Click events
// 	onBurgerClick() {
// 		const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);
// 		this.burgerButton.ariaLabel = isOpen
// 			? this.config.lABEL.CLOSE
// 			: this.config.lABEL.OPEN;
// 		this.burgerButton.ariaExpanded = isOpen;
// 		this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);
// 		this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, isOpen);

// 		if (this.main) {
// 			this.main.style.pointerEvents = isOpen ? 'none' : '';
// 		}

// 		if (this.headerFixedInstance) {
// 			if (isOpen) {
// 				this.headerFixedInstance.removeFixedClass();
// 			} else {
// 				this.headerFixedInstance.updateFixedClass();
// 			}
// 		}
// 	}

// 	hideBurgerMenu() {
// 		const wasOpen = this.isBurgerMenuOpen();
// 		this.burgerButton.classList.remove(this.config.BURGER_OPEN);
// 		this.burgerButton.ariaLabel = this.config.lABEL.OPEN;
// 		this.burgerButton.ariaExpanded = false;
// 		this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
// 		this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL);

// 		if (this.main) {
// 			this.main.style.pointerEvents = '';
// 		}

// 		if (wasOpen && this.headerFixedInstance) {
// 			this.headerFixedInstance.updateFixedClass();
// 		}
// 	}

// 	isBurgerMenuOpen() {
// 		return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN);
// 	}

// 	onBodyClick(event) {
// 		const target = event.target;
// 		const isLinkInMenu = target.classList.contains(this.config.MENU_LINK);
// 		const isMenuOpen = this.isBurgerMenuOpen();
// 		const isClickOutsideMenu =
// 			!target.closest(`.${this.config.HEADER_MENU}`) &&
// 			!target.closest(`.${this.config.BURGER}`);

// 		if (
// 			(isLinkInMenu && window.innerWidth <= this.config.BREAKPOINT) ||
// 			(isMenuOpen && isClickOutsideMenu)
// 		) {
// 			this.hideBurgerMenu();
// 		}
// 	}

// 	// Touch events
// 	handleTouchStart(event) {
// 		if (!this.isBurgerMenuOpen()) return;
// 		this.touchStartX = event.changedTouches[0].screenX;
// 		this.burgerMenu.style.transition = 'none';
// 	}

// 	handleTouchMove(event) {
// 		if (!this.isBurgerMenuOpen()) return;
// 		const currentX = event.changedTouches[0].screenX;
// 		const translateX = Math.max(0, currentX - this.touchStartX);
// 		this.burgerMenu.style.right = `-${translateX}px`;
// 	}

// 	handleTouchEnd(event) {
// 		if (!this.isBurgerMenuOpen()) return;
// 		const touchEndX = event.changedTouches[0].screenX;
// 		const swipeDistance = touchEndX - this.touchStartX;

// 		this.burgerMenu.style.transition = '';
// 		this.burgerMenu.style.right = '';

// 		if (swipeDistance > 70) {
// 			this.hideBurgerMenu();
// 		}
// 	}
// }
