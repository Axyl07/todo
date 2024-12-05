// export default class createProject {
//     // static projectArray = [];
//     constructor(projectName) {
//         this.projectName = projectName;
//     }

import { projectArray } from "./storageController";

// }
class createProject { 
  constructor(name, desciption) {
    this.name = name;
    this.desciption = desciption;
     this.todoList = [];
     this.type = 'project';
  }
} 
//chnage to project list here and add default project first then expot to update option

function addToProject(projectName, todoName) {
  projectName.todoList.push(todoName);
}

function deletefromProject(projectName, todoName) {
  projectName.todoList.pop(todoName);
}

let projectListArray = [];
// const defaultProject = new createProject('Default','default tasks');
// projectListArray.push(defaultProject);
// projectArray.push(defaultProject);

export function addProjectToProjectList(projectListArray,projectName) {
  projectListArray.push(projectName);
}

export { projectListArray,addToProject,deletefromProject,createProject}
