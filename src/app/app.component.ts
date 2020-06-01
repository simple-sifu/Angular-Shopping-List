import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <app-manager></app-manager>
  `
})
export class AppComponent {
  title = 'Angular Shopping List';
}
