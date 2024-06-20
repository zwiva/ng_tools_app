import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniBarComponent } from './mini-bar.component';

const routes: Routes = [{ path: '', component: MiniBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiniBarRoutingModule { }
