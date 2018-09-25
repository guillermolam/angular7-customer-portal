import { TestBed, inject } from "@angular/core/testing";

import { UserService } from "./user.service";
import { User } from "../_models/user";
import { PolicyDetails } from "../_models/policy-details";

describe("UserService", () => {

  let user:                        User;
  let policyDetails:               PolicyDetails[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });

    policyDetails=                 [{ }];

    user = {
      addPolicyAttempts:           1,
      creationDate:                new Date(),
      email:                       'first@xyz.com',
      firstName:                   'first',
      middleName:                  'middle',
      lastName:                    'last',
      password:                    'passwd',
      policyDetails:               policyDetails,
      temporaryPassword:           'temp'
    }

  });

  afterEach(() => {
    policyDetails = null;
    user = null;
  });


  it("should be created",
    inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy();
    })
  );


  it("should update the user", 
    inject([UserService], (userService: UserService) => {
    userService.$user.subscribe((user)=>{
        expect(user.addPolicyAttempts).toBe(1);
        expect(user.firstName).toBe('first');
        expect(user.middleName).toBe('middle');
        expect(user.lastName).toBe('last');
        expect(user.password).toBe('passwd');
    });
    userService.updateUser(user);
    })
  );
});
