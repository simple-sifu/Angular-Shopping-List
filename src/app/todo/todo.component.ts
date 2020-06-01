import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from './../interfaces/todo-item';

@Component({
  selector: 'todo',
  template: `
    {{ item.todoValue }}
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() item: TodoItem;

  // constructor() { }

  ngOnInit() {
  }

}
