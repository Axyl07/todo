import todo from "./create-todo";
import {
  createProject,
  addToProject,
  deletefromProject,
  projectListArray,
  defaultProject,
} from "./project";
import addProjectToProjectList from "./addProjectToProjectList";
import changeProject from "./change-todo-project";
import changeStatus from "./change-todo-status";
import changePriority from "./change-todo-priority";
import updateOptions from "./updateOptions";
updateOptions();

const sampleTodo1 = new todo(
  "1st todo",
  "i cant",
  "25 dec",
  "low",
  "some extra notes",
  true
);
const sampleTodo2 = new todo(
  "2nd todo",
  "i cant",
  "225 dec",
  "mid",
  "som2e extra notes",
  false
);
// // export { projectListArray };
// addToProject(defaultProject, sampleTodo1);
// addToProject(defaultProject, sampleTodo2);
// deletefromProject(defaultProject,sampleTodo1)
// console.log(typeof defaultProject);
// console.log(defaultProject);
console.log(projectListArray);

const createProjectBtn = document.querySelector("#createProject");
createProjectBtn.addEventListener("click", () => {
  const projectDialog = document.querySelector("#projectDialog");
  projectDialog.show();
  //   const createdProject = createProject();
//   addProjectToProjectList(projectListArray, createdProject);
//   console.log(projectListArray);
});



const addProjectBtn = document.querySelector('#addProject');
addProjectBtn.addEventListener('click', () => {
  const projectNameinput = document.querySelector('#projectName');
  const projectDescriptioninput = document.querySelector('#projectDescription');
  
  const createdProject = new createProject(projectNameinput.value, projectDescriptioninput.value);
  addProjectToProjectList(projectListArray,createdProject);
  updateOptions();
  console.log(createdProject);
  //self note : change project to object in this structure : 
    // function ParentObject(field1, field2) {
    //     this.field1 = field1;
    //     this.field2 = field2;
    //     this.nestedObjects = [];
    //   }
      
    //   const parentObject = new ParentObject('value1', 'value2');
    //   parentObject.nestedObjects.push({ id: 1, name: 'Nested Object 1' });
    //   parentObject.nestedObjects.push({ id: 2, name: 'Nested Object 2' });

})

const createTodoBtn = document.querySelector("#createTodo");
const dialog = document.querySelector("#todoDialog");
createTodoBtn.addEventListener("click", () => {
  dialog.show();
});



const addTodoBtn = document.querySelector("#addTodo");
addTodoBtn.addEventListener("click", () => {


  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#dueDate");
  const priority = document.querySelector("#priority");
  const notes = document.querySelector("#notes");
  const project = document.querySelector("#projectList");

  if (project.value && title.value && description.value && dueDate.value && priority.value && notes.value) {
    const createdTodo = new todo(
      project.value,
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      notes.value
    );
    console.log(createdTodo);
    let stringTodo = JSON.stringify(createdTodo);
    localStorage.setItem(stringTodo, stringTodo);
    addToProject(defaultProject, createdTodo);
    const mainContainer = document.querySelector('.mainContainer');
    const todoDivTemplate = document.querySelector('.todoDivTemplate')
    const createdTodoDiv = todoDivTemplate.cloneNode(true);
    createdTodoDiv.id = '';
    createdTodoDiv.style.display = 'block';
    // createdTodoDiv.classList.add('todoDiv');
    createdTodoDiv.querySelector('.titleTemplate').textContent = 'Title : '+createdTodo.title;
    createdTodoDiv.querySelector('.descriptionTemplate').textContent =  'Description : '+createdTodo.description;
    createdTodoDiv.querySelector('.dueDateTemplate').textContent = 'Due Date : '+createdTodo.dueDate;
    createdTodoDiv.querySelector('.priorityTemplate').textContent = 'Priority : ' + createdTodo.priority;
    createdTodoDiv.querySelector('.deleteTodoBtn').textContent = 'Delete';
    createdTodoDiv.querySelector('.deleteTodoBtn').addEventListener('click', () => {
      mainContainer.removeChild(createdTodoDiv);
      let backtoobject = localStorage.getItem(stringTodo);
      JSON.parse(backtoobject);
      localStorage.removeItem(backtoobject);
    })
    mainContainer.appendChild(createdTodoDiv);
    
  } else {
    alert('Please fill out all the fields');
  }

});

// const deleteTodoButton = document.querySelector('.deleteTodo');
// deleteTodoButton.addEventListener('click', () => {
//   mainContainer.
// })
// console.log(sampleTodo1);
// console.log(sampleTodo1.notes)
// console.log(sampleTodo1.status)
//  project.push(sampleTodo1, sampleTodo11);
// changeStatus(sampleTodo1, true);
// console.log(sampleTodo1.status);
// console.log(sampleTodo1.priority);
// changePriority(sampleTodo1, 'high');
// console.log("after change priority"+sampleTodo1.priority);
