import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { NavbarModule } from 'src/app/shared/components/general/navbar/navbar.module';
import { FooterModule } from 'src/app/shared/components/general/footer/footer.module';
import { MiniBarHomeComponent } from '../mini-bar-home/mini-bar-home.component';
import { DialogModule } from 'src/app/shared/components/utilities/dialog/dialog.module';
import { CardHomeComponent } from '../card-home/card-home.component';
import { TableListModule } from 'src/app/shared/components/utilities/table-list/table-list.module';


@NgModule({
  declarations: [ // componentes exclusivos de la vista (no reutilizables)
    ViewComponent,
    MiniBarHomeComponent, // exclusivo
    CardHomeComponent, // exclusivo
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    NavbarModule, // agregado
    FooterModule, // agregado
    DialogModule, // agregado
    TableListModule, // agregado
  ],
})
export class ViewModule { }
