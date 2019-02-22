import { Component, OnInit, Input }   from '@angular/core';
import { User }                       from 'mapfre-design-library';
import { Router }                     from '@angular/router';
import { AddPolicyDataService }       from './../../../../../../_services/signup-process-service/add-policy-data.service';

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
  private addPolicyDataService: AddPolicyDataService,
  private router:          Router,
  ) { }

  onTryAgain(): void {
    this.userData.addPolicyAttempts = this.userData.addPolicyAttempts + 1;
    this.addPolicyDataService.updateAddPolicy(this.userData);
  }

  onRedirectContact() {
    this.router.navigate(['/contact']);
  }

  ngOnInit() {
    this.addPolicyDataService.$newPolicy
    .subscribe( (userData) => {
      console.log(userData)
      this.policyHolderName =         `${userData.userDetails.firstName} ${userData.userDetails.middleName || ''} ${userData.userDetails.lastName}`;
      this.policyNumber =             `${userData.policyDetail.policynumber.policynumber}`;
      this.userData = userData;
      this.userData.addPolicyAttempts = userData.addPolicyAttempts || 0;
    });
  }

}
