import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor() {}

  displayError(error: HttpErrorResponse){
    
  }

  noConsolesInProd(env) {
    // Making sure all console do not out put in production.
    if (env) {
      console.assert =      () => { return false; }
      console.count =       () => { return false; }
      console.dir =         () => { return false; }
      console.dirxml =      () => { return false; }
      console.error =       () => { return false; }
      console.exception =   () => { return false; }
      console.group =       () => { return false; }
      console.groupEnd =    () => { return false; }
      console.info =        () => { return false; }
      console.log =         () => { return false; }
      console.table =       () => { return false; }
      console.time =        () => { return false; }
      console.timeEnd =     () => { return false; }
      console.trace =       () => { return false; }
      console.warn =        () => { return false; }
    }
  }

}
