import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable()
export class ProfileSettingsRoutingService {

  private changePasswordAlert: boolean = true;
  private whereInTheProcess: string;

  constructor(private router: Router) { }

  setChangePasswordAlert(value:boolean){
    this.changePasswordAlert = value;
  }

  getChangePasswordAlert(){
    
    return this.changePasswordAlert;
  }

  setDefault(){
    this.changePasswordAlert = false;
  }



}
