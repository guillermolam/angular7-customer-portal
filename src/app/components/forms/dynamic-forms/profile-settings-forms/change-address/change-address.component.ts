import { Component, Input, OnInit }     from '@angular/core';
import { FormGroup }                    from '@angular/forms';
import { ActivatedRoute, Router, Params }
                                        from '@angular/router';
import { AlertService, RegExHelper, FormBase, FormBaseControlService, GetGooglePlaceService, ValidateAddressService }
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
      addressObject:               any;
      addressInput:                 any;

    constructor(
      private activatedRoute:           ActivatedRoute,
      private authenticationService:    AuthenticationService,
      private alertService:             AlertService,
      private changeAddressService:     ChangeAddressService,
      private ipt:                      FormBaseControlService,
      private regExHelper:              RegExHelper,
      private router:                   Router,
      private userService:              UserService,
      private getGooglePlaceService:    GetGooglePlaceService,
      private validateAddressService:   ValidateAddressService

    ) {}

  changeAddress(): void {
    console.log(this.changeAddressForm);
    this.createAddressObject();
    if (this.addressType == 'residential') {
      this.residental(this.policyID);
    }
    else if(this.addressType == 'mailing') {
      this.mailing(this.policyID);
    }
  }


  createAddressObject(){
    if(this.changeAddressForm.controls.changeAddressAPT.value) {
      this.addressObject.streetName = this.addressObject.streetName.split('|')[0] + '|' + this.changeAddressForm.controls.changeAddressAPT.value; 
    }
    else {
      this.addressObject.streetName = this.addressObject.streetName.split('|')[0];
    }


  }


  mailing(policyid) {

    let validateAddress = this.validateAddressService.validateAddress(this.addressInput, this.getGooglePlaceService);


    if(validateAddress){
    this.changeAddressService.updateMailingAddress(policyid, this.addressObject).subscribe((success) => {
        // this.reSync(this.user.userDetails.email.address);
        this.alertService.success('CHANGE_ADDRESS_ALERT_SUCCESS', true);
        this.router.navigate(['/my-insurance']);
      },
      (err) => {
        this.alertService.error('CHANGE_ADDRESS_ALERT_ERROR');
      });
    }else{
      this.alertService.error('PLEASE_ENTER_VALID_ADDRESS',true);
    }
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

  residental(policyid) {

    console.log(this.getGooglePlaceService, this.addressInput);
      let validateAddress = this.validateAddressService.validateAddress(this.addressInput, this.getGooglePlaceService);

      if(validateAddress){
        this.changeAddressService.updateResidentialAddress(policyid, this.addressObject).subscribe((success) => {
          // this.reSync(this.user.userDetails.email.address);
          this.alertService.success('CHANGE_ADDRESS_ALERT_SUCCESS', true);
          this.router.navigate(['/my-insurance']);
        },
        (err) => {
          this.alertService.error('CHANGE_ADDRESS_ALERT_ERROR');
        })
      }else{
        this.alertService.error('PLEASE_ENTER_VALID_ADDRESS',true);
      }
    
  }

  ngOnInit() {
    this.changeAddressForm =          this.ipt.toFormGroup(this.inputs);
    this.getGooglePlaceService.$address.subscribe((address)=>{
      this.addressObject = address;
    });

    this.validateAddressService.$address
    .subscribe((resp) => {
        this.addressInput = resp;
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.addressType =              params['address-type'];
      this.policyID =                 params['policyid'];
      this.userService.$user.subscribe( (userinfo) => {
        this.user =                   userinfo;
      })
    });
  }

}
