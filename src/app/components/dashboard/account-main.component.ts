import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';
import { AuthenticationService }  from '../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {
  user:                           User;

  constructor(
    private authService:          AuthenticationService,
    private router:               Router,
    private userService:          UserService
  ) {
  }

  testDatafunction() {
    let test;

    test = {
      customer: {
        firstName: 'FirstName',
        middleName: 'MiddleName',
        lastName: 'LastName',
        policyDetails: [
          {
           
              balance: 0,
              nextDueDate: '10/28/2018',
              nextDueAmount: 0,
              drivers: [
                {driverName: 'Thomas Kukabango'},
                {driverName: 'Diane Lansdowne'}
             ],

              policynumber: {
                  policynumber: 'QJN952'
              },
              agent: {
                  agentCode: {
                      code: '434'
                  },
                  agentName: 'AAA NORTHEAST INSURANCE AGCY, INC.',
                  agentNameExt: '',
                  agentPhone: {
                      number: '(800) 222-4242'
                  }
              },
              insurer: [
                {
                  'firstName': 'JENNIFER',
                  'middleName': 'L',
                  'lastName': 'JUDD',
                  'Insurer Name': 'JENNIFER L JUDD'
                }
              ],
              policyStatus: 'INACTIVE',
              policyFlags: {
                isEft: true,
                isEftEligi: false,
                isEbillElig: false,
                isEdfElig: false,
                isEbill: false,
                isEdf: false
              },
              policyType: 'AUTO',
              vehicle: [
                  {
                    vehicle: '2016 RAM 1500 SLT'
                  },
                  {
                    vehicle: '1998 HONDA CR-V LX'
                  }
              ],
              effDate: '2016-09-10T04:00:00.000+0000',
              expDate: '2017-09-10T04:00:00.000+0000'
          },
          {
           
            balance: 1000.99,
            nextDueDate: '10/28/2018',
            nextDueAmount: 79.99,
            drivers: [
              {driverName: 'Thomas Kukabango'},
              {driverName: 'Diane Lansdowne'}
           ],

            policynumber: {
                policynumber: '66161'
            },
            agent: {
                agentCode: {
                    code: '434'
                },
                agentName: 'AAA NORTHEAST INSURANCE AGCY, INC.',
                agentNameExt: '',
                agentPhone: {
                    number: '(800) 222-4242'
                }
            },
            insurer: [
              {
                'firstName': 'JENNIFER',
                'middleName': 'L',
                'lastName': 'JUDD',
                'Insurer Name': 'JENNIFER L JUDD'
              }
            ],
            policyStatus: 'ACTIVE',
            policyFlags: {
              isEft: true,
              isEftEligi: false,
              isEbillElig: false,
              isEdfElig: false,
              isEbill: false,
              isEdf: false
            },
            policyType: 'AUTO',
            vehicle: [
                {
                  vehicle: '2016 RAM 1500 SLT'
                },
                {
                  vehicle: '1998 HONDA CR-V LX'
                }
            ],
            effDate: '2016-09-10T04:00:00.000+0000',
            expDate: '2017-09-10T04:00:00.000+0000'
          },
          {
           balance: 0,
            nextDueDate: '10/28/2018',
            nextDueAmount: 0,
            address: '110 Strathmore Rd APT #123, Brighton MA 02135',
            renters: [
              {renterName: 'Thomas Kukabango'},
              {renterName: 'Diane Lansdowne'}
           ],
            policynumber: {
                policynumber: '73371'
            },
            agent: {
                agentCode: {
                    code: '434'
                },
                agentName: 'AAA NORTHEAST INSURANCE AGCY, INC.',
                agentNameExt: '',
                agentPhone: {
                    number: '(800) 222-4242'
                }
            },
            insurer: [
              {
                'firstName': 'JENNIFER',
                'middleName': 'L',
                'lastName': 'JUDD',
                'Insurer Name': 'JENNIFER L JUDD'
              }
            ],
            policyStatus: 'INACTIVE',
            policyFlags: {
              isEft: true,
              isEftEligi: false,
              isEbillElig: false,
              isEdfElig: false,
              isEbill: false,
              isEdf: false
            },
            policyType: 'PROPERTY',
            effDate: '2016-09-10T04:00:00.000+0000',
            expDate: '2017-09-10T04:00:00.000+0000'
          },
          {
          
            balance: 1000.99,
            nextDueDate: '10/28/2018',
            nextDueAmount: 79.99,
            address: '111 Boston Rd APT #44, Brighton MA 02135',

            renters: [
              {renterName: 'Thomas Kukabango'},
              {renterName: 'Diane Lansdowne'}
          ],

            policynumber: {
                policynumber: 'Q12345'
            },
            agent: {
                agentCode: {
                    code: '434'
                },
                agentName: 'AAA NORTHEAST INSURANCE AGCY, INC.',
                agentNameExt: '',
                agentPhone: {
                    number: '(800) 222-4242'
                }
            },
            insurer: [
              {
                'firstName': 'JENNIFER',
                'middleName': 'L',
                'lastName': 'JUDD',
                'Insurer Name': 'JENNIFER L JUDD'
              }
            ],
            policyStatus: 'ACTIVE',
            policyFlags: {
              isEft: true,
              isEftEligi: false,
              isEbillElig: false,
              isEdfElig: false,
              isEbill: false,
              isEdf: false
            },
            policyType: 'PROPERTY',
            effDate: '2016-09-10T04:00:00.000+0000',
            expDate: '2017-09-10T04:00:00.000+0000'
          },
        ],
      }
    };

    return test;
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          this.user = this.testDatafunction();
          console.log(this.user);
        }
      }
    );
  }
}
