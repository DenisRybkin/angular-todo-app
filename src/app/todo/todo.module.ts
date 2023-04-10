import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {FieldsetModule} from "primeng/fieldset";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {TodoService} from "./todo.service";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ApiTodoService} from "./api.service";


@NgModule({
  declarations: [TodoItemComponent,TodoListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FieldsetModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  providers: [TodoService,ApiTodoService],
  exports: [TodoItemComponent,TodoListComponent]
})
export class TodoModule { }
