class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__menu-content')
        this.siteHeader = document.querySelector('.site-header')
        this.events()
    }

    // In the events function, addEventListener has changed "this" to the clicked on object
    // BUT, we want to change "this" back to the "mobileMenu" object created in App.js
    // In comes arrow functions. "this" stays refering to our created object
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }
}

export default MobileMenu