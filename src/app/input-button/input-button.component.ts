import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button',
  template: `
    <input #inputElementRef
           [value]="title"
           (keyup.enter)="submitValue($event.target.value)">

     <button (click)="submitValue(inputElementRef.value)">
       Enter
     </button>
  `,
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'enter items';

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
