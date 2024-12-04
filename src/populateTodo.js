import { deleteFromLocalStorage } from "./storageController";

export default function populateTodo(filteredtodoArray) {
    console.log('Testing todoArray:', filteredtodoArray);

    const todoDivsArea = document.querySelector('.todoDivsArea');
    const todoDivTemplate = document.querySelector('.todoDivTemplate')
    todoDivsArea.innerHTML = '';
  filteredtodoArray.forEach(element => {

    const createdTodoDiv = todoDivTemplate.cloneNode(true);
    createdTodoDiv.id = '';
    createdTodoDiv.classList.add('createdTodoDiv');
    createdTodoDiv.style.display = 'grid';
    if (element.priority === 'high') {
      createdTodoDiv.style.backgroundColor = 'red';
    } else if (element.priority === 'medium') {
      createdTodoDiv.style.backgroundColor = 'yellow';
    } else {
      createdTodoDiv.style.backgroundColor = 'green';

    }
    createdTodoDiv.querySelector('.titleTemplate').textContent = 'Title : '+element.title;
    createdTodoDiv.querySelector('.descriptionTemplate').textContent =  'Description : '+element.description;
    createdTodoDiv.querySelector('.dueDateTemplate').textContent = 'Due Date : '+element.dueDate;
    createdTodoDiv.querySelector('.priorityTemplate').textContent = 'Priority : ' + element.priority;
    createdTodoDiv.querySelector('.deleteTodoBtn').textContent = 'Delete';
    createdTodoDiv.querySelector('.deleteTodoBtn').addEventListener('click', () => {
      todoDivsArea.removeChild(createdTodoDiv);
      deleteFromLocalStorage(element);
    })
    todoDivsArea.appendChild(createdTodoDiv);
    });
}