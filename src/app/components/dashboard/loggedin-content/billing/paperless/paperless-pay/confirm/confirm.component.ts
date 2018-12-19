import { Component, OnInit, OnDestroy }          from '@angular/core';
import { BillingObservableService }   from '../../../../../../../_services/billing.service';
import { Billing }                    from './../../../../../../../_models/billing';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class PaperlessPayConfirmComponent implements OnInit, OnDestroy {
  billingInfo:                        Billing;
  constructor(
    private billingObservableService: BillingObservableService
  ) { }

  ngOnInit() {
    this.billingObservableService.$billing.subscribe( (success) => {
      console.log(success)
      this.billingInfo =              success;
    });
  }

  ngOnDestroy() {
    this.billingObservableService.clearBilling();
  }

}
