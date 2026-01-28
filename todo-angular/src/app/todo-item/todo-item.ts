import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() todo!: Todo;

  @Output() toggle = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();


  onToggle() {
    this.toggle.emit(this.todo.id);
  }

  onDelete() {
    this.removeTodo.emit(this.todo.id);
  }

}

