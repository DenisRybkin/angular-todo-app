import { Injectable } from '@angular/core';
import {Todo} from "./todo-item/todo-item.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiTodoService {

  constructor(private client: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com'
  public fetchTodos(): Observable<Todo[]> {
    return this.client.get<Todo[]>(`${this.baseUrl}/todos?_limit=20`)
  }

  public deleteTodo(id: number) {
    return this.client.delete<Todo[]>(`${this.baseUrl}/todos/${id}`)
  }
}
