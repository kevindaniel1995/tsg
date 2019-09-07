import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { animate, query, style, transition, trigger } from '@angular/animations';
import { ThemeOptions } from '../theme-options';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  animations: [

    trigger('architectUIAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            opacity: 0,
            display: 'flex',
            flex: '1',
            transform: 'translateY(-20px)',
            flexDirection: 'column'

          }),
        ]),
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),

        query(':leave', [
          animate('600ms ease', style({ opacity: 0, transform: 'translateY(-20px)' })),
        ], { optional: true })
      ]),
    ])
  ]
})

export class PagesComponent {
 

  constructor(public globals: ThemeOptions) {}

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }
}




