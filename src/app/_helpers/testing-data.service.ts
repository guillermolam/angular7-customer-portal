import { Observable, throwError } from 'rxjs';
import { Injectable }         from '@angular/core';
import { environment }        from '../../environments/environment';
import { UserService }        from '../_services/user.service';
import { UserDataService }    from '../_services/data-services/user-data.service';
import { PolicyDataService }  from '../_services/my-insurance/data-services/policy-data.service';
import { ClaimsDataService }  from './../_services/_claims/claims-data.service';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor(
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
    console.log('setUpTestClaims', this.testFullClaimsData())
    this.claimsDataService.updateClaims(this.testFullClaimsData());
  }

  setUpTestUser(): void { 
    const updatedUser = {
      userDetails: this.testUserInfo(),
      bankAccountDetails: this.testBankingInfo()
    };
    this.userDataService.updateUserDetails(updatedUser);
    console.log('updatedUser',updatedUser);
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
      lastName: "joseph",
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

  testDocumentsObject(): any {
    return [
      {
        'type': 'TYPE',
        'description': 'Everyday ',
        'transactionDate': '1995-12-17T03:24:00',
        'documentId': '123456'
      },
      {
        'type': 'ONE',
        'description': 'Everyday carry fanny pack selvage small batch.',
        'transactionDate': '1995-12-17T03:24:00',
        'documentId': '789012'
      },
      {
        'type': 'BLUE',
        'description': 'Everyday carry fanny',
        'transactionDate': '1995-12-17T03:24:00',
        'documentId': '345678'
      },
    ];
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
                  "exposureNumber":"NNKRN1"
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
            "policynumber":"XL7102"
         },
         "date":"2018-07-08T00:00:00.000+0000"
      },
      {  
        "number":{  
           "number":"PRWH61"
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
                 "exposureNumber":"NNM666"
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
              "propertyOrAutoIndicator":"HOME"
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
                 "exposureNumber":"NNKR88"
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
              "propertyOrAutoIndicator":"HOME"
           }
        ],
        "policyNumber":{  
           "policynumber":"XL6411"
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
         "insured": [
          {
            "firstName": "JOSE",
            "middleName": "MIGUEL",
            "lastName": "MARTINEZ",
            "isPrimaryInsured": true,
            "Insured Name": "JOSE MIGUEL MARTINEZ"
          },
          {
            "firstName": "JOSE",
            "middleName": "MIGUEL",
            "lastName": "MARTINEZ",
            "isPrimaryInsured": false,
            "Insured Name": "JOSE MIGUEL MARTINEZ"
          }
         ],
         "policyStatus":"INACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"",
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
      {  billingDetails:       {},
         "policynumber":{  
            "policynumber":"XX2639"
         },
         "agent":{  
            "agentCode":{  
               "code":"925"
            },
            "agentName":"WEST BOYLSTON INS. AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"12 WEST BOYLSTON STREET",
               "city":"WEST BOYLSTON",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01583"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-835-3877"
            }
         },
         "insured":[  
            {  
               "firstName":"MARLENE",
               "middleName":"",
               "lastName":"GOODALE",
               "isPrimaryInsured":false,
               "Insured Name":"MARLENE GOODALE"
            },
            {  
               "firstName":"RICHARD",
               "middleName":"",
               "lastName":"GOODALE",
               "isPrimaryInsured":true,
               "Insured Name":"RICHARD GOODALE"
            }
         ],
         "policyStatus":"CANCELLED",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"N",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"78 PRESCOTT ST",
            "city":"W BOYLSTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01583"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Prescott St W Boylston Ma",
                  "city":"West Boylston",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"01583"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"78 PRESCOTT ST",
            "city":"W BOYLSTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01583"
            },
            "stateCode":"MA"
         },
         "effDate":"2019-01-01T00:00:00.000+0000",
         "expDate":"2020-01-01T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XL6411"
         },
         "agent":{  
            "agentCode":{  
               "code":"925"
            },
            "agentName":"WEST BOYLSTON INS. AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"12 WEST BOYLSTON STREET",
               "city":"WEST BOYLSTON",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01583"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-835-3877"
            }
         },
         "insured":[  
          {  
            "firstName":"GERALDINE",
            "middleName":"H",
            "lastName":"COPE",
            "isPrimaryInsured":true,
            "Insured Name":"GERALDINE H COPE"
         },
            {  
               "firstName":"GERALDINE",
               "middleName":"H",
               "lastName":"COPE",
               "isPrimaryInsured":false,
               "Insured Name":"GERALDINE H COPE"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"ENROLLMENT-PENDING",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"77 POINTE ROK DR",
            "city":"WORCESTER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01604"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Pointe Rok Dr Worcester Ma",
                  "city":"Worcester",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"01604"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"77 POINTE ROK DR",
            "city":"WORCESTER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01604"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-25T00:00:00.000+0000",
         "expDate":"2019-07-25T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XL7102"
         },
         "agent":{  
            "agentCode":{  
               "code":"925"
            },
            "agentName":"WEST BOYLSTON INS. AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"12 WEST BOYLSTON STREET",
               "city":"WEST BOYLSTON",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01583"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-835-3877"
            }
         },
         "insured":[  
            {  
               "firstName":"ROBERT",
               "middleName":"",
               "lastName":"ARMSTRONG",
               "isPrimaryInsured":true,
               "Insured Name":"ROBERT ARMSTRONG"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"57 KEYES ST",
            "city":"W BOYLSTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01583"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Keyes St W Boylston Ma",
                  "city":"West Boylston",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"01583"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"57 KEYES ST",
            "city":"W BOYLSTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01583"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-29T00:00:00.000+0000",
         "expDate":"2019-07-29T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XW4710"
         },
         "agent":{  
            "agentCode":{  
               "code":"206"
            },
            "agentName":"KIMBALL-COOKE, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"312 MAIN STREET",
               "city":"ATHOL",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01331"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"978-249-3273"
            }
         },
         "insured":[  
            {  
               "firstName":"LILLIAN",
               "middleName":"",
               "lastName":"MCMAHON",
               "isPrimaryInsured":false,
               "Insured Name":"LILLIAN MCMAHON"
            },
            {  
               "firstName":"KEVIN",
               "middleName":"R",
               "lastName":"MCMAHON",
               "isPrimaryInsured":true,
               "Insured Name":"KEVIN R MCMAHON"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"58 LAUREL ST",
            "city":"ATHOL",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01331"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Laurel St Athol Ma",
                  "city":"Athol",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"01331"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"58 LAUREL ST",
            "city":"ATHOL",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01331"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-02-20T00:00:00.000+0000",
         "expDate":"2019-02-20T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XZ6692"
         },
         "agent":{  
            "agentCode":{  
               "code":"757"
            },
            "agentName":"ROBERT W. EAMES INS., AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"126 N. MAIN STREET",
               "city":"MANSFIELD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02048"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-339-7913"
            }
         },
         "insured":[  
            {  
               "firstName":"PAUL",
               "middleName":"A",
               "lastName":"THOMSEN",
               "isPrimaryInsured":true,
               "Insured Name":"PAUL A THOMSEN"
            },
            {  
               "firstName":"LORI",
               "middleName":"J",
               "lastName":"THOMSEN",
               "isPrimaryInsured":false,
               "Insured Name":"LORI J THOMSEN"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"N",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"40 MAPLE ST",
            "city":"MANSFIELD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02048"
            },
            "stateCode":"MA"
         },
         "property":[  
            {  
               "address":{  
                  "streetName":"Maple St Mansfield Ma",
                  "city":"Mansfield",
                  "state":"MASSACHUSETTS",
                  "zipCode":{  
                     "code":"02048"
                  },
                  "stateCode":"MA"
               }
            }
         ],
         "policyType":"HOME",
         "residentialAddress":{  
            "streetName":"40 MAPLE ST",
            "city":"MANSFIELD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02048"
            },
            "stateCode":"MA"
         },
         "effDate":"2019-01-30T00:00:00.000+0000",
         "expDate":"2020-01-30T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH0830"
         },
         "agent":{  
            "agentCode":{  
               "code":"K90"
            },
            "agentName":"HORACE MANN INS. BROKERAGE OF MA",
            "agentNameExt":"",
            "address":{  
               "streetName":"486 MAIN STREET",
               "city":"GREENFIELD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01301"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"413-774-4773"
            }
         },
         "insured":[  
            {  
               "firstName":"SUE",
               "middleName":"E",
               "lastName":"REUTLINGER",
               "isPrimaryInsured":false,
               "Insured Name":"SUE E REUTLINGER"
            },
            {  
               "firstName":"ALAN",
               "middleName":"W",
               "lastName":"REUTLINGER",
               "isPrimaryInsured":true,
               "Insured Name":"ALAN W REUTLINGER"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"51 STONEY BROOK RD",
            "city":"CLARKSBURG",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01247"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"JTMBF4DV4CD043497"
               },
               "odometerReading":0,
               "vehicle":"2012 TOYOTA RAV4"
            }
         ],
         "residentialAddress":{  
            "streetName":"51 STONEY BROOK RD",
            "city":"CLARKSBURG",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01247"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-01T00:00:00.000+0000",
         "expDate":"2019-07-01T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1003"
         },
         "agent":{  
            "agentCode":{  
               "code":"K90"
            },
            "agentName":"HORACE MANN INS. BROKERAGE OF MA",
            "agentNameExt":"",
            "address":{  
               "streetName":"486 MAIN STREET",
               "city":"GREENFIELD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01301"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"413-774-4773"
            }
         },
         "insured":[  
            {  
               "firstName":"PETER",
               "middleName":"R",
               "lastName":"WALTER",
               "isPrimaryInsured":true,
               "Insured Name":"PETER R WALTER"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"PO BOX 86",
            "city":"CATAUMET",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02534"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"2FABP43FXGX119302"
               },
               "odometerReading":0,
               "vehicle":"1986 FORD LTD CROW"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"4S4BP86C374337233"
               },
               "odometerReading":0,
               "vehicle":"2007 SUBARU LGCY OTB"
            }
         ],
         "residentialAddress":{  
            "streetName":"11 SCOTCH HOUSE COVE RD",
            "city":"CATAUMET",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02534"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-09T00:00:00.000+0000",
         "expDate":"2019-07-09T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1588"
         },
         "agent":{  
            "agentCode":{  
               "code":"P14"
            },
            "agentName":"BARDWELL/BOWLBY/KARAM INS AGCY INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"87 EAST STREET",
               "city":"PITTSFIELD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01202"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"413-445-5626"
            }
         },
         "insured":[  
            {  
               "firstName":"PAUL",
               "middleName":"D",
               "lastName":"BROWN",
               "isPrimaryInsured":true,
               "Insured Name":"PAUL D BROWN"
            }
         ],
         "policyStatus":"INACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"36 BRIDGE ST",
            "city":"PITTSFIELD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01201"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"JF2SHADC2CH439834"
               },
               "odometerReading":0,
               "vehicle":"2012 SUBA FORESTER"
            }
         ],
         "residentialAddress":{  
            "streetName":"36 BRIDGE ST",
            "city":"RICHMOND",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01254"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-19T00:00:00.000+0000",
         "expDate":"2019-07-19T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1592"
         },
         "agent":{  
            "agentCode":{  
               "code":"P14"
            },
            "agentName":"BARDWELL/BOWLBY/KARAM INS AGCY INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"87 EAST STREET",
               "city":"PITTSFIELD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01202"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"413-445-5626"
            }
         },
         "insured":[  
            {  
               "firstName":"",
               "middleName":"",
               "lastName":"",
               "isPrimaryInsured":false,
               "Insured Name":" "
            },
            {  
               "firstName":"HELMUTH",
               "middleName":"",
               "lastName":"SCHARF",
               "isPrimaryInsured":true,
               "Insured Name":"HELMUTH SCHARF"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":".",
            "city":"LENOX",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01240"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"WBA8E5G59GNT40325"
               },
               "odometerReading":0,
               "vehicle":"2016 BMW 320 XI"
            }
         ],
         "residentialAddress":{  
            "streetName":".",
            "city":"LENOX",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01240"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-14T00:00:00.000+0000",
         "expDate":"2019-07-14T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1307"
         },
         "agent":{  
            "agentCode":{  
               "code":"F01"
            },
            "agentName":"KAPLANSKY INSURANCE AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"104 PROSPECT STREET",
               "city":"MILFORD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01757"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-478-0744"
            }
         },
         "insured":[  
            {  
               "firstName":"DONALD",
               "middleName":"S",
               "lastName":"CLIFFORD",
               "isPrimaryInsured":true,
               "Insured Name":"DONALD S CLIFFORD"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"234 HERITAGE DRIVE",
            "city":"WHITINSVILLE",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01588"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"JF1GH636X9H812372"
               },
               "odometerReading":0,
               "vehicle":"2009 SUBARU IMPREZA"
            }
         ],
         "residentialAddress":{  
            "streetName":"234 HERITAGE DRIVE",
            "city":"WHITINSVILLE",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01588"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-08T00:00:00.000+0000",
         "expDate":"2019-07-08T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH0786"
         },
         "agent":{  
            "agentCode":{  
               "code":"3B3"
            },
            "agentName":"GARRETT-LYNCH INS AGENCY INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"411 HIGHLAND AVENUE",
               "city":"SOMERVILLE",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02144"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"617-625-1914"
            }
         },
         "insured":[  
            {  
               "firstName":"LAURA",
               "middleName":"",
               "lastName":"SOUSA",
               "isPrimaryInsured":false,
               "Insured Name":"LAURA SOUSA"
            },
            {  
               "firstName":"DAVID",
               "middleName":"",
               "lastName":"SOUSA",
               "isPrimaryInsured":true,
               "Insured Name":"DAVID SOUSA"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"80 SCHOOL STREET",
            "city":"WOBURN",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01801"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"1GC1KXEG8FF672374"
               },
               "odometerReading":0,
               "vehicle":"2015 CHEV SILVERAD"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"3GTEK14V07G153446"
               },
               "odometerReading":0,
               "vehicle":"2007 GMC SIERRA K"
            }
         ],
         "residentialAddress":{  
            "streetName":"80 SCHOOL STREET",
            "city":"WOBURN",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01801"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-05-23T00:00:00.000+0000",
         "expDate":"2019-05-23T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1492"
         },
         "agent":{  
            "agentCode":{  
               "code":"3A4"
            },
            "agentName":"BOWERS/SCIPIONE/PHILLIPS, INC.",
            "agentNameExt":"*844-865-0062",
            "address":{  
               "streetName":"111 ADAMS STREET",
               "city":"NEWTON",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02458"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"617-244-1963"
            }
         },
         "insured":[  
            {  
               "firstName":"ELLEN",
               "middleName":"L",
               "lastName":"TOWNSEND",
               "isPrimaryInsured":true,
               "Insured Name":"ELLEN L TOWNSEND"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"73 ROUNDTOP RD",
            "city":"FRAMINGHAM",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01701"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"KMHCM3AC3AU175473"
               },
               "odometerReading":0,
               "vehicle":"2010 HYUNDAI ACCENT B"
            }
         ],
         "residentialAddress":{  
            "streetName":"73 ROUNDTOP RD",
            "city":"FRAMINGHAM",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01701"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-16T00:00:00.000+0000",
         "expDate":"2019-07-16T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1304"
         },
         "agent":{  
            "agentCode":{  
               "code":"F01"
            },
            "agentName":"KAPLANSKY INSURANCE AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"104 PROSPECT STREET",
               "city":"MILFORD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01757"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-478-0744"
            }
         },
         "insured":[  
            {  
               "firstName":"LAURIE",
               "middleName":"A",
               "lastName":"FERRUCCI",
               "isPrimaryInsured":true,
               "Insured Name":"LAURIE A FERRUCCI"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"20 DELUCA RD",
            "city":"MILFORD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01757"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"KMHDH4AE8BU110832"
               },
               "odometerReading":0,
               "vehicle":"2011 HYUNDAI ELANTRA"
            }
         ],
         "residentialAddress":{  
            "streetName":"20 DELUCA RD",
            "city":"MILFORD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01757"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-01T00:00:00.000+0000",
         "expDate":"2019-07-01T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1446"
         },
         "agent":{  
            "agentCode":{  
               "code":"287"
            },
            "agentName":"TED L. MONTEIRO, JR. INS AGCY, INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"78 FAUNCE CORNER RD.",
               "city":"NORTH DARTMOUTH",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02747"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-997-4070"
            }
         },
         "insured":[  
            {  
               "firstName":"DEBORAH",
               "middleName":"",
               "lastName":"BRUNELLE",
               "isPrimaryInsured":false,
               "Insured Name":"DEBORAH BRUNELLE"
            },
            {  
               "firstName":"GEORGE",
               "middleName":"J",
               "lastName":"BRUNELLE",
               "isPrimaryInsured":true,
               "Insured Name":"GEORGE J BRUNELLE"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"ENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"405 CROSS RD",
            "city":"N DARTMOUTH",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02747"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"2T1BURHE1GC715497"
               },
               "odometerReading":0,
               "vehicle":"2016 TOYT COROLLA"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"4T1BF1FK4GU258462"
               },
               "odometerReading":0,
               "vehicle":"2016 TOYT CAMRY LE"
            }
         ],
         "residentialAddress":{  
            "streetName":"405 CROSS RD",
            "city":"DARTMOUTH",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02747"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-30T00:00:00.000+0000",
         "expDate":"2019-07-30T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1153"
         },
         "agent":{  
            "agentCode":{  
               "code":"M36"
            },
            "agentName":"POPE INSURANCE AGENCY, INC.",
            "agentNameExt":"RENAISSANCE ALLIANCE LLC",
            "address":{  
               "streetName":"25 TAUNTON STREET, ROUTE 152",
               "city":"PLAINVILLE",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02762"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"508-695-7938"
            }
         },
         "insured":[  
            {  
               "firstName":"MICHAEL",
               "middleName":"J",
               "lastName":"CUNNINGHAM",
               "isPrimaryInsured":true,
               "Insured Name":"MICHAEL J CUNNINGHAM"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"96 OLD COLONY AVENUE #318",
            "city":"TAUNTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02718"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"1C4RJFAG6CC304987"
               },
               "odometerReading":0,
               "vehicle":"2012 JEEP GRAND CH"
            }
         ],
         "residentialAddress":{  
            "streetName":"96 OLD COLONY AVENUE #318",
            "city":"TAUNTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02718"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-05-23T00:00:00.000+0000",
         "expDate":"2019-05-23T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1348"
         },
         "agent":{  
            "agentCode":{  
               "code":"719"
            },
            "agentName":"O'BRIEN INSURANCE AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"150 MAIN STREET",
               "city":"READING",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01867"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"781-942-2200"
            }
         },
         "insured":[  
            {  
               "firstName":"KATHERINE",
               "middleName":"D",
               "lastName":"TESSIER",
               "isPrimaryInsured":false,
               "Insured Name":"KATHERINE D TESSIER"
            },
            {  
               "firstName":"MARK",
               "middleName":"JOSEPH",
               "lastName":"POWERS",
               "isPrimaryInsured":true,
               "Insured Name":"MARK JOSEPH POWERS"
            }
         ],
         "policyStatus":"INACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"N",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"960 TRAPELO RD",
            "city":"WALTHAM",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02452"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"1FM5K8D81EGA94804"
               },
               "odometerReading":0,
               "vehicle":"2014 FORD EXPLORER"
            }
         ],
         "residentialAddress":{  
            "streetName":"960 TRAPELO RD",
            "city":"WALTHAM",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02452"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-17T00:00:00.000+0000",
         "expDate":"2019-07-17T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1283"
         },
         "agent":{  
            "agentCode":{  
               "code":"744"
            },
            "agentName":"GARRETT-LYNCH INSURANCE AGCY., INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"411 HIGHLAND AVENUE",
               "city":"SOMERVILLE",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02144"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"617-625-1914"
            }
         },
         "insured":[  
            {  
               "firstName":"LAUREN",
               "middleName":"",
               "lastName":"HERBERT",
               "isPrimaryInsured":true,
               "Insured Name":"LAUREN HERBERT"
            },
            {  
               "firstName":"SAM",
               "middleName":"",
               "lastName":"RAPPAPORT",
               "isPrimaryInsured":false,
               "Insured Name":"SAM RAPPAPORT"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"3D SOUTH COMMONS",
            "city":"LINCOLN",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01773"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"19XFA1E56AE039671"
               },
               "odometerReading":0,
               "vehicle":"2010 HONDA CIVIC LX"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"5J6RE48329L009433"
               },
               "odometerReading":0,
               "vehicle":"2009 HONDA CR-V LX"
            }
         ],
         "residentialAddress":{  
            "streetName":"3D SOUTH COMMONS",
            "city":"LINCOLN",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01773"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-17T00:00:00.000+0000",
         "expDate":"2019-07-17T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH0021"
         },
         "agent":{  
            "agentCode":{  
               "code":"25K"
            },
            "agentName":"FINCK & PERRAS INS. AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"6 CAMPUS LANE",
               "city":"EASTHAMPTON",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01027"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"413-527-5520"
            }
         },
         "insured":[  
            {  
               "firstName":"ROBIN",
               "middleName":"E",
               "lastName":"RIESSMAN",
               "isPrimaryInsured":true,
               "Insured Name":"ROBIN E RIESSMAN"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"ENROLLMENT-PENDING",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"33 NORTH HILLSIDE ROAD",
            "city":"SOUTH DEERFIELD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01373"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"2HGFB2F84DH534067"
               },
               "odometerReading":10000,
               "vehicle":"2013 HONDA CIVIC EX"
            }
         ],
         "residentialAddress":{  
            "streetName":"33 NORTH HILLSIDE ROAD",
            "city":"DEERFIELD",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01373"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-30T00:00:00.000+0000",
         "expDate":"2019-07-30T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1125"
         },
         "agent":{  
            "agentCode":{  
               "code":"3R2"
            },
            "agentName":"FRANK CONSOLATI INS AGCY INC",
            "agentNameExt":"",
            "address":{  
               "streetName":"71 MAIN STREET",
               "city":"LEE",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"01238"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"413-243-0105"
            }
         },
         "insured":[  
            {  
               "firstName":"HEIDI",
               "middleName":"M",
               "lastName":"COOPER",
               "isPrimaryInsured":true,
               "Insured Name":"HEIDI M COOPER"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"N",
            "isEdf":"ENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"95 CIRCULAR AVE",
            "city":"LEE",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01238"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"5FNYF4H97CB036396"
               },
               "odometerReading":2356,
               "vehicle":"2012 HONDA PILOT TO"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"2FMDK49C18BA96534"
               },
               "odometerReading":1250,
               "vehicle":"2008 FORD EDGE LIM"
            }
         ],
         "residentialAddress":{  
            "streetName":"95 CIRCULAR AVE",
            "city":"LEE",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"01238"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-06-01T00:00:00.000+0000",
         "expDate":"2019-06-01T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1209"
         },
         "agent":{  
            "agentCode":{  
               "code":"J19"
            },
            "agentName":"AAA NORTHEAST INSURANCE AGCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"900 HINGHAM STREET",
               "city":"ROCKLAND",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02370"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"800-222-4242"
            }
         },
         "insured":[  
            {  
               "firstName":"JOEL",
               "middleName":"THOMAS",
               "lastName":"GROSSMAN",
               "isPrimaryInsured":true,
               "Insured Name":"JOEL THOMAS GROSSMAN"
            }
         ],
         "policyStatus":"CANCELLED",
         "policyFlags":{  
            "isEft":"ENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"N",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"96 ERROL RD",
            "city":"BROCKTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02302"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"1J8GR48K67C643441"
               },
               "odometerReading":0,
               "vehicle":"2007 JEEP GRAND CH"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"2D4RN5D19AR498783"
               },
               "odometerReading":0,
               "vehicle":"2010 DODGE GRAND CA"
            }
         ],
         "residentialAddress":{  
            "streetName":"96 ERROL RD",
            "city":"BROCKTON",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02302"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-29T00:00:00.000+0000",
         "expDate":"2019-07-29T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1098"
         },
         "agent":{  
            "agentCode":{  
               "code":"162"
            },
            "agentName":"CONWAY INSURANCE AGENCY, INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"715 BEDFORD STREET",
               "city":"WHITMAN",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02382"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"781-447-0661"
            }
         },
         "insured":[  
            {  
               "firstName":"DEBORAH",
               "middleName":"A",
               "lastName":"NELSON",
               "isPrimaryInsured":true,
               "Insured Name":"DEBORAH A NELSON"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"21 WHITMAN STREET",
            "city":"E BRIDGEWATER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02333"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"3GNAXSEV6JL374222"
               },
               "odometerReading":0,
               "vehicle":"2018 CHEV EQUINOX"
            }
         ],
         "residentialAddress":{  
            "streetName":"21 WHITMAN STREET",
            "city":"E BRIDGEWATER",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02333"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-07-07T00:00:00.000+0000",
         "expDate":"2019-07-07T00:00:00.000+0000"
      },
      {  billingDetails:       {...this.testCurrentBill()},
         "policynumber":{  
            "policynumber":"XH1583"
         },
         "agent":{  
            "agentCode":{  
               "code":"875"
            },
            "agentName":"POLLICELLI & MULLEN INS. AGCY INC.",
            "agentNameExt":"",
            "address":{  
               "streetName":"470 WASHINGTON STREET",
               "city":"NORWOOD",
               "state":"MASSACHUSETTS",
               "zipCode":{  
                  "code":"02062"
               },
               "stateCode":"MA"
            },
            "agentPhone":{  
               "number":"781-440-0808"
            }
         },
         "insured":[  
            {  
               "firstName":"MICHAEL",
               "middleName":"P",
               "lastName":"TWOHIG",
               "isPrimaryInsured":true,
               "Insured Name":"MICHAEL P TWOHIG"
            }
         ],
         "policyStatus":"ACTIVE",
         "policyFlags":{  
            "isEft":"UNENROLLED",
            "isEftEligible":"Y",
            "isEdf":"UNENROLLED",
            "isEdfEligible":"Y",
            "isEbill":null,
            "isEbillEligible":"Y",
            "isCCEligible":"Y",
            "allowDeductionDateChange":"Y"
         },
         "mailingAddress":{  
            "streetName":"25 PENDER STREET",
            "city":"W ROXBURY",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02132"
            },
            "stateCode":"MA"
         },
         "policyType":"AUTO",
         "vehicle":[  
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"1D7HE28KX6S709186"
               },
               "odometerReading":0,
               "vehicle":"2006 DODGE DAKOTA Q"
            },
            {  
               "vehicleIdentificationNumber":{  
                  "Id":"5FNYF18648B024251"
               },
               "odometerReading":0,
               "vehicle":"2008 HONDA PILOT EX"
            }
         ],
         "residentialAddress":{  
            "streetName":"25 PENDER STREET",
            "city":"W ROXBURY",
            "state":"MASSACHUSETTS",
            "zipCode":{  
               "code":"02132"
            },
            "stateCode":"MA"
         },
         "effDate":"2018-05-23T00:00:00.000+0000",
         "expDate":"2019-05-23T00:00:00.000+0000"
      }
   ];
   
  }

}
