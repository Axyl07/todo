import { deleteFromLocalStorage } from "./storageController";


export default function populateTodo(filteredtodoArray) {
  console.log("Testing todoArray:", filteredtodoArray);

  const todoDivsArea = document.querySelector(".todoDivsArea");
  const todoDivTemplate = document.querySelector(".todoDivTemplate");
  const completedCheckbox = document.querySelector("#completed");
  completedCheckbox.addEventListener("click", () => {
    if (completedCheckbox.checked) {
      todoDivTemplate.style.backgroundColor = "grey";
      todoDivTemplate.style.textDecoration = "line-through";
    } else todoDivTemplate.style.color = "";
  });
  todoDivsArea.innerHTML = "";
  filteredtodoArray.forEach((element) => {
    const createdTodoDiv = todoDivTemplate.cloneNode(true);
    createdTodoDiv.id = "";
    createdTodoDiv.classList.add("createdTodoDiv");
    createdTodoDiv.style.display = "grid";
    if (element.priority === "high") {
      createdTodoDiv.style.boxShadow = "0px 0px 70px red";
    } else if (element.priority === "medium") {
      createdTodoDiv.style.boxShadow = "0px 0px 70px yellow";
    } else {
      createdTodoDiv.style.boxShadow = "0px 0px 70px green";
    }
    createdTodoDiv.querySelector(".titleTemplate").textContent =
      element.title;
    createdTodoDiv.querySelector(".descriptionTemplate").textContent =
     element.description;
    createdTodoDiv.querySelector(".dueDateTemplate").textContent =
      element.dueDate;
    // createdTodoDiv.querySelector(".priorityTemplate").textContent =
    //   element.priority;
    createdTodoDiv
      .querySelector(".deleteTodoBtn")
      .addEventListener("click", () => {
        todoDivsArea.removeChild(createdTodoDiv);
        deleteFromLocalStorage(element);
      });    todoDivsArea.appendChild(createdTodoDiv);
  });
}
