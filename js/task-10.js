
const butonCreate = document.querySelector('[data-create="Create"]');
const butonDestroy = document.querySelector('[data-destroy="Destroy"]');
const boxes = document.getElementById("boxes");

butonCreate.addEventListener("click", getAmount);
butonDestroy.addEventListener('click', destroyBoxes);


function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (const i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

