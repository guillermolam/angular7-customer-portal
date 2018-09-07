import { Component, EventEmitter, OnInit, Input, Output }   from "@angular/core";
import { FormGroup }                  from "@angular/forms";
import { ActivatedRoute, Params, Router }     from "@angular/router";
import { Observable }                 from 'rxjs';

// --- Components | Services | Models --- //
import { AlertService }               from '../../../../_services/alert.service';
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                   from '../../../../_models/form-base';
import { FormBaseControlService }     from '../../../../_services/form-base-control.service';
import { User }                       from '../../../../_models/user';
import { UserService }                from '../../../../_services/user.service';

import { TestingService }             from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service'
@Component({
  selector: 'app-create-password-form',
  templateUrl: './create-password-form.component.html',
  styleUrls: ['./create-password-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreatePasswordFormComponent implements OnInit {
  @Input() inputs:                  FormBase<any>[] = [];
  @Input() userData:                Observable<User>;
  createPasswordForm:               FormGroup;
  email:                            string;
  token:                            string;
  user:                             User;
  whereInTheProcess:                string;

  @Output() confirmationOfPasswordCreation:   EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private activeRoute:            ActivatedRoute,
    private authenticationService:  AuthenticationService,
    private alertService:           AlertService,
    private ipt:                    FormBaseControlService,
    private router:                 Router,
    private userService:            UserService,
    private testingService: TestingService
  ) {}

  createNewPassword(): void {
    /*if (this.whereInTheProcess == "createpassword") {
      this.createPassword(this.userData);
    }
    else {
      this.updatePassword();
    }*/

    this.updatePassword();
  }

  createPassword(userObject): void {
    userObject.password = this.createPasswordForm.value.createPassword;
    this.userService.updateUser(userObject);
    this.authenticationService
      .createPassword(this.userService)
      .subscribe (
        data => {
         this.router.navigate(['signup', 'activateyouraccount' ] );
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePassword(): void {
    this.user = new User();
    this.user.password = this.createPasswordForm.value.createPassword;
    this.user.email = this.email.toLowerCase();
    this.authenticationService
      .updatePassword (this.user, this.token)
      .subscribe (
        (data) => {
          this.confirmationOfPasswordCreation.emit( true );
        },
        (error) => {
          console.log(error);
          this.confirmationOfPasswordCreation.emit( false );
          this.alertService.error(error.message);
        }
      );
  }

  ngOnInit() {
    this.createPasswordForm = this.ipt.toFormGroup(this.inputs);
    
    //url paramaters for example ?token=token
    this.activeRoute.queryParams.subscribe((params) => { 
      this.email = params.email;
      this.token = params.token;
     });
    
    //route paramaters for example /signup/:parm
    /*this.activeRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess = params['parm'];
    });*/
  }
}
