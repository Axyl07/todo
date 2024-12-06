import "./index.css";

import {
  todo,

} from "./todo";
import {
  createProject,

  addProjectToProjectList,

  projectListArray,
  
} from "./project";

import updateOptions from "./updateOptions";

import {

  addToLocal,
  getFromLocalStorage,
  todoArray,
  projectArray,

} from "./storageController";

import populateTodo from "./populateTodo";
import populateProject from "./populateProjects";
import { init } from "./initPageLoad";
init();
const allButtons = document.querySelectorAll("button");
for (const node of allButtons) {
  node.addEventListener("click", () => {
    updateOptions();
  });
}

updateOptions();

console.log(projectListArray);

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

const closeProjectDialogBtn = document.querySelector("#closeDialog");
closeProjectDialogBtn.addEventListener("click", () => {
  projectDialog.close();
});
const closeTodoDialogBtn = document.querySelector("#closeTodoDialog");
closeTodoDialogBtn.addEventListener("click", () => {
  todoDialog.close();
});
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


const createTodoBtn = document.querySelector("#createTodo");
export const todoDialog = document.querySelector("#todoDialog");
createTodoBtn.addEventListener("click", () => {
  todoDialog.show();
});

export const addTodoBtn = document.querySelector("#addTodo");
addTodoBtn.addEventListener("click", () => {

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
  }
});
