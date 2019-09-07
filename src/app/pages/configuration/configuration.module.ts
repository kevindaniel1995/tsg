import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, Router } from '@angular/router';
import { InitialParamsComponent } from './initial-params/initial-params.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterComponent } from './router.component';


const routes: Routes = [
  {
    path: '', component: RouterComponent, children: [
      { path: 'parametros-iniciales', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'ingreso-fecha-campana', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'cargar-zonas-a-campana', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'asignar-zona-a-dia-habil', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'cargar-zonas-a-campana', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'grupo-devoluciones', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'asignar-zonas-a-grupos-de-cambios-y-devoluciones', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'parametros-fecha', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'parametros-cambios-de-fechas', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'configuracion-998', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'configuracion-ciclo-de-ventas', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'generar-fechas', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'oficializar-calendario', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'ingresar-zona', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'consultar-y-modificar-fechas', pathMatch: 'full', component: InitialParamsComponent },
      { path: 'dar-inicio', pathMatch: 'full', component: InitialParamsComponent }            
    ]
  }

];

@NgModule({
  declarations: [
    InitialParamsComponent,
    RouterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ConfigurationModule { }
