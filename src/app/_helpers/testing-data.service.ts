import { ClaimsDataService } from './../_services/_claims/claims-data.service';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.doctest.dev';
import { UserService } from '../_services/user.service';
import { PolicyDataService } from '../_services/my-insurance/data-services/policy-data.service';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor(
    private userService: UserService,
    private policyDataService: PolicyDataService,
    private claimsDataService: ClaimsDataService,

  ) { }

  setUpTestingData(): any {
    //based off of all the syntax around

    if (environment.production) {
      return;
    }

    //user and bank info
    const updatedUser = [{
      userDetails: this.testUserInfo(),
      bankAccountDetails: this.testBankingInfo()
    }];
    this.userService.updateUser(updatedUser);

    //policy info + current bill
    const policyBillingDataAll = [];
    policyBillingDataAll.push(...[Object.assign(
      this.testingPolicyInfo(),
      { billingDetails: this.testCurrentBill() })
    ]);

    this.policyDataService.updatePolicyDetails(policyBillingDataAll);

    // claims
    this.claimsDataService.updateClaims(this.testDataClaimsDetail());

    // bills


  }

  testDataClaimsDetail(): any {

    return [
      {
        "number": {
          "number": "PRAK16"
        },
        "exposures": [
          {
            "coverage": {
              "code": "***No Claims Found***"
            },
            "description": "Other Vehicle, backing up, collided with Insured Vehicle ",
            "address": {
              "streetName": "      ***No Claims Found***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "***"
            },
            "exposureNumber": {
              "exposureNumber": ""
            },
            "payments": [],
            "appraisals": [],
            "adjuster": {
              "name": "",
              "extensionAndFax": "15450,1-508-949-5930",
              "adjusterId": {
                "id": ""
              },
              "email": {
                "address": "CWEB_CLAIMS_CONTACT@COMMERCEINSURANCE.COM"
              },
              "phoneNumber": {
                "number": "999-999-9999"
              }
            }
          }
        ],
        "policyNumber": {
          "policynumber": "GHQ004"
        },
        "date": "2018-04-25T00:00:00.000+0000",
        "propertyOrAutoIndicator": "13 SUBA FORESTER"
      },
      {
        "number": {
          "number": "RAJX49"
        },
        "exposures": [
          {
            "coverage": {
              "code": "Comprehensive"
            },
            "description": "Object from Other Vehicle hit Insured Vehicle ",
            "address": {
              "streetName": "N41573612102018 ,  ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "JOSE MIGUEL MARTI"
            },
            "exposureNumber": {
              "exposureNumber": "NXKAX1"
            },
            "payments": [
              {
                "status": {
                  "code": "CASHED",
                  "date": "2018-01-21T00:12:00.000+0000"
                },
                "deductibleCode": "APL",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "exposureNumber": "PA",
                "checkNumber": "0027640949",
                "checkAmount": 416.8,
                "paymentReason": "COMPREHENSIVE",
                "checkPayee": "GLENVILLE TERRACE AUTO BODY",
                "checkDate": "2018-01-10T00:12:00.000+0000"
              },
              {
                "status": {
                  "code": "N/A",
                  "date": null
                },
                "deductibleCode": "N/A",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "exposureNumber": "PA",
                "checkNumber": "0959365773",
                "checkAmount": 221.55,
                "paymentReason": "",
                "checkPayee": "Hertz Bulk Rental via ACH",
                "checkDate": null
              }
            ],
            "appraisals": [
              {
                "type": "APPRAISAL",
                "number": {
                  "number": "A0PVHYJ"
                },
                "status": "CLOSE",
                "appraiser": {
                  "name": "GLENVILLE TERRACE AUTO    "
                },
                "appraisalAmount": 0,
                "exposureNumber": "AP",
                "variableAmount": null
              }
            ],
            "adjuster": {
              "name": "JENNIFER GOMES",
              "extensionAndFax": "15736,508-671-3736",
              "adjusterId": {
                "id": "JGOMES"
              },
              "email": {
                "address": "JGOMES@MAPFREUSA.COM"
              },
              "phoneNumber": {
                "number": "999-999-9999"
              }
            }
          },
          {
            "coverage": {
              "code": "Rental reimb"
            },
            "description": "Object from Other Vehicle hit Insured Vehicle ",
            "address": {
              "streetName": "N41573612202018 ,  ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "JOSE MIGUEL MARTI"
            },
            "exposureNumber": {
              "exposureNumber": "NXKPA4"
            },
            "payments": [
              {
                "status": {
                  "code": "CASHED",
                  "date": "2018-01-21T00:12:00.000+0000"
                },
                "deductibleCode": "APL",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "exposureNumber": "PA",
                "checkNumber": "0027640949",
                "checkAmount": 416.8,
                "paymentReason": "COMPREHENSIVE",
                "checkPayee": "GLENVILLE TERRACE AUTO BODY",
                "checkDate": "2018-01-10T00:12:00.000+0000"
              },
              {
                "status": {
                  "code": "N/A",
                  "date": null
                },
                "deductibleCode": "N/A",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "exposureNumber": "PA",
                "checkNumber": "0959365773",
                "checkAmount": 221.55,
                "paymentReason": "",
                "checkPayee": "Hertz Bulk Rental via ACH",
                "checkDate": null
              }
            ],
            "appraisals": [
              {
                "type": "APPRAISAL",
                "number": {
                  "number": "A0PVHYJ"
                },
                "status": "CLOSE",
                "appraiser": {
                  "name": "GLENVILLE TERRACE AUTO    "
                },
                "appraisalAmount": 0,
                "exposureNumber": "AP",
                "variableAmount": null
              }
            ],
            "adjuster": {
              "name": "JENNIFER GOMES",
              "extensionAndFax": "15736,508-671-3736",
              "adjusterId": {
                "id": "JGOMES"
              },
              "email": {
                "address": "JGOMES@MAPFREUSA.COM"
              },
              "phoneNumber": {
                "number": "999-999-9999"
              }
            }
          }
        ],
        "policyNumber": {
          "policynumber": "GHQ004"
        },
        "date": "2018-11-21T00:00:00.000+0000",
        "propertyOrAutoIndicator": "13 SUBA FORESTER"
      }
    ]
  }

  testDataClaimsList(): any {
    if (environment.production) {
      return false;
    }
    return [
      {
        "number": {
          "number": "NJH830"
        },
        "exposures": [
          {
            "coverage": {
              "code": "Glass"
            },
            "description": "Glass - windshield ",
            "claimant": {
              "name": "ROBIN E RIESSMAN"
            },
            "exposureNumber": {
              "exposureNumber": "JWCH13"
            },
            "payments": [],
            "appraisals": [],
            "adjusterId": {
              "id": ""
            }
          }
        ],
        "policyNumber": {
          "policynumber": "XH0021"
        },
        "date": "2008-01-08T05:00:00.000+0000"
      },
      {
        "number": {
          "number": "VWY134"
        },
        "exposures": [
          {
            "coverage": {
              "code": "Glass"
            },
            "description": "Glass - mirror ",
            "claimant": {
              "name": "DAVID SOUSA"
            },
            "exposureNumber": {
              "exposureNumber": "RRAC39"
            },
            "payments": [],
            "appraisals": [],
            "adjusterId": {
              "id": ""
            }
          }
        ],
        "policyNumber": {
          "policynumber": "XH0786"
        },
        "date": "2010-08-14T04:00:00.000+0000"
      }
    ];
  }

  testDataClaims(type): any {
    if (environment.production) {
      return false;
    }
    if (type == 'list') {
      return this.testDataClaimsList();
    }
    else {
      return this.testDataClaimsDetail();
    }
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
        address: "testmfre@gmail.com"
      },
      firstName: "DEFAULT",
      lastName: "DEFAULT",
      middleName: "DEFAULr",
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

  testFullClaimsData() {
    return [
      {
        "number": {
          "number": ""
        },
        "exposures": [
          {
            "coverage": {
              "code": "***No Claims Found***"
            },
            "description": "Loss        is not found on the Commerce database. ",
            "address": {
              "streetName": "      ***No Claims Found***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "***"
            },
            "exposureNumber": {
              "exposureNumber": ""
            },
            "payments": [],
            "appraisals": [],
            "adjusterId": {
              "id": ""
            }
          }
        ],
        "policyNumber": {
          "policynumber": "BGZHSK"
        },
        "date": "2019-02-15T01:04:48.658+0000"
      },
      {
        "number": {
          "number": "PRAK16"
        },
        "exposures": [
          {
            "coverage": {
              "code": "***No Claims Found***"
            },
            "description": "Other Vehicle, backing up, collided with Insured Vehicle ",
            "address": {
              "streetName": "      ***No Claims Found***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "***"
            },
            "exposureNumber": {
              "exposureNumber": ""
            },
            "payments": [],
            "appraisals": [],
            "adjusterId": {
              "id": ""
            }
          }
        ],
        "policyNumber": {
          "policynumber": "GHQ004"
        },
        "date": "2018-04-25T00:00:00.000+0000"
      },
      {
        "number": {
          "number": "RAJX49"
        },
        "exposures": [
          {
            "coverage": {
              "code": "Rental reimb"
            },
            "description": "Object from Other Vehicle hit Insured Vehicle ",
            "address": {
              "streetName": "N41573612202018 ,  ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "JOSE MIGUEL MARTI"
            },
            "exposureNumber": {
              "exposureNumber": "NXKPA4"
            },
            "payments": [
              {
                "status": {
                  "code": "CASHED",
                  "date": "2018-01-21T00:12:00.000+0000"
                },
                "deductibleCode": "APL",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "paymentReason": "COMPREHENSIVE",
                "checkNumber": "0027640949",
                "checkPayee": "GLENVILLE TERRACE AUTO BODY",
                "checkDate": "2018-01-10T00:12:00.000+0000",
                "checkAmount": 416.8
              },
              {
                "status": {
                  "code": "N/A",
                  "date": null
                },
                "deductibleCode": "N/A",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "paymentReason": "",
                "checkNumber": "0959365773",
                "checkPayee": "Hertz Bulk Rental via ACH",
                "checkDate": null,
                "checkAmount": 221.55
              }
            ],
            "appraisals": [
              {
                "type": "APPRAISAL",
                "number": {
                  "number": "A0PVHYJ"
                },
                "status": "CLOSE",
                "appraiser": {
                  "name": "GLENVILLE TERRACE AUTO    "
                },
                "appraisalAmount": 0,
                "variableAmount": null
              }
            ],
            "adjusterId": {
              "id": "JGOMES"
            }
          },
          {
            "coverage": {
              "code": "Comprehensive"
            },
            "description": "Object from Other Vehicle hit Insured Vehicle ",
            "address": {
              "streetName": "N41573612102018 ,  ",
              "city": "",
              "state": "UNKNOWN",
              "zipCode": {
                "digits": "00000"
              }
            },
            "claimant": {
              "name": "JOSE MIGUEL MARTI"
            },
            "exposureNumber": {
              "exposureNumber": "NXKAX1"
            },
            "payments": [
              {
                "status": {
                  "code": "CASHED",
                  "date": "2018-01-21T00:12:00.000+0000"
                },
                "deductibleCode": "APL",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "paymentReason": "COMPREHENSIVE",
                "checkNumber": "0027640949",
                "checkPayee": "GLENVILLE TERRACE AUTO BODY",
                "checkDate": "2018-01-10T00:12:00.000+0000",
                "checkAmount": 416.8
              },
              {
                "status": {
                  "code": "N/A",
                  "date": null
                },
                "deductibleCode": "N/A",
                "address": {
                  "streetName": "default",
                  "city": "default",
                  "state": "MASSACHUSETTS",
                  "zipCode": {
                    "digits": "00000"
                  }
                },
                "paymentReason": "",
                "checkNumber": "0959365773",
                "checkPayee": "Hertz Bulk Rental via ACH",
                "checkDate": null,
                "checkAmount": 221.55
              }
            ],
            "appraisals": [
              {
                "type": "APPRAISAL",
                "number": {
                  "number": "A0PVHYJ"
                },
                "status": "CLOSE",
                "appraiser": {
                  "name": "GLENVILLE TERRACE AUTO    "
                },
                "appraisalAmount": 0,
                "variableAmount": null
              }
            ],
            "adjusterId": {
              "id": "JGOMES"
            }
          }
        ],
        "policyNumber": {
          "policynumber": "GHQ004"
        },
        "date": "2018-11-21T00:00:00.000+0000"
      }
    ];
  }
}
