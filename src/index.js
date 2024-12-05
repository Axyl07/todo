import "./index.css";

import {
  todo,
  changeTodoPriority,
  changeTodoProject,
  changeTodoStatus,
} from "./todo";
import {
  createProject,
  addToProject,
  addProjectToProjectList,
  deletefromProject,
  projectListArray,
  defaultProject,
} from "./project";

import updateOptions from "./updateOptions";

import {
  deleteFromLocalStorage,
  addToLocal,
  getFromLocalStorage,
  todoArray,
  projectArray,
  uniqueTodo,
} from "./storageController";

import populateTodo from "./populateTodo";
import populateProject from "./populateProjects";
import populateTodosForSpecificProject from "./populateSpecificProject";
import { init } from "./initPageLoad";
init();
const allButtons = document.querySelectorAll('button');
for (const node of allButtons) {
  node.addEventListener('click', () => {
    updateOptions();
  })
}
//   const test = getFromLocalStorage();
// console.log(test);
updateOptions();
// const get = getfromLocal();
// console.log(get);
// const sampleTodo1 = new todo(
//   "1st todo",
//   "i cant",
//   "25 dec",
//   "low",
//   "some extra notes",
//   true
// );
// const sampleTodo2 = new todo(
//   "2nd todo",
//   "i cant",
//   "225 dec",
//   "mid",
//   "som2e extra notes",
//   false
// );
// // export { projectListArray };
// addToProject(defaultProject, sampleTodo1);
// addToProject(defaultProject, sampleTodo2);
// deletefromProject(defaultProject,sampleTodo1)
// console.log(typeof defaultProject);
// console.log(defaultProject);
console.log(projectListArray);
//project
//default divv<<<
const defaultProjectBtn = document.querySelector(".defaultProject");
defaultProjectBtn.addEventListener("click", () => {
  getFromLocalStorage();
  const uniqueTodo = todoArray.filter(
    (obj, index, self) =>
      index === self.findIndex((value) => value.title === obj.title)
  );

  const filteredArrayForProjectDefault = uniqueTodo.filter(
    (elem) => elem.project === "Default"
  );
  populateTodo(filteredArrayForProjectDefault);
});

const closeProjectDialogBtn = document.querySelector('#closeDialog');
closeProjectDialogBtn.addEventListener('click', () => {
  projectDialog.close()
})
const closeTodoDialogBtn = document.querySelector('#closeTodoDialog');
closeTodoDialogBtn.addEventListener('click', () => {
  todoDialog.close()
})
const createProjectBtn = document.querySelector("#createProject");
createProjectBtn.addEventListener("click", () => {
  const projectDialog = document.querySelector("#projectDialog");
  projectDialog.show();
});

const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click", () => {
  updateOptions();
  const projectNameinput = document.querySelector("#projectName");
  const projectDescriptioninput = document.querySelector("#projectDescription");
  // if (projectNameinput.value=="") {
  //   alert("Please enter a name for the project");
  // } else {
    const createdProject = new createProject(
      projectNameinput.value,
      projectDescriptioninput.value
    );
    addProjectToProjectList(projectListArray, createdProject);
    updateOptions();
    console.log(createdProject);
    addToLocal(createdProject);
    getFromLocalStorage();
    const uniqueProject = projectArray.filter(
      (obj, index, self) =>
        index === self.findIndex((value) => value.name === obj.name)
    );
    console.log(projectArray);
    populateProject(uniqueProject);

  
});

//todo
const createTodoBtn = document.querySelector("#createTodo");
const todoDialog = document.querySelector("#todoDialog");
createTodoBtn.addEventListener("click", () => {
  todoDialog.show();
});

const addTodoBtn = document.querySelector("#addTodo");
addTodoBtn.addEventListener("click", () => {
  // event.preventDefault();
  //get form fields references
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#dueDate");
  const priority = document.querySelector("#priority");
  const notes = document.querySelector("#notes");
  const project = document.querySelector("#projectList");

  if (
    title.value === "" ||
    description.value === "" ||
    dueDate.value === "" ||
    priority.value === ""
  ) {
    alert("Please fill out all the fields");
  } else {
    const createdTodo = new todo(
      project.value,
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      notes.value
    );
    console.log(createdTodo);
    console.log(project.value);
    addToLocal(createdTodo);
    console.log(createdTodo.project);
    getFromLocalStorage();
    const uniqueTodo = todoArray.filter(
      (obj, index, self) =>
        index === self.findIndex((value) => value.title === obj.title)
    );
    const filteredArrayForProject = uniqueTodo.filter(
      (elem) => elem.project === createdTodo.project
    );
    populateTodo(filteredArrayForProject);
    console.log(todoArray);
    console.log(uniqueTodo);
    console.log(filteredArrayForProject);

    // populateTodo(uniqueTodo);
    // addToProject(defaultProject, createdTodo);
    // console.log(defaultProject);
    // populateTodo(arrayOftodo);
    // todoDialog.close();
    //display div logic
    // const mainContainer = document.querySelector('.mainContainer');
    // const todoDivTemplate = document.querySelector('.todoDivTemplate')
    // const createdTodoDiv = todoDivTemplate.cloneNode(true);
    // createdTodoDiv.id = '';
    // createdTodoDiv.style.display = 'block';
    // createdTodoDiv.querySelector('.titleTemplate').textContent = 'Title : '+createdTodo.title;
    // createdTodoDiv.querySelector('.descriptionTemplate').textContent =  'Description : '+createdTodo.description;
    // createdTodoDiv.querySelector('.dueDateTemplate').textContent = 'Due Date : '+createdTodo.dueDate;
    // createdTodoDiv.querySelector('.priorityTemplate').textContent = 'Priority : ' + createdTodo.priority;
    // createdTodoDiv.querySelector('.deleteTodoBtn').textContent = 'Delete';
    // createdTodoDiv.querySelector('.deleteTodoBtn').addEventListener('click', () => {
    //   mainContainer.removeChild(createdTodoDiv);
    //   // let backtoobject = localStorage.getItem(stringTodo);
    //   // JSON.parse(backtoobject);
    //   // localStorage.removeItem(backtoobject);
    //   deleteFromLocalStorage(createdTodo);
    // })
    // mainContainer.appendChild(createdTodoDiv);
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
