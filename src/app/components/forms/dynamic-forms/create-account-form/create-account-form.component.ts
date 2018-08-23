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

  register() {
    this.loading = true;
    this.userData.updateUser(this.signUpForm.value);
    if(this.userData) {
      this.testingService
        .testingJsonObject(this.userData)
        .subscribe(
          data => {
            this.router.navigate(['signup', 'createpassword'  ] )
          },
          err => {
            console.log(err);
            this.router.navigate(['signup', 'emailalreadyinuse'  ] )
          },
          () => {
            console.log("completed")
          }
        );
     /*this.authService
        .verifyUser(this.userData)
        .subscribe(
          data => {
            console.log(data)
            this.loading = false;
            this.router.navigate(['signup', 'createpassword'  ] );
          },
          err => {
            console.log(err);
            this.loading = false;
            this.router.navigate(['signup', 'emailalreadyinuse'  ] );
          },
          {
            console.log("completed")
          }
          
        );*/
    }
  }

 
  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
  }

}
