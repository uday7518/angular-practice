import { Injectable } from '@angular/core';

export interface TodoItem {
  id: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class Todo {
 private todos: TodoItem[] = [
    { id: 1, text: 'Task1' }   // optional default
  ];

  getTodos(): TodoItem[] {
    return this.todos;
  }

  addTodo(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    this.todos.push({
      id: Date.now(),
      text: trimmed,
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  resetTodos() {
    this.todos = [];
  }
}
