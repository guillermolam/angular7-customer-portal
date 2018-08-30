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
      this.userData.updateUser(this.user);
    }
    else {
     this.user.policyNumber['policyNumber'] = policyNumber;
     this.userData.updateUser(this.user);
    }
  }

  register() {
    this.loading = true;
    this.createUserObject(this.signUpForm.value, null);
    if(this.userData) {
      this.authService
        .verifyUser(this.userData)
        .flatMap(res => {
          //If the server recives a 200 then the email was found.
          console.log("res", res)
          if(res.status !== 400) {
            
            return res;
          }
          //If the server sends a responce not of 200 then the second service call will happen
          //this one will check if there is a policy. If there the server will respond with a
          //200. That is why we are checking for a policyNumber in the success part of subscribe
          else {
            console.log("res on error", res)
            console.log(this.userData)
            return this.authService.verifyPolicy(this.userData);
          }
        }).subscribe(
          data => {
            this.loading = false;
            //If a policy number was found then add it to the user object and then the userData Subscription
            //After that redirect to the createpassword screen.
            if(data['policyNumber']['policyNumber'] != '' || data['policyNumber']['policyNumber'] !== undefined ){
              this.user.policyNumber = data['policyNumber']['policyNumber'];
              this.userData.updateUser(this.user);
              this.router.navigate(['signup', 'createpassword' ]);
            }
            else {
              console.log('data Email in use',data)
              this.router.navigate(['signup', 'emailinuse' ]);
            }
          },
          err => {
            this.loading = false;
            console.log("this is an error error", err);
            console.log("the userdata subscription ovservable",this.userData)
            this.router.navigate(['signup', 'createpassword' ]);
            
          },
          () => {
            console.log("Calls are completed");
          }
        );
      ;
    }
  }

  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
  }

}
