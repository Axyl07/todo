import todo from "./create-todo";
import {
  createProject,
  addToProject,
  deletefromProject,
  projectListArray,
} from "./project";
import addProjectToProjectList from "./addProjectToProjectList";
// import deleteTodo from "./delete-todo";
import changeStatus from "./change-todo-status";
import changePriority from "./change-todo-priority";

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
const defaultProject = createProject();
addToProject(defaultProject, sampleTodo1);
addToProject(defaultProject, sampleTodo2);
projectListArray.push(defaultProject);
// deletefromProject(defaultProject,sampleTodo1)
console.log(typeof defaultProject);
console.log(defaultProject);
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

const createTodo = document.querySelector("#createTodo");
const dialog = document.querySelector("#todoDialog");
createTodo.addEventListener("click", () => {
  dialog.show();
});



updateOptions();
const add = document.querySelector("#add");
add.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#dueDate");
  const priority = document.querySelector("#priority");
  const notes = document.querySelector("#notes");
  const project = document.querySelector("#projectList");

  const createdTodo = new todo(
    project.value,
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    notes.value
  );
  console.log(createdTodo);
  addToProject(defaultProject, createdTodo);
});

function updateOptions() {
  const selectElement = document.querySelector("#projectList");
  //   selectElement.options.length = 0;
  let newOptions = projectListArray;
  newOptions.forEach((option) => {
    const opt = document.createElement("option");
    opt.text = option;
    selectElement.appendChild(opt);
  });
}
// console.log(sampleTodo1);
// console.log(sampleTodo1.notes)
// console.log(sampleTodo1.status)
//  project.push(sampleTodo1, sampleTodo11);
// changeStatus(sampleTodo1, true);
// console.log(sampleTodo1.status);
// console.log(sampleTodo1.priority);
// changePriority(sampleTodo1, 'high');
// console.log("after change priority"+sampleTodo1.priority);
