import { Component, OnInit, Input } from '@angular/core';
import { User } from 'mapfre-design-library';
import { AuthenticationService } from '../../../../../../_services/_iam/authentication-service.service';
import { UserService } from '../../../../../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-not-found',
  templateUrl: './policy-not-found.component.html',
  styleUrls: ['./policy-not-found.component.scss']
})
export class PolicyNotFoundComponent implements OnInit {

  userData:               any = {};
  amountOfTries:          number;
  policyHolderName:       string;
  policyNumber:           string;

constructor(
private authService:            AuthenticationService,
private router:                 Router,
private userService:            UserService
) { }

// getObservableData(userData): void {
// this.policyHolderName =         `${userData.firstName} ${userData.middleName} ${userData.lastName}`;
// this.policyNumber =             `${userData.policyDetails[0].policynumber.policynumber}`;
// }

onTryAgain(): void {
  this.userData.addPolicyAttempts = this.userData.addPolicyAttempts + 1;
  // console.log(this.userData.addPolicyAttempts);
  this.userService.updateUser(this.userData);
}

onRedirectContact(){
  this.router.navigate(['/contact']);
}

ngOnInit() {
this.userService.$user.subscribe((userData)=>{
  this.policyHolderName =         `${userData.userDetails.firstName} ${userData.userDetails.middleName || ''} ${userData.userDetails.lastName}`;
  this.policyNumber =             `${userData.policyDetails[0].policynumber.policynumber}`;
  this.userData = userData;
  this.userData.addPolicyAttempts = userData.addPolicyAttempts || 0;
  // console.log(this.userData);
});



}

}
