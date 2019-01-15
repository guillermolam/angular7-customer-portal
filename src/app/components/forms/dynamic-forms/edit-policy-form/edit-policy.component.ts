import { Component, Input, OnInit }     from '@angular/core';
import { FormGroup }                    from '@angular/forms';
import { Router }                       from '@angular/router';
import { FormBase, FormBaseControlService } from 'mapfre-design-library';

// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
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
  // @Input()  userData:                   User;
            editPolicyForm:             FormGroup;
            loading:                    boolean = false;
            user:                       any  = {};

  constructor(
    private authService:                AuthenticationService,
    private ipt:                        FormBaseControlService,
    private router:                     Router,
    private userService:                UserService
  ) { }

  createUserObject(object): void {
    // console.log(this.user)
    this.user.addPolicyAttempts = this.user.addPolicyAttempts + 1;
    this.user.userDetails.firstName = object.editFirst_name
    this.user.userDetails.middleName = object.editMI_name
    this.user.userDetails.lastName =  object.editLast_name
    this.user.userDetails.email.address = object.editEmail
    this.user.policyDetails =  [{
      policynumber:                   { policynumber: object.editPolicyNumber }
    }];
    this.userService.updateUser(this.user);
  }

  editPolicy(): void {
      this.createUserObject(this.editPolicyForm.value);
      this.authService
      .verifyPolicy(this.userService)
      .subscribe(
        (response) => {
          // this.policyService.updatePolicyDetails(response); //new code
          // policy not linked and exists in as400
          if (this.router.url==='/my-insurance/edit-policy-details') {
            this.router.navigate(['/my-insurance','validate-policy-rights']);
          }else {
            this.router.navigate(['signup', 'create-password']);
          }
        },
        (err) => {
          if (this.router.url==='/my-insurance/edit-policy-details') {
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
              // this.router.navigate(['signup', 'notfound']);
            this.router.navigate(['/my-insurance','validate-policy-rights']);
            // this.router.navigate(['signup', 'policy-belongs-to-another']);
            }
          }else {
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

  prefillData(prefillData): void {
    this.editPolicyForm.get('editFirst_name').setValue(prefillData.userDetails.firstName);
    this.editPolicyForm.get('editMI_name').setValue(prefillData.userDetails.middleName);
    this.editPolicyForm.get('editLast_name').setValue(prefillData.userDetails.lastName);
    this.editPolicyForm.get('editPolicyNumber').setValue(prefillData.policyDetails[0].policynumber.policynumber);
  }

  ngOnInit() {
    this.editPolicyForm = this.ipt.toFormGroup(this.inputs);
    this.userService.$user.subscribe((user)=>{
      this.prefillData(user);
      this.user = user;
    })
  }

}
