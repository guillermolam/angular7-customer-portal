// --- Angular ---//
import { Component, OnInit, Input, HostListener }     from "@angular/core";
import { CookieService }                from 'ngx-cookie-service';
import { HttpClient }                   from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute }       from "@angular/router";
// --- Components | Services | Models --- //
import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { environment }                  from "../../../../../environments/environment";
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class LoginFormComponent implements OnInit {
  @Input() inputs:                      FormBase<any>[] = [];
  emailPrefillOnBlur:                  	string; 
  expireInDays:                       	number = 365;
  loading:                            	boolean = false;
  loginForm:                          	FormGroup;
  returnUrl:                          	string;
  rememberMe:                         	boolean = false;
  user:                               	User;
  
  constructor(
    private _cookieService:           	CookieService,
    private authenticationService:    	AuthenticationService,
    private alertService:             	AlertService,
    private fb:                       	FormBuilder,
    private http:                     	HttpClient,
    private ipt:                      	FormBaseControlService,
    private route:                    	ActivatedRoute,
    private router:                   	Router,
    private userService:              	UserService
  ) {}
  
  getCookie(): void{
    this.user =                     		new User();
    if (this._cookieService.get("remember")) {
      this.user.email =                 this._cookieService.get("email");
      this.user.password =              this._cookieService.get("password");
    }
  }

  login(): void{   
    this.user =                     		new User();
    this.user.email =               		this.loginForm.value.loginEmail;
    this.user.password  =           		this.loginForm.value.loginPassword;
    this.loading =                  		true;
    this.putCookie();
    
    if(this.user){
      this.authenticationService
        .login (this.user.email, this.user.password)
        .subscribe (
          (data) => {
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.log(error)
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
        emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		
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
    this.userService.$user.subscribe((user) => { });
    this.loginForm = this.ipt.toFormGroup(this.inputs);

    // Recover cookie if exists
    this.getCookie();

    // reset login status
    this.authenticationService.logout();
  }
}
