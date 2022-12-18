let input=document.querySelector(".text")
let storage=document.querySelector(".storage")
let string="";

function addNote() {
   string +=`<div> ${input.value}</div>`;
  localStorage.setItem("key", string);
  storage.innerHTML=string;
}
function save() {
    storage.innerHTML=localStorage.getItem('key');
}
document.addEventListener('DOMContentLoaded', save)