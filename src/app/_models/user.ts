import { PolicyDetails }        from './policy-details';

export interface User {
  accountType?:                 string;
  addPolicyAttempts?:           number;
  creationDate?:                Date;
  email:                        string;
  firstName:                    string;
  middleName?:                  string;
  lastName:                     string;
  password?:                    string;
  policynumbers?:               string;
  policyDetails?:               PolicyDetails[];
  temporaryPassword?:           string;
}
