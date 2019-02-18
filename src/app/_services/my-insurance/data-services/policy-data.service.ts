import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable()
export class PolicyDataService {

  // Untill a clean up has happened do not use this observable use the one from /_services/data-services/policy-data

  policyDetails:            any;
  private details =         new BehaviorSubject<any>(this.policyDetails);
  $policyDetails =          this.details.asObservable();

  constructor() {}

  updatePolicyDetails(policyDetails: any) {
    this.details.next(policyDetails);
  }

  clear() {
    this.details.next(null);
  }
}
