// export default function getfromLocal() {
//     for (const key in localStorage) {
//         if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
//             const element = localStorage[key];
//             console.log(element);
//         }
//     }
// }

// export default function getFromLocalStorage() {
//     let todoArray = [];
//     let projectArray = [];
//     for (const type in localStorage) {
//         if (type === 'project') {
//             const value = localStorage.getItem(type);
//             projectArray.push(value);
//             console.log(projectArray);
//         }if (type === 'todo') {
//             const value = localStorage.getItem(type);
//             todoArray.push(value);
//             console.log(todoArray);
//         }
//     }
// }
import populateTodo from "./populateTodo";

export default function getFromLocalStorage() {
    let todoArray = [];
    let projectArray = [];
    
    // Iterate over all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key at the current index
        const value = localStorage.getItem(key); // Get the value associated with that key
        const parsedValue = JSON.parse(value); // Parse the value if it's an object
        
        if (parsedValue && parsedValue.type === 'project') {
            projectArray.push(parsedValue); // Push to projectArray if type is 'project'
        } else if (parsedValue && parsedValue.type === 'todo') {
            todoArray.push(parsedValue);
            populateTodo(todoArray);// Push to todoArray if type is 'todo'
        }
    }

    console.log(projectArray); // Display projectArray
    console.log(todoArray); // Display todoArray
}
// getFromLocalStorage();