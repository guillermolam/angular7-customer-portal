import { TestBed, async } from '@angular/core/testing';
import { UserService }    from './user.service';
import { User }           from '../_models/user';
import { PolicyDetails }  from '../_models/policy-details';

describe('UserService', () => {

  let user:               User;
  let policyDetails:      PolicyDetails[];
  let userService:        UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ UserService ]
    });

    policyDetails =        [{ }];

    user = {
      addPolicyAttempts:   1,
      creationDate:        new Date(),
      email:               'first@xyz.com',
      firstName:           'first',
      middleName:          'middle',
      lastName:            'last',
      password:            'passwd',
      policyDetails:       policyDetails,
      temporaryPassword:   'temp'
    };
    userService = TestBed.get(UserService);
  });

  afterEach(() => {
    policyDetails = null;
    user = null;
  });

  it('should update the user',
    async(() => {
    userService.updateUser(user);
    userService.$user.subscribe( (user) => {
        expect(user.addPolicyAttempts).toBe(1);
        expect(user.firstName).toBe('first');
        expect(user.middleName).toBe('middle');
        expect(user.lastName).toBe('last');
        expect(user.password).toBe('passwd');
    });
    })
  );
});
