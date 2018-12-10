import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyDocumentsDataService {

  policyDocument:                      any;
  private document =     new BehaviorSubject<any>(this.policyDocument);
  $policyDocument =                     this.document.asObservable();

  constructor() {}

  updatePolicyDocuments(policyDocument: any) {
    this.document.next(policyDocument);
  }
}
