import { AlertService } from "./../_services/alert.service";
import { User } from "./../_models/user";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  user: User;
  signUpForm: FormGroup;
  loading = false;

  emailsInUse = ["glam@mapfreusa.com", "rpena@mapfreusa.com"];

  constructor(
    private fb: FormBuilder,
    private userData: UserService,
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService,
    private translate: TranslateService
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

  register(form) {

    if(form.value.password !== form.value.confirmPassword) {
      this.translate.get('PASSWORDS_NOT_MATCH').subscribe((res: string) => {
        this.alertService.error(res);
      });
      return false;
    }
    
    this.loading = true;
    return this.http.post("/api/users", this.user).subscribe(
      (data) => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
        this.alertService.success("Registration successful", true);
        this.router.navigate(["/login"]);
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      }
    );
  }

  isEmailInUse(email: string) {
    this.emailsInUse.find((ref) => {
      return email === ref;
    });
  }
}
