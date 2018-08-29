import { Component, OnInit, Input }     from "@angular/core";
import { FormGroup }                    from "@angular/forms";
import { HttpClient }                   from "@angular/common/http";
import { Router }                       from "@angular/router";

// --- Components | Services | Models --- //
import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

import { TestingService }               from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreateAccountFormComponent implements OnInit {
  @Input() inputs:                  FormBase<any>[] = [];;
  signUpForm:                       FormGroup;
  loading:                          boolean = false;
  user:                             User;

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private ipt:                    FormBaseControlService,
    private http:                   HttpClient,
    private router:                 Router,
    private userData:               UserService,
    private testingService:         TestingService
  ) {}

  createUserObject(object, policyNumber): void {
    if(policyNumber === null){
      this.user = new User({
        firstName:      object.signUpFirst_name,
        middleName:     object.signUpMI_name,
        lastName:       object.signUpLast_name,
        email:          object.signUpEmail,
      });
    }
    else {
     this.user.policyNumber['policyNumber'] = policyNumber;
    }
    this.userData.updateUser(this.user);
  }

  register() {
    this.loading = true;
    this.createUserObject(this.signUpForm.value, null);
    if(this.userData) {
      this.authService
        .verifyUser(this.userData)
        .subscribe(
          data => {
            this.loading = false;
            this.createUserObject(this.user, data[0].policynumber);
            this.router.navigate([ 'signup', 'createpassword' ]);
          },
          err => {
            console.log(err);
            this.loading = false;
            if(err == "Error: 204") {
              this.router.navigate([ 'signup', 'addpolicy' ]);
            }
            else {
              this.router.navigate([ 'signup', 'emailinuse' ]);
            }
          }
        )
      ;
    }
  }

  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
  }

}
