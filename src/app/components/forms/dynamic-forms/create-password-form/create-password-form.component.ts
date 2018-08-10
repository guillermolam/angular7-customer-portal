import { Component, EventEmitter, OnInit, Input, Output }   from "@angular/core";
import { CookieService }              from 'ngx-cookie-service';
import { FormGroup }                  from "@angular/forms";
import { Router, ActivatedRoute }     from "@angular/router";
// --- Components | Services | Models --- //
import { AlertService }               from "../../../../_services/alert.service";
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
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
  @Input() inputs:                  FormBase<any>[] = [];
  createPasswordForm:               FormGroup;
  user:                             User;

  @Output() confirmationOfPasswordCreation:   EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private cookieService:          CookieService,
    private authenticationService:  AuthenticationService,
    private alertService:           AlertService,
    private route:                  ActivatedRoute,
    private router:                 Router,
    private userData:               UserService,
    private ipt:                    FormBaseControlService
  ) {}

  createNewPassword(): void {
    this.user.password = this.createPasswordForm.value.createPassword;
    this.authenticationService
        .createPassword ('testing', this.user.password)
        .subscribe (
          (data) => {
            this.confirmationOfPasswordCreation.emit( true );
          },
          (error) => {
            console.log(error);
            this.confirmationOfPasswordCreation.emit( false );
            this.alertService.error('Testing Error');
          }
        )
      ;
  }

  ngOnInit() {
    this.createPasswordForm = this.ipt.toFormGroup(this.inputs);
    this.user = new User();
  }
} 
