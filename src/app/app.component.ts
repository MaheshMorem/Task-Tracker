import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracker';
  taskField: any;
  taskArray: any[] = [];
  todo: any[] = [];
  completedTasks: any[] = [];
  inProcess: any[] = [];

  addItem(){
    if(this.taskField == undefined){alert("Task is empty")}
    else{
      const taskModal = {
        taskName: "",
        boardName: ""
      }
      taskModal.taskName = this.taskField;
      taskModal.boardName = "todo";
      this.taskArray.push(taskModal);
      this.todo.push(taskModal);
    }
  }
  Todo_completedList(i: number){
    this.completedTasks.push(this.todo[i]);
    this.todo.splice(i,1);
  }
  Todo_InProcess(i: number){
    this.inProcess.push(this.todo[i]);
    this.todo.splice(i,1);
  }
  inProcess_Todo(i: number){
    this.todo.push(this.inProcess[i]);
    this.inProcess.splice(i,1);
  }
  inProcess_done(i: number){
    this.completedTasks.push(this.inProcess[i]);
    this.inProcess.splice(i,1);
  }
  done_todo(i: number){
    this.todo.push(this.completedTasks[i])
    this.completedTasks.splice(i,1);
  }
  done_inProcess(i: number){
    this.inProcess.push(this.completedTasks[i])
    this.completedTasks.splice(i,1);

  }
}
