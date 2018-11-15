import { Injectable }   from '@angular/core';
import { FormBase, TextBox }   from 'mapfre-design-library';
import { EmailPasswordFormService } from '../email-password-form/email-password-form.service';

@Injectable()
export class EditPasswordService {

  constructor(private passwordService: EmailPasswordFormService){

  }

  getInputs(id:string) {
    
    const inputs: FormBase<any>[] = [
       this.passwordService.getPasswordInputs(id)
    ];
    return inputs;
  }
}
