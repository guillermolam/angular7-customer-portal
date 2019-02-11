import { CreateUserMongoService } from './../../../../_services/signup-process-service/create-user-mongo.service';
// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { CookieService }              from 'ngx-cookie-service';
import { FormGroup }                  from '@angular/forms';
import { ActivatedRoute, Router }     from '@angular/router';
import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { UserService }                from '../../../../_services/user.service';
import { ValidateEmailService }       from '../../../../_services/signup-process-service/validate-email.service'
import { User }                       from '../../../../_models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class LoginFormComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
            emailPrefillOnBlur:       string;
            expireInDays:             number = 365;
            loading:                  boolean = false;
            loginForm:                FormGroup;
            returnUrl:                string;
            rememberMe:               boolean = false;
            user:                     User = {};
            private token:  any;
  constructor(
    private _cookieService:           CookieService,
    private activatedRoute:           ActivatedRoute,
    private authenticationService:    AuthenticationService,
    private alertService:             AlertService,
    private ipt:                      FormBaseControlService,
    private regExHelper:              RegExHelper,
    private router:                   Router,
    private userService:              UserService,
    private createUserMongoService: CreateUserMongoService,
    private validateEmailService:     ValidateEmailService
  ) {}

  getCookie(): void {
    if ( this._cookieService.get('remember') ) {
      this.loginForm.setValue({
        loginEmail:                   this._cookieService.get('email'),
        loginPassword:                this._cookieService.get('password'),
      });
    }
  }

  login(): void {
    this.user.email =                 this.loginForm.controls.loginEmail.value;
    this.user.password =              this.loginForm.controls.loginPassword.value;
    this.loading =                    true;
    this.putCookie();

    if (this.user) {
      this.authenticationService
        .login (this.user.email, this.user.password)
        .subscribe (
          (accessToken) => {
            // this.validateEmailService.checkActiveEmail(this.user.email, JSON.parse(accessToken).access_token.access_token).subscribe(()=>{
              localStorage.setItem('currentUser', accessToken);
              this.router.navigate([`/my-insurance`]);
            // },
            // (err)=>{
            //   if (err.status === 400){
            //     this.router.navigate(['/signup','validate-email']);
            //   } else if(err.status === 404){
            //     localStorage.setItem('currentUser', accessToken);
            //     this.alertService.success('Successful Login', true);
            //     this.router.navigate([`/my-insurance`]);
            //     this.createUserMongoService.createMongoUser(this.user.email, this.user.password).subscribe(
            //       ()=>{

            //       }
            //     , (err)=>{

            //     })
            //   }
            // }
          //  )

          },
          (err) => {
            this.alertService.error('INVALID_EMAIL_PASSWORD');
          }
        )
      ;
    }
  }

  onRememberMe(event): void {
    this.rememberMe = event;
  }

  prefillEmailParamater(): void {
    const email = this.loginForm.controls.loginEmail.value,
          emailPattern = this.regExHelper.strictEmailPattern;

    this.emailPrefillOnBlur = emailPattern.test(email) ? email : '';
    this.router.navigate(['/forgotpassword',  this.emailPrefillOnBlur]);
  }

  putCookie(): void {
    if (this.rememberMe) {
      // Cookie valid for 1 Year
      this._cookieService.set('remember', 'yes', this.expireInDays)
      this._cookieService.set('email', this.user.email, this.expireInDays);
      this._cookieService.set('password', this.user.password, this.expireInDays);
    }
  }

  ngOnInit() {
    this.userService.$user.subscribe( (user) => { });
    this.loginForm = this.ipt.toFormGroup(this.inputs);

    // Recover cookie if exists
    this.getCookie();

    // reset login status
    this.authenticationService.logout();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }
}
