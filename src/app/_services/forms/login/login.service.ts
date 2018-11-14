import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';
import { EmailPasswordFormService } from '../email-password-form/email-password-form.service';

@Injectable()
export class LoginService {

  constructor(private passwordService: EmailPasswordFormService){

  }

  getInputs() {
    
    const inputs: FormBase<any>[] = [
      this.passwordService.getEmailInputs('loginEmail'),
      this.passwordService.getPasswordInputs('loginPassword')
    ];
    return inputs;
  }
}
