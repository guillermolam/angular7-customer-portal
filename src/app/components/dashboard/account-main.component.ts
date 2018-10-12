import { Component, OnInit }              from '@angular/core';
import { ModalOptions }                   from 'mapfre-design-library/lib/_models/modal-options';
import { User }                           from '../../_models/user';
import { UserService }                    from '../../_services/user.service';
import { AuthenticationService }          from '../../_services/_iam/authentication-service.service';

@Component({
  selector: "app-account-main",
  templateUrl: "./account-main.component.html",
  styleUrls: ["./account-main.component.scss"]
})
export class AccountMainComponent implements OnInit {
  hideModal:                          boolean = false;
  onClickEventWalletPass:             boolean = false;
  walletDownloadModalOptions:         ModalOptions;
  user:                               User;

  constructor(
    private authService:              AuthenticationService,
    private userService:              UserService
  ) { 
    this.walletDownloadModalOptions = new ModalOptions({
      animatePosition:                "bottom", 
			modalId:                        "helpModal",
			modalTranslateCopy:             "MODAL_WHERE_CAN_I_TITLE",
      typeOfModal:                    "wallet",
      onLoad:                         true
		});
  }



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
        policynumbers:             { policynumber: 'BB0490' },
        policyStatus:             'cancelled',
        policyType:               'home',
        status:                   null,
      },
      ]
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
