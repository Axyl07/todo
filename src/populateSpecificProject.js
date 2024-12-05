import populateTodo from "./populateTodo";
import { todoArray } from "./storageController";
export default function populateSpecificProject(projectName) {
    const uniqueTodo = todoArray.filter((obj, index, self) => index === self.findIndex((value) => value.title === obj.title));
    const filteredArrayForProject = uniqueTodo.filter((elem) => elem.project === projectName);
    console.log(filteredArrayForProject);
    populateTodo(filteredArrayForProject);
}