
import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { Billing }            from '../_models/billing';

@Injectable()
export class BillingObservableService {
  billing:                   Billing;
  private messageSource =    new BehaviorSubject<Billing>(this.billing);
  $billing =                 this.messageSource.asObservable();

  constructor() {}

  updateBilling(billing: Billing) {
    this.messageSource.next(billing);
  }

  clearBilling(): void {
    this.messageSource.next(this.billing);
  }
}
