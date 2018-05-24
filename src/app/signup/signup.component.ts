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
      email: [this.user.email, Validators.required],
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
