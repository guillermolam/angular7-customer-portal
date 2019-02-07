import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsDataService {
  claimsDetails:              any;
  claimsList:                 any;
  private claimsDetailsSource = new BehaviorSubject<any>(this.claimsDetails);
  private claimsListSource =  new BehaviorSubject<any>(this.claimsList);
  $claimsDetails =            this.claimsDetailsSource.asObservable();
  $claimsList =               this.claimsListSource.asObservable();

  constructor() { }

  updateClaims(type, claims) {
    if (type == 'list') {
      this.claimsListSource.next(claims);
    }
    else if( type == 'details') {
      this.claimsDetailsSource.next(claims);
    }
  }

}