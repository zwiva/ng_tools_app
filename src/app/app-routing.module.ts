import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ // quitar los shared
  { path: 'home', loadChildren: () => import('./features/home/components/view/view.module').then(m => m.ViewModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/components/view/view.module').then(m => m.ViewModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/components/view/view.module').then(m => m.ViewModule) },
  { path: 'randomizer', loadChildren: () => import('./features/randomizer/components/view/view.module').then(m => m.ViewModule) },
  { path: 'priorizer', loadChildren: () => import('./features/priorizer/components/view/view.module').then(m => m.ViewModule) },
  { path: 'chronomizer', loadChildren: () => import('./features/chronomizer/components/view/view.module').then(m => m.ViewModule) },
  { path: 'routinizer', loadChildren: () => import('./features/routinizer/components/view/view.module').then(m => m.ViewModule) },
  { path: 'temporizer', loadChildren: () => import('./features/temporizer/components/view/view.module').then(m => m.ViewModule) },
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