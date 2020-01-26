import { ReceiveComponent } from './receive.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitModule } from '../shared/ui-kit.module';

const routes: Routes = [{ path: '', component: ReceiveComponent }];

@NgModule({
  declarations: [ReceiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UiKitModule,
  ],
})
export class ReceiveModule {}
