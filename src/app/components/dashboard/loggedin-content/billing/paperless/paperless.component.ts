import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { User }                   from './../../../../../_models/user';
import { UserService }            from './../../../../../_services/user.service';
import { StorageServiceObservablesService } from '../../../../../_services/storage-service-observables/storage-service-observables.service';
import { PaymentDataServiceService } from '../../../../../_services/data-services/payment-data-service.service';
import { PolicyDetailsService } from '../../../../../_services/my-insurance/policy-details.service';

@Component({
  selector: 'app-paperless',
  templateUrl: './paperless.component.html',
  styleUrls: ['./paperless.component.scss']
})
export class PaperlessComponent implements OnInit {
  checkEnrollment:                boolean = false;
  firstTime:                      boolean;
  paperlessPage:                  string = '';
  user:                           User;

  constructor(
    private activatedRoute:       ActivatedRoute,
    private route:                Router,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private paymentDataServiceService: PaymentDataServiceService,
    private policyDetailsService: PolicyDetailsService
  ) { }

  checkPaperlessPage(): void {
    let page = '';
    const url = '/billing/paperless/',
          enrollCopy = '- Enroll in ';

    if ( this.route.isActive(`${url}e-policy`, true) ) {
      page = `${enrollCopy}e-policy`;
    }
    else if (this.route.isActive(`${url}e-pay`, true)) {
      page = `${enrollCopy}e-pay`;
    }
    else if ( !this.route.isActive(`${url}e-pay`, true) &&
      !this.route.isActive(`${url}e-policy`, true) &&
      !this.route.isActive(`${url}e-bill`, true) &&
      !this.route.isActive( '/billing/paperless', true ))
    {
      this.checkEnrollment =  true;
    }
    else if (this.route.isActive(`${url}e-bill`, true)) {
      page = `${enrollCopy}e-bill`;
    }
    else {
      page = '';
    }
    this.paperlessPage = page;
  }

  
  ngOnInit() {

  }

}
