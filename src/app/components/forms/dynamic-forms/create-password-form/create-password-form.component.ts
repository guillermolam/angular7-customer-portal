import { Component, EventEmitter,
  OnInit, Input, Output }             from '@angular/core';
import { FormGroup }                  from '@angular/forms';
import { ActivatedRoute, Params,
  Router }                            from '@angular/router';
import { Observable }                 from 'rxjs';
import { AlertService, FormBase,
  FormBaseControlService }            from 'mapfre-design-library';

// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { User }                       from '../../../../_models/user';
import { UserService }                from '../../../../_services/user.service';

@Component({
  selector: 'app-create-password-form',
  templateUrl: './create-password-form.component.html',
  styleUrls: ['./create-password-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreatePasswordFormComponent implements OnInit {
  @Input()  inputs:                 FormBase<any>[] = [];
  @Input()  userData:               Observable<User>;
            createPasswordForm:     FormGroup;
            email:                  string;
            token:                  string;
            user:                   User = {};
            whereInTheProcess:      string;

  @Output() confirmationOfPasswordCreation:   EventEmitter<boolean> = new EventEmitter();

  constructor(
    private activeRoute:            ActivatedRoute,
    private alertService:           AlertService,
    private authenticationService:  AuthenticationService,
    private ipt:                    FormBaseControlService,
    private router:                 Router,
    private userService:            UserService,
  ) {}

  createNewPassword(): void {
    if (this.whereInTheProcess == 'createpassword') {
      this.createPassword(this.userData);
    }
    else {
      this.updatePassword();
    }
  }

  createPassword(userObject): void {
    userObject.password =           this.createPasswordForm.value.createPassword;
    this.userService.updateUser(userObject);
    this.authenticationService
      .createPassword(this.userService)
      .subscribe (
        (data) => {
          this.router.navigate(['/verifyaccount']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updatePassword(): void {
    this.user.password =              this.createPasswordForm.value.createPassword;
    this.user.email =                 this.email;
    this.authenticationService
      .updatePassword (this.user, this.token)
      .subscribe (
        (data) => {
          this.authenticationService
            .login(this.user.email, this.user.password)
            .subscribe((succ) => {
              this.alertService.success('SUCCESS_FORGOT_PASSWORD', true);
              this.router.navigate(['dashboard']);
            },
            (err) => {
              this.alertService.success('Login has failed', true);
              this.router.navigate(['login']);
            });
        },
        (error) => {
          this.confirmationOfPasswordCreation.emit( false );
          this.alertService.error(error.message);
        }
      );
  }

  ngOnInit() {
    this.createPasswordForm =         this.ipt.toFormGroup(this.inputs);
    // url paramaters for example ?token=token
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.email =                    params.email;
      this.token =                    params.token;
     });

    // route paramaters for example /signup/:parm
    this.activeRoute.params.subscribe((params: Params) => {
      this.whereInTheProcess =        params['parm'];
    });
  }
}
