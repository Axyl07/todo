


import { deleteFromLocalStorage } from "./storageController";
import populateSpecificProject from "./populateSpecificProject";

export default function populateProject(filteredProjectArray) {
    const projectDivsArea = document.querySelector('.projectDivsArea')
    const projectDivTemplate = document.querySelector('.projectDivTemplate');
    projectDivsArea.innerHTML = '';
    
    filteredProjectArray.forEach(element => {
        const createdProjectDiv = projectDivTemplate.cloneNode(true);
        createdProjectDiv.id = '';
        createdProjectDiv.style.display = 'block';
        createdProjectDiv.querySelector('.projectTitle').textContent = 'Title : '+element.name;
        createdProjectDiv.querySelector('.projectTitle').addEventListener('click', () => {
            populateSpecificProject(element.name);
        })
        createdProjectDiv.querySelector('.deleteProjectBtn').textContent = 'Delete Project';
        createdProjectDiv.querySelector('.deleteProjectBtn').addEventListener('click', () => {
            projectDivsArea.removeChild(createdProjectDiv);
            deleteFromLocalStorage(element);
          })
          projectDivsArea.appendChild(createdProjectDiv)
    });

}