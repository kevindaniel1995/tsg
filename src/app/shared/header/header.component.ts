import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Company } from 'src/app/core/model/Company';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/core/shared.service';
import { ThemeOptions } from 'src/app/theme-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public companySelected:Company = new Company();
  public companies:Array<Company> = [];

  constructor(
    public globals: ThemeOptions,
    private authenticationService: AuthenticationService,
    private spinnerService: NgxSpinnerService,
    private sharedService:SharedService) {
  }

  @HostBinding('class.isActive')
  get isActiveAsGetter() {
    return this.isActive;
  }

  ngOnInit(){
    
    this.companies = this.authenticationService.getCompanies();

  }
  isActive: boolean; 

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  toggleHeaderMobile() {
    this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
  }

  public onChangeCountry(){
    this.spinnerService.show();
    this.authenticationService.getCountrySession( this.companySelected ).subscribe( data =>{
      this.sharedService.sharedData( data );      
    });
  }
}
