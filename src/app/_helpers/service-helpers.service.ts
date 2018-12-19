import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceHelpersService {
  public  options:            object = { headers :
    {'Content-Type': 'application/json' }
  };
  
  constructor() { }

  creatUserObject(items, db): object {
    const pn = items.policyDetails === undefined ? '' : items.policyDetails[0].policynumber.policynumber ,
          pword = items.password || null;
    let obj;
    if ( db == 'createaccount' ) {
      obj =  {
        customer: {
          firstName:        items.firstName,
          middleName:       items.middleName,
          lastName:         items.lastName,
          email:            items.email
        },
        policynumbers: [{
            policynumber:   pn
        }],
        credentials: {
          email:            items.email,
          password:         pword
        }
      };
    }
    else if (db == 'personalpolicy') {
      obj = {
        firstName:          items.firstName,
        middleName:         items.middleName,
        lastName:           items.lastName
      };
    }
    else if (db == 'verifyuser') {
      obj = {
        firstName:          items.firstName,
        middleName:         items.middleName,
        lastName:           items.lastName,
        email:              items.email
      };
    }
    return obj;
  }
}