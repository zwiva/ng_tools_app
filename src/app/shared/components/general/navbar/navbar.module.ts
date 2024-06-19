import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { ClockModule } from '../../utilities/clock/clock.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ClockModule
  ],
  exports:[ // hacer visible
    NavbarComponent
  ]
})
export class NavbarModule { }
