import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { StartComercialComponent } from './start-comercial/start-comercial.component';
import { RouterComponent } from './router.component';

const routes: Routes = [
  {
    path: '', component: RouterComponent, children: [
      { path: 'dar-inicio', pathMatch: 'full', component: StartComercialComponent }
    ]
  }

];

@NgModule({
  declarations: [
    StartComercialComponent,
    RouterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class ComercialModule { }
