import { Component, OnInit, Input } from '@angular/core';
import { FormBase, FormBaseControlService,AlertService } from 'mapfre-design-library';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-email-form',
  templateUrl: './edit-email-form.component.html',
  styleUrls: ['./edit-email-form.component.scss']
})
export class EditEmailFormComponent implements OnInit {

@Input() inputs: FormBase<any>[] = [];
         editEmailForm: FormGroup;
        //  email: string;

constructor(
  private ipt:                      FormBaseControlService,
  private alertService:             AlertService,
  private router:                   Router
  ) { }

ngOnInit() {
      // this.email = this.inputs[0].value;
      this.editEmailForm = this.ipt.toFormGroup(this.inputs);
}

onChangeEmail(){
    if(this.editEmailForm.controls.changeEmail.value === 'john@gmail.com'){
      this.alertService.error('EMAIL_EXISTS_ERROR_MESSAGE')
    }else {
      this.router.navigate(['/profile','email-confirmation'],);
    }
  }

}
