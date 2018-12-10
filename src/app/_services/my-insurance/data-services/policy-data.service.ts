import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyDataService {

  //can do it better --use interface
  policyDetails:                      any;
  private details=     new BehaviorSubject<any>(this.policyDetails);
  $policyDetails =                     this.details.asObservable();

  constructor() {}

  updatePolicyDetails(policyDetails: any) {
    console.log(policyDetails)
    this.details.next(policyDetails);
  }
}
