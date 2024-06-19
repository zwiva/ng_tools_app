import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {
  //   path: 'home2',
  //   loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
 