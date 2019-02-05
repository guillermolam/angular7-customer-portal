
import { Component, OnInit, Input }       from '@angular/core';
import { FormBaseControlService, FormBase, 
  AlertService }                          from 'mapfre-design-library';
import { FormGroup }                      from '@angular/forms';
import { Router, ActivatedRoute }         from '@angular/router';
import { AuthenticateUserService }        from './../../../../_services/profile-settings/authenticate-user.service';
import { ChangeProfileEmailService }      from '../../../../_services/profile-settings/change-profile-email.service';
import { ProfileSettingsRoutingService }  from '../../../../_services/profile-settings/profile-settings-routing.service';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class ChangePasswordFormComponent implements OnInit {

  @Input()  inputs:                     FormBase<any>[] = [];
            changePasswordForm:         FormGroup;
            forgotPassword:             boolean = false;
            whereInTheProcess:          string;

  constructor(
    private alertService:               AlertService,
    private activatedRoute:             ActivatedRoute,
    private authenticateUserService:    AuthenticateUserService,
    private changeProfileEmailService:  ChangeProfileEmailService,
    private ipt:                        FormBaseControlService,
    private router:                     Router,
    private passwordProcess:            ProfileSettingsRoutingService
  ) { }

  onConfirmChange(){
    this.whereInTheProcess =            this.activatedRoute.snapshot.routeConfig.path;
    const passwd =                      this.changePasswordForm.controls.changePassword.value;
    
    this.authenticateUserService
    .authenticateCurrentPassword(passwd)
    .subscribe((response) => {
      if (this.whereInTheProcess == 'enter-password') {
        this.passwordProcess.setPasswordProcess(true);
        this.router.navigate(['/profile', 'edit-password']);
      }
      else if (this.whereInTheProcess == 'verify-password') {
        this.changeProfileEmailService.saveProcess(true);
        this.router.navigate(['/profile', 'edit-email']);
      }
    },
    (error) => {
      console.log(error);
      this.forgotPassword = true;
      this.alertService.error('INVALID_CHANGE_PASSWORD');
    });
  }

  ngOnInit() {
    this.changePasswordForm = this.ipt.toFormGroup(this.inputs);
  }

}
