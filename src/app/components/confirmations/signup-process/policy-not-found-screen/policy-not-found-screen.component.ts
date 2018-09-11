import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-not-found-screen',
  templateUrl: './policy-not-found-screen.component.html',
  styleUrls: ['./policy-not-found-screen.component.scss']
})
export class PolicyNotFoundScreenComponent implements OnInit {
  @Input() userData:            string;
  amountOfTries:                number;
  policyHolderName:             string;
  policyNumber:                 string;

  constructor() { }

  getObservableData(userData): void {
    this.amountOfTries =       userData.addPolicyToAccountAttempts;
    this.policyHolderName =   `${userData.firstName} ${userData.middleName} ${userData.lastName}`;
    this.policyNumber =       `${userData.policynumbers}`;
  }

  ngOnInit() {
    this.getObservableData(this.userData);
  }

}
