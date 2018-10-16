import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';
import { AlertService }                 from 'mapfre-design-library';


// --- Components | Services | Models --- //
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { PolicyDetails }                from '../../../../_models/policy-details';
import { UserService }                  from '../../../../_services/user.service';
import { User }                         from '../../../../_models/user';

@Component({
  selector: 'app-policy-belong-to-another-screen',
  templateUrl: './policy-belong-to-another-screen.component.html',
  styleUrls: ['./policy-belong-to-another-screen.component.scss']
})
export class PolicyBelongToAnotherScreenComponent implements OnInit {
  @Input()  userData:               User;
            policyDate:             string;
            policyDetail:           PolicyDetails[];
            policyNumber:           string;
            user:                   User = {};

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService
  ) { }

  confirmPolicy(): void {
    this.authService
      .confirmPolicyAndAccount(this.user)
      .subscribe(
        data => {
          this.router.navigate(['/signup', 'createpassword']);
        },
        err => {
          this.alertService.error('There was an issue');
        }
      );
  }

  createUserObject(formValue): void {
    this.policyDetail =          [{ policynumber:{ policynumber: formValue.editPolicyNumber } }];
    this.user = {
      firstName:                    formValue.editFirst_name,
      middleName:                   formValue.editMI_name,
      lastName:                     formValue.editLast_name,
      email:                        formValue.editEmail,
      policyDetails:                this.policyDetail
    };
    this.userService.updateUser(this.user);
  }

  ngOnInit() {
    
  }

}
