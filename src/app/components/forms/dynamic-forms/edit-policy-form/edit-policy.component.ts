import { Component, Input, OnInit }     from '@angular/core';
import { FormGroup }                    from "@angular/forms";
import { HttpClient }                   from "@angular/common/http";
import { Router }                       from "@angular/router";

// --- Components | Services | Models --- //
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { UserService }                  from '../../../../_services/user.service';
import { User }                         from '../../../../_models/user';

@Component({
  selector: 'app-edit-policy-form',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.scss'],
  providers: [ FormBaseControlService ]
})

export class EditPolicyComponent implements OnInit {
  @Input() inputs:                      FormBase<any>[] = [];
  @Input() userData:                    User;
  editPolicyForm:                       FormGroup;
  loading:                              boolean = false;
  user:                                 User;

  constructor(
    private authService:                AuthenticationService,
    private ipt:                        FormBaseControlService,
    private http:                       HttpClient,
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
      policynumbers:                    object.editPolicyNumber
    };
    this.userService.updateUser(this.user);
  }

  editPolicy(): void {
    this.createUserObject(this.editPolicyForm.value);
    console.log("new user object", this.userService)
    this.authService
      .verifyPolicy(this.userService)
      .subscribe(
        data => {
          this.router.navigate(['signup', 'reviewpolicy']);
        },
        err => {
          if(err.status === 404){
            //Policy is not found
            this.router.navigate(['signup', 'notfound']);
          }
          else if(err.status === 400) {
            //bad requrest - 400 - Biz Policy
            this.router.navigate(['signup', 'bop']);
          }
          else if(err.status === 409){
            //conflict - 409 - if the policy belongs to another
            this.router.navigate(['signup', 'policybelongstoanother']);
          }
        }
      )
    ;
  }

  ngOnInit() {
    this.editPolicyForm = this.ipt.toFormGroup(this.inputs);
  }

}
