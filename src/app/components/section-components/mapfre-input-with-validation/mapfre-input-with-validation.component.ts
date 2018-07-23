import { Component, EventEmitter, HostListener, Input, Output, OnInit } from '@angular/core';
import { FormGroup }                    from '@angular/forms';  
import { FormBase }                     from '../../../_models/form-base';
 
@Component({
  selector: 'mapfre-validation',
  templateUrl: './mapfre-input-with-validation.component.html',
  styleUrls: ['./mapfre-input-with-validation.component.scss'],
  //host: { '(document:keypress)': 'checkCapsLock($event)' }
})

export class MapfreIputWithValidationComponent {
  @Input()  input:                      FormBase<any>;
  @Input()  form:                       FormGroup;
            emailNoSpace:               boolean = false;
            emailShowError:             boolean = false;
            capsLock:                   boolean = false;
            notOnPageLoad:              boolean = false;
            notOnFocus:                 boolean = false;
            showPassword:               boolean = false;
  
  @Output() inputValidationCheck:       EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener( 'window:keydown', ['$event'] ) 
  OnKeyDown(event) {
    this.checkCapsLock(event);
  }

  @HostListener( 'window:keyup', ['$event'] ) 
  OnKeyUp(event) {
    this.checkCapsLock(event);
  }

  get isValid() { 
    let formValid = this.form.controls[this.input.key].valid;
    this.inputValidationCheck.emit(formValid);
    return formValid;
  }

  OnBlur(ref): void {
    let noSpacePattern = /^\s*$/,
        emailValue = ref.form.controls.loginEmail.value; 
    this.notOnPageLoad = true;

    if( !noSpacePattern.test(emailValue) ) {
      this.emailNoSpace = true;
    }
    else {
       this.emailNoSpace = false;
    }
  }

  OnFocus(ref): void {
    this.notOnFocus = true;
  }

  checkCapsLock(event: KeyboardEvent): void {
    if( event.code === 'CapsLock' ) {
      if( event.getModifierState && event.getModifierState( 'CapsLock' ) ) {
        this.capsLock = true;
      }
      else {
        this.capsLock = false;
      }
    }
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
  
  showPasswordFunction(event): void {
    this.showPassword = event;
  }

  ngOnInit(): void {
  }
}
