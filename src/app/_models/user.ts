import { PolicyDetails }        from './policy-details';

export interface User {
  addPolicyAttempts?:           number;
  creationDate?:                Date;
  email?:                       string;
  firstName?:                   string;
  middleName?:                  string;
  lastName?:                    string;
  password?:                    string;
  policyDetails?:               PolicyDetails[];
  temporaryPassword?:           string;
}
