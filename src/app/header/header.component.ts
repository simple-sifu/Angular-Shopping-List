import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
  // template: `
  //   <h1>
  //     {{ title }}
  //   </h1>
  //   <p>Get it done today</p>
  //   <p>No excuses</p>
  // `
})
export class HeaderComponent {
  title = 'Angular Shopping List';
}