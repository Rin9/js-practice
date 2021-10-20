const inputEl = document.querySelector(".todo-input");
const listEl = document.querySelector(".todo-list");
const itemEl = document.querySelectorAll(".todo-item");


inputEl.addEventListener("keyup", (e) => {

  e.preventDefault();
  let inputContent = inputEl.value;

  if(e.key === "Enter"){
    if(inputContent === ""){
      alert("enter something!");
      return;
    }  
    let newItem = document.createElement("li");
    newItem.innerHTML = `<li class="todo-item">${inputContent}<i class="fas fa-times"></i></li>`;
    //listEl.appendChild(newItem);
    listEl.insertBefore(newItem, listEl.childNodes[0]);
    inputEl.value = "";
  }
})


const deleteItem = (e) => {
  e.target.parentElement.remove();
}

listEl.addEventListener("click", (e) => {
  
  if(e.target.classList.contains("todo-item")){
    e.target.classList.toggle("done");
  }else if(e.target.classList.contains("fa-times")){
    confirm("really?");
    deleteItem(e);
  }
})




