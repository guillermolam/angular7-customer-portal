// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { FormGroup }                  from '@angular/forms';
import { ActivatedRoute, Router, 
  Params }                            from '@angular/router';

import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../../_services/_iam/authentication-service.service';
import { UserService }                from '../../../../../_services/user.service';
import { User }                       from '../../../../../_models/user';

@Component({
  selector: 'app-change-address-form',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.scss'],
  providers: [ FormBaseControlService ]
})
export class ChangeAddressComponent implements OnInit {

  @Input()  inputs:                   FormBase<any>[] = [];
      addressType:                    string;
      emailPrefillOnBlur:             string;
      expireInDays:                   number = 365;
      loading:                        boolean = false;
      changeAddressForm:              FormGroup;
      returnUrl:                      string;
      typeOfAddress:                  string;
      user:                           User = {};

    constructor(
      private activatedRoute:           ActivatedRoute,
      private authenticationService:    AuthenticationService,
      private alertService:             AlertService,
      private ipt:                      FormBaseControlService,
      private regExHelper:              RegExHelper,
      private router:                   Router,
      private userService:              UserService
    ) {}

  changeAddress(): void {
    // this needs to go to a different end point depending on which route we are at.
    console.log(this.changeAddressForm)
    this.alertService.success('You have updated your address', true);
    this.router.navigate(['/my-insurance']);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.addressType = params['address-type'];
    });
    this.changeAddressForm = this.ipt.toFormGroup(this.inputs);
  }

}
