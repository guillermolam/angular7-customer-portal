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
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // for development and testing
    let currentUser;
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.userEmail = currentUser.username;
    return this.userEmail;
  }


  setUserStorage(email:string){
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // for development and testing
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // if (JSON.parse(localStorage.getItem('currentUser'))) {
    currentUser.username = email;
    localStorage.setItem('currentUser',JSON.stringify(currentUser));
    // }
    // this.userEmail = currentUser.username;
    // return this.userEmail;
  }

}
