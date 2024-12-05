import {
  getFromLocalStorage,
  todoArray,
  projectArray,
} from "./storageController";
import populateTodo from "./populateTodo";
import populateProject from "./populateProjects";
import updateOptions from "./updateOptions";
export function init() {
  getFromLocalStorage();
  updateOptions();
  const uniqueTodo = todoArray.filter(
    (obj, index, self) =>
      index === self.findIndex((value) => value.title === obj.title)
  );

  const filteredArrayForProjectDefault = uniqueTodo.filter(
    (elem) => elem.project === "Default"
  );
  populateTodo(filteredArrayForProjectDefault);
  const uniqueProject = projectArray.filter(
    (obj, index, self) =>
      index === self.findIndex((value) => value.name === obj.name)
  );
  console.log(projectArray);
  populateProject(uniqueProject);
  updateOptions();
}
