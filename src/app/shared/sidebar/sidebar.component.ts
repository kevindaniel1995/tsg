import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/core/shared.service';
import { Menu } from 'src/app/core/model/Menu';
import { NgxSpinnerService } from 'ngx-spinner';
import { ThemeOptions } from 'src/app/theme-options';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public index = 0;
  public menus: Array<Menu>;
  public extraParameter: any;

  constructor(
    public globals: ThemeOptions,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private spinnerService: NgxSpinnerService,
    private router: Router,
    private authenticationService: AuthenticationService) {

  }

  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    this.sharedService.getSharedData().subscribe(data => {
      this.index = 0;
      this.menus = data.data;
      this.spinnerService.hide();
    })

    this.menus = this.authenticationService.getMenu();
    this.extraParameter = ''//this.activatedRoute.snapshot.firstChild.data.extraParameter;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }
  }

  public navigate(menu: Menu) {
    
    const url = menu.object.split('/');

    if (url.length === 1) {
      this.router.navigate([url[0]]);
    } else {
      this.router.navigate([url[0], url[1]]);
    }

  }

  public getIndex() {
    this.index += 1;
    return this.index;
  }
}
