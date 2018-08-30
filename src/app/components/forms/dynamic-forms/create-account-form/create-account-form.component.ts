import { Component, OnInit, Input }     from "@angular/core";
import { FormGroup }                    from "@angular/forms";
import { HttpClient }                   from "@angular/common/http";
import { Router }                       from "@angular/router";
import {forkJoin} from 'rxjs';

// --- Components | Services | Models --- //
import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

import { TestingService }               from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service';
import { mergeMap } from "rxjs/operators";

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
     /* forkJoin( 
        [
          this.authService.verifyUser(this.userData),
          this.authService.verifyPolicy(this.userData)
        ]
      ).subscribe(results => {
        console.log(results[0])
        console.log(results[1])
      })*/
      this.authService.verifyUser(this.userData)
     /* .pipe(
        mergeMap(data => 
          this.authService.findPolicy(this.userData)
        )
      )
      .subscribe(data => {
        console.log(data);
      });*/
      .subscribe(
        data => {
          this.authService.findPolicy(this.userData)
          .subscribe(
            result => {
              console.log(result);
            }
          )
        },
        err =>{
          console.log(err)
        }
      )
    }
  }

  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
  }

}
