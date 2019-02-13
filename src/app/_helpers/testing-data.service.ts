import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.doctest.dev';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor() {}

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
    if (environment.production ) {
      return false;
    }
    return {
      address:null,
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
    if (environment.production ) {
      return false;
    }
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
    if (environment.production ) {
      return false;
    }
    return [{
      amountStillDue: 13.5,
      minAmountDue: 13.5,
      outstandingbalance: 88.5,
      paymentDueDate: "2019-02-15T00:00:00.000+0000",
      totalPremiumAmount: 150
    }];
  }

  testPendingBills(): any {
    if (environment.production ) {
      return false;
    }
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

 
  /*testHistoryBills(): any {
    if (environment.production ) {
      return false;
    }
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP10/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP11/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP12/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP01/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP02/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP03/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         99.17                MPMP04/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
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
      },
      {
        "noticeData": "          EFP                                         109.66               MPMP05/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "amountStillDue": 1,
        "minAmountDue": 0,
        "amountApplied": 109.66,
        "amountPaid": 109.66,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "  ",
        "successCode": "  ",
        "bnIndicator": "MP",
        "billBalance": 1,
        "tempNoticeType": "EFP",
        "dueDate": "",
        "currentDateIssued": "          ",
        "transactionType": "",
        "dateApplied": "",
        "paymentType": "EFP"
      },
      {
        "noticeData": "          EFP                                         140.99               MPMP06/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "amountStillDue": 1,
        "minAmountDue": 0,
        "amountApplied": 140.99,
        "amountPaid": 140.99,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "  ",
        "successCode": "  ",
        "bnIndicator": "MP",
        "billBalance": 1,
        "tempNoticeType": "EFP",
        "dueDate": "",
        "currentDateIssued": "          ",
        "transactionType": "",
        "dateApplied": "",
        "paymentType": "EFP"
      },
      {
        "noticeData": "          EFP                                         140.99               MPMP07/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "amountStillDue": 1,
        "minAmountDue": 0,
        "amountApplied": 140.99,
        "amountPaid": 140.99,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "  ",
        "successCode": "  ",
        "bnIndicator": "MP",
        "billBalance": 1,
        "tempNoticeType": "EFP",
        "dueDate": "",
        "currentDateIssued": "          ",
        "transactionType": "",
        "dateApplied": "",
        "paymentType": "EFP"
      }
    ],
  } */


  /*testSchedualBills(): any {
    if (environment.production ) {
      return false;
    }
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
      },
      {
        "noticeData": "10/15/2016EFT02       10/15/2016      99.17    1080.83      99.17DIRMSCZ   00BN10/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 1080.83,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "10",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 1080.83,
        "tempNoticeType": "EFT02",
        "billingNoticeDateIssued": "10/15/2016",
        "dueDate": "10/15/2016",
        "billingNoticePayDate": "10/15/2016",
        "currentDateIssued": "10/15/2016"
      },
      {
        "noticeData": "11/15/2016EFT03       11/15/2016      99.17     982.66      99.17DIRMSCZ   00BN11/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 982.66,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "11",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 982.66,
        "tempNoticeType": "EFT03",
        "billingNoticeDateIssued": "11/15/2016",
        "dueDate": "11/15/2016",
        "billingNoticePayDate": "11/15/2016",
        "currentDateIssued": "11/15/2016"
      },
      {
        "noticeData": "12/15/2016EFT04       12/15/2016      99.17     884.49      99.17DIRMSCZ   00BN12/15/2016N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 884.49,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "12",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 884.49,
        "tempNoticeType": "EFT04",
        "billingNoticeDateIssued": "12/15/2016",
        "dueDate": "12/15/2016",
        "billingNoticePayDate": "12/15/2016",
        "currentDateIssued": "12/15/2016"
      },
      {
        "noticeData": "01/15/2017EFT05       01/15/2017      99.17     786.32      99.17DIRMSCZ   00BN01/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 786.32,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "01",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 786.32,
        "tempNoticeType": "EFT05",
        "billingNoticeDateIssued": "01/15/2017",
        "dueDate": "01/15/2017",
        "billingNoticePayDate": "01/15/2017",
        "currentDateIssued": "01/15/2017"
      },
      {
        "noticeData": "02/15/2017EFT06       02/15/2017      99.17     688.15      99.17DIRMSCZ   00BN02/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 688.15,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "02",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 688.15,
        "tempNoticeType": "EFT06",
        "billingNoticeDateIssued": "02/15/2017",
        "dueDate": "02/15/2017",
        "billingNoticePayDate": "02/15/2017",
        "currentDateIssued": "02/15/2017"
      },
      {
        "noticeData": "03/15/2017EFT07       03/15/2017      99.17     589.98      99.17DIRMSCZ   00BN03/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 589.98,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "03",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 589.98,
        "tempNoticeType": "EFT07",
        "billingNoticeDateIssued": "03/15/2017",
        "dueDate": "03/15/2017",
        "billingNoticePayDate": "03/15/2017",
        "currentDateIssued": "03/15/2017"
      },
      {
        "noticeData": "04/15/2017EFT08       04/15/2017      99.17     533.81      99.17DIRMSCZ   00BN04/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 533.81,
        "minAmountDue": 99.17,
        "amountApplied": 99.17,
        "amountPaid": 99.17,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "04",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 533.81,
        "tempNoticeType": "EFT08",
        "billingNoticeDateIssued": "04/15/2017",
        "dueDate": "04/15/2017",
        "billingNoticePayDate": "04/15/2017",
        "currentDateIssued": "04/15/2017"
      },
      {
        "noticeData": "05/15/2017EFT09       05/15/2017     109.66     529.64     109.66DIRMSCZ   00BN05/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 529.64,
        "minAmountDue": 109.66,
        "amountApplied": 109.66,
        "amountPaid": 109.66,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "05",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 529.64,
        "tempNoticeType": "EFT09",
        "billingNoticeDateIssued": "05/15/2017",
        "dueDate": "05/15/2017",
        "billingNoticePayDate": "05/15/2017",
        "currentDateIssued": "05/15/2017"
      },
      {
        "noticeData": "06/15/2017EFT10       06/15/2017     140.99     420.98     140.99DIRMSCZ   00BN06/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 420.98,
        "minAmountDue": 140.99,
        "amountApplied": 140.99,
        "amountPaid": 140.99,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "06",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 420.98,
        "tempNoticeType": "EFT10",
        "billingNoticeDateIssued": "06/15/2017",
        "dueDate": "06/15/2017",
        "billingNoticePayDate": "06/15/2017",
        "currentDateIssued": "06/15/2017"
      },
      {
        "noticeData": "07/15/2017EFT11       07/15/2017     140.99     280.99     140.99DIRMSCZ   00BN07/15/2017N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ",
        "noticeType": "",
        "amountStillDue": 280.99,
        "minAmountDue": 140.99,
        "amountApplied": 140.99,
        "amountPaid": 140.99,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "07",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 280.99,
        "tempNoticeType": "EFT11",
        "billingNoticeDateIssued": "07/15/2017",
        "dueDate": "07/15/2017",
        "billingNoticePayDate": "07/15/2017",
        "currentDateIssued": "07/15/2017"
      },
      {
        "noticeData": "08/15/2017EFT12 08/15/2017 141.00 140.00  .00DIRMSCZ   00BN N",
        "noticeType": "",
        "amountStillDue": 140,
        "minAmountDue": 141,
        "amountApplied": 0,
        "amountPaid": 0,
        "noticeIssued": "",
        "noticePayDate": "",
        "bhIndicator": "/1",
        "successCode": "08",
        "billPlan": "",
        "currentNoticeDate": "          ",
        "bnIndicator": "BN",
        "billBalance": 140,
        "tempNoticeType": "EFT12",
        "billingNoticeDateIssued": "08/15/2017",
        "dueDate": "08/15/2017",
        "billingNoticePayDate": "",
        "currentDateIssued": "08/15/2017"
      }
    ]
  } */
}
