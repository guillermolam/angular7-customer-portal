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
    return [
      {
         LOSS_NUMBER: 'AAABBB-CCCDDD',
         LOSS_DATE: '21/01/1992',
         LOSS_DESC: 'collision',
         SUCCESS: '1',
         policyid: 'QJN952',
         policytype: 'auto'
      },
      {
        LOSS_NUMBER: 'A1B1C1-D1E1F1',
        LOSS_DATE: '21/01/1992',
        LOSS_DESC: 'collision',
        SUCCESS: '0',
        policyid: '66161',
        policytype: 'auto'
     },
     {
      LOSS_NUMBER: 'AAABBB-BBBBBBB',
      LOSS_DATE: '21/01/1992',
      LOSS_DESC: 'water damage',
      SUCCESS: '1',
      policyid: 'abc123',
      policytype: 'property'
   },
   {
     LOSS_NUMBER: 'CCCCCC-D1E1F1',
     LOSS_DATE: '21/01/1992',
     LOSS_DESC: 'lightening damage',
     SUCCESS: '0',
     policyid: 'BBWQKQ',
     policytype: 'property'
  }
   ];
  }
}
