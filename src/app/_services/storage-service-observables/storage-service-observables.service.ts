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
    
    // this undefined error shouldn't show up if you are logged in,
    // but for testing and dev purposes we should just set it if
    // it is undefined
    if (currentUser ===  undefined) {
      this.userEmail = '';
    }
    else {
      this.userEmail = currentUser.username;
    }
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
