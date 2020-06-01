import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <h1>
      {{ title }}
    </h1>
    <p>Get it done today</p>
    <p>No excuses</p>
  `
})
export class HeaderComponent {
  title = 'Angular Shopping List';
}