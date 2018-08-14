import { Component, OnInit, Input }     from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { HttpClient }                   from "@angular/common/http";
import { Router }                       from "@angular/router";

// --- Components | Services | Models --- //
import { AlertService }                 from "../../../../_services/alert.service";
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { environment }                  from "../../../../../environments/environment"; 
import { FormBase }                     from '../../../../_models/form-base';
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { UserService }                  from "../../../../_services/user.service";
import { User }                         from "../../../../_models/user";

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  providers: [ FormBaseControlService ]
})
export class CreateAccountFormComponent implements OnInit {
  @Input() inputs:                  FormBase<any>[] = [];;
  signUpForm:                       FormGroup;
  loading:                          boolean = false;
  user:                             User;
  
  backend_server_url =              environment.backend_server_url;
  emailsInUse =                     ["glam@mapfreusa.com", "rpena@mapfreusa.com"];

  constructor(
    private alertService:           AlertService,
    private ipt:                    FormBaseControlService,
    private http:                   HttpClient,
    private router:                 Router,
    private userData:               UserService,
  ) {}

  register() {
    this.loading = true;
    this.userData.updateUser(this.signUpForm.value);
    return this.http.post(environment.backend_server_url+"/api/users", this.user,{
    headers: { "Content-Type": "application/json"}
    }).subscribe(
      (data) => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success("Registration successful", true);
        this.router.navigate(["/login"]);
      },
      (error) => {
        console.log(error);
        
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

 
  ngOnInit() {
    this.signUpForm = this.ipt.toFormGroup(this.inputs);
    this.user = new User();

    // Obtains user info from previous page
    this.userData.$user.subscribe((user) => {
      this.user.email = user.email;
      this.user.password = user.password;
    });
  }

}
