import { Component, OnInit, Input }   from '@angular/core';
import { FormGroup }                  from '@angular/forms';
import { Router }                     from '@angular/router';
import { Observable }                 from 'rxjs';
import { FormBase , FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { UserDataService }            from '../../../../_services/data-services/user-data.service';
import { PolicyDataService }          from '../../../../_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }               from '../../../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService }   from '../../../../_services/storage-service-observables/storage-service-observables.service';

import { User }                       from '../../../../_models/user';

@Component({
  selector: 'app-add-policy-form',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss'],
  providers: [ FormBaseControlService ]
})
export class AddPolicyComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
  // @Input()  userData:                 Observable<User>;
            email:                    string;
            addPolicyForm:            FormGroup;
            legalCheckbox:            boolean = false;
            loading:                  boolean = false;
            user:                     any;
  constructor(
    private authService:              AuthenticationService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private userDataService:              UserDataService,
    private policyService:            PolicyDataService,
    private storageService:           StorageServiceObservablesService,
    private policyDetailsService:     PolicyDetailsService,
  ) {
    this.email = this.storageService.getUserFromStorage();
   }

  addPolicy(): void {
    const userAndPolicy = this.addPolicyToObject();
    if (this.legalCheckbox) {
      this.authService
        .verifyPolicy(userAndPolicy)
        .subscribe(
          (response) => {
            // this.policyService.updatePolicyDetails(response);
            // policy not linked and exists in as400
            if (this.router.url==='/my-insurance/link-policy') {
              // Need to resync the data
              this.policyDetailsService
              .getPolicyDetailsByEmail( this.email )
              .subscribe(
                (success) => {
                  this.router.navigate(['/my-insurance', 'validate-policy-rights']);
                }
              );
            }
            else {
              this.router.navigate(['signup', 'createnewpassword']);
            }
          },
          (err) => {
            if (this.router.url === '/my-insurance/link-policy') {
              if (err.status === 409) {
                // Conflict, Policy is not found and name validation fails
                this.router.navigate(['/my-insurance','policy-not-found']);
              }
              else if (err.status === 400) {
                // bad requrest - 400 - Biz Policy
                this.router.navigate(['/my-insurance','business-policy-not-supported']);
              }
              else if (err.status === 404){
                // 404 - if the policy belongs to another account
              this.router.navigate(['/my-insurance','validate-policy-rights']);
              }
            }
            else {
              if (err.status === 409) {
                // Conflict, Policy is not found and name validation fails
                this.router.navigate(['signup', 'not-found']);
              }
              else if (err.status === 400) {
                // bad requrest - 400 - Biz Policy
                this.router.navigate(['signup', 'bop']);
              }
              else if (err.status === 404){
                // 404 - if the policy belongs to another account
                // this.router.navigate(['signup', 'notfound']);
                this.router.navigate(['signup', 'policy-belongs-to-another']);
              }
            }
          }
        )
      ;
    }
  }

  addPolicyToObject() {
    const
      policyDetail = {
        policynumber : { policynumber: this.addPolicyForm.value.addPolicy }
      },
      userAndPolicy = [{
        userDetails: {...this.user[0].userDetails},
        policyDetail: {...policyDetail}
      }]
    ;
    return userAndPolicy;
  }

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  ngOnInit() {
    this.addPolicyForm = this.ipt.toFormGroup(this.inputs);
    this.userDataService.$userData.subscribe((user)=>{
      this.user = user;
    });
    
    console.log(this.user);
  }
}