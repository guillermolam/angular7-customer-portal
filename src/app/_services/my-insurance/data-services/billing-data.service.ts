import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BillingDataService {

  private storeBankAccount:         string = null;
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

  getBankAccountCheck(){
    console.log(this.storeBankAccount);
    return this.storeBankAccount;
  }

  setBankAccountCheck(checkValue){
    console.log(this.storeBankAccount);
    this.storeBankAccount = checkValue;
  }
}
