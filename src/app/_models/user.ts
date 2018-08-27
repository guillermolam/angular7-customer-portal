export class User {
  public firstName:               string;
  public middleName:              string;
  public lastName:                string;
  public dateOfTemporaryPassword: Date;
  public creationDate:            Date;
  public email:                   string;
  public password:                string;
  public policyNumber:            Object;
  public temporaryPassword:       string;

  constructor(options: {
    firstName?:                   string,
    middleName?:                  string,
    lastName?:                    string,
    dateOfTemporaryPassword?:     Date,
    creationDate?:                Date,
    email?:                       string,
    password?:                    string,
    policyNumber?:                Object,
    temporaryPassword?:           string,
  } = {}){
    this.firstName =              options.firstName;
    this.middleName =             options.middleName;
    this.lastName =               options.lastName;
    this.dateOfTemporaryPassword = options.dateOfTemporaryPassword;
    this.creationDate =           options.creationDate || new Date();
    this.email =                  options.email;
    this.password =               options.password;
    this.policyNumber =           options.policyNumber;
    this.temporaryPassword =      options.temporaryPassword;
  }

}
