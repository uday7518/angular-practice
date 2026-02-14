import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
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
