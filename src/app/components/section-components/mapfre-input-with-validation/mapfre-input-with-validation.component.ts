import { Component, Input } from '@angular/core';
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
  
  showPasswordFunction(event): void {
    this.showPassword = event;
  }

  get isValid() { 
    return this.form.controls[this.input.key].valid; 
  }
}
