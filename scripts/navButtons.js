function configureNavigation(buttonClass, elementId) {
  return {
    buttons: document.querySelectorAll(`.${buttonClass}`),
    element: document.getElementById(elementId)
  }
}

function activateNavigationButtons() {

  navOptions.forEach(nav => {
    nav.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        nav.element.scrollIntoView(scrollOptions)
      })
    })
  });

}

const homeNav = configureNavigation('home-nav-button', 'home')
const menuNav = configureNavigation('menu-nav-button', 'dishes-grid');
const aboutUsNav = configureNavigation('about-us-nav-button', 'about-us');
const contactNav = configureNavigation('feedback-nav-button', 'footer');
const navOptions = [homeNav, menuNav, aboutUsNav, contactNav];
const scrollOptions = { behavior: 'smooth', block: 'start'};
activateNavigationButtons();
