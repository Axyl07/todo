import { projectListArray } from "./project";
// import { defaultProject } from ".";
export default function updateOptions() {
    const selectElement = document.querySelector("#projectList");
    // selectElement.appendChild(defaultProject);
      selectElement.options.length = 0;
    let newOptions = projectListArray;
    newOptions.forEach((option) => {
      const opt = document.createElement("option");
      opt.textContent = option.name;
      selectElement.appendChild(opt);
    });
  }