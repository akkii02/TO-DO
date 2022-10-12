let todoForm = document.querySelector(".form-todo");
let todoInput = document.querySelector(".form-todo input[type = 'text");
let todoList = document.querySelector(".todo-list")
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDoText = todoInput.value;
  const newLi = document.createElement("li");
  const newToDoliInner = `  <span class="text">${newToDoText}</span>
<div class="todo-buttons">
  <button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button>
</div>`;
newLi.innerHTML = newToDoliInner;
todoList.append(newLi)
todoInput.Value = ""
});

todoList.addEventListener("click",(e)=>{
if(e.target.classList.contains("remove")){
const targetedLi = e.target.parentNode.parentNode;
targetedLi.remove();
}


if(e.target.classList.contains("done")){
const liSpan = e.target.parentNode.previousElementSibling;
liSpan.style.textDecoration = "line-through"
}
})
