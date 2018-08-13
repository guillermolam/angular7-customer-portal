import { Component, EventEmitter, OnInit, Input, Output }   from "@angular/core";
import { FormGroup }                  from "@angular/forms";
import { ActivatedRoute }     from "@angular/router";
// --- Components | Services | Models --- //
import { AlertService }               from "../../../../_services/alert.service";
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                   from '../../../../_models/form-base';
import { FormBaseControlService }     from '../../../../_services/form-base-control.service';
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
  email:                            string;
  token:                            string;
  user:                             User;

  @Output() confirmationOfPasswordCreation:   EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private authenticationService:  AuthenticationService,
    private alertService:           AlertService,
    private route:                  ActivatedRoute,
    private ipt:                    FormBaseControlService
  ) {}

  createNewPassword(): void {
    this.user.password = this.createPasswordForm.value.createPassword;
    this.user.email = this.email;
    this.authenticationService
        .createPassword (this.user.email, this.token , this.user.password)
        .subscribe (
          (data) => {
            this.confirmationOfPasswordCreation.emit( true );
          },
          (error) => {
            console.log(error);
            this.confirmationOfPasswordCreation.emit( false );
            this.alertService.error(error.message);
          }
        )
      ;
  }

  ngOnInit() {
    this.createPasswordForm = this.ipt.toFormGroup(this.inputs);
    this.user = new User();
    this.route.queryParams.subscribe((params) => { 
      this.email = params.email;
      this.token = params.token;
     });
     
  }
} 
