export class CreateAccountRequest {
    static requestBody = {
        customer: {
          firstName: 'tesing',
          middleName: 'testing',
          lastName: 'testing',
          email: 'user@policies.com'
        },
        policynumbers: [
          {
            policynumber: 'BSHD21'
          },
          {
            policynumber: 'B2WNDJ'
          }
        ],
          credentials: {
          email: 'user@policies.com',
          password: 'test@2018'
        }
      };
}
