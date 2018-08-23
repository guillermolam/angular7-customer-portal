export class User {
  public firstName:               string;
  public middleInitial:           string;
  public lastName:                string;
  public dateOfTemporaryPassword: Date;
  public creationDate:            Date;
  public email:                   string;
  public password:                string;
  public policyNumber:            string;
  public temporaryPassword:       string;

  constructor(options: {
    firstName?:                   string,
    middleInitial?:               string,
    lastName?:                    string,
    dateOfTemporaryPassword?:     Date,
    creationDate?:                Date,
    email?:                       string,
    password?:                    string,
    policyNumber?:                string,
    temporaryPassword?:           string,
  } = {}){
    this.firstName =              options.firstName;
    this.middleInitial =          options.middleInitial;
    this.lastName =               options.lastName;
    this.dateOfTemporaryPassword = options.dateOfTemporaryPassword;
    this.creationDate =           options.creationDate;
    this.email =                  options.email;
    this.password =               options.password;
    this.policyNumber =           options.policyNumber;
    this.temporaryPassword =      options.temporaryPassword;
  }

}
