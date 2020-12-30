class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events(){
        
        // listen for closing click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        
        // pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e) {
        if(e.keycode == 27) {
            this.closeTheModal()
        }
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
        <div class="modal__inner">
          <img src="assets/images/NCC_Logo_Color_Web.png" class="section-title__icon">
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">
            <strong>
            111 Railroad Avenue • PO Box 38<br>
            Ray, ND 58849<br>
            701.568.3331 • 800.245.5884
            </strong></p>
          </div>
    
          <div class="social-icons">
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
        `)
    }
}

export default Modal
