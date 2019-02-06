import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable()
export class PolicyDataService {

  policyDetails:            any;
  private details =         new BehaviorSubject<any>(this.policyDetails);
  $policyDetails =          this.details.asObservable();

  constructor() {}

  updatePolicyDetails(policyDetails: any) {
    console.log('PolicyDataService', policyDetails);
    this.details.next(policyDetails);
  }

  clear() {
    this.details.next('');
  }
}
