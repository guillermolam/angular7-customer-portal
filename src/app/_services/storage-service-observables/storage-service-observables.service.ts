import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageServiceObservablesService {

  // private policyDetails =     new BehaviorSubject<any>('');
  // $policyDetails =            this.policyDetails.asObservable();

  private userEmail: string;

  constructor() { }

  // setPolicyDetails(policyDetail: any){
  //   this.policyDetails.next(policyDetail);
  // }

  getUserFromStorage(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userEmail = currentUser.username;
    return this.userEmail;
  }

}
