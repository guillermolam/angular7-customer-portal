import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingDataService {

  constructor() { }

  testDatafunction() {
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

  testDataChecking(policyID): any {
    let object;
    if ( policyID == 'QJN952') {
      object = false;
    }
    else {
      object = [{
        accountName: 'Test Name',
        bankRoutingNumber: '123456789',
        accountNumber: '11111111111111111',
        mailingAddress: '1078 Boylston Street, Boston, MA, USA',
        apartment: '123'
      }];
    }
    return object;
  }
}
