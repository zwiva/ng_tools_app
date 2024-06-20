import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { MiniBarModule } from '../mini-bar/mini-bar.module';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MiniBarModule // gregado
  ],
  exports:[ // hacer visible
    NavbarComponent
  ]
})
export class NavbarModule { }
