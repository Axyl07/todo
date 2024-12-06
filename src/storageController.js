
export function addToLocal(item) {
  const stringItem = JSON.stringify(item);
  localStorage.setItem(stringItem, stringItem);
}
export function deleteFromLocalStorage(item) {
  const string = JSON.stringify(item);
  if (localStorage.getItem(string)) {
    localStorage.removeItem(string);
  }
}



let todoArray = [];
let projectArray = [];

export function getFromLocalStorage() {

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); 
    const value = localStorage.getItem(key);
    const parsedValue = JSON.parse(value); 

    if (parsedValue && parsedValue.type === "project") {
      projectArray.push(parsedValue);
    } else if (parsedValue && parsedValue.type === "todo") {
      todoArray.push(parsedValue);


    }
  }
 
}

export { todoArray, projectArray };
