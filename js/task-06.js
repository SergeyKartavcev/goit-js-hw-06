const inputEl = document.querySelector('#validation-input');
const rightquantity = inputEl.getAttribute('data-length');
console.log(rightquantity);
function quantitiSimbol(event) {
    if (event.target.value.length === Number(rightquantity)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
    else{inputEl.classList.add("invalid")
    inputEl.classList.remove("valid");};
}
inputEl.addEventListener("blur",quantitiSimbol)