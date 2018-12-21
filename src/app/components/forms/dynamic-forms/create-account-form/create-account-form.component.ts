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
            user:                   User = {};

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private ipt:                    FormBaseControlService,
    private http:                   HttpClient,
    private router:                 Router,
    private userData:               UserService
  ) {}

  createUserObject(object, numbers): void {
    if (numbers === null) {
      this.user = {
        firstName:                  object.signUpFirst_name,
        middleName:                 object.signUpMI_name,
        lastName:                   object.signUpLast_name,
        email:                      object.signUpEmail,
      };
     
    }
    else {
      this.user.policyDetails = numbers;
    }
    this.userData.placeUserInfoInStorage(this.user);
    this.userData.updateUser(this.user);
  }

  fromTheBackButton(): void {
    let localStorageUser;
    this.userData.$user
      .subscribe( (user: User) => {
        if ( user != undefined ) {
          localStorageUser = user;
        }
        else if ( localStorage.length != 0  ) {
          localStorageUser = this.userData.getUserInfoInStorage();
        }
        this.signUpForm.controls.signUpFirst_name.setValue( localStorageUser.firstName || '' );
        this.signUpForm.controls.signUpLast_name.setValue( localStorageUser.lastName || '' );
        this.signUpForm.controls.signUpMI_name.setValue( localStorageUser.middleName || '' );
        this.signUpForm.controls.signUpEmail.setValue( localStorageUser.email || '' );
      }
    );
  }

  register() {
    this.loading = true;
    this.createUserObject(this.signUpForm.value, null);
  /*  if (this.userData) {
      this.authService.verifyUser(this.userData)
      .subscribe(
        (result) => {
          this.createUserObject(this.userData, result);
          this.router.navigate(['signup', 'create-password' ]);
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
            console.log(err);
          }
        }
      );
    }*/
    this.router.navigate(['signup', 'add-policy' ]);
  }

  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
    this.fromTheBackButton();
  }

}
