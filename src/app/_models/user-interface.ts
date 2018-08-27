export interface User {
  id:                     number;
  firstName:              string;
  middleName:             string;
  lastName:               string;
  dateOfTemporaryPassword: Date;
  creationDate:           Date;
  email:                  string;
  password:               string;
  policyNumber:           string;
  temporaryPassword:      string;
}
