import { Component }                  from "@angular/core";
import { CreateAccountService }       from '../../../_services/forms/create-account/create-account-service.service';

@Component({
  selector: 'app-signup-process',
  templateUrl: "./signup-process.component.html",
  styleUrls: ["./signup-process.component.scss"],
  providers: [ CreateAccountService ]
})

export class SignupProcessComponent {
  inputs: any[];
 
  constructor(service: CreateAccountService) {
    this.inputs = service.getInputs();
  }
}