import { AuthenticationService } from './_services/authentication-service.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from "./_services/user.service";
import { AlertService } from "./_services/alert.service";
import { RoutingModule } from "./app.routing";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { RouterModule } from "@angular/router";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { AuthGuard } from "./_guards/auth.guard";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MapfreSwitchComponent } from "./mapfre-switch/mapfre-switch.component";
import { AlertComponent } from "./alert/alert.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { AccountMainComponent } from "./account-main/account-main.component";
import { AccountHeaderComponent } from "./account-main/account-header/account-header.component";
import { SidenavComponent } from "./account-main/sidenav/sidenav.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapfreSwitchComponent,
    AlertComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AccountMainComponent,
    AccountHeaderComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GooglePlaceModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    CookieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
