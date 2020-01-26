import { ReceiveComponent } from './receive.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReceiveMaterialModule } from './receive-material.module';
import { ReceiveServicesModule } from './receive-services.module';
import { AmountMaskPipe } from '../shared/amount-mask.pipe';

const routes: Routes = [{ path: '', component: ReceiveComponent }];

@NgModule({
  declarations: [ReceiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ReceiveMaterialModule,
    ReceiveServicesModule,
  ],
  providers: [AmountMaskPipe],
})
export class ReceiveModule {}
