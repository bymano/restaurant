import { menu } from './data/menu.js';

const categoriesContainer = document.querySelector('.categories-container');
const typesContainer = document.querySelector('.types-container');
const foodsContainer = document.querySelector('.foods-container');

function createCategory(category) {
  const categoryBtn = document.createElement('button');
  categoryBtn.id = `${category}-category`;
  categoryBtn.classList.add('category');
  categoryBtn.textContent = category;
  categoriesContainer.appendChild(categoryBtn);
  
  categoryBtn.addEventListener('click', () => {
    updateFood(category);
  })
}


function createType(type) {
  const typeContainer = document.createElement('div');
  typeContainer.id = `${type}-type-container`;
  typeContainer.classList.add('type-container');
  
  const typeName = document.createElement('div');
  typeName.classList.add('type-name');
  typeName.textContent = type;

  typeContainer.appendChild(typeName);
  foodsContainer.appendChild(typeContainer);
  return typeContainer;
}

function addType(type) {
  const typeEl = document.createElement('div');
  typeEl.setAttribute('tabindex', 0);
  typeEl.classList.add('type');
  typeEl.textContent = type;
  typesContainer.appendChild(typeEl);

  typeEl.addEventListener('click', () => {
    document.getElementById(`${type}-type-container`).scrollIntoView({behavior: 'smooth', block: 'start'})
  })
}

// Utility Function

function createDiv(className, textContent) {
  const div = document.createElement('div');
  div.classList.add(className);
  div.textContent = textContent;
  return div;
}


function setFood(category) {
  menu.forEach(menuItem => {
    if (menuItem.category !== category) return;
  
    
    menuItem.foods.forEach(food => {
      const type = food.type;
      const typeContainer = createType(type);
      addType(type);
      const dishesContainer = createDiv('dishes-container', '');
  
      food.cuisine.forEach(dish => {
        const dishContainer = createDiv('dish-container', '');
        dishContainer.setAttribute('tabindex', 0);
        
        const dishName = createDiv('dish-name', dish.name);
  
        let dishCount;
        if (dish.count) {
          dishCount = createDiv('dish-count', dish.count);
        }
  
        const dishPrice = createDiv('dish-price', `${(dish.price / 100).toFixed(2)} $`)
  
        dishContainer.appendChild(dishName);
        if (dishCount) dishContainer.appendChild(dishCount);
        dishContainer.appendChild(dishPrice);
        dishesContainer.appendChild(dishContainer);
  
        typeContainer.appendChild(dishesContainer);
      })
    })
    
  })
}

function emptyFood() {
  foodsContainer.scrollTo({top : 0})
  foodsContainer.innerHTML = '';
  typesContainer.innerHTML = '';
}

export function updateFood(category) {
  foodsContainer.style.opacity = 0;
  typesContainer.style.opacity = 0;
  setTimeout(() => {
    emptyFood();
    setFood(category);
    foodsContainer.style.opacity = '';
    typesContainer.style.opacity = '';
  }, 150)
}

// Create DOM Element For Each Category
menu.forEach(menuItem => {
  createCategory(menuItem.category);
})