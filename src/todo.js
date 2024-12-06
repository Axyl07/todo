export class todo {
  constructor(
    project,
    title,
    description,
    dueDate,
    priority,
    notes,
    status = false
  ) {
    this.project = project;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.status = status;
    this.type = "todo";
  }
}

export function updateTodo(todoName,project,title,description,dueDate,priority,notes) {
  todoName.project = project;
  todoName.title = title;
  todoName.description = description;
  todoName.dueDate = dueDate;
  todoName.priority = priority;
  todoName.notes= notes;
}

export function changeTodoStatus(todo, status) {
  if (status == true) {
    todo.status = true;
  } else {
    todo.status = false;
  }
}
export function changeTodoTitle(todo, title){
  todo.title = title;
}
export function changeTodoDueDate(todo, dueDate) {
  todo.dueDate = dueDate
}

export function changeTodoProject(todoName, targetProjectName) {
  todoName.project = targetProjectName;
}
export function changeTodoNotes(todoName, notes) {
  todoName.notes = notes;
}
export function changeTodoDescription(todoName, description) {
  todoName.description = description;
}
export function changeTodoPriority(todo, priority) {
  todo.priority = priority;
}
