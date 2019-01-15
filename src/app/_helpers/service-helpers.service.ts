import { Injectable }   from '@angular/core';
import { HttpHeaders }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceHelpersService {
  public  options:            object = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'authorization',
      'Content-Type':         'application/json;charset=utf-8',
    })
  };

  constructor() { }

  creatUserObject(items, db): object {
    const pn = items.policyDetails === undefined ? '' : items.policyDetails[0].policynumber.policynumber ,
          pword = items.password || null;
    let obj;
    if ( db == 'createaccount' ) {
      obj =  {
        customer: {
          firstName:        items.userDetails.firstName,
          middleName:       items.userDetails.middleName,
          lastName:         items.userDetails.lastName,
          email:            items.userDetails.email.address
        },
        policynumbers: [{
            policynumber:   pn
        }],
        credentials: {
          email:            items.userDetails.email.address,
          password:         pword
        }
      };
    }
    else if (db == 'personalpolicy') {
      obj = {
        firstName:          items.userDetails.firstName,
        middleName:         items.userDetails.middleName,
        lastName:           items.userDetails.lastName
      };
    }
    else if (db == 'verifyuser') {
      obj = {
        firstName:          items.userDetails.firstName,
        middleName:         items.userDetails.middleName,
        lastName:           items.userDetails.lastName,
        email:              items.userDetails.email.address
      };
    }
    return obj;
  }
}