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
  selector: 'app-send-email-nondynamic-form',
  templateUrl: './send-email-form.component.html',
  styleUrls: ['./send-email-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class SendEmailFormNONDynamicComponent implements OnInit {
  passwordEmailForm:        FormGroup;
  loading:                  boolean = false;
  returnUrl:                string;

  constructor(
    private _cookieService: CookieService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.createForm()
  }

  createForm() {
    this.passwordEmailForm= this.fb.group({
      sendEmail:[ '',
        [
          Validators.required,
          Validators.email
        ]]
      })
    }



  ngOnInit() {
  }

}
