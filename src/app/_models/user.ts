export class User {
  public addPolicyToAccountAttempts: number;
  public dateOfTemporaryPassword: Date;
  public creationDate:            Date;
  public email:                   string;
  public firstName:               string;
  public middleName:              string;
  public lastName:                string;
  public password:                string;
  public policynumbers:           any[];
  public temporaryPassword:       string;

  constructor(options: {
    addPolicyToAccountAttempts?: number,
    creationDate?:                Date,
    dateOfTemporaryPassword?:     Date,
    email?:                       string,
    firstName?:                   string,
    middleName?:                  string,
    lastName?:                    string,
    password?:                    string,
    policynumbers?:               any[],
    temporaryPassword?:           string,
  } = {}){
    this.addPolicyToAccountAttempts = options.addPolicyToAccountAttempts || 0;
    this.creationDate =           options.creationDate || new Date();
    this.dateOfTemporaryPassword = options.dateOfTemporaryPassword;
    this.email =                  options.email;
    this.firstName =              options.firstName;
    this.middleName =             options.middleName;
    this.lastName =               options.lastName;
    this.password =               options.password;
    this.policynumbers =          options.policynumbers;
    this.temporaryPassword =      options.temporaryPassword;
  }
}

export class Policynumbers {
  constructor(
    public policynumber:        number,
    public policytype:          string
  ){ }
}
