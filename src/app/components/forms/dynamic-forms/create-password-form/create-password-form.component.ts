import { ProfileSettingsRoutingService } from '../../../../_services/profile-settings/profile-settings-routing.service';
import { Component, EventEmitter,
  OnInit, Input, Output }             from '@angular/core';
import { FormGroup }                  from '@angular/forms';
import { ActivatedRoute, Params,
  Router }                            from '@angular/router';
import { Observable }                 from 'rxjs';
import { AlertService, FormBase,
  FormBaseControlService }            from 'mapfre-design-library';

// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { User }                       from '../../../../_models/user';
import { UserService }                from '../../../../_services/user.service';
import { ProfileConfirmModalService } from '../../../../_services/profile-settings/profile-confirm-modal.service';
import { StorageServiceObservablesService } from '../../../../_services/storage-service-observables/storage-service-observables.service';

@Component({
  selector: 'app-create-password-form',
  templateUrl: './create-password-form.component.html',
  styleUrls: ['./create-password-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreatePasswordFormComponent implements OnInit {
  @Input()  inputs:                 FormBase<any>[] = [];
  @Input()  userData:               Observable<User>;
            createPasswordForm:     FormGroup;
            email:                  string;
            token:                  string;
            user:                   User = {};
            whereInTheProcess:      string;
            confirmModal:        boolean;

  @Output() confirmationOfPasswordCreation:   EventEmitter<boolean> = new EventEmitter();

  constructor(
    private activeRoute:            ActivatedRoute,
    private alertService:           AlertService,
    private authenticationService:  AuthenticationService,
    private ipt:                    FormBaseControlService,
    private router:                 Router,
    private userService:            UserService,
    private profileSettingsRoutingService: ProfileSettingsRoutingService,
    private profileConfirmModalService: ProfileConfirmModalService,
    private storageService:          StorageServiceObservablesService
  ) {}

  createNewPassword(): void {
    if (this.whereInTheProcess == 'createpassword') {
      this.createPassword(this.userData);
    }
    else {
      this.updatePassword();
    }
  }

  createPassword(userObject): void {
    userObject.password =           this.createPasswordForm.value.createPassword;
    this.userService.updateUser(userObject);
    this.authenticationService
      .createPassword(this.userService)
      .subscribe (
        (data) => {
          this.router.navigate(['/verify-account']);
        },
        (error) => {
          console.log(this.userService, error);
        }
      );
  }

  /*updatePassword(): void {
    this.user.password =              this.createPasswordForm.value.createPassword;
    this.user.email =                 this.email;
    this.authenticationService
      .updatePassword (this.user, this.token)
      .subscribe (
        (data) => {
          this.authenticationService
            .login(this.user.email, this.user.password)
            .subscribe((succ) => {
              this.alertService.success('SUCCESS_FORGOT_PASSWORD', true);
              this.router.navigate(['my-insurance']);
            },
            (err) => {
              this.alertService.success('Login has failed', true);
              this.router.navigate(['login']);
            });
        },
        (error) => {
          this.confirmationOfPasswordCreation.emit( false );
          this.alertService.error(error.message);
        }
      );
  }*/

  updatePassword(): void {
    this.user.password =              this.createPasswordForm.value.createPassword;
    this.user.email =                 this.email || this.storageService.getUserFromStorage();
    if(this.whereInTheProcess==='edit-password'){
      this.authenticationService
      .updatePassword(this.user)
      .subscribe((data) => {
      this.profileSettingsRoutingService.setChangePasswordAlert(true);
      this.alertService.success('SUCCESS_FORGOT_PASSWORD', true);
      this.router.navigate(['/profile']);
      })
    }else {
    this.authenticationService
      .updatePassword (this.user)
      .subscribe (
        (data) => {
          this.authenticationService
            .login(this.user.email, this.user.password)
            .subscribe((succ) => {
              this.alertService.success('SUCCESS_FORGOT_PASSWORD', true);
              this.router.navigate(['my-insurance']);
            },
            (err) => {
              this.alertService.error('Login has failed', true);
              this.router.navigate(['login']);
            });
        },
        (error) => {
          this.confirmationOfPasswordCreation.emit( false );
          this.alertService.error(error.message);
        }
      );
      }
  }

  onCheckDirty(){
    this.profileConfirmModalService.onCheckDirty(this.createPasswordForm);
    this.profileConfirmModalService.$checkDirty.subscribe((value)=>{
      this.confirmModal = value;
    });
    
    if(this.confirmModal===false){
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit() {
    this.createPasswordForm =         this.ipt.toFormGroup(this.inputs);
    // url paramaters for example ?token=token
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.email =                    params.email;
      this.token =                    params.token;
     });

     this.whereInTheProcess = this.activeRoute.snapshot.routeConfig.path;
     if(this.whereInTheProcess!=='edit-password'){
       // route paramaters for example /signup/:parm
      this.activeRoute.params.subscribe((params: Params) => {
       this.whereInTheProcess =        params['parm'];
      });
     }
  }
}
