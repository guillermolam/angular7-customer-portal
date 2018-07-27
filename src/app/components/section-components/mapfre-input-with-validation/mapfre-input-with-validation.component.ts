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
            validMessageShow:           boolean = false;
            emailShowError:             boolean = false;
            capsLock:                   boolean = false;
            notOnPageLoad:              boolean = false;
            showPassword:               boolean = false;
            showPasswordIcon:           boolean = false;
            validInput:                 boolean = true;
  
  @Output() inputValidationCheck:       EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener( 'window:keydown', ['$event'] ) 
  OnKeyDownGlobal(event) {
    this.checkCapsLock(event);
  }

  @HostListener( 'window:keyup', ['$event'] ) 
  OnKeyUpGlobal(event) {
    this.checkCapsLock(event);
  }

  OnBlur(ref): void {
   let inputValue = ref.form.controls[ref.input.key].value;
   this.notOnPageLoad = true;

    if( this.checkForBlankInputField(inputValue) ) {
      this.validMessageShow = true;
      this.validInput = this.isValid;
    }
    else {
       this.validMessageShow = false;
    }
  }

  OnFocus(ref): void {
    this.validInput = true; //Turn off the error class for the front end on focus
  }

  OnKeyUp(ref): void {
    let inputValue = ref.form.controls[ref.input.key].value;
    this.showPasswordIcon = this.checkForBlankInputField(inputValue) ? true : false;
  }

  get isValid() { 
    let formValid = this.form.controls[this.input.key].valid;
    this.inputValidationCheck.emit(formValid);
    return formValid;
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

  checkForBlankInputField(value: string): boolean {
    if(value != null && value.length >= 1 ) {
      return true;
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
