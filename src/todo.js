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

export function changeTodoStatus(todo, status) {
  if (status == true) {
    todo.status = true;
  } else {
    todo.status = false;
  }
}
export function changeTodoProject(todoName, targetProjectName) {
  todoName.project = targetProjectName;
}

export function changeTodoPriority(todo, priority) {
  todo.priority = priority;
}
