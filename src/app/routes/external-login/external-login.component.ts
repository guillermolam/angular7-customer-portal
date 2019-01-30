import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html',
  styleUrls: ['./external-login.component.scss']
})
export class ExternalLoginComponent implements OnInit, AfterViewInit {

  constructor(
    private auth: AuthService
  ) {
    this.auth.handleAuthentication();
   }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

  ngAfterViewInit(){
  }

  ngOnInit() {
    console.log('isAuthenticated',this.isAuthenticated());
    this.login();
  }


}
