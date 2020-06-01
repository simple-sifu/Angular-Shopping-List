import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'manager',
  template: `
    <input-button (submit)="addItem($event)"></input-button>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <todo [item]="todoItem"></todo>
      </li>
    </ul>
  `,
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  todoList: TodoItem[] = [
    {title: 'Notebook'},
    {title: 'Jello'},
    {title: 'Spinach'},
    {title: 'Rice'},
    {title: 'Birthday Cake'},
    {title: 'Candles'},
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
