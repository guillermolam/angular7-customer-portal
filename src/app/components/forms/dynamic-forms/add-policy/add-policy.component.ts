import { Component, OnInit, Input }     from "@angular/core";
import { FormGroup }                    from "@angular/forms";
import { Router }                       from "@angular/router";
import { Observable }                   from 'rxjs';

// --- Components | Services | Models --- //
import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

import { TestingService }               from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service';

@Component({
  selector: 'app-add-policy-form',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss'],
  providers: [ FormBaseControlService ]
})
export class AddPolicyComponent implements OnInit {
  @Input() inputs:                  FormBase<any>[] = [];
  @Input() userData:                Observable<User>;
  addPolicyForm:                    FormGroup;
  loading:                          boolean = false;

  constructor(
    private authService:            AuthenticationService,
    private ipt:                    FormBaseControlService,
    private router:                 Router,
    private userService:            UserService,
    private testingService:         TestingService
  ) { }

  addPolicy(): void {
    this.addPolicyToObject(this.userData);
    this.testingService
      .testingResponses(this.userData)
      .subscribe(
        data => {
          this.router.navigate(['signup', 'reviewpolicy']);
        },
        err => {
          if(err.status == 500){
            this.router.navigate(['signup', 'bop'])
          }
          else {
            this.router.navigate(['signup', 'notfound'])
          }
        }
      )
    ;

    /*this.authService
      .verifyPolicyThenAdd(this.userData)
      .subscribe(
        data => {
          this.router.navigate(['signup', 'final']);
        },
        err => {
          this.router.navigate(['signup', 'bop'])
        }
      )*/
  }

  addPolicyToObject(userObject): void {
    userObject.policyNumber = this.addPolicyForm.value.addPolicy;
    this.userService.updateUser(userObject);
  }

  ngOnInit() {
    this.addPolicyForm = this.ipt.toFormGroup(this.inputs);
  }

}
