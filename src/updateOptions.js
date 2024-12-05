// import { projectListArray } from "./project";
import { projectArray } from "./storageController";
// import { defaultProject } from ".";
export default function updateOptions() {
    const selectElement = document.querySelector("#projectList");
    // selectElement.appendChild(defaultProject);
      // selectElement.options.length = 0;
  let newOptions = projectArray;
  const uniqueProject = newOptions.filter(
    (obj, index, self) =>
      index === self.findIndex((value) => value.name === obj.name)
  );
  console.log(uniqueProject);
    uniqueProject.forEach((option) => {
      const opt = document.createElement("option");
      opt.textContent = option.name;
      selectElement.appendChild(opt);
    });
  }