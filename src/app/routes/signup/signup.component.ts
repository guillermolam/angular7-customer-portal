import { Component }                  from "@angular/core";
import { CreateAccountService }       from '../../_services/forms/create-account/create-account-service.service';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  providers: [ CreateAccountService ]
})

export class SignupComponent {
  inputs: any[];
 
  constructor(service: CreateAccountService) {
    this.inputs = service.getInputs();
  }
}
