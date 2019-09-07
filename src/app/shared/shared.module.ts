import { NgModule } from '@angular/core';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserBoxComponent } from './header/elements/user-box/user-box.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from '../pages/pages.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageTitleComponent,
    SidebarComponent,
    UserBoxComponent,
    PagesComponent,
    PageNotFoundComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageTitleComponent,
    SidebarComponent,
    UserBoxComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    PerfectScrollbarModule,
    NgbModule,
    RouterModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }
  ]
})
export class SharedModule { }
