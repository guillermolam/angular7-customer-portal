import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPolicyDataService {
  /* Information
      This observable is only for the add policy process.
      Either in create account or link-policy.
      Please do not use this observable in any other spot.
  */
  newPolicy:                 any;
  private messageSource =    new BehaviorSubject<any>(this.newPolicy);
  $newPolicy =               this.messageSource.asObservable();

  constructor() {}

  updateAddPolicy(policy: any) {
    this.messageSource.next(policy);
  }

  clearUser() {
    this.messageSource.next(null);
  }
}
