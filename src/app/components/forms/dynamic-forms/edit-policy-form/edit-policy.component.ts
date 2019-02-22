import { Component, Input, OnInit }     from '@angular/core';
import { FormGroup }                    from '@angular/forms';
import { Router }                       from '@angular/router';
import { FormBase, FormBaseControlService } from 'mapfre-design-library';

// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { AddPolicyDataService }       from './../../../../_services/signup-process-service/add-policy-data.service';
import { User }                       from '../../../../_models/user';
import { UserService }                from '../../../../_services/user.service';

@Component({
  selector: 'app-edit-policy-form',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.scss'],
  providers: [ FormBaseControlService ]
})

export class EditPolicyComponent implements OnInit {
  @Input()  inputs:                     FormBase<any>[] = [];
  @Input()  userData:                   any;
            editPolicyForm:             FormGroup;
            loading:                    boolean = false;
            user:                       any  = {};

  constructor(
    private addPolicyDataService:       AddPolicyDataService,
    private authService:                AuthenticationService,
    private ipt:                        FormBaseControlService,
    private router:                     Router,
    private userService:                UserService
  ) { }

  createUserObject(object): object {
    // console.log(this.user)
    const
      policyDetail = {
        policynumber : { policynumber: object.editPolicyNumber }
      },
      updatedUserAndPolicy = [{
        userDetails: {
          firstName:    object.editFirst_name,
          middleName:   object.editMI_name,
          lastName:     object.editLast_name,
          email: {
            address:    object.editEmail,
          }
        },
        policyDetail: {...policyDetail}
      }];
    return updatedUserAndPolicy;
  }

  editPolicy(): void {
    const updatedUserAndPolicy = this.createUserObject(this.editPolicyForm.value);
    this.addPolicyDataService.updateAddPolicy(updatedUserAndPolicy);
    this.authService
      .verifyPolicy(updatedUserAndPolicy)
      .subscribe(
        (response) => {
          // this.policyService.updatePolicyDetails(response); //new code
          // policy not linked and exists in as400
          if (this.router.url === '/my-insurance/edit-policy-details') {
            this.router.navigate(['/my-insurance', 'validate-policy-rights']);
          }
          else {
            this.router.navigate(['signup', 'createnewpassword']);
          }
        },
        (err) => {
          if (this.router.url === '/my-insurance/edit-policy-details') {
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
              this.router.navigate(['signup', 'policy-belongs-to-another']);
            }
          }
        }
      );
  }

  prefillData(prefillData): void {
    console.log(prefillData)
    this.editPolicyForm.get('editFirst_name').setValue(prefillData[0].userDetails.firstName);
    this.editPolicyForm.get('editMI_name').setValue(prefillData[0].userDetails.middleName);
    this.editPolicyForm.get('editLast_name').setValue(prefillData[0].userDetails.lastName);
    this.editPolicyForm.get('editPolicyNumber').setValue(prefillData[0].policyDetail.policynumber.policynumber);
  }

  ngOnInit() {
    this.editPolicyForm = this.ipt.toFormGroup(this.inputs);
    this.prefillData(this.userData);
  }

}
