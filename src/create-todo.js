
 export default class todo {
     constructor(
        project,
        title,
        description,
        dueDate,
        priority,
        notes,
         status = true || false,

     ) {
         this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
         this.status = status;
         this.type = 'todo';
    }
 }

