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
    private activatedRoute:             ActivatedRoute
  ) { }

  onConfirmChange(){
  // console.log(this.changePasswordForm.controls.changePassword.value);
    this.whereInTheProcess =  this.activatedRoute.snapshot.routeConfig.path;
    const passwd = this.changePasswordForm.controls.changePassword.value;
    if (this.changePasswordForm.controls.changePassword.value === 'password' ) {
      if (this.whereInTheProcess == 'enter-password') {
        this.router.navigate(['/profile','edit-password']);
      }
      else if (this.whereInTheProcess == 'verify-password') {
        this.router.navigate(['/profile','edit-email']);
      }
    }
    else {
      this.forgotPassword = true;
      this.alertService.error('INVALID_CHANGE_PASSWORD');
    }
  }

  ngOnInit() {
    this.changePasswordForm = this.ipt.toFormGroup(this.inputs);
  }

}
