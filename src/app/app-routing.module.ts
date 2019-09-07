import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';
import { ComercialModule } from './pages/comercial/comercial.module';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },

  {
    path: '', component: PagesComponent, children: [
      { path: '', component: AnalyticsComponent },
      {
        path: 'configuraciones',
        loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationModule)
      },
      {
        path: 'comercial',
        loadChildren: () => import('./pages/comercial/comercial.module').then(m => m.ComercialModule)
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
