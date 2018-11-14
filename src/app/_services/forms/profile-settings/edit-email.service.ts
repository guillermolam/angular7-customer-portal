import { Injectable } from '@angular/core';
import { FormBase } from 'mapfre-design-library';
import { EmailPasswordFormService } from '../email-password-form/email-password-form.service';

@Injectable({
  providedIn: 'root'
})
export class EditEmailService {

  constructor(private passwordService: EmailPasswordFormService){

  }

  getInputs(id:string) {
    
    const inputs: FormBase<any>[] = [
       this.passwordService.getEmailInputs(id)
    ];
    return inputs;
  }

}
