import { Component, OnInit, Input, Output, EventEmitter }   from "@angular/core";
import { CookieService }              from "angular2-cookie/services/cookies.service";
import { HttpClient }                 from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute }     from "@angular/router";
// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { RegExHelper }                from '../../../../_helpers/regex-helper';
import { UserService }                from "../../../../_services/user.service";
import { User }                       from "../../../../_models/user";
import { AlertService }                 from 'mapfre-design-library/lib/_services/alert.service';

@Component({
  selector: 'app-forgot-password-form-nondynamic',
  templateUrl: './forgot-password-nondynamic.component.html',
  styleUrls: ['./forgot-password-nondynamic.component.scss'],
})
export class ForgotPasswordNondynamicComponent implements OnInit {
  @Input() routeParamaterString: string;
  createPasswordForm:       FormGroup;
  loading:                  boolean = false;
  returnUrl:                string;
  repeatPassword:           boolean;
  showPassword:             boolean;
  user:                     User  = {};
  
  @Output() userConfirmation: EventEmitter<boolean> = new EventEmitter();
  @Output() expireLinkOutput: EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private authenticationService:  AuthenticationService,
    private alertService:           AlertService,
    private fb:                     FormBuilder,
    private http:                   HttpClient,
    private regExHelper:            RegExHelper,
    private route:                  ActivatedRoute,
    private router:                 Router,
    private userService:            UserService,
    private userData:               UserService,
  ) {
    this.createForm()
  }

  createForm() {
    this.createPasswordForm = this.fb.group({
      createPassword:
      [ '', [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{7,24}$)/g)
        ]
      ],
      repeatPassword:[ '', Validators.required ]
    }, {
      validator: this.pwdMatchValidator 
      }
    )
  }

  passwordRules(reg: string): boolean {
    let rules: {} = {
      'ruleOne':    /^(?=.*[a-z])(?=.*[A-Z])/g,
      'ruleTwo':    /^(?=.*[0-9])/g,
      'ruleThree':  /^(?=.*[!@#\$%\^&\*])/g,
      'ruleFour':   /^(?=.{7,})/g,
      'ruleFive':   /^.{1,24}$/g,
      'all':        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{7,24}$)/g
    };
    let inputValue = this.createPasswordForm.controls['createPassword'].value;
    if( inputValue != undefined && rules[reg].test(inputValue) ) return true;
  }

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('createPassword').value === frm.get('repeatPassword').value
       ? null : {'mismatch': true};
  }

  setNewPassword(): void{
    let password = this.createPasswordForm.controls['createPassword'].value,
        temporaryParamater = this.routeParamaterString;

    this.user.password = password;
    this.user.temporaryPassword = temporaryParamater;
    if(this.user) {
      this.userConfirmation.emit(true);
    }
  }

  showPasswordFunction(event): void {
    this.showPassword = event;
  }

  ngOnInit() {
  }
}
