import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsDataService {
  claimsDetails:              any;
  claimsList:                 any;
  private claimsLossDetailsSource = new BehaviorSubject<any>(this.claimsDetails);
  private claimsListSource =  new BehaviorSubject<any>(this.claimsList);
  $claimsLossDetails =            this.claimsLossDetailsSource.asObservable();
  $claimsList =               this.claimsListSource.asObservable();

  constructor() { }

  updateClaims(claims, type) {
    if (type == 'list') {
      this.claimsListSource.next(claims);
    }
    else if( type == 'details') {
      this.claimsLossDetailsSource.next(claims);
    }
  }

}