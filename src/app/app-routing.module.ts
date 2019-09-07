import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';
import { SessionGuard } from './session.guard';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },

  {
    path: '', component: PagesComponent, canActivate: [SessionGuard], children: [
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
  { path: '**', component: PageNotFoundComponent }
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
