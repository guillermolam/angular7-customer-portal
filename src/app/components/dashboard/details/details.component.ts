import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit }        from '@angular/core';
import { FormGroup, FormControl }   from '@angular/forms';
import { ActivatedRoute, Params }   from '@angular/router';

import { AuthenticationService }    from '../../../_services/_iam/authentication-service.service';
import { User }                     from '../../../_models/user';
import { UserService }              from './../../../_services/user.service';

@Component({
  selector: 'app-policy-details-screen',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  input:                    object;
  legalCheckbox:            boolean = false;
  policyId:                 number;
  user:                     User;
  updateMileage =           new FormGroup({
    updateMileageInput: new FormControl('')
  });
  vehicles:                 object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:    AuthenticationService,
    private userService:    UserService,
    private sanitizer:      DomSanitizer
  ) { }

  getAddress(a: string[]): SafeUrl {
    let address,
        safeUrl:          SafeUrl;

    address =             `${a[0].replace(/\s/g, '%20')}%20${a[1]}%20${a[2]}%20${a[3]}`;

    const google =        `https://maps.google.com/maps?q=`,
          googleQuery =   `&t=&z=13&ie=UTF8&iwloc=&output=embed`,
          url =           `${google}${address}${googleQuery}`;

    safeUrl =             this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeUrl;
  }

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  onSubmit(): void {
    if (this.legalCheckbox) {
      console.log('click the update form', this.updateMileage.value);
    }
  }

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
              },
              address: {
                streetName: '1320 NORTH MAIN STREET',
                city: 'FALL RIVER',
                state: 'MASSACHUSETTS',
                zipCode: {
                    code: '02720'
                }
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
            isEft: false,
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
              },
              address: {
                streetName: '1320 NORTH MAIN STREET',
                city: 'FALL RIVER',
                state: 'MASSACHUSETTS',
                zipCode: {
                    code: '02720'
                }
            },
          },
          insurer: [
            {
              'firstName': 'JENNIFER1',
              'middleName': 'L',
              'lastName': 'JUDD',
              'Insurer Name': 'JENNIFER L JUDD'
            },
            {
              'firstName': 'JENNIFER2',
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
          policynumber: {
              policynumber: 'BBWQKQ'
          },
          agent: {
              agentCode: {
                  code: 'AS9'
              },
              agentName: 'GILBERT C. OLIVEIRA INS AGENCY INC',
              agentNameExt: '',
              agentPhone: {
                  number: '(508) 675-7475'
              },
              address: {
                streetName: '1320 NORTH MAIN STREET',
                city: 'FALL RIVER',
                state: 'MASSACHUSETTS',
                zipCode: {
                    code: '02720'
                }
            }
          },
          insurer: [
              {
                  'firstName': 'CONRAD',
                  'middleName': '',
                  'lastName': 'GAGNE',
                  'Insurer Name': 'CONRAD GAGNE'
              }
          ],
          policyStatus: 'INACTIVE',
          policyFlags: {
              isEft: false,
              isEftEligi: false,
              isEbillElig: false,
              isEdfElig: false,
              isEbill: false,
              isEdf: false
          },
          property: [
              {
                  address: {
                      streetName: '1833 Commonwealth ave apt 12',
                      city: 'Brighton',
                      state: 'MASSACHUSETTS',
                      zipCode: {
                          code: '02135'
                      }
                  }
              }
          ],
          policyType: 'HOME',
          effDate: '2017-05-10T04:00:00.000+0000',
          expDate: '2018-05-10T04:00:00.000+0000'
      },
      {
        balance: 0,
        nextDueDate: '10/28/2018',
        nextDueAmount: 0,
        policynumber: {
            policynumber: 'abc123'
        },
        agent: {
            agentCode: {
                code: 'AS9'
            },
            agentName: 'GILBERT C. OLIVEIRA INS AGENCY INC',
            agentNameExt: '',
            agentPhone: {
                number: '(508) 675-7475'
            },
            address: {
              streetName: '1320 NORTH MAIN STREET',
              city: 'FALL RIVER',
              state: 'MASSACHUSETTS',
              zipCode: {
                  code: '02720'
              }
          }
        },
        insurer: [
            {
                'firstName': 'CONRAD',
                'middleName': '',
                'lastName': 'GAGNE',
                'Insurer Name': 'CONRAD GAGNE'
            }
        ],
        policyStatus: 'INACTIVE',
        policyFlags: {
            isEft: false,
            isEftEligi: false,
            isEbillElig: false,
            isEdfElig: false,
            isEbill: false,
            isEdf: false
        },
        property: [
            {
                address: {
                    streetName: 'Ray St Fall River Ma',
                    city: 'Fall River',
                    state: 'MASSACHUSETTS',
                    zipCode: {
                        code: '02720'
                    }
                }
            }
        ],
        policyType: 'HOME',
        effDate: '2017-05-10T04:00:00.000+0000',
        expDate: '2018-05-10T04:00:00.000+0000'
    }
      ],
    };
  }

  ngOnInit() {
    // When logging in go a verify user
    // We will need this once the new endpoints are set.
    this.activatedRoute.params.subscribe((params: Params) => {
      this.policyId = params['policyid'];
    });

    this.userService.$user.subscribe(
      (user) => {
        if ( user != undefined ) {
          this.user = user ;
        }
        else {
          if (localStorage.getItem('access_token')) {
            this.authService
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
