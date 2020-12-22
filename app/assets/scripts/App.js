import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from'./modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import 'lazysizes'

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 65)
new MobileMenu()
let modal

// Lesson 56 - Code Splitting with webpack
document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault() //prevents click taking you to a # url when <a href="#"
    // when Modal file is loaded "then" run function if an error is caught then run function
    if(typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
    
  })
})

if (module.hot) {
  module.hot.accept()
}