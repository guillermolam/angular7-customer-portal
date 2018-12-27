import { AuthenticateUserService } from './../../../../_services/profile-settings/authenticate-user.service';
import { Component, OnInit, Input }       from '@angular/core';
import { FormBaseControlService, FormBase, 
  AlertService }                          from 'mapfre-design-library';
import { FormGroup }                      from '@angular/forms';
import { Router, ActivatedRoute }         from '@angular/router';

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
    private ipt:                        FormBaseControlService,
    private router:                     Router,
    private alertService:               AlertService,
    private activatedRoute:             ActivatedRoute,
    private authenticateUserService: AuthenticateUserService
  ) { }

  onConfirmChange(){
  // console.log(this.changePasswordForm.controls.changePassword.value);
    this.whereInTheProcess =  this.activatedRoute.snapshot.routeConfig.path;
    const passwd = this.changePasswordForm.controls.changePassword.value;
    this.authenticateUserService.authenticateCurrentPassword(passwd).subscribe((response) => {
      if (this.whereInTheProcess == 'enter-password') {
        this.router.navigate(['/profile','edit-password']);
      }
      else if (this.whereInTheProcess == 'verify-password') {
        this.router.navigate(['/profile','edit-email']);
      }
    },
    (error)=>{
      this.forgotPassword = true;
      this.alertService.error('INVALID_CHANGE_PASSWORD');
    });
  }

  ngOnInit() {
    this.changePasswordForm = this.ipt.toFormGroup(this.inputs);
  }

}
