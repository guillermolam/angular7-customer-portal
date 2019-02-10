import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userData:            any;
  private details =         new BehaviorSubject<any>(this.userData);
  $userData =          this.details.asObservable();

  constructor() {}

  updateUserDetails(userData: any) {
    this.details.next(userData);
  }

  clear() {
    this.details.next('');
  }
}
