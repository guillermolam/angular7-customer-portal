import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDataServiceService {

  private checkingInfo:         string;
  private checkingInfoSub = new BehaviorSubject<any>(this.checkingInfo);
  $checkingInfo =         this.checkingInfoSub.asObservable();
  billingData:           any;
  private billingDataSub =   new BehaviorSubject<any>(this.billingData);
  $billingData =         this.billingDataSub.asObservable();
  policyData:           any;
  private policyDataSub =   new BehaviorSubject<any>(this.policyData);
  $policyData =         this.policyDataSub.asObservable();


  constructor() {}

  updateCheckingInfo(checkingInfo: any) {
    this.checkingInfoSub.next(checkingInfo);
  }

  updateBillingAccount(billingData: any){
    this.billingDataSub.next(billingData);
  }

  updatePolicyData(policyData: any){
    this.policyDataSub.next(policyData);
  }
}
