import { PolicyDetails }        from './policy-details';

export interface User {
  addPolicyAttempts?:           number;
  dateOfTemporaryPassword?:     Date;
  creationDate?:                Date;
  email?:                       string;
  firstName?:                   string;
  middleName?:                  string;
  lastName?:                    string;
  password?:                    string;
  policynumbers?:               any;
  policyDetails?:               PolicyDetails[];
  temporaryPassword?:           string;
}
