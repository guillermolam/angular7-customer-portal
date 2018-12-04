import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { LoginService } from '../../_services/forms/login/login.service';

@Component({
  selector:     'app-login',
  templateUrl:  './login.component.html',
  styleUrls:    ['./login.component.scss'],
  providers:    [ LoginService ]
})
export class LoginComponent  {

  inputs: any[];
 
  constructor(service: LoginService, private router: Router) {
    this.inputs = service.getInputs();
  }
   
  redirectToForgotPassword(){
    this.router.navigate(['/forgotpassword','email@xyz.com']);
  }

}
