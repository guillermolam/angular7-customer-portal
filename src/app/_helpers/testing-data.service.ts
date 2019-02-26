import { ClaimsDataService } from './../_services/_claims/claims-data.service';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.doctest.dev';
import { UserService } from '../_services/user.service';
import { UserDataService } from '../_services/data-services/user-data.service';
import { PolicyDataService } from '../_services/my-insurance/data-services/policy-data.service';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor(
    private userService: UserService,
    private userDataService: UserDataService,
    private policyDataService: PolicyDataService,
    private claimsDataService: ClaimsDataService,

  ) { }

  setUpTestingData(): any {
    //based off of all the syntax around

    if (environment.production) {
      return;
    }

    //user and bank info
    this.setUpTestUser();

    //policy info + current bill
    this.setUpTestPolicy();

    // claims
    this.setUpTestClaims();

    // bills


  }

  setUpTestClaims() {
    this.claimsDataService.updateClaims(this.testFullClaimsData());
  }

  setUpTestUser(): void {
    const updatedUser = [{
      userDetails: this.testUserInfo(),
      bankAccountDetails: this.testBankingInfo()
    }];
    this.userDataService.updateUserDetails(updatedUser);
  }

  setUpTestPolicy() {
    const policyBillingDataAll = [];
    policyBillingDataAll.push(...[Object.assign(
      this.testingPolicyInfo(),
      { billingDetails: this.testCurrentBill() })
    ]);
    this.policyDataService.updatePolicyDetails(policyBillingDataAll);
    console.log('policyBillingDataAll',policyBillingDataAll);
  }

  testBankingInfo(): any {
    if (environment.production) {
      return false;
    }
    return {
      accountHolderName: "Default",
      accountNumber: {
        digits: "12345678987887777",
      },
      accountType: "CHECKING",
      mailingAddress: {
        city: "NORTH OXFORD",
        state: "MASSACHUSETTS",
        "stateCode": "MA",
        streetName: "120 HIGHWAY 20|55",
        zipCode: {
          code: "01537",
        }
      },
      routingNumber: {
        digits: "265473812",
      }
    };
  }

  testUserInfo(): any {
    return {
      address: null,
      email: {
        address: "bijoyeft@mail.com"
      },
      firstName: "Bijoy",
      lastName: "Joseph",
      middleName: "",
      phone: {
        number: "1254122222"
      }
    };
  }

  testingPolicyInfo(): any {

    return {
      "policynumber": {
        "policynumber": "GHQ004"
      },
      "agent": {
        "agentCode": {
          "code": "WP2"
        },
        "agentName": "DCU FINANCIAL INS. SERVICES LLC",
        "agentNameExt": "*844-808-9934",
        "address": {
          "streetName": "P.O. Box 758",
          "city": "WEBSTER",
          "state": "MASSACHUSETTS",
          "zipCode": {
            "code": "01570"
          },
          "stateCode": "MA"
        },
        "agentPhone": {
          "number": "508-949-5155"
        }
      },
      "insured": [
        {
          "firstName": "JOSE",
          "middleName": "MIGUEL",
          "lastName": "MARTINEZ",
          "isPrimaryInsured": true,
          "Insured Name": "JOSE MIGUEL MARTINEZ"
        }
      ],
      "policyStatus": "ACTIVE",
      "policyFlags": {
        "isEft": "ENROLLED",
        "isEftEligible": "Y",
        "isEdf": "ENROLLED",
        "isEdfEligible": "Y",
        "isEbill": null,
        "isEbillEligible": "N",
        "isCCEligible": "Y",
        "allowDeductionDateChange": "Y"
      },
      "mailingAddress": {
        "streetName": "110 STRATHMORE ROAD #402",
        "city": "BRIGHTON",
        "state": "MASSACHUSETTS",
        "zipCode": {
          "code": "02135"
        },
        "stateCode": "MA"
      },
      "vehicle": [
        {
          "vehicleIdentificationNumber": {
            "Id": "JF2SHADC1DH421021"
          },
          "odometerReading": 7000,
          "vehicle": "2013 SUBA FORESTER"
        }
      ],
      "policyType": "AUTO",
      "residentialAddress": {
        "streetName": "110 STRATHMORE ROAD #402",
        "city": "BRIGHTON",
        "state": "MASSACHUSETTS",
        "zipCode": {
          "code": "02135"
        },
        "stateCode": "MA"
      },
      "effDate": "2018-09-20T00:00:00.000+0000",
      "expDate": "2019-09-20T00:00:00.000+0000"
    };
  }

  testCurrentBill(): any {
    return [
      {
        amountStillDue: 13.5,
        minAmountDue: 13.5,
        outstandingbalance: 88.5,
        paymentDueDate: "2019-02-15T00:00:00.000+0000",
        totalPremiumAmount: 150
      }
    ];
  }

  testPendingBills(): any {

    return [
      {
        "bankAccount": {
          "accountHolderName": "JENNIFER L JUDD                                             ",
          "routingNumber": {
            "digits": "052001633"
          },
          "accountNumber": {
            "digits": "123456789"
          },
          "accountType": "CHECKING",
          "mailingAddress": {
            "streetName": "18 MACARTHUR ST",
            "city": "DARTMOUTH",
            "state": "MASSACHUSETTS",
            "zipCode": {
              "code": "02747"
            }
          }
        },
        "checkNumber": "0",
        "paymentAmount": 10,
        "deductionDay": 1,
        "paymentDateTime": "2016-04-21T00:00:00.000+0000"
      }
    ]
  }

  testHistoryBills(): any {

    return [{
      "noticeData": "          EFP                                         99.17                MPMP09/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
      "amountStillDue": 9,
      "minAmountDue": 0,
      "amountApplied": 99.17,
      "amountPaid": 99.17,
      "noticeIssued": "",
      "noticePayDate": "",
      "bhIndicator": "  ",
      "successCode": "  ",
      "bnIndicator": "MP",
      "billBalance": 9,
      "tempNoticeType": "EFP",
      "dueDate": "",
      "currentDateIssued": "          ",
      "transactionType": "",
      "dateApplied": "",
      "paymentType": "EFP"
    }];
  }

  testSchedualBills(): any {

    return [
      {
        "noticeData": "09/15/2016EFT01       09/15/2016      99.17    1179.00      99.17DIRMSCZ   00BN09/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 1179,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "09",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 1179,
        "tempNoticeType": "EFT01",
        "billingNoticeDateIssued": "09/15/2016",
        "dueDate": "09/15/2016",
        "billingNoticePayDate": "09/15/2016",
        "currentDateIssued": "09/15/2016"
      }];
  }

  testFullClaimsData() {
    return [  
      {  
         "number":{  
            "number":"PRWH62"
         },
         "exposures":[  
            {  
               "coverage":{  
                  "code":"Rental reimb"
               },
               "description":"Other Veh proceeding from Signal/Sign Collided w/Insured Veh ",
               "address":{  
                  "streetName":"",
                  "city":"SOMERVILLE",
                  "state":"MA",
                  "zipCode":{  
                     "digits":"00000"
                  }
               },
               "claimant":{  
                  "name":"GUILLERMO LAM-MAR"
               },
               "exposureNumber":{  
                  "exposureNumber":"NNMTY5"
               },
               "payments":[  
                  {  
                     "status":{  
                        "code":"N/A",
                        "date":null
                     },
                     "deductibleCode":"N/A",
                     "address":{  
                        "streetName":"default",
                        "city":"default",
                        "state":"UNKNOWN",
                        "zipCode":{  
                           "digits":"00000"
                        }
                     },
                     "exposureType":"Rental reimb",
                     "checkAmount":608.15,
                     "paymentReason":"",
                     "checkDate":null,
                     "checkNumber":"0907136963",
                     "checkPayee":"Hertz Bulk Rental via ACH"
                  }
               ],
               "appraisals":[  
   
               ],
               "adjuster":{  
                  "name":"JENNIFER GOMES",
                  "extensionAndFax":"508-671-3736 ext 15736",
                  "adjusterId":{  
                     "id":"JGOMES"
                  },
                  "email":{  
                     "address":"JGOMES@MAPFREUSA.COM"
                  },
                  "phoneNumber":{  
                     "number":"1-800-221-1605;15450"
                  }
               },
               "propertyOrAutoIndicator":"AUTO"
            },
            {  
               "coverage":{  
                  "code":"Collision"
               },
               "description":"Other Veh proceeding from Signal/Sign Collided w/Insured Veh ",
               "address":{  
                  "streetName":"",
                  "city":"SOMERVILLE",
                  "state":"MA",
                  "zipCode":{  
                     "digits":"00000"
                  }
               },
               "claimant":{  
                  "name":"GUILLERMO LAM-MAR"
               },
               "exposureNumber":{  
                  "exposureNumber":"NNKRN0"
               },
               "payments":[  
                  {  
                     "status":{  
                        "code":"CASHED",
                        "date":"2018-01-24T00:07:00.000+0000"
                     },
                     "deductibleCode":"APL",
                     "address":{  
                        "streetName":"default",
                        "city":"default",
                        "state":"UNKNOWN",
                        "zipCode":{  
                           "digits":"00000"
                        }
                     },
                     "exposureType":"Collision",
                     "checkAmount":3149.8,
                     "paymentReason":"COLLISION",
                     "checkDate":"2018-01-18T00:07:00.000+0000",
                     "checkNumber":"0027440275",
                     "checkPayee":"LONG SUBARU COLLISION CENTER"
                  },
                  {  
                     "status":{  
                        "code":"CASHED",
                        "date":"2018-01-07T00:08:00.000+0000"
                     },
                     "deductibleCode":"WAI",
                     "address":{  
                        "streetName":"default",
                        "city":"default",
                        "state":"UNKNOWN",
                        "zipCode":{  
                           "digits":"00000"
                        }
                     },
                     "exposureType":"Collision",
                     "checkAmount":500.0,
                     "paymentReason":"COLLISION                             DEDUCTIBLE REIMBURSEME",
                     "checkDate":"2018-01-31T00:07:00.000+0000",
                     "checkNumber":"0027456846",
                     "checkPayee":"LONG SUBARU COLLISION CENTER"
                  }
               ],
               "appraisals":[  
                  {  
                     "type":"APPRAISAL",
                     "number":{  
                        "number":"A0PM3MA"
                     },
                     "status":"CLOSE",
                     "appraiser":{  
                        "name":"LONG SUBARU INC           "
                     },
                     "appraisalAmount":3649.8,
                     "exposureType":"Collision",
                     "variableAmount":null
                  }
               ],
               "adjuster":{  
                  "name":"JENNIFER GOMES",
                  "extensionAndFax":"508-671-3736 ext 15736",
                  "adjusterId":{  
                     "id":"JGOMES"
                  },
                  "email":{  
                     "address":"JGOMES@MAPFREUSA.COM"
                  },
                  "phoneNumber":{  
                     "number":"1-800-221-1605;15450"
                  }
               },
               "propertyOrAutoIndicator":"AUTO"
            }
         ],
         "policyNumber":{  
            "policynumber":"BG4863"
         },
         "date":"2018-07-08T00:00:00.000+0000"
      }
   ];
  }

  testFullPolicyObject(): any {
    return [  
      { billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH0762"
         },
         "agent":{  
            "agentCode":{  
               "code":"507"
            },
            "agentName":"EDMOND LEGERE INSURANCE AGENCY,INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"165 MECHANIC ST.",
               "city":"LEOMINSTER",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01453"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"978-534-8329"
            }
         },
         "insured":[  
            {  
               "firstName":"PAUL",
               "middleName":"",
               "lastName":"BELLIVEAU",
               "isPrimaryInsured":true,
               "Insured Name":"PAUL BELLIVEAU"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"N",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"N",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"141 COUNTRY LANE",
            "city":"LEOMINSTER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01453"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Country Lane Leominster Ma",
                  "city":"Leominster",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"01453"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"141 COUNTRY LANE",
            "city":"LEOMINSTER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01453"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-05-22T00:00:00.000+0000",
         "expDate":"2019-05-22T00:00:00.000+0000"
      },
      { billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH0762"
         },
         "agent":{  
            "agentCode":{  
               "code":"507"
            },
            "agentName":"EDMOND LEGERE INSURANCE AGENCY,INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"165 MECHANIC ST.",
               "city":"LEOMINSTER",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01453"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"978-534-8329"
            }
         },
         "insured":[  
            {  
               "firstName":"PAUL",
               "middleName":"",
               "lastName":"BELLIVEAU",
               "isPrimaryInsured":true,
               "Insured Name":"PAUL BELLIVEAU"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"N",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"N",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"N",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"141 COUNTRY LANE",
            "city":"LEOMINSTER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01453"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Country Lane Leominster Ma",
                  "city":"Leominster",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"01453"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"141 COUNTRY LANE",
            "city":"LEOMINSTER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01453"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-05-22T00:00:00.000+0000",
         "expDate":"2019-05-22T00:00:00.000+0000"
      },
   ];
   
  }
}
