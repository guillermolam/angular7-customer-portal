import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsDataService {
  claimsDetails:              any;
  private claimsLossDetailsSource = new BehaviorSubject<any>(this.claimsDetails);
  $claimsLossDetails =            this.claimsLossDetailsSource.asObservable();

  constructor() { }

  updateClaims(claims) {
    console.log('claims data',claims);
    this.claimsLossDetailsSource.next(claims);
  }

}