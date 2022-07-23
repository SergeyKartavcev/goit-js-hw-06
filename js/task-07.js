const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
function cangeInlineStyle(event){
    text.style.fontSize = this.value +"px"
}
range.addEventListener("change", cangeInlineStyle);