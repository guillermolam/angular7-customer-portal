import { Component, OnInit, Input }       from '@angular/core';
import { FormBaseControlService, FormBase, 
  AlertService }                          from 'mapfre-design-library';
import { FormGroup }                      from '@angular/forms';
import { Router, ActivatedRoute }         from '@angular/router';

@Component({
  selector: 'app-contact-billing-rep-form',
  templateUrl: './contact-billing-rep-form.component.html',
  styleUrls: ['./contact-billing-rep-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class ContactBillingRepFormComponent implements OnInit {
  @Input()  inputs:                     FormBase<any>[] = [];
            contactBillingRepForm:      FormGroup;
            forgotPassword:             boolean = false;
            whereInTheProcess:          string;

  constructor(
    private ipt:                        FormBaseControlService,
    private router:                     Router,
    private alertService:               AlertService,
    private activatedRoute:             ActivatedRoute
  ) { }

  sendMessage(): void {
    const message = this.contactBillingRepForm.value;
    console.log(message);
  }

  ngOnInit() {
    this.contactBillingRepForm = this.ipt.toFormGroup(this.inputs);
  }

}
