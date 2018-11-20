import { Component, OnInit, Input } from '@angular/core';
import { FormBase, FormBaseControlService } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-email-form',
  templateUrl: './edit-email-form.component.html',
  styleUrls: ['./edit-email-form.component.scss']
})
export class EditEmailFormComponent implements OnInit {

@Input() inputs: FormBase<any>[] = [];
         editEmailForm: FormGroup;
        //  email: string;

constructor(private ipt:                      FormBaseControlService) { }

ngOnInit() {
      // this.email = this.inputs[0].value;
      this.editEmailForm = this.ipt.toFormGroup(this.inputs);
}

}
