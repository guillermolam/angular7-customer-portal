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
  user:                             User;

  constructor(
    private authService:            AuthenticationService,
    private ipt:                    FormBaseControlService,
    private router:                 Router,
    private userService:            UserService
  ) { }

  addPolicy(): void {
    let userData = this.userData;
    userData.policyNumber = this.addPolicyForm.value.addPolicy;
    console.log(this.userData);
    this.authService
      .verifyPolicyThenAdd(this.userData)
  }

  ngOnInit() {
    this.addPolicyForm = this.ipt.toFormGroup(this.inputs);
  }

}
