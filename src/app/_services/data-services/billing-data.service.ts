import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BillingDataService {

  private storeBankAccount:         string;
  private storeBankAccountSource = new BehaviorSubject<any>(this.storeBankAccount);
  $storeBankAccount =         this.storeBankAccountSource.asObservable();
  billingDetails:           any;
  private messageSource =   new BehaviorSubject<any>(this.billingDetails);
  $billingDetails =         this.messageSource.asObservable();

  constructor() {}

  clearBilling(): void {
    this.messageSource.next(this.billingDetails);
  }

  updateBillingDetails(currentBill: any) {
    this.messageSource.next(currentBill);
  }

  updateBankAccountCheck(storeBankAccount){
    this.storeBankAccountSource.next(storeBankAccount);
  }
}
