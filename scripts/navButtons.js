function configureNavigation(buttonClass, elementId) {
  return {
    buttons: document.querySelectorAll(`.${buttonClass}`),
    element: document.getElementById(elementId)
  }
}

function activateNavigationButtons() {

  navOptions.forEach(nav => {
    nav.buttons.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        nav.element.scrollIntoView(scrollOptions)
      })
    })
  });

}

const homeNav = configureNavigation('home-nav-button', 'home')
const menuNav = configureNavigation('menu-nav-button', 'dishes-grid');
const aboutUsNav = configureNavigation('about-us-nav-button', 'about-us');
const footerNav = configureNavigation('footer-nav-button', 'footer');
const galleryNav = configureNavigation('gallery-nav-button', 'gallery');
const navOptions = [homeNav, menuNav, aboutUsNav, footerNav];
const scrollOptions = { behavior: 'smooth', block: 'center'};
activateNavigationButtons();
