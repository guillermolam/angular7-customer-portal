import { AlertService } from "../../_services/alert.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../_models/user";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  user: User;
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userData: UserService,
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.user = new User();

    this.userData.$user.subscribe((user) => {
      this.user.email = user.email;
    });

    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      email: [this.user.email, Validators.required]
    });
  }

  cancel() {
    this.userData.updateUser(this.user);
  }
}