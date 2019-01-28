import { Component, Input, OnInit }     from '@angular/core';
import { FormGroup }                    from '@angular/forms';
import { ActivatedRoute, Router, Params }
                                        from '@angular/router';
import { AlertService, RegExHelper, FormBase, FormBaseControlService }
                                        from 'mapfre-design-library';
import { AuthenticationService }        from '../../../../../_services/_iam/authentication-service.service';
import { ChangeAddressService }         from './../../../../../_services/change-address/change-address.service';
import { UserService }                  from '../../../../../_services/user.service';
import { User }                         from '../../../../../_models/user';

@Component({
  selector: 'app-change-address-form',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.scss'],
  providers: [ FormBaseControlService ]
})
export class ChangeAddressComponent implements OnInit {

  @Input()  inputs:                     FormBase<any>[] = [];
      addressType:                      string;
      changeAddressForm:                FormGroup;
      loading:                          boolean = false;
      policyID:                         string;
      user:                             any;

    constructor(
      private activatedRoute:           ActivatedRoute,
      private authenticationService:    AuthenticationService,
      private alertService:             AlertService,
      private changeAddressService:     ChangeAddressService,
      private ipt:                      FormBaseControlService,
      private regExHelper:              RegExHelper,
      private router:                   Router,
      private userService:              UserService
    ) {}

  addressObject(): object {
    return {

    };
  }

  changeAddress(): void {
    console.log(this.changeAddressForm);
    if (this.addressType == 'residential') {
      this.residental(this.policyID, this.addressObject);
    }
    else if(this.addressType == 'mailing') {
      this.mailing(this.policyID, this.addressObject);
    }
  }

  mailing(policyid, object): void {
    this.changeAddressService
      .updateMailingAddress(policyid, object)
      .subscribe((success) => {
        this.reSync(this.user.userDetails.email.address);
        this.alertService.success('You have updated your mailing address', true);
        this.router.navigate(['/my-insurance']);
      },
      (err) => {
        this.alertService.error('We Could not update your mailing address');
      })
  }

  reSync(email): void {
    this.authenticationService
      .getUserDetailsByEmail(email)
      .subscribe(([userResponse, accountResponse]) => {
        const response = {
          userDetails:                {...userResponse},
          bankAccountDetails:         {...accountResponse}
        };
        this.userService.updateUser(response);
      });
  }

  residental(policyid, object): void {
    this.changeAddressService
      .updateResidentialAddress(policyid, object)
      .subscribe((success) => {
        this.reSync(this.user.userDetails.email.address);
        this.alertService.success('You have updated your residental address', true);
        this.router.navigate(['/my-insurance']);
      },
      (err) => {
        this.alertService.error('We Could not update your residental address');
      })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.addressType =              params['address-type'];
      this.policyID =                 params['policy-id'];
      this.userService.$user.subscribe( (userinfo) => {
        this.user =                   userinfo;
      })
    });
    this.changeAddressForm =          this.ipt.toFormGroup(this.inputs);
  }

}
