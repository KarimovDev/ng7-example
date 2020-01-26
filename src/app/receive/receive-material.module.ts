import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class ReceiveMaterialModule {}
