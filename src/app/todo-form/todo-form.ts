import { Component } from '@angular/core';
import { Todo as TodoService } from '../todo.model';
import { FormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
    newTask = '';

  constructor(private todoService: TodoService) {}

  add() {
    this.todoService.addTodo(this.newTask);
    this.newTask = '';
  }

  reset() {
    this.todoService.resetTodos();
  }

}
