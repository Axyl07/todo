// export default class createProject {
//     // static projectArray = [];
//     constructor(projectName) {
//         this.projectName = projectName;
//     }
// }
 function createProject(name,desciption) {
  this.name = name;
  this.desciption = desciption;
  this.todoList = [];
}
//chnage to project list here and add default project first then expot to update option

function addToProject(projectName, todoName) {
  projectName.todoList.push(todoName);
}

function deletefromProject(projectName, todoName) {
  projectName.todoList.pop(todoName);
}

let projectListArray = [];
const defaultProject = new createProject('Default','default tasks');
projectListArray.push(defaultProject);

export { projectListArray,addToProject,deletefromProject,createProject,defaultProject}
