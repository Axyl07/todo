// export default function getfromLocal() {
//     for (const key in localStorage) {
//         if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
//             const element = localStorage[key];
//             console.log(element);
//         }
//     }
// }

export default function getFromLocalStorage() {
    let todoArray = [];
    let projectArray = [];
    for (const type in localStorage) {
        if (type === 'project') {
            const value = localStorage.getItem(type);
            projectArray.push(value);
            console.log(projectArray);
        }if (type === 'todo') {
            const value = localStorage.getItem(type);
            todoArray.push(value);
            console.log(todoArray);
        }
    }
}