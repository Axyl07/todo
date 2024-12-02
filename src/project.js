// export default class createProject {
//     // static projectArray = [];
//     constructor(projectName) {
//         this.projectName = projectName;
//     }
// }
export let projectListArray = [];
export function createProject() {
  return [];
}

export function addToProject(projectName, todoName) {
  projectName.push(todoName);
}

export function deletefromProject(projectName, todoName) {
  projectName.pop(todoName);
}
