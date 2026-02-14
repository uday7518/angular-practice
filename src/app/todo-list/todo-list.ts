import { Component } from '@angular/core';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  constructor(public todoService: Todo) {}

  get todos(): TodoItem[] {
    return this.todoService.getTodos();
  }

  delete(id: number) {
    this.todoService.deleteTodo(id);
  }

}
