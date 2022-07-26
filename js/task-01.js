
const categoriesItem = document.querySelectorAll('.item');
console.log('Number of categories:',categoriesItem.length);

const categories = document.querySelector('#categories')

const elements = categories.children



Array.from(elements).forEach(element => {
   const title = element.querySelector('h2').innerHTML;
   const itemLength = element.querySelectorAll("li").length
  console.log(`Category: ${title} / Elements: ${itemLength}`)
});