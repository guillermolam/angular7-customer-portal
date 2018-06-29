import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
 
import { FormBase }         from '../../../_models/form-base';
 
@Component({
  selector: 'mapfre-validation',
  templateUrl: './mapfre-input-with-validation.component.html',
  styleUrls: ['./mapfre-input-with-validation.component.scss']
})

export class MapfreIputWithValidationComponent {
  @Input()  input: FormBase<any>;
  @Input()  form: FormGroup;
            showPassword: boolean = false;
  @Output() inputValidationCheck = new EventEmitter<boolean>();
  
  showPasswordFunction(event): void {
    this.showPassword = event;
  }

  get isValid() { 
    return this.form.controls[this.input.key].valid; 
  }

  passwordRules(reg: string): boolean {
    // Within the actual validation these five rules have been made into one.
    let rules: {} = {
      'ruleOne':    /^(?=.*[a-z])(?=.*[A-Z])/g,
      'ruleTwo':    /^(?=.*[0-9])/g,
      'ruleThree':  /^(?=.*[!@#\$%\^&\*])/g,
      'ruleFour':   /^(?=.{7,})/g,
      'ruleFive':   /^.{1,24}$/g,
      'all':        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(.{7,24}$)/g
    };
    let inputValue = this.form.controls['createPassword'].value;
    if( inputValue != undefined && rules[reg].test(inputValue) ) return true;
  }
}
