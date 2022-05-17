import { TaskModel } from './../../models/task.model';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: TaskModel[] = [];
  @Output() taskDeleted = new EventEmitter<TaskModel>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.tasks = this.todoService.getTasks();
    this.todoService.tasksChanged.subscribe((event: TaskModel[]) => {
      this.tasks = event;
    });
  }
  handleDoneChange(task: TaskModel) {
    this.todoService.doneTask(task);
  }

  handleDelete(task: TaskModel) {
    this.todoService.removeTask(task);
  }
  getFormatDate(date: Date) {
    const resDate = new Date(date);
    return `${
      resDate.getDate() >= 10 ? resDate.getDate() : '0' + resDate.getDate()
    }.${
      resDate.getMonth() >= 10
        ? +resDate.getMonth() + 1
        : '0' + (+resDate.getMonth() + 1)
    }.${resDate.getFullYear()} ${
      resDate.getHours() >= 10 ? resDate.getHours() : '0' + resDate.getHours()
    }:${
      resDate.getMinutes() >= 10
        ? resDate.getMinutes()
        : '0' + resDate.getMinutes()
    }`;
  }
}
