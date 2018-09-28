// --- Angular ---//
import { Component, Input, OnInit }     from "@angular/core";
import { CookieService }                from 'ngx-cookie-service';
import { FormGroup }                    from "@angular/forms";
import { Router }                       from "@angular/router";
// --- Components | Services | Models --- //
import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { RegExHelper }                  from '../../../../_helpers/regex-helper';
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class LoginFormComponent implements OnInit {
  @Input()  inputs:                     FormBase<any>[] = [];
            emailPrefillOnBlur:         string; 
            expireInDays:               number = 365;
            loading:                    boolean = false;
            loginForm:                  FormGroup;
            returnUrl:                  string;
            rememberMe:                 boolean = false;
            user:                       User = {};
  
  constructor(
    private _cookieService:             CookieService,
    private authenticationService:      AuthenticationService,
    private alertService:               AlertService,
    private ipt:                        FormBaseControlService,
    private regExHelper:                RegExHelper,
    private router:                     Router,
    private userService:                UserService
  ) {}
  
  getCookie(): void {
    if ( this._cookieService.get("remember") ) {
      this.loginForm.setValue({
        loginEmail:                   this._cookieService.get("email"),
        loginPassword:                this._cookieService.get("password"),
      })
    }
  }

  login(): void {

    this.user.email =                   this.loginForm.controls.loginEmail.value;
    this.user.password  =               this.loginForm.controls.loginPassword.value;
    this.loading =                      true;
    this.putCookie();
    
    if(this.user) {
      this.authenticationService
        .login (this.user.email, this.user.password)
        .subscribe (
          data => {
            this.router.navigate(['/dashboard']);
          },
          err => {
            console.log(err)
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
		let email = this.loginForm.controls.loginEmail.value,
        emailPattern = this.regExHelper.strictEmailPattern;
		
		this.emailPrefillOnBlur = emailPattern.test(email) ? email : '';
		this.router.navigate(['/forgotpassword'],  { queryParams: { emailPrefill: this.emailPrefillOnBlur } });
	}
  
  putCookie(): void {
    if(this.rememberMe) {
			// Cookie valid for 1 Year
      this._cookieService.set("remember", "yes", this.expireInDays)
      this._cookieService.set("email", this.user.email, this.expireInDays);
      this._cookieService.set("password", this.user.password, this.expireInDays);
    }
  }

  ngOnInit() {
    this.userService.$user.subscribe(user => { });
    this.alertService.getMessage().subscribe(
      message => {
        if(message.type == 'error'){
          this.alertService.error(message.text);
        }
        else {
          this.alertService.success(message.text);
        }
      },
      error => console.log("subscribe error",error)
    );
    this.loginForm = this.ipt.toFormGroup(this.inputs);

    // Recover cookie if exists
    this.getCookie();

    // reset login status
    this.authenticationService.logout();
  }
}
