import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../_services/_iam/authentication-service.service';
import { UserService } from "./../_services/user.service";
import { AlertService } from "./../_services/alert.service";
import { User } from "./../_models/user";
import { MapfreSwitchComponent } from "./../mapfre-switch/mapfre-switch.component";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { environment } from "../../environments/environment"; 

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User;
  loading = false;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService,
    private _cookieService: CookieService
  ) {}

  ngOnInit() {
    // Recover cookie if exists
    if (this._cookieService.get("remember")) {
      this.user.email = this._cookieService.get("email");
      this.user.password = this._cookieService.get("password");
    }

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";

    // Recover User Observable if coming from a different page
    this.userService.$user.subscribe((user) => {
      this.createForm(user);
    });

    this.http.get(
      "/b2cwebapp/account/loginView?state=MA"
    ).toPromise(
    ).then((rsp) => {
      console.log("responded");
      console.log(rsp);
    }).catch((err) => {
      console.log("error");
      console.log(err);
    });
  }

  createForm(user: User) {
    this.loginForm = this.fb.group({
      email: [user.email, [Validators.required, Validators.email]],
      password: [user.password, [Validators.required]]
    });
  }

  register() {
    this.userService.updateUser(this.loginForm.value);
    this.router.navigateByUrl("signup");
  }

  putCookie() {
    this._cookieService.put("username", this.user.email);
    this._cookieService.put("password", this.user.password);
  }

  login() {
    this.user = new User();
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.loading = true;
    this.putCookie();
    this.authenticationService
      .login(this.user.email, this.user.password)
      .subscribe(
        (data) => {
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
