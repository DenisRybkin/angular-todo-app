import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from "../todo.service";

export type Todo = {
  id: number
  title: string
  description: string
  completed: boolean
  /*onDelete: (id: number) => void*/
}
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo
  constructor(private todoService: TodoService) {
  }

  public deleteTodo(id:number) {
    this.todoService.deleteTodo(id)
  }
}
