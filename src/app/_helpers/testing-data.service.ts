import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor() { }

  testDatafunction() {
    /*
      return {
        firstName: 'FirstName',
        middleName: 'MiddleName',
        lastName: 'LastName',
        email: 'test@email.com',
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
              isEft: 'enrollment-pending',
              isEftEligi: false,
              isEbillElig: true,
              isEdfElig: false,
              isEbill: 'enrollment-pending',
              isEdf: 'enrollment-pending'
            },
            policyType: 'AUTO',
            vehicle: [
                {
                  vehicle: '2016 RAM 1500 SLT'
                },
                {
                  vehicle: '1998 HONDA CR-V LX'
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
              isEft: false,
              isEftEligi: true,
              isEbillElig: true,
              isEdfElig: true,
              isEbill: true,
              isEdf: true
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
                isEft: true,
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
              isEft: true,
              isEftEligi: false,
              isEbillElig: false,
              isEdfElig: false,
              isEbill: false,
              isEdf: 'removal-pending'
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
    */
    return this.testingDataFull();
  }

  testDataDocuments(policyID): any {
    let object;
    if (policyID == 'abc123' ) {
      object = [
        {
          policyEffectiveYear: '2001',
          documentId: 'bac2ab56-55f3-45a7-a1a0-553652847bb7',
          type: 'HONBEND',
          transactionDate: '02/20/2002',
          description: 'Homeowner NB/Endorse DEC (SDSHONBAM1)'
        },
        {
          policyEffectiveYear: '2001',
          documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
          type: 'ENDORSE',
          transactionDate: '02/20/2002',
          description: 'Endorsement Documents'
        },
        {
          policyEffectiveYear: '2001',
          documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
          type: 'ENDORSE',
          transactionDate: '02/20/2002',
          description: 'Endorsement Documents'
      },
      {
        policyEffectiveYear: '2001',
        documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
        type: 'ENDORSE',
        transactionDate: '02/20/2002',
        description: 'Endorsement Documents'
      }
      ];
    }
    else if ( policyID == 'QJN952') {
      object = [
        {
          policyEffectiveYear: '2001',
          documentId: 'bac2ab56-55f3-45a7-a1a0-553652847bb7',
          type: 'HONBEND',
          transactionDate: '02/20/2002',
          description: 'Homeowner NB/Endorse DEC (SDSHONBAM1)'
        },
        {
          policyEffectiveYear: '2001',
          documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
          type: 'ENDORSE',
          transactionDate: '02/20/2002',
          description: 'Endorsement Documents'
        },
        {
          policyEffectiveYear: '2001',
          documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
          type: 'ENDORSE',
          transactionDate: '02/20/2002',
          description: 'Endorsement Documents'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
            type: 'ENDORSE',
            transactionDate: '02/20/2002',
            description: 'Endorsement Documents'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'bac2ab56-55f3-45a7-a1a0-553652847bb7',
            type: 'HONBEND',
            transactionDate: '02/20/2002',
            description: 'Homeowner NB/Endorse DEC (SDSHONBAM1)'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
            type: 'ENDORSE',
            transactionDate: '02/20/2002',
            description: 'Endorsement Documents'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
            type: 'ENDORSE',
            transactionDate: '02/20/2002',
            description: 'Endorsement Documents'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
            type: 'ENDORSE',
            transactionDate: '02/20/2002',
            description: 'Endorsement Documents'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'bac2ab56-55f3-45a7-a1a0-553652847bb7',
            type: 'HONBEND',
            transactionDate: '02/20/2002',
            description: 'Homeowner NB/Endorse DEC (SDSHONBAM1)'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
            type: 'ENDORSE',
            transactionDate: '02/20/2002',
            description: 'Endorsement Documents'
          },
          {
            policyEffectiveYear: '2001',
            documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
            type: 'ENDORSE',
            transactionDate: '02/20/2002',
            description: 'Endorsement Documents'
        },
        {
          policyEffectiveYear: '2001',
          documentId: 'f1f18405-d76f-4292-8f3f-61a3b06a66a2',
          type: 'ENDORSE',
          transactionDate: '02/20/2002',
          description: 'Endorsement Documents'
        }
      ];
    }
    else {
      object = false;
    }
    return object;
  }

  testDataClaims(): any {
   // return '';
    
      return [
        {
          LOSS_NUMBER: 'AAABBB-CCCDDD',
          LOSS_DATE: '21/01/1992',
          LOSS_DESC: 'collision',
          SUCCESS: '1',
          policyid: 'QJN952',
          policytype: 'auto',
          details: {
            claimant: 'MARIA C. BRILHANT',
            payments_to_date: '$2868.87',
            location: '10 City Square, Charlestown, MA 02129',
            description: 'Ins Veh was hit & run or run off road by unidentified veh',
            claim_adjustter_number: '1-800-221-1605 EXTENSION 15450 ',
            claim_adjustter_email: 'CWEB_CLAIMS_CONTACT@COMMERCEINSURANCE.COM ',
            claim_adjustter_fax: '1-508-949-5930',
            appraisal: [
              {
                number: 'ABC1234',
                appraiser: 'Boston Appraisals',
                amount: '$500.12',
                status: 'Complete'
              }
            ],
            payments: [
              {
                check: '0026929804',
                datepaid: '12/03/2018',
                amount: '$320.12',
                status: 'Cashed 09/08/2018'
              },
              {
                check: '0026929804',
                datepaid: '12/03/2018',
                amount: '$320.12',
                status: 'Cashed 09/08/2018'
              },
            ],
          }
        },
        {
          LOSS_NUMBER: 'A1B1C1-D1E1F1',
          LOSS_DATE: '21/01/1992',
          LOSS_DESC: 'collision',
          SUCCESS: '0',
          policyid: '66161',
          policytype: 'auto',
          details: {
            claimant: 'MARIA C. BRILHANT',
            payments_to_date: '$2868.87',
            location: '62 Summer St, Boston, MA 02110',
            description: 'Ins Veh was hit & run or run off road by unidentified veh',
            claim_adjustter_number: '1-800-221-1605 EXTENSION 15450 ',
            claim_adjustter_email: 'CWEB_CLAIMS_CONTACT@COMMERCEINSURANCE.COM ',
            claim_adjustter_fax: '1-508-949-5930',
            appraisal: [
            {
              number: 'ABC1234',
              appraiser: 'Boston Appraisals',
              amount: '$500.12',
              status: 'Complete'
            },
            {
              number: 'ABC1234',
              appraiser: 'Boston Appraisals',
              amount: '$333.12',
              status: 'Complete'
            }
            ],
            payments: [
            {
              check: '0026929804',
              datepaid: '12/03/2018',
              amount: '$320.12',
              status: 'Cashed 09/08/2018'
            },
            {
              check: '0026131104',
              datepaid: '12/03/2018',
              amount: '$331.12',
              status: 'Cashed 09/08/2018'
            },
            ],
          }
        },
        {
          LOSS_NUMBER: 'AAABBB-BBBBBBB',
          LOSS_DATE: '21/01/1992',
          LOSS_DESC: 'water damage',
          SUCCESS: '1',
          policyid: 'abc123',
          policytype: 'property',
          details: {
            claimant: 'MARIA C. BRILHANT',
            payments_to_date: '$2868.87',
            location: '110 Strathmore Rd. 02135 Brighton, MA',
            description: 'Water Damage from a leaky roof',
            claim_adjustter_number: '1-800-221-1605 EXTENSION 15450 ',
            claim_adjustter_email: 'CWEB_CLAIMS_CONTACT@COMMERCEINSURANCE.COM ',
            claim_adjustter_fax: '1-508-949-5930',
            appraisal: [
            {
              number: 'ABC1234',
              appraiser: 'Boston Appraisals',
              amount: '$500.12',
              status: 'Complete'
            },
            {
              number: 'ABC1234',
              appraiser: 'Boston Appraisals',
              amount: '$333.12',
              status: 'Complete'
            }
            ],
            payments: [
            {
              check: '0026929804',
              datepaid: '12/03/2018',
              amount: '$320.12',
              status: 'Cashed 09/08/2018'
            },
            {
              check: '0026131104',
              datepaid: '12/03/2018',
              amount: '$331.12',
              status: 'Cashed 09/08/2018'
            },
            ],
          }
          
      },
      {
        LOSS_NUMBER: 'CCCCCC-D1E1F1',
        LOSS_DATE: '21/01/1992',
        LOSS_DESC: 'lightening damage',
        SUCCESS: '0',
        policyid: 'BBWQKQ',
        policytype: 'property',
        details: {
          claimant: 'MARIA C. BRILHANT',
          payments_to_date: '$2868.87',
          location: '1848 Commonwealth Ave Brighton MA 02135',
          description: 'lightening struck the building',
          claim_adjustter_number: '1-800-221-1605 EXTENSION 15450 ',
          claim_adjustter_email: 'CWEB_CLAIMS_CONTACT@COMMERCEINSURANCE.COM ',
          claim_adjustter_fax: '1-508-949-5930',
          appraisal: [
          {
            number: 'ABC1234',
            appraiser: 'Boston Appraisals',
            amount: '$500.12',
            status: 'Complete'
          },
          {
            number: 'ABC1234',
            appraiser: 'Boston Appraisals',
            amount: '$333.12',
            status: 'Complete'
          }
          ],
          payments: [
          {
            check: '0026929804',
            datepaid: '12/03/2018',
            amount: '$320.12',
            status: 'Cashed 09/08/2018'
          },
          {
            check: '0026131104',
            datepaid: '12/03/2018',
            amount: '$331.12',
            status: 'Cashed 09/08/2018'
          },
          ],
        }
      }
    ];
    
  }

  testDataBilling(): any {
    return {

    }
  }

   testUserFunction(): any {
    return {
      firstName: 'FirstName',
      middleName: 'MiddleName',
      lastName: 'LastName',
      email: 'test@email.com',
    }
  }

  testDataChecking(policyID): any {
    let object;
    if ( policyID == 'QJN952') {
      object = [{
        accountName: 'Test Name',
        bankRoutingNumber: '123456789',
        accountNumber: '11111111111111111',
        mailingAddress: '1078 Boylston Street, Boston, MA, USA',
        apartment: '123'
      }];
    }
    else {
      object = false;
    }
    return object;
  }

  testingDataFull(): any {
    return [{
      "testData":"THIS IS TEST DATA IT SHOULD NOT BE AVAILABLE IN PRODUCTION",
      "policynumber": {
        "policynumber": "QJN952"
      },
      "agent": {
        "agentCode": {
          "code": "434"
        },
        "agentName": "AAA NORTHEAST INSURANCE AGCY, INC.",
        "agentNameExt": "",
        "address": {
          "streetName": "32 FAIRHAVEN COMMONS",
          "city": "FAIRHAVEN",
          "state": "MASSACHUSETTS",
          "zipCode": {
            "code": "02719"
          }
        },
        "agentPhone": {
          "number": "800-222-4242"
        }
      },
      "insured": [
        {
          "firstName": "JENNIFER",
          "middleName": "L",
          "lastName": "JUDD",
          "isPrimaryInsured": true,
          "Insured Name": "JENNIFER L JUDD"
        }
      ],
      "policyStatus": "INACTIVE",
      "policyFlags": {
        "isEft": "ENROLLED",
        "isEftEligible": "UNENROLLED",
        "isEdf": "UNENROLLED",
        "isEbillEligible": "UNENROLLED",
        "isEbill": "UNENROLLED",
        "isEdfEligible": "UNENROLLED",
        "isCCEligible": "Y",
        "allowDeductionDateChange": "Y"
      },
      "mailingAddress": {
        "streetName": "34 EVERGREEN ST.",
        "city": "FAIRHAVEN",
        "state": "MASSACHUSETTS",
        "zipCode": {
          "code": "02719"
        }
      },
      "vehicle": [
        {
          "vehicleIdentificationNumber": null,
          "odometerReading": 0,
          "vehicle": "2016 RAM 1500 SLT"
        },
        {
          "vehicleIdentificationNumber": null,
          "odometerReading": 0,
          "vehicle": "1998 HONDA CR-V LX"
        }
      ],
      "policyType": "AUTO",
      "residentialAddress": {
        "streetName": "34 EVERGREEN ST.",
        "city": "FAIRHAVEN",
        "state": "MASSACHUSETTS",
        "zipCode": {
          "code": "02719"
        }
      },
      "effDate": "2016-09-10T00:00:00.000+0000",
      "expDate": "2017-09-10T00:00:00.000+0000",
      "billingDetails": {},
      "documentsDetails": [],
      "vehicleDetails": [
        {
          "vehicleIdentificationNumber": {
            "Id": "1C6RR7GT3GS124646"
          },
          "odometerReading": 9,
          "vehicle": "2016 RAM 1500 SLT"
        },
        {
          "vehicleIdentificationNumber": {
            "Id": "JHLRD1843WC063631"
          },
          "odometerReading": 20,
          "vehicle": "1998 HONDA CR-V LX"
        }
      ],
      "billingHistory": [
        {
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
      "scheduledBills": [
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
      ],
      "pendingCheckPayments": [
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        },
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
          "deductionDay": 0,
          "paymentDateTime": "2016-04-21T00:00:00.000+0000"
        }
      ]
    }];
  }
}
