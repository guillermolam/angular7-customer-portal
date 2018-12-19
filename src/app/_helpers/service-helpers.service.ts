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
      'Content-Type':         'application/json;charset=utf-8'
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