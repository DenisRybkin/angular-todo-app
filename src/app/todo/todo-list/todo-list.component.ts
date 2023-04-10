import { Component } from '@angular/core';
import {Todo} from "../todo-item/todo-item.component";
import {TodoService} from "../todo.service";
import {ApiTodoService} from "../api.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private todoService: TodoService, private api: ApiTodoService) {
  }
  search: string = '';

  title = ''

  ngOnInit() {
    this.api.fetchTodos().subscribe(data => this.todoService.setTodos = data)
  }

  get counterText() {
    return `My To-Do list: ${this.currentTodos.length}`
  }
  get currentTodos(): Todo[] {
    const todos = this.todoService.getTodos
    return todos.filter(item => item.title.toLowerCase().includes(this.search))
  }

  addTodo(todo: Omit<Todo, "id">) {
    this.title = ''
    return this.todoService.addTodo(todo)
  }

}
