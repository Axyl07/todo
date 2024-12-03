import deleteFromLocalStorage from "./deleteFromLocalStorage";

export default function populateTodo(todoArray) {
    const mainContainer = document.querySelector('.mainContainer');
const todoDivTemplate = document.querySelector('.todoDivTemplate')
    todoArray.forEach(element => {
        const createdTodoDiv = todoDivTemplate.cloneNode(true);
    createdTodoDiv.id = '';
    createdTodoDiv.style.display = 'block';
    createdTodoDiv.querySelector('.titleTemplate').textContent = 'Title : '+element.title;
    createdTodoDiv.querySelector('.descriptionTemplate').textContent =  'Description : '+element.description;
    createdTodoDiv.querySelector('.dueDateTemplate').textContent = 'Due Date : '+element.dueDate;
    createdTodoDiv.querySelector('.priorityTemplate').textContent = 'Priority : ' + element.priority;
    createdTodoDiv.querySelector('.deleteTodoBtn').textContent = 'Delete';
    createdTodoDiv.querySelector('.deleteTodoBtn').addEventListener('click', () => {
      mainContainer.removeChild(createdTodoDiv);
      deleteFromLocalStorage(element);
    })
    mainContainer.appendChild(createdTodoDiv);
    });
}