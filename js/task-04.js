let conetValue = 0;
const minusBtn =document.querySelector('[data-action ="increment"]');
const plusBtn = document.querySelector('[data-action ="decrement"]');
const conter = document.querySelector('#value');

const minusClick = ()=> {
    conetValue -= 1;
    conter.textContent = conetValue; 
}

const plusClick = ()=> {
    conetValue += 1;
    conter.textContent = conetValue; 
}




minusBtn.addEventListener("click", minusClick);
plusBtn.addEventListener("click", plusClick);
