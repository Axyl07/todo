export default function deleteFromLocalStorage(item){
    const string = JSON.stringify(item);
    if (localStorage.getItem(string)) {
        localStorage.removeItem(string);
    }
}