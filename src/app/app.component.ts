import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ title }}
    </h1>
    <p>Get it done today</p>
    <p>No excuses</p>

    <app-manager></app-manager>
  `
})
export class AppComponent {
  title = 'Shopping List';
}
