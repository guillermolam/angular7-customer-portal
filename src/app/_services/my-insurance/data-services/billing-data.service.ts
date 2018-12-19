import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingDataService {

  billingDetails:           any;
  private details =         new BehaviorSubject<any>(this.billingDetails);
  $billingDetails =         this.details.asObservable();

  constructor() {}

  updateBillingDetails(currentBill: any) {
    this.details.next(currentBill);
  }
}
