// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup }                  from '@angular/forms';
import { ActivatedRoute, Router }     from '@angular/router';
import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { UserService }                from '../../../../_services/user.service';
import { User }                       from '../../../../_models/user';


@Component({
  selector: 'app-new-payment-form',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
            loading:                  boolean = false;
            newPaymentForm:           FormGroup;
            user:                     User = {};

  constructor(
    private activatedRoute:           ActivatedRoute,
    private alertService:             AlertService,
    private ipt:                      FormBaseControlService,
    private regExHelper:              RegExHelper,
    private router:                   Router,
    private userService:              UserService
  ) {}

  getCheckBoxValue(e): void {

  }

  ngOnInit() {
    this.newPaymentForm = this.ipt.toFormGroup(this.inputs);
  }

}
