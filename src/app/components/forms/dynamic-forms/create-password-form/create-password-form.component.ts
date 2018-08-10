import { Component, OnInit, Input }   from "@angular/core";
//import { CookieService }              from "angular2-cookie/services/cookies.service";
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
  selector: 'app-create-password-form',
  templateUrl: './create-password-form.component.html',
  styleUrls: ['./create-password-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreatePasswordFormComponent implements OnInit {
  @Input() inputs:          FormBase<any>[] = [];
  forgotPasswordForm:       FormGroup;
  loading: boolean =        false;
  returnUrl:                string;
  user:                     User;
  
  constructor(
    //private _cookieService: CookieService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userData: UserService,
    private ipt: FormBaseControlService
  ) {}

  createNewPassword(): void {

  }

  ngOnInit() {
    this.forgotPasswordForm = this.ipt.toFormGroup(this.inputs);
    this.user = new User();
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
