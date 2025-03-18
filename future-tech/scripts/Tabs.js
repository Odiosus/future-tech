const rootSelector = '[data-js-tabs]'

// основная логика конкретной группы табов
class Tabs {
    selectors = {
        root: rootSelector,
        button: '[data-js-tab-button]',
        content: '[data-js-tabs-content]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    stateAttributes = {
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }



}


// инициализация логики всех табов на одной странице
class TabsCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Tabs(element)
        })

    }
}

export default TabsCollection