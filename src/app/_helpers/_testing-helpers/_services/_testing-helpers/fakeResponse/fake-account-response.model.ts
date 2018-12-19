export class FakeAccountResponse {
    private static user = {
        addPolicyAttempts:          2,
        firstName: 'Conrad',
        middleName: '',
        lastName: 'Gagne',
        email: 'user@policies.com',
        password: 'test@2018',
        policyDetails: [{
          InsName1:                 null,
          effDate:                  '12/12/2018',
          expDate:                  '12/12/2018',
          policynumber:             { policynumber: 'BSHD21' },
          policyStatus:             'cancelled',
          policyType:               'home',
          status:                   null,
        },
        {
          InsName1:                 null,
          effDate:                  '12/12/2018',
          expDate:                  '12/12/2018',
          policynumber:             { policynumber: 'B2WNDJ' },
          policyStatus:             'cancelled',
          policyType:               'auto',
          status:                   null,
        }]
      };

      private static user2 = {
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
          policynumbers:             { policynumber: 'BB0490' },
          policyStatus:             'cancelled',
          policyType:               'home',
          status:                   null,
        },
        {
          InsName1:                 null,
          effDate:                  '12/12/2018',
          expDate:                  '12/12/2018',
          policynumbers:             { policynumber: '120490' },
          policyStatus:             'cancelled',
          policyType:               'auto',
          status:                   null,
        }]
      };

      static getUserData() {
          return this.user;
      }

      static getUserPolicyData() {
        return this.user2;
      }
}
