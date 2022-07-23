const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridientsList = document.querySelector('#ingredients');
const ingridientsEl = ingredients.map((element) => {
  const items = document.createElement('li');
  items.textContent = element;
  items.classList.add('item');
  return items;
});

ingridientsList.append(...ingridientsEl);
console.log(ingridientsEl);




