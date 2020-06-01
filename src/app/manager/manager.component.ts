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
    {todoValue: 'Notebook'},
    {todoValue: 'Jello'},
    {todoValue: 'Spinach'},
    {todoValue: 'Rice'},
    {todoValue: 'Birthday Cake'},
    {todoValue: 'Candles'},
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(todoValue: string) {
    this.todoList.push({ todoValue });
  }
}
