import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private spinnerService: NgxSpinnerService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      userLogonName: new FormControl(''),
      password: new FormControl('')
    })
  }

  public onLogin() {
    this.spinnerService.show();
    this.authentication.login$(this.form.value).subscribe(data => {
      this.authentication.setKey('co', data);      
      this.router.navigate(['']);
    });
  }
}
