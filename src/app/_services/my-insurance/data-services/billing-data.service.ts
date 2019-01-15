import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BillingDataService {

  billingDetails:           any;
  private messageSource =   new BehaviorSubject<any>(this.billingDetails);
  $billingDetails =         this.messageSource.asObservable();

  constructor() {}

  clearBilling(): void {
    this.messageSource.next(this.billingDetails);
  }

  updateBillingDetails(currentBill: any) {
    console.log('BillingDataService', currentBill);
    this.messageSource.next(currentBill);
  }
}
