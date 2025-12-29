const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const text = input.value.trim();

  if (text === "") {
    alert("Task cannot be empty");
    return;
  }

  // create elements
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  // setup elements
  checkbox.type = "checkbox";
  span.textContent = text;
  delBtn.textContent = "Delete";

  // mark done / undone
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  // delete task
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // append (DOM manipulation)
  li.append(checkbox);
  li.append(span);
  li.append(delBtn);
  taskList.append(li);

  // clear input
  input.value = "";
}
