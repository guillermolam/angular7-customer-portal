import { Component, OnInit }              from '@angular/core';
import { User }                           from '../../_models/user';
import { UserService }                    from '../../_services/user.service';


@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {
  user:                               User;
  constructor(
    private userService:              UserService,
  ) { }

  testingData(): User {
    //This object is for development use. And will be taken out
    let object = {
      addPolicyAttempts:          3,
      firstName:                  'TestFirstName',
      middleName:                 'TM',
      lastName:                   'TestLastName',
      email:                      'testUpdate@email.com',
      password:                   'abcd12D!',
      policyDetails: [{
        InsName1:                 null,
        effDate:                  '12/12/2018',
        expDate:                  '12/12/2018',
        policynumber:             { policynumber: 'BB0490' },
        policyStatus:             'cancelled',
        policyType:               'home',
        status:                   null,
      },
      {
        InsName1:                 null,
        effDate:                  '12/12/2018',
        expDate:                  '12/12/2018',
        policynumber:             { policynumber: '120490' },
        policyStatus:             'cancelled',
        policyType:               'auto',
        status:                   null, 
      }]
    };
    return object;
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      user => {
        if(user == undefined){
          this.user = this.testingData();
          this.userService.updateUser(this.user);
        }
        else {
          this.user = user;
        }
      }
    );
  }

}
