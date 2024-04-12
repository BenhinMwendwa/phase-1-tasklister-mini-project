document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

  buildToDoList(e.target.text.value);
  form.reset()
  })
});
function buildToDoList(todo){
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", Delete)
  btn.textContent = "Delete";
  p.textContent = `${todo}`
  p.appendChild(btn);
  document.querySelector("#list").appendChild(btn);

}
function Delete(e) {
  e.target.parentNode.remove();}
