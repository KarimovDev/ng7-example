import { ReceiveComponent } from './receive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ReceiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RouterModule],
})
export class ReceiveRoutingModule {}
