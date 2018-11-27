import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAccountSettings } from '../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfileConfirmModalService {

  private hideModalOnRoute: boolean=false;
  // private checkDirty:     boolean;
  private checkDirty=           new BehaviorSubject<boolean>(false);
  $checkDirty=                  this.checkDirty.asObservable();
  private removeAccount=    new BehaviorSubject<boolean>(false);
  $removeAccount=                  this.removeAccount.asObservable();

  constructor(
    private router: Router
  ) { }

  onCheckDirty(inputForm: FormGroup){
    if(inputForm.dirty){
      this.checkDirty.next(true);
    }else {
      this.checkDirty.next(false);
    }
  }

  onRemoveCheckingAccount(removeAccount: string){
    this.removeAccount.next(false);
    this.hideModalOnRoute = !this.hideModalOnRoute;
    if(removeAccount==='remove'){
      FakeAccountSettings.user.checkingAccount = {};
    }
    return this.hideModalOnRoute;
  }

  onClickBack(onclick: string){
    if(onclick==='back'){
      this.router.navigate(['/profile']);
    }else {
      this.checkDirty.next(false);
      this.hideModalOnRoute = !this.hideModalOnRoute;
      return this.hideModalOnRoute;      
    }
  }

  onRestoreDefault(){
    this.checkDirty.next(false);
    this.removeAccount.next(false);
  }
  
}
