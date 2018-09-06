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
import { User, Policynumbers }          from "../../../../_models/user";

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreateAccountFormComponent implements OnInit {
  @Input() inputs:                  FormBase<any>[] = [];
  signUpForm:                       FormGroup;
  loading:                          boolean = false;
  user:                             User;

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private ipt:                    FormBaseControlService,
    private http:                   HttpClient,
    private router:                 Router,
    private userData:               UserService
  ) {}


  createUserObject(object, numbers): void {
    if(numbers === null){
      this.user = new User({
        firstName:                  object.signUpFirst_name,
        middleName:                 object.signUpMI_name,
        lastName:                   object.signUpLast_name,
        email:                      object.signUpEmail,
      });
      this.userData.updateUser(this.user);
    }
    else {
      this.user.policynumbers = numbers;
      console.log(this.user);
      this.userData.updateUser(this.user);
    }
  }

  register() {
    this.loading = true;
    this.createUserObject(this.signUpForm.value, null);
    if(this.userData) {
      this.authService.verifyUser(this.userData)
      .subscribe(
        result => {
          this.createUserObject(this.userData, result);
          this.router.navigate(['signup', 'createpassword' ]);
        },
        err =>{
          if(err.status === 400){
            console.log("400", err);
            this.router.navigate(['signup', 'emailinuse' ]);
          }
          else if(err.status === 404){
            console.log("404", err);
            this.router.navigate(['signup', 'addpolicy' ]);
          }
        }
      )
    }
  }

  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
  }

}
