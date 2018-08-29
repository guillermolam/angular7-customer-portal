import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../../_models/user';

@Component({
  selector: 'app-review-policy-screen',
  templateUrl: './review-policy-screen.component.html',
  styleUrls: ['./review-policy-screen.component.scss']
})
export class ReviewPolicyScreenComponent implements OnInit {
  @Input() policyObject:               Object;
  @Input() userData:                   User;
  policy:                              Object;
  user:                                User;

  constructor() { }

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

  getUserData(policyObject: Object): void {
    if(!policyObject){
      this.policy = this.testObject();
    }
    else {
      this.policy = policyObject;
    }
  }

  ngOnInit() {
    this.getUserData(this.policyObject);
  }

}
