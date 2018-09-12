import { Component, Input, OnInit }    from '@angular/core';

import { User }                        from '../../../../_models/user';

@Component({
  selector: 'app-review-policy-screen',
  templateUrl: './review-policy-screen.component.html',
  styleUrls: ['./review-policy-screen.component.scss']
})
export class ReviewPolicyScreenComponent implements OnInit {
  @Input()  policyObject:              Object;
  @Input()  userData:                  User;
            typeOfAccount:             string;
            typeOfPolicy:              string;
            policyDate:                string;
            policyNumber:              string;
            policy:                    Object;
            user:                      User;

  constructor() { }

  downLoadWalletCard(): void {
    console.log("you just downloaded a walletcard");
  }

  getUserData(userObject): void {
    if(!userObject){
      this.policy = this.testObject();
    }
    else {
      this.policy = userObject;
    }
    this.policyDetails(this.policy);
  }

  policyDetails(userObject): void {
    switch(userObject.policynumbers.type) {
      case "Personal":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_PERSONAL';
      break;
      case "Business":
        this.typeOfAccount =        'POLICYBELONGS_TYPE_NUMBER_BIZ';
      break;
      default:
      this.typeOfAccount =          'PERSONAL';
      break;
    }
    switch(userObject.policynumbers.policy) {
      case "Auto":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_AUTO';
      break;
      case "Home":
        this.typeOfPolicy =         'POLICYBELONGS_TYPE_NUMBER_HOME';
      break;
      default:
      this.typeOfPolicy =           'AUTO';
      break;
    }
    this.policyDate =               userObject.policynumbers.policyDate? new Date(userObject.policynumbers.policyDate).toLocaleDateString("en-US") : new Date('11/01/2018').toLocaleDateString("en-US");
    this.policyNumber =             userObject.policynumbers.policynumber? userObject.policynumbers.policynumber : '123456';
  }

  testObject(): Object {
    return [{
      policyNumber: 123456,
      policy: {
        effectiveDate: '12/12/2018',
        type: 'home',
      }
    },
    {
      policyNumber: 123456,
      policy: {
        effectiveDate: '12/12/2018',
        type: 'home',
      },
    }];
  }

  get userAgentTest() {
    return true;
  }

  ngOnInit() {
    this.getUserData(this.userData);
  }

}
