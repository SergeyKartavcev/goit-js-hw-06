const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

textInput.addEventListener("input", (event) => {
  const valueInput =  event.currentTarget.value;
  if( valueInput.length === 0){
    return output.textContent = 'Anonimus';
  }
  output.textContent = valueInput;
  });