function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const widget = document.querySelector(".widget");
const buttonEl = document.querySelector('.change-color');
const color = document.querySelector(".color");

console.log(buttonEl);


buttonEl.addEventListener('click',changeColorBtn);

function changeColorBtn(event){
widget.style.backgroundColor = getRandomHexColor();
color.textContent = widget.style.backgroundColor;
}