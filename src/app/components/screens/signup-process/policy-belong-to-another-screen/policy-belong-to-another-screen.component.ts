import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

// --- Components | Services | Models --- //
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { AlertService }                 from '../../../../_services/alert.service';
import { PolicyDetails }                from '../../../../_models/policy-details';
import { UserService }                  from '../../../../_services/user.service';
import { User }                         from '../../../../_models/user';

@Component({
  selector: 'app-policy-belong-to-another-screen',
  templateUrl: './policy-belong-to-another-screen.component.html',
  styleUrls: ['./policy-belong-to-another-screen.component.scss']
})
export class PolicyBelongToAnotherScreenComponent implements OnInit {
  @Input()  userData:               User;
            policyDate:             string;
            policyDetail:           PolicyDetails[];
            policyNumber:           string;
            typeOfAccount:          string;
            typeOfPolicy:           string;
            user:                   User = {};

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService
  ) { }

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

  createUserObject(formValue): void {
    this.policyDetail =          [{ policynumber:{ policynumber: formValue.editPolicyNumber } }];
    this.user = {
      firstName:                    formValue.editFirst_name,
      middleName:                   formValue.editMI_name,
      lastName:                     formValue.editLast_name,
      email:                        formValue.editEmail,
      policyDetails:                this.policyDetail
    };
    this.userService.updateUser(this.user);
  }
  
  policyDetails(userData): void {
    switch(userData.accountType) {
      case "Personal":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_PERSONAL';
      break;
      case "Business":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_BIZ';
      break;
      default:
        this.typeOfAccount =         'PERSONAL';
      break;
    }
    switch(userData.policyDetails.policyType) {
      case "AUTO":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_AUTO';
      break;
      case "HOME":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_HOME';
      break;
      default:
      this.typeOfPolicy =           'AUTO';
      break;
    }
    this.policyDate =               userData.policyDetails[0].effDate;
    this.policyNumber =             userData.policyDetails[0].policynumber.policynumber;
  }

  ngOnInit() {
    this.policyDetails(this.userData);
  }

}
