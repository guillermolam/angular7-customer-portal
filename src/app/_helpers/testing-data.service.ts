import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.doctest.dev';
import { UserService } from '../_services/user.service';
import { PolicyDataService } from '../_services/my-insurance/data-services/policy-data.service';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor(
    private userService: UserService,
    private policyDataService: PolicyDataService
  ) {}

  setUpTestingData(): any {
    //based off of all the syntax around

    if (environment.production ) {
      return false;
    }

    //user and bank info
    const updatedUser = [{
      userDetails:              this.testUserInfo(),
      bankAccountDetails:       this.testBankingInfo()
    }];
    this.userService.updateUser(updatedUser);

    //policy info + current bill
    const policyBillingDataAll = [];
    policyBillingDataAll.push(...[Object.assign(
      this.testingPolicyInfo(),
      { billingDetails:       this.testCurrentBill() })
    ]);

    this.policyDataService.updatePolicyDetails(policyBillingDataAll);

    // claims


    // bills
    
  }

  testDataClaimsDetail(): any {
    if (environment.production ) {
      return false;
    }
    return {
    };
  }

  testDataClaimsList(): any {
    if (environment.production ) {
      return false;
    }
    return [
      {
        "description": "IV BACKING UP, COLLIDED WITH OV",
        "lossDate": "2013-01-13T05:08:00.000+0000",
        "policynumber": {
          "number": "BBWQKW"
        },
        "claimNumber": {
            "claimNumber": "CCCDDD"
        },
        "lossNumber": {
            "lossNumber": "AAABBB"
        },
        "claimType": "Property damage",
        "fileNumber": {
            "fileNumber": "AAABBB-CCCDDD"
        },
        "propertyOrAuto": "171517710012013 ,  ",
        "propertyOrAutoIndicator": "Auto"
      },
      {
        "description": "111",
        "lossDate": "2013-01-13T05:08:00.000+0000",
        "policynumber": {
          "number": "123456"
        },
        "claimNumber": {
            "claimNumber": "D1E1F1"
        },
        "lossNumber": {
            "lossNumber": "A1B1C1"
        },
        "claimType": "Property damage",
        "fileNumber": {
            "fileNumber": "A1B1C1-D1E1F1"
        },
        "propertyOrAuto": "171517710012013 ,  ",
        "propertyOrAutoIndicator": "Auto"
      },
      {
        "description": "111",
        "lossDate": "2013-01-13T05:08:00.000+0000",
        "policynumber": {
          "number": "QWERTY"
        },
        "claimNumber": {
            "claimNumber": "BBBBBBB"
        },
        "lossNumber": {
            "lossNumber": "AAABBB"
        },
        "claimType": "Property damage",
        "fileNumber": {
            "fileNumber": "AAABBB-BBBBBBB"
        },
        "propertyOrAuto": "171517710012013 ,  ",
        "propertyOrAutoIndicator": "Property"
      },
      {
        "description": "111",
        "lossDate": "2013-01-13T05:08:00.000+0000",
        "policynumber": {
          "number": "QWERTY"
        },
        "claimNumber": {
            "claimNumber": "D1E1F1"
        },
        "lossNumber": {
            "lossNumber": "CCCCCC"
        },
        "claimType": "Property damage",
        "fileNumber": {
            "fileNumber": "CCCCCC-D1E1F1"
        },
        "propertyOrAuto": "171517710012013 ,  ",
        "propertyOrAutoIndicator": "Property"
      }
    ]
  }

  testDataClaims(type): any { 
    if (environment.production ) {
      return false;
    }
    if(type == 'list') {
      return this.testDataClaimsList();
    }
    else {
      return this.testDataClaimsDetail();
    }
  }

  testBankingInfo(): any {
    if (environment.production ) {
      return false;
    }
    return {
      accountHolderName:"Default",
      accountNumber:{
        digits:"12345678987887777",
      },
      accountType:"CHECKING",
      mailingAddress:{
        city:"NORTH OXFORD",
        state:"MASSACHUSETTS",
        "stateCode":"MA",
        streetName:"120 HIGHWAY 20|55",
        zipCode:{
          code:"01537",
          }
      },
      routingNumber:{
        digits:"265473812",
      }
    };
  }

  testUserInfo(): any {
    
    return {
      address: null,
      email: {
        address:"testmfre@gmail.com"
      },
      firstName:"DEFAULT",
      lastName:"DEFAULT",
      middleName:"DEFAULr",
      phone:{
        number:"1254122222"
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
   
    return [{
      amountStillDue: 13.5,
      minAmountDue: 13.5,
      outstandingbalance: 88.5,
      paymentDueDate: "2019-02-15T00:00:00.000+0000",
      totalPremiumAmount: 150
    }];
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
}
