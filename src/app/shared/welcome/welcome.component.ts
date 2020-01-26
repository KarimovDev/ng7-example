import { Component } from '@angular/core';

@Component({
  selector: 'ng7-welcome',
  template: `
    <div class="container">Welcome!</div>
  `,
  styles: [
    `
      .container {
        padding: 40px;
        font-size: 30px;
      }
    `,
  ],
})
export class WelcomeComponent {}
