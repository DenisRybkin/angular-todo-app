import { Injectable } from '@angular/core';
import {Todo} from "./todo-item/todo-item.component";
import {map} from "rxjs";
import {ApiTodoService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: Todo[] = []

  set setTodos(todos: Todo[]) {
    this.todos = todos
  }
  get getTodos(): Todo[] {
    return this.todos
  }

  get items(): Todo[] {
    return this.todos.filter(item => item.title.toLowerCase().includes(''))
  }

  public addTodo(todo: Omit<Todo, "id">) {
    this.todos.unshift({...todo, id: this.todos.length})
  }

  public deleteTodo(id: number) {
    this.todos = this.todos.filter(item => item.id != id)
  }
}
