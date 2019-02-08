import { Component, OnInit, Input }     from '@angular/core';
import { FormGroup }                    from '@angular/forms';
import { HttpClient }                   from '@angular/common/http';
import { Router }                       from '@angular/router';

// --- Components | Services | Models --- //
import { AlertService, FormBase, FormBaseControlService } from 'mapfre-design-library';
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { PolicyDetails }                from '../../../../_models/policy-details';
import { UserService }                  from '../../../../_services/user.service';
import { User }                         from '../../../../_models/user';
import { ClientCredentialsService }     from '../../../../_services/client-credentials/client-credentials.service';


@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreateAccountFormComponent implements OnInit {
  @Input()  inputs:                 FormBase<any>[] = [];
            signUpForm:             FormGroup;
            loading:                boolean = false;
            user:                   any = {};

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private ipt:                    FormBaseControlService,
    private http:                   HttpClient,
    private router:                 Router,
    private userData:               UserService,
    private clientCredentialsService:   ClientCredentialsService
  ) {}

  createUserObject(object, numbers): void {
    if (numbers === null) {
      this.user.userDetails = {
        firstName:                  object.signUpFirst_name,
        middleName:                 object.signUpMI_name,
        lastName:                   object.signUpLast_name,
        email:{
          address:   object.signUpEmail
        }                    
      };
     
    }
    else {
      this.user.policyDetails = numbers;
    }
    this.userData.placeUserInfoInStorage(this.user);
    this.userData.updateUser(this.user);
  }

  fromTheBackButton(): void {

    this.userData.$user
      .subscribe( (user: any) => {
        if(user){
          this.signUpForm.controls.signUpFirst_name.setValue( user.userDetails.firstName || '' );
          this.signUpForm.controls.signUpLast_name.setValue( user.userDetails.lastName || '' );
          this.signUpForm.controls.signUpMI_name.setValue( user.userDetails.middleName || '' );
          this.signUpForm.controls.signUpEmail.setValue( user.userDetails.email.address || '' );
        }
      }
    );
  }

  register() {
    this.loading = true;
    this.createUserObject(this.signUpForm.value, null);
    if (this.userData) {
      this.authService.verifyUser(this.userData)
      .subscribe(
        (result) => {
          // this.createUserObject(this.userData, 'verifyuser');
          this.router.navigate(['signup', 'createpassword' ]);
        },
        (err) => {
          if (err.status === 400) {
            // --- Email is already in use
            this.router.navigate(['signup', 'email-in-use' ]);
          }
          else if (err.status === 403) {
            // --- If the user does not have any policies
            this.router.navigate(['signup', 'add-policy' ]);
          }
          else {
            // console.log(err);
          }
        }
      );
    }
    // this.router.navigate(['signup', 'add-policy' ]);
  }

  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
    this.fromTheBackButton();
    this.clientCredentialsService.getToken().subscribe();
  }

}
