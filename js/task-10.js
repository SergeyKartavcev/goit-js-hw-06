
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");


let startSize = 30;
const step = 10;

createBtn.addEventListener("click", hendlerCreateyBtn);
destroyBtn.addEventListener("click", hendlerDestroyBtn);

function hendlerCreateyBtn(event) {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
  
}
function createBoxes(amount) {
  if (amount > 50) {
    alert("Error");
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    startSize += i*step;
    boxEl.className = "newDiv";
    boxEl.style.width = `${startSize}px`;
    boxEl.style.height = `${startSize}px`;
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;
    fragment.appendChild(boxEl);
  }
  boxes.appendChild(fragment);
}

function hendlerDestroyBtn() {
  boxes.innerHTML = "";
 
}
//єдине що так і не зрозумів як повернути розмір назад при другому кліці...