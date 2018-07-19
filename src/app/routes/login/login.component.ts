import { Component } from '@angular/core';

import { FormBase } from '../../_models/form-base';
import { LoginService } from '../../_services/forms/login/login.service';

@Component({
  selector:     'app-login',
  templateUrl:  './login.component.html',
  styleUrls:    ['./login.component.scss'],
  providers:    [ LoginService ]
})
export class LoginComponent  {

  inputs: any[];
 
  constructor(service: LoginService) {
    this.inputs = service.getInputs();
  }
   

}
