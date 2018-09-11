import { Component, OnInit, Input }     from "@angular/core";
import { Router }                       from "@angular/router";

// --- Components | Services | Models --- //
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { UserService }                  from "../../../../_services/user.service";

@Component({
  selector: 'app-policy-belong-to-another-screen',
  templateUrl: './policy-belong-to-another-screen.component.html',
  styleUrls: ['./policy-belong-to-another-screen.component.scss']
})
export class PolicyBelongToAnotherScreenComponent implements OnInit {
  @Input() userData:                any[];
  policyDate:                       string;
  typeOfAccount:                    string;
  typeOfPolicy:                     string;

  constructor(
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService
  ) { }

  confirmPolicy(): void {
    console.log("confirm stuff");
  }
  
  policyDetails(userData): void {
    switch(userData.policynumbers.type) {
      case "Personal":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_PERSONAL';
      break;
      case "Business":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_BIZ';
      break;
    }
    switch(userData.policynumbers.policy) {
      case "Auto":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_AUTO';
      break;
      case "Home":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_HOME';
      break;
    }
    this.policyDate =               userData.policynumbers.policyDate;
  }

  ngOnInit() {
    this.policyDetails(this.userData);
  }

}
