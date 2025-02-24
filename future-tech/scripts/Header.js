// класс Header позволяет открыть и закрыть мобильное меню
class Header {
    // селекторы элементов для работы с DOM
    selectors = {
        root: '[data-js-header]', 
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }
    // классы состояния для элементов DOM
    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    // конструктор класса Header
    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.bindEvents()
    }

    // метод, который отвечает за открытие и закрытие мобильного меню
    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLock);
    }
    
    // метод, который привязывает обработчики событий к кнопке открытия мобильного меню
    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    }
}

export default Header