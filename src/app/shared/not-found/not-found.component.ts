import { Component } from '@angular/core';

@Component({
  selector: 'ng7-not-found',
  template: `
    <div class="container">Not found!</div>
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
export class NotFoundComponent {}
