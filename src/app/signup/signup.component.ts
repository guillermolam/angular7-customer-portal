import { AlertService } from "./../_services/alert.service";
import { User } from "./../_models/user";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
<<<<<<< HEAD
import { environment } from "../../environments/environment"; 
=======
>>>>>>> 1df071524595dae3c390a8352cce4824698f4544
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
<<<<<<< HEAD
=======
import {TranslateService} from '@ngx-translate/core';
>>>>>>> 1df071524595dae3c390a8352cce4824698f4544

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user: User;
  signUpForm: FormGroup;
  loading = false;
<<<<<<< HEAD
  backend_server_url = environment.backend_server_url;
=======
>>>>>>> 1df071524595dae3c390a8352cce4824698f4544

  emailsInUse = ["glam@mapfreusa.com", "rpena@mapfreusa.com"];

  constructor(
    private fb: FormBuilder,
    private userData: UserService,
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.user = new User();

    // Obtains user info from previous page
    this.userData.$user.subscribe((user) => {
      this.user.email = user.email;
      this.user.password = user.password;
    });

    this.createForm();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      email: [this.user.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')] ],
      password: [this.user.password, Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  cancel() {
    this.userData.updateUser(this.user);
    this.router.navigateByUrl("login");
  }

  register() {
    this.loading = true;
    this.userData.updateUser(this.signUpForm.value);
    return this.http.post(this.backend_server_url+"/api/users", this.user,{
    headers: {
      "Content-Type": "application/json"

    }
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

 /* isEmailInUse(email: string) {
    this.emailsInUse.find((ref) => {
      return email === ref;
    });
  }*/
  isEmailInUse() {
    this.emailsInUse.find((ref) => {
      console.log("email - "+ this.signUpForm.value.email);
      return this.signUpForm.value.email === ref;
    });
  }
}
