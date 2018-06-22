import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
 
import { FormBase }         from '../../../_models/form-base';
 
@Component({
  selector: 'mapfre-validation',
  templateUrl: './mapfre-input-with-validation.component.html',
  styleUrls: ['./mapfre-input-with-validation.component.scss']
})
export class MapfreIputWithValidationComponent {
  @Input() input: FormBase<any>;
  @Input() form: FormGroup;
  get isValid() { 
    return this.form.controls[this.input.key].valid; 
  }
}

/* old validation:
email
<div *ngIf="loginForm.controls['email'].errors && !loginForm.controls['email'].pristine" class="help-block">
          <div class="error" *ngIf="loginForm.controls['email'].errors.required && loginForm.controls['email'].errors.email" [innerHtml]="'EMAIL_REQUIRED' | translate"></div>
          <div class="error" *ngIf="loginForm.controls['email'].errors.email && !loginForm.controls['email'].errors.required" [innerHtml]="'EMAIL_INVALID' | translate"></div>
        </div>

password 
 <div *ngIf="loginForm.controls['password'].errors && !loginForm.controls['password'].pristine" class="help-block">
          <div class="error" [innerHtml]="'PASSWORD_REQUIRED' | translate"></div>
        </div>
        */
