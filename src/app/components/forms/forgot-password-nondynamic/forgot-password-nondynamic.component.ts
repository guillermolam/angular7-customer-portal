import { Component, OnInit, Input }   from "@angular/core";
import { CookieService }              from "angular2-cookie/services/cookies.service";
import { HttpClient }                 from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute }     from "@angular/router";
// --- Components | Services | Models --- //
import { AlertService }               from "../../../_services/alert.service";
import { AuthenticationService }      from '../../../_services/_iam/authentication-service.service';
import { environment }                from "../../../../environments/environment";
import { FormBase }                   from '../../../_models/form-base';
import { FormBaseControlService }     from '../../../_services/form-base-control.service';
import { UserService }                from "../../../_services/user.service";
import { User }                       from "../../../_models/user";

@Component({
  selector: 'app-forgot-password-form-nondynamic',
  templateUrl: './forgot-password-nondynamic.component.html',
  styleUrls: ['./forgot-password-nondynamic.component.scss'],
  providers: [ FormBaseControlService ]

})
export class ForgotPasswordNondynamicComponent implements OnInit {
  forgotPasswordForm:       FormGroup;
  loading:                  boolean = false;
  returnUrl:                string;
  repeatPassword:           boolean;
  showPassword:             boolean;
  user:                     User;
  
  constructor(
    private _cookieService: CookieService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userData: UserService,
    private ipt: FormBaseControlService
  ) {
    this.createForm()
  }

  createForm() {
    this.forgotPasswordForm= this.fb.group({
      createPassword:
      [ '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{7,24}$)/g)
        ]
      ],
      repeatPassword:
      [ '',
        Validators.required
      ]
    }, {
      validator: this.pwdMatchValidator 
      }
    )}
  
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('createPassword').value === frm.get('repeatPassword').value
       ? null : {'mismatch': true};
  }

  showPasswordFunction(event): void {
    this.showPassword = event;
  }

  passwordRules(reg: string): boolean {
    // Within the actual validation these five rules have been made into one.
    let rules: {} = {
      'ruleOne':    /^(?=.*[a-z])(?=.*[A-Z])/g,
      'ruleTwo':    /^(?=.*[0-9])/g,
      'ruleThree':  /^(?=.*[!@#\$%\^&\*])/g,
      'ruleFour':   /^(?=.{7,})/g,
      'ruleFive':   /^.{1,24}$/g,
      'all':        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{7,24}$)/g
    };
    let inputValue = this.forgotPasswordForm.controls['createPassword'].value;
    if( inputValue != undefined && rules[reg].test(inputValue) ) return true;
  }

  ngOnInit() {
    //this.forgotPasswordForm = this.ipt.toFormGroup(this.inputs);
    this.user = new User();
    console.log(this.forgotPasswordForm)
  }
}
/*

this.userData.$user.subscribe((user) => {
      this.user.email = user.email;
    });

    this.createForm();
  createForm() {
    this.forgotPasswordForm = this.fb.group({
      email: [this.user.email, Validators.required]
    });
  }

  cancel() {
    this.userData.updateUser(this.user);
  }
 
*/

