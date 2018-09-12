import { Component, OnInit, Input }     from "@angular/core";
import { Router }                       from "@angular/router";

// --- Components | Services | Models --- //
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { AlertService }                 from "../../../../_services/alert.service";
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

@Component({
  selector: 'app-policy-belong-to-another-screen',
  templateUrl: './policy-belong-to-another-screen.component.html',
  styleUrls: ['./policy-belong-to-another-screen.component.scss']
})
export class PolicyBelongToAnotherScreenComponent implements OnInit {
  @Input()  userData:               any[];
            policyDate:             string;
            policyNumber:           string;
            typeOfAccount:          string;
            typeOfPolicy:           string;
            user:                   User;

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService
  ) { }

  createUserObject(object): void {
    this.user = {
      firstName:                  object.editFirst_name,
      middleName:                 object.editMI_name,
      lastName:                   object.editLast_name,
      email:                      object.editEmail,
      policynumbers:              object.editPolicyNumber
    };
    this.userService.updateUser(this.user);
  }

  confirmPolicy(): void {
    this.authService
      .confirmPolicyAndAccount(this.user)
      .subscribe(
        data => {
          console.log("success")
          this.router.navigate(['/signup', 'createpassword']);
        },
        err => {
          this.alertService.error('There was an issue');
        }
      );
  }
  
  policyDetails(userData): void {
    switch(userData.policynumbers.type) {
      case "Personal":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_PERSONAL';
      break;
      case "Business":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_BIZ';
      break;
      default:
      this.typeOfAccount =          'PERSONAL';
      break;
    }
    switch(userData.policynumbers.policy) {
      case "Auto":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_AUTO';
      break;
      case "Home":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_HOME';
      break;
      default:
      this.typeOfPolicy =           'AUTO';
      break;
    }
    this.policyDate =               userData.policynumbers.policyDate? new Date(userData.policynumbers.policyDate).toLocaleDateString("en-US") : new Date('11/01/2018').toLocaleDateString("en-US");
    this.policyNumber =             userData.policynumbers.policynumber? userData.policynumbers.policynumber : '123456';
  }

  ngOnInit() {
    this.policyDetails(this.userData);
  }

}
