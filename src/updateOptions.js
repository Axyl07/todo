// import { projectListArray } from "./project";
import { projectArray } from "./storageController";
// import { defaultProject } from ".";
export default function updateOptions() {
  const selectElement = document.querySelector("#projectList");
  // selectElement.textContent = '';
  let newOptions = projectArray;
  // selectElement.appendChild(defaultProject);
  // selectElement.options.length = 0;
  const uniqueProject = newOptions.filter(
    (obj, index, self) =>
      index === self.findIndex((value) => value.name === obj.name)
  );
  console.log(uniqueProject);
  uniqueProject.forEach((project) => {
    const exists = Array.from(selectElement.children).some(
      (option) => option.textContent === project.name
    );
    if (exists) return;
    const opt = document.createElement("option");
    opt.textContent = project.name;
    opt.value = project.name;
    selectElement.appendChild(opt);
  });
}
