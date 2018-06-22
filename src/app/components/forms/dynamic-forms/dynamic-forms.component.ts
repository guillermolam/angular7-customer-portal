import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }                from '@angular/forms';

import { FormBase } from '../../../_models/form-base';
import { FormBaseControlService } from '../../../_services/form-base-control.service';

@Component({
  selector: 'mapfre-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  providers: [ FormBaseControlService ]
})
export class DynamicFormsComponent implements OnInit {

  @Input() 
  inputs: FormBase<any>[] = [];
  form:   FormGroup;
  payLoad = '';

  constructor(private ipt: FormBaseControlService) {  }

  ngOnInit() {
    this.form = this.ipt.toFormGroup(this.inputs);
  }
 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
