import { Component, OnInit, Input } from '@angular/core';
import { User, AlertService } from 'mapfre-design-library';
import { AuthenticationService } from '../../../../../../_services/_iam/authentication-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../../../_services/user.service';
import { FakePolicyResponse } from './../../../../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-policy-response.model';


@Component({
  selector: 'app-validate-policy-rights',
  templateUrl: './validate-policy-rights.component.html',
  styleUrls: ['./validate-policy-rights.component.scss']
})
export class ValidatePolicyRightsComponent implements OnInit {

  @Input()  userData:               User;
  policyDate:             string;
  policyDetails:           any = {};
  policyNumber:           string;
  user:                   User = {};

constructor(
private alertService:           AlertService,
private authService:            AuthenticationService,
private router:                 Router,
private userService:            UserService,
// private policyService:          PolicyDetailsService
) { }

confirmPolicy(): void {  
this.alertService.success('Policy added successfully', true);
this.router.navigate(['/my-insurance']);
// this.authService
// .confirmPolicyAndAccount(this.userService)
// .subscribe(
// (data) => {
// console.log(data);
// this.alertService.success('Policy added successfully');
// this.router.navigate(['/my-insurance']);
// },
// (err) => {
// this.alertService.error('There was an issue');
// }
// );
}

createUserObject(formValue): void {
this.policyDetails =          [{ policynumber: { policynumber: formValue.editPolicyNumber } }];
this.user = {
firstName:                    formValue.editFirst_name,
middleName:                   formValue.editMI_name,
lastName:                     formValue.editLast_name,
email:                        formValue.editEmail,
policyDetails:                this.policyDetails
};
this.userService.updateUser(this.user);
}

ngOnInit() {

//new code
// this.policyService.$policyDetails.subscribe((details)=>{
//   this.policyDetails = details;
//   console.log(details);
// });

this.policyDetails = FakePolicyResponse.getPolicyDetails();

}

}
