
import { Injectable }         from '@angular/core';
import { BehaviorSubject }    from 'rxjs';
import { Billing }            from '../_models/billing';

@Injectable()
export class BillingObservableService {
  billing:                   any;
  private messageSource =    new BehaviorSubject<Billing>(this.billing);
  $billing =                 this.messageSource.asObservable();

  constructor() {}

  updateBilling(billing: any) {
    console.log('billing observable', billing);
    this.messageSource.next(billing);
  }

  clearBilling(): void {
    this.messageSource.next(this.billing);
  }
}
