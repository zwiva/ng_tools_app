import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniBarRoutingModule } from './mini-bar-routing.module';
import { MiniBarComponent } from './mini-bar.component';
import { ClockModule } from '../../utilities/clock/clock.module';


@NgModule({
  declarations: [
    MiniBarComponent
  ],
  imports: [
    CommonModule,
    MiniBarRoutingModule,
    ClockModule
  ],
  exports: [
    MiniBarComponent,
  ]
})
export class MiniBarModule { }
