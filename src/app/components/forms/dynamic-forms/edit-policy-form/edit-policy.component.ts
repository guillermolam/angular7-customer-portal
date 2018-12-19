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
  @Input()  userData:                   User;
            editPolicyForm:             FormGroup;
            loading:                    boolean = false;
            user:                       User  = {};

  constructor(
    private authService:                AuthenticationService,
    private ipt:                        FormBaseControlService,
    private router:                     Router,
    private userService:                UserService
  ) { }

  createUserObject(object): void {
    this.user = {
      addPolicyAttempts:                this.userData.addPolicyAttempts +1,
      firstName:                        object.editFirst_name,
      middleName:                       object.editMI_name,
      lastName:                         object.editLast_name,
      email:                            object.editEmail,
      policyDetails:                    [{
        policynumber:                   { policynumber: object.editPolicyNumber }
      }]
    };
    this.userService.updateUser(this.user);
  }

  editPolicy(): void {
    if(this.router.url==='/my-insurance/edit-policy-details'){
      this.router.navigate(['/my-insurance','validate-policy-rights']);
    }else {
      this.createUserObject(this.editPolicyForm.value);
      this.authService
      .verifyPolicy(this.userService)
      .subscribe(
        (data) => {
          this.router.navigate(['signup', 'createpassword']);
        },
        (err) => {
          if (err.status === 404) {
            // Policy is not found
            this.router.navigate(['signup', 'notfound']);
          }
          else if (err.status === 400) {
            // bad requrest - 400 - Biz Policy
            this.router.navigate(['signup', 'bop']);
          }
          else if (err.status === 409) {
            // conflict - 409 - if the policy belongs to another
            this.router.navigate(['signup', 'policybelongstoanother']);
          }
        }
      )
    ;
    } 
    
  }

  prefillData(prefillData): void {
    this.editPolicyForm.get('editFirst_name').setValue(prefillData.firstName);
    this.editPolicyForm.get('editMI_name').setValue(prefillData.middleName);
    this.editPolicyForm.get('editLast_name').setValue(prefillData.lastName);
    this.editPolicyForm.get('editPolicyNumber').setValue(prefillData.policyDetails[0].policynumber.policynumber);
  }

  ngOnInit() {
    this.editPolicyForm = this.ipt.toFormGroup(this.inputs);
    this.prefillData(this.userData);
  }

}
