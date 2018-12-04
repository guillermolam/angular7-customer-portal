import { Component, OnInit, Input }   from '@angular/core';
import { FormGroup }                  from '@angular/forms';
import { Router }                     from '@angular/router';
import { Observable }                 from 'rxjs';
import { FormBase , FormBaseControlService }  from 'mapfre-design-library';
// --- Components | Services | Models --- //
import { AuthenticationService }      from '../../../../_services/_iam/authentication-service.service';
import { UserService }                from '../../../../_services/user.service';
import { PolicyDetailsService }       from '../../../../_services/policy-details.service';
import { User }                       from '../../../../_models/user';

@Component({
  selector: 'app-add-policy-form',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss'],
  providers: [ FormBaseControlService ]
})
export class AddPolicyComponent implements OnInit {
  @Input()  inputs:                   FormBase<any>[] = [];
  @Input()  userData:                 Observable<User>;
            addPolicyForm:            FormGroup;
            legalCheckbox:            boolean = false;
            loading:                  boolean = false;

  constructor(
    private authService:              AuthenticationService,
    private ipt:                      FormBaseControlService,
    private router:                   Router,
    private userService:              UserService,
    private policyService:            PolicyDetailsService
  ) { }

  addPolicy(): void {
    this.addPolicyToObject(this.userData);
    if (this.legalCheckbox) {
      this.authService
        .verifyPolicy(this.userService)
        .subscribe(
          (response) => {
            this.policyService.updatePolicyDetails(response); //new code
            this.router.navigate(['signup', 'policybelongstoanother']); 
            // this.router.navigate(['signup', 'createpassword']);
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
            else if (err.status === 409){
              // conflict - 409 - if the policy belongs to another
              this.router.navigate(['signup', 'notfound']);
              // this.router.navigate(['signup', 'policybelongstoanother']);
            }
          }
        )
      ;
    }
  }

  addPolicyToObject(userObject): void {
    const policyDetail = [{
      policynumber : { policynumber: this.addPolicyForm.value.addPolicy }
    }];
    userObject.policyDetails = policyDetail;
    this.userService.updateUser(userObject);
  }

  getLegalCheckBoxValue(e): void {
    this.legalCheckbox = e.target.checked ? true : false;
  }

  ngOnInit() {
    this.addPolicyForm = this.ipt.toFormGroup(this.inputs);
  }

}
