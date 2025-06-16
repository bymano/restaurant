const fullMenu = document.querySelector('.full-menu');
const closeMenuBtn = document.querySelector('.close-menu-button');
const openMenuBtns = document.querySelectorAll('.open-menu-button');
const breakfastCategory = document.getElementById('Breakfast-category');

openMenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    fullMenu.classList.add('menu-display');
    setTimeout(() => {
      fullMenu.classList.add('menu-active');
      breakfastCategory.click();
      breakfastCategory.focus();
    }, 350)
  })
})

closeMenuBtn.addEventListener('click', () => {
  fullMenu.classList.remove('menu-active');
  setTimeout(() => {
    fullMenu.classList.remove('menu-display');
  }, 350)
})