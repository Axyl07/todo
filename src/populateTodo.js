// import { addTodoBtn, todoDialog } from ".";
// import { deleteFromLocalStorage } from "./storageController";


// export default function populateTodo(filteredtodoArray) {
//   console.log("Testing todoArray:", filteredtodoArray);

//   const todoDivsArea = document.querySelector(".todoDivsArea");
//   const todoDivTemplate = document.querySelector(".todoDivTemplate");
//   const completedCheckbox = document.querySelector("#completed");
//   completedCheckbox.addEventListener("check", () => {
//     if (completedCheckbox.checked) {
//       todoDivTemplate.style.backgroundColor = "grey";
//       todoDivTemplate.style.textDecoration = "line-through";
//     } else todoDivTemplate.style.color = "";
//   });
//   todoDivsArea.innerHTML = "";
//   filteredtodoArray.forEach((element) => {
//     const createdTodoDiv = todoDivTemplate.cloneNode(true);
//     createdTodoDiv.id = "";
//     createdTodoDiv.classList.add("createdTodoDiv");
//     createdTodoDiv.style.display = "grid";
//     if (element.priority === "high") {
//       createdTodoDiv.style.boxShadow = "0px 0px 70px red";
//     } else if (element.priority === "medium") {
//       createdTodoDiv.style.boxShadow = "0px 0px 70px yellow";
//     } else {
//       createdTodoDiv.style.boxShadow = "0px 0px 70px green";
//     }
//     createdTodoDiv.querySelector(".titleTemplate").textContent =
//       element.title;
//     createdTodoDiv.querySelector(".descriptionTemplate").textContent =
//      element.description;
//     createdTodoDiv.querySelector(".dueDateTemplate").textContent =
//       element.dueDate;
//     // createdTodoDiv.querySelector(".priorityTemplate").textContent =
//     //   element.priority;
//     createdTodoDiv
//       .querySelector(".deleteTodoBtn")
//       .addEventListener("click", () => {
//         todoDivsArea.removeChild(createdTodoDiv);
//         deleteFromLocalStorage(element);
//       });    todoDivsArea.appendChild(createdTodoDiv);
//       createdTodoDiv.querySelector('.editTodo').addEventListener('click', () => {
//         const editDialog = todoDialog.cloneNode(true);
//         editDialog.id = '';
//         editDialog.classList.add('editDialog');
//         editDialog.show();
//         const editTodoBtn = addTodoBtn.cloneNode(true);
//         editTodoBtn.id = '';
//         editTodoBtn.classList.add('editTodoBtn');
//         editTodoBtn.textContent = 'Update Todo';

//       })
//   });
// }



//test
import { deleteFromLocalStorage, todoArray } from "./storageController";
import { addToLocal } from "./storageController";
export default function populateTodo(filteredtodoArray) {
  if (!Array.isArray(filteredtodoArray)) {
    console.error("Invalid todo array passed to populateTodo.");
    return;
  }

  const todoDivsArea = document.querySelector(".todoDivsArea");
  const todoDivTemplate = document.querySelector(".todoDivTemplate");

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


    createdTodoDiv.querySelector(".titleTemplate").textContent = element.title;
    createdTodoDiv.querySelector(".descriptionTemplate").textContent = element.description;
    createdTodoDiv.querySelector(".dueDateTemplate").textContent = element.dueDate;


    createdTodoDiv.querySelector(".deleteTodoBtn").addEventListener("click", () => {
      todoDivsArea.removeChild(createdTodoDiv);
      deleteFromLocalStorage(element);
    });


    //check
    const completedCheckbox = createdTodoDiv.querySelector("#completed");
    if (completedCheckbox) {
      if (completedCheckbox.checked) {
        
        createdTodoDiv.boxShadow = '0px 0px 50px grey';
        createdTodoDiv.style.backgroundColor = "grey";
        createdTodoDiv.style.textDecoration = "line-through";
      }
      completedCheckbox.addEventListener("change", () => {
        
        const editTodoBtn = createdTodoDiv.querySelector('.editTodo');
        if (!editTodoBtn) return;
        if (completedCheckbox.checked) {
          editTodoBtn.disabled = true;
          createdTodoDiv.style.boxShadow = "0px 0px 50px grey";
          createdTodoDiv.style.backgroundColor = "grey";
          createdTodoDiv.style.textDecoration = "line-through";
        } else {
          editTodoBtn.disabled = false;
          createdTodoDiv.style.boxShadow = "";
          createdTodoDiv.style.backgroundColor = "";
          createdTodoDiv.style.textDecoration = "";
        }
      });
      
    }


    createdTodoDiv.querySelector(".editTodo").addEventListener("click", () => {
      const todoDialog = document.querySelector("#todoDialog");
      todoDialog.show();


      document.querySelector("#title").value = element.title;
      document.querySelector("#description").value = element.description;
      document.querySelector("#dueDate").value = element.dueDate;
      document.querySelector("#priority").value = element.priority;
      document.querySelector("#notes").value = element.notes;


      const updateButton = document.querySelector("#addTodo");
      updateButton.textContent = "Update Todo";
      updateButton.addEventListener('click', () => {
        element.title = document.querySelector("#title").value;
        element.description = document.querySelector("#description").value;
        element.dueDate = document.querySelector("#dueDate").value;
        element.priority = document.querySelector("#priority").value;
        element.notes = document.querySelector("#notes").value;

        deleteFromLocalStorage(element); 
        addToLocal(element); 
        todoDialog.close();
        populateTodo(filteredtodoArray); 
      });
    });
    todoDivsArea.appendChild(createdTodoDiv);
  });
}
