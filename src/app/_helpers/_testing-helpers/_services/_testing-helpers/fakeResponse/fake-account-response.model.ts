export class FakeAccountResponse {
    private static user = {
        addPolicyAttempts:          3,
        firstName:                  'TestFirstName',
        middleName:                 'TM',
        lastName:                   'TestLastName',
        email:                      'testUpdate@email.com',
        password:                   'abcd12D!',
        policyDetails: [{
          InsName1:                 null,
          effDate:                  '12/12/2018',
          expDate:                  '12/12/2018',
          policynumber:             { policynumber: 'BB0490' },
          policyStatus:             'cancelled',
          policyType:               'home',
          status:                   null,
        },
        {
          InsName1:                 null,
          effDate:                  '12/12/2018',
          expDate:                  '12/12/2018',
          policynumber:             { policynumber: '120490' },
          policyStatus:             'cancelled',
          policyType:               'auto',
          status:                   null, 
        }]
      }
  
      static getUserData(){
          return this.user;
      }
}