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
      documents: [
        {
          documentName: 'Document Name 1',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 2',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 3',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 4',
          documentLocation: '#',
          documentType: 'endorsments',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 5',
          documentLocation: '#',
          documentType: 'misc',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 6',
          documentLocation: '#',
          documentType: 'misc',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 7',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 8',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 9',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 10',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 11',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 12',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 13',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 14',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate: '2016-09-10T04:00:00.000+0000'
        },
        {
          documentName: 'Document Name 15',
          documentLocation: '#',
          documentType: 'renewal',
          documentDate:'2016-09-10T04:00:00.000+0000'
        },

      ]
    };
  }
}
