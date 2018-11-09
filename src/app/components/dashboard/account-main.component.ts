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
  hideOrShow:                     boolean = false;
  user:                           User;

  constructor(
    private authenticationService: AuthenticationService,
    private router:               Router,
    private userService:          UserService
  ) {
  }

  showMore(e): void {
    this.hideOrShow = !this.hideOrShow;
  }

  // This will be removed
  testDatafunction() {
    return {
      firstName: 'FirstName',
      middleName: 'MiddleName',
      lastName: 'LastName',
      
      policyDetails: [
        {
          balance: 0,
          nextDueDate: '10/28/2018',
          nextDueAmount: 0,
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
            },
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
              
          ],
          effDate: '2016-09-10T04:00:00.000+0000',
          expDate: '2017-09-10T04:00:00.000+0000'
        },
        {
          balance: 0,
          nextDueDate: '10/28/2018',
          nextDueAmount: 0,
          address: '110 Strathmore Rd APT #123, Brighton MA 02135',
          
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
    };
  }

  ngOnInit() {
    // When logging in go a verify user
    // We will need this once the new endpoints are set.

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          if (localStorage.getItem('access_token')) {
            this.authenticationService
            .verifyUser(this.user)
            .subscribe(
              (info: any) => {
                console.log(info);
                this.user = {
                  firstName: info[0].insurer['firstName'],
                  middleName: info[0].insurer['middleName'],
                  lastName: info[0].insurer['lastName'],
                  policyDetails: info
                };
                this.userService.updateUser(this.user);
              },
              (err) => {
                console.log('login success but verifyuser err', err);
              }
            );
          }
          else {
            this.user = this.testDatafunction();
            this.userService.updateUser(this.user);
          }
        }
      }
    );
  }
}
