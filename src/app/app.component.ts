import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Shopping List
    </h1>
    <h2>Get it done today</h2>
    <h2>No excuses</h2>

    <app-manager></app-manager>
  `
})
export class AppComponent {
  title = 'My To Do List APP';
}
