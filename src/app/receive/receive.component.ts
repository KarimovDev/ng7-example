import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ng7-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
})
export class ReceiveComponent implements OnInit {
  public limitCtrl = new FormControl('', {
    validators: [Validators.required, Validators.min(0)],
  });

  public receiveClick() {
    console.log(this.limitCtrl.value);
  }

  ngOnInit() {
    this.limitCtrl.valueChanges.subscribe(el => console.log(el));
  }
}
