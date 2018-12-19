
import { Component, OnInit, Input }   from '@angular/core';
import { FormGroup, FormControl }      from '@angular/forms';
import { ActivatedRoute, Router,
  Params }                            from '@angular/router';
import { AlertService,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
import { Billing }                    from './../../../../_models/billing';
import { BillingObservableService }   from './../../../../_services/billing.service';
import {  }                           from './../../../../_services/billing.service';
import { PaperlessService }           from '../../../../_services/_iam/paperless.service';

@Component({
  selector: 'app-enroll-eft-epay-form',
  templateUrl: './enroll-eft-epay-form.component.html',
  styleUrls: ['./enroll-eft-epay-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class EnrollEftEpayFormComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
            enrollInEft:              FormGroup;
            enrollAccountType:        FormGroup;
            loading:                  boolean = false;
            policyId:                 string;

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private billingObservableService: BillingObservableService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private paperlessService:         PaperlessService
  ) { }

  checkForPrefillData(): void {
    //this.

   // this.enrollInEft.setValue(

    //)
  }

  enroll() {
    if( this.enrollInEft.controls['enrollInEft_accountNumber'].value !=  this.enrollInEft.controls['enrollInEft_confirmAccountNumber'].value) {
      this.alertService.error('Account number and Confirmation are not the same');
      return;
    }

    const enrollForm: Billing = {
      billingInfo: [{
        accountName:                this.enrollInEft.controls['enrollInEft_accountName'].value,
        accountNumber:              this.enrollInEft.controls['enrollInEft_accountNumber'].value,
        accountType:                this.enrollAccountType.value,
        bankRoutingNumber:          this.enrollInEft.controls['enrollInEft_routingNumber'].value,
      }],
      deductionDate:                this.enrollInEft.controls['enrollInEft_deductionDate'].value,
      policyId:                     this.policyId
    };

    console.log('enrollForm', enrollForm);
    this.paperlessService
      .enrollPaperlessEPay( this.policyId, enrollForm )
      .subscribe( (success) => {
        this.billingObservableService.updateBilling(enrollForm);
        this.router.navigate(['/billing/paperless/e-pay/' + this.policyId + '/confirm']);
      },
      (error) => {
        this.alertService.error('There was an error');
      });
  }

  ngOnInit() { 
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.policyId =                 params['policyid'];
    });
    this.enrollInEft =                  this.ipt.toFormGroup(this.inputs);
    this.enrollAccountType =            new FormGroup({
      bankType:                         new FormControl(''),
    });
    this.checkForPrefillData();
  }

}
