import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { NavbarModule } from 'src/app/shared/components/general/navbar/navbar.module';
import { DialogModule } from 'src/app/shared/components/utilities/dialog/dialog.module';
import { FooterModule } from 'src/app/shared/components/general/footer/footer.module';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    NavbarModule, // agregado
    FooterModule, // agregado
    DialogModule, // agregado
  ]
})
export class ViewModule { }
