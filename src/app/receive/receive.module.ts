import { ReceiveComponent } from './receive.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReceiveMaterialModule } from './receive-material.module';
import { ReceiveServicesModule } from './receive-services.module';
import { AmountMaskPipe } from '../shared/amount-mask.pipe';
import { ReceiveRoutingModule } from './receive-routing.module';

@NgModule({
  declarations: [ReceiveComponent],
  imports: [
    CommonModule,
    ReceiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReceiveMaterialModule,
    ReceiveServicesModule,
  ],
  providers: [AmountMaskPipe],
})
export class ReceiveModule {}
