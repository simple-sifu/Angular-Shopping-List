import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'input-button',
  template: `
    <input #inputElementRef
           placeholder="enter items"
           (keyup.enter)="submitValue($event.target.value)">

     <button (click)="submitValue(inputElementRef.value)">
       Enter
     </button>
  `,
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitValue(inputValue: string) {
    this.submit.emit(inputValue);
  }
}
