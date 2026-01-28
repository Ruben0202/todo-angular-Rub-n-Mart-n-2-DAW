import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './todo-item/todo-item';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  title = 'TODO List Angular';

  todos: Todo[] = [];
  nextId = 1;
  newTodoText = '';
  currentFilter = 'all';

  addTodo() {
    if (this.newTodoText.trim() === '') return;

    this.todos.push({
      id: this.nextId,
      text: this.newTodoText.trim(),
      completed: false
    });

    this.nextId++;
    this.newTodoText = '';
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
  }

  getFilteredTodos(): Todo[] {
    if (this.currentFilter === 'active') {
      return this.todos.filter(t => !t.completed);
    } else if (this.currentFilter === 'completed') {
      return this.todos.filter(t => t.completed);
    } else {
      return this.todos;
    }
  }

  getActiveCount(): number {
    return this.todos.filter(t => !t.completed).length;
  }
}
