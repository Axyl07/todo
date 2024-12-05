import { deleteFromLocalStorage } from "./storageController";
import populateSpecificProject from "./populateSpecificProject";

export default function populateProject(filteredProjectArray) {
  const projectDivsArea = document.querySelector(".projectDivsArea");
  const projectDivTemplate = document.querySelector(".projectDivTemplate");
  projectDivsArea.innerHTML = "";

  filteredProjectArray.forEach((element) => {
    const createdProjectDiv = projectDivTemplate.cloneNode(true);
    createdProjectDiv.id = "";
    createdProjectDiv.style.display = "flex";
    createdProjectDiv.querySelector(".projectTitle").textContent = element.name;
    createdProjectDiv
      .querySelector(".projectTitle")
      .addEventListener("click", () => {
        populateSpecificProject(element.name);
      });
    createdProjectDiv.querySelector(".deleteProjectBtn").textContent =
      "Delete Project";
    createdProjectDiv
      .querySelector(".deleteProjectBtn")
      .addEventListener("click", () => {
        deleteFromLocalStorage(element);
        projectDivsArea.removeChild(createdProjectDiv);
      });
    projectDivsArea.appendChild(createdProjectDiv);
  });
}
