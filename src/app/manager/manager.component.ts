import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-manager',
  template: `
    <app-input-button (submit)="addItem($event)"></app-input-button>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo [item]="todoItem"></app-todo>
      </li>
    </ul>
  `,
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
