import { Component } from '@angular/core';
import {Todo} from "./todo/todo-item/todo-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: string = '';

  todos: Todo[] = [
    { id: 1, title: 'task', description: 'do some eat', completed: true},
    { id: 2, title: 'task', description: 'do some code', completed: false},
    { id: 3, title: 'task', description: 'do some sleep', completed: true},
    { id: 4, title: 'task', description: 'do some repeat', completed: true}
  ]
  title: any;

  public get items(): Todo[] {
    return this.items.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
  }

  private handleDelete(id: number) {
    this.todos.filter(item => item.id != id)
  }
}
