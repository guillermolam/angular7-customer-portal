// --- Angular ---//
import { Component, Input, OnInit }   from '@angular/core';
import { CookieService }              from 'ngx-cookie-service';
import { FormGroup }                  from '@angular/forms';
import { ActivatedRoute, Router }     from '@angular/router';
import { AlertService, RegExHelper,
  FormBase, FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { UserService }                from '../../../../_services/user.service';
import { User }                       from '../../../../_models/user';

@Component({
  selector: 'app-change-address-form',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.scss'],
  providers: [ FormBaseControlService ]
})
export class ChangeAddressComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
      emailPrefillOnBlur:             string;
      expireInDays:                   number = 365;
      loading:                        boolean = false;
      changeAddressForm:              FormGroup;
      returnUrl:                      string;
      user:                     User = {};

    constructor(
      private _cookieService:           CookieService,
      private activatedRoute:           ActivatedRoute,
      private authenticationService:    AuthenticationService,
      private alertService:             AlertService,
      private ipt:                      FormBaseControlService,
      private regExHelper:              RegExHelper,
      private router:                   Router,
      private userService:              UserService
    ) {}


  changeAddress(): void {

  }

  ngOnInit() {
    this.changeAddressForm = this.ipt.toFormGroup(this.inputs);
  }

}
