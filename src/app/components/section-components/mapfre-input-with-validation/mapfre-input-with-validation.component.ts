import { Component, EventEmitter, HostListener, Input, Output, OnInit } from '@angular/core';
import { FormGroup }                    from '@angular/forms'; 

import { AlertService }                 from '../../../_services/alert.service';
import { FormBase }                     from '../../../_models/form-base';
import { RegExHelper }                  from '../../../_helpers/regex-helper';
import { User }                         from '../../../_models/user';

 
@Component({
  selector: 'mapfre-validation',
  templateUrl: './mapfre-input-with-validation.component.html',
  styleUrls: ['./mapfre-input-with-validation.component.scss'],
  providers: [ RegExHelper ]
})

export class MapfreIputWithValidationComponent {
  @Input()  input:                      FormBase<any>;
  @Input()  form:                       FormGroup;
  @Input()  prefillData:                User;
            emailShowError:             boolean = false;
            capsLock:                   boolean = false;
            notOnPageLoad:              boolean = false;
            showPassword:               boolean = false;
            showPasswordIcon:           boolean = false;
            validInput:                 boolean = true;
            validMessageShow:           boolean = false;
            message:                    any;

  constructor(
    private alertService:               AlertService,
    private regExHelper:                RegExHelper,
  ) { }

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

  alertServiceMessage(): void {
    this.alertService.getMessage()
      .subscribe((message) => { 
        this.message = message;
        this.validInput = false;
      }
    );
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
    if(this.form.controls['createPassword'].value != null || this.form.controls['createPassword'].value != undefined){
      if( reg == 'ruleFive' && this.form.controls['createPassword'].value.length <= 24 ) {
        return true;
      }
      else{
        return this.regExHelper.regExPasswordStrength(reg, this.form.controls['createPassword'].value);
      }
    }
  }
  
  showPasswordFunction(event): void {
    this.showPassword = event;
  }

  ngOnInit(): void {
    this.alertServiceMessage();
  }
}
