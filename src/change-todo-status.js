export default function changeStatus (todo,status) {
    if (status == true) {
        todo.status = true;
    } else {
        todo.status = false;
    }
}