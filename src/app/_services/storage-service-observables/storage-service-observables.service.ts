import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageServiceObservablesService {

  private policyDetails =     new BehaviorSubject<any>('');
  $policyDetails =            this.policyDetails.asObservable();

  constructor() { }

  setPolicyDetails(policyDetail: any){
    this.policyDetails.next(policyDetail);
  }
  
}
