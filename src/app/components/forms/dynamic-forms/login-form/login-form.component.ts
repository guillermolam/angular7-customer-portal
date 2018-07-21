// --- Angular ---//
import { Component, OnInit, Input }   from "@angular/core";
import { CookieService }              from "angular2-cookie/services/cookies.service";
import { HttpClient }                 from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute }     from "@angular/router";
// --- Components | Services | Models --- //
import { AlertService }               from "../../../../_services/alert.service";
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { environment }                from "../../../../../environments/environment";
import { FormBase }                   from '../../../../_models/form-base';
import { FormBaseControlService }     from '../../../../_services/form-base-control.service';
import { UserService }                from "../../../../_services/user.service";
import { User }                       from "../../../../_models/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class LoginFormComponent implements OnInit {
@Input() inputs:                    FormBase<any>[] = [];
  loading:                          boolean = false;
  loginForm:                        FormGroup;
  returnUrl:                        string;
  rememberMe:                       boolean = false;
  user:                             User;
  
  constructor(
    private _cookieService:         CookieService,
    private authenticationService:  AuthenticationService,
    private alertService:           AlertService,
    private fb:                     FormBuilder,
    private http:                   HttpClient,
    private route:                  ActivatedRoute,
    private router:                 Router,
    private userService:            UserService,
    private ipt:                    FormBaseControlService
  ) {}

  login() 
  {   
    this.user =                     new User();
    this.user.email =               this.loginForm.value.loginEmail;
    this.user.password  =           this.loginForm.value.loginPassword;
    this.loading =                  true;
    this.putCookie();
    
    if(this.user) 
    {
      this.authenticationService
        .login (this.user.email, this.user.password)
        .subscribe (
          (data) => 
          {
            this.router.navigate(['/dashboard']);
          },
          (error) => 
          {
            console.log(error)
            this.alertService.error(error);
          }
        )
      ;
    }
  }

  onRememberMe (event): void 
  {
    this.rememberMe = event;
  }
  
  putCookie (): void 
  {
    if(this.rememberMe) 
    {
      this._cookieService.put("username", this.user.email);
      this._cookieService.put("password", this.user.password);
      console.log(this._cookieService)
    }
  }

  ngOnInit() 
  {
    this.userService.$user.subscribe((user) => {
      
    });
    this.loginForm = this.ipt.toFormGroup(this.inputs);

    // Recover cookie if exists
    if (this._cookieService.get("remember")) {
      this.user.email = this._cookieService.get("email");
      this.user.password = this._cookieService.get("password");
    }

    // reset login status
    this.authenticationService.logout();

  }
}


   // Recover User Observable if coming from a different page
   /* this.userService.$user.subscribe((user) => {
      this.createForm(user);
    });*/

  /*register() {
    this.userService.updateUser(this.loginForm.value);
    this.router.navigateByUrl("signup");
  }*/


