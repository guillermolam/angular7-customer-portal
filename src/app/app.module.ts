// ----- Packages ---- //
import { BrowserModule }                      from "@angular/platform-browser";
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import { CookieService }                      from 'ngx-cookie-service';
import { FormsModule }                        from "@angular/forms";
import { GooglePlaceModule }                  from "ngx-google-places-autocomplete";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtModule }                          from '@auth0/angular-jwt';
import { MDBBootstrapModule }                 from "angular-bootstrap-md";
import { MockBackend }                        from '@angular/http/testing';
import { NgModule, NO_ERRORS_SCHEMA, enableProdMode }         from "@angular/core";
import { RouterModule }                       from "@angular/router";
import { ReactiveFormsModule }                from "@angular/forms";
import { TranslateModule }                    from '@ngx-translate/core';
// ----- App ----- //
import { AppComponent }                       from "./app.component";
import { Language }                           from "./app.language"; 
import { RoutingModule }                      from "./app.routing";
// ----- Helpers | Service | Guard ----- //
import { environment }                        from "../environments/environment.dev";
import { AuthenticationService }              from './_services/_iam/authentication-service.service';
import { AlertService }                       from "./_services/alert.service";
import { AuthGuard }                          from "./_guards/auth.guard";
import { RegExHelper }                        from './_helpers/regex-helper';
import { JwtInterceptor }                     from "./_helpers/jwt.interceptor";
import { UserService }                        from "./_services/user.service"; 
// ----- Account ----- //
import { AccountMainComponent }               from "./account-main/account-main.component";
import { AccountHeaderComponent }             from "./account-main/account-header/account-header.component";
import { SidenavComponent }                   from "./account-main/sidenav/sidenav.component";
// ----- Routes ----- //
import { CreateNewPasswordComponent }         from './routes/create-new-password/create-new-password.component';
import { DashboardComponent }                 from './routes/dashboard/dashboard.component';
import { ForgotPasswordComponent }            from "./routes/forgot-password/forgot-password.component";
import { LoginComponent }                     from "./routes/login/login.component";
import { SignupComponent }                    from "./routes/signup/signup.component";
import { SignupProcessComponent }             from './routes/signup/signup-process/signup-process.component';
import { TestingComponent }                   from './routes/testing/testing.component';
// ---- SVGS ---- //
import { CreateNewPasswordSvgComponent }      from '../assets/svg/create-new-password-svg/create-new-password-svg.component';
import { CreateNewPasswordExpiredSvgComponent } from '../assets/svg/create-new-password-expired-svg/create-new-password-expired-svg.component';
import { LoginIconSvgComponent }              from '../assets/svg/login-icon-svg/login-icon-svg.component';
import { ForgotPasswordIconSvgComponent }     from '../assets/svg/forgot-password-icon-svg/forgot-password-icon-svg.component';
import { CheckEmailIconSvgComponent }         from '../assets/svg/check-email-icon-svg/check-email-icon-svg.component'; 
import { TooManyAttemptsSvgComponent }        from '../assets/svg/too-many-attempts-svg/too-many-attempts-svg.component'; 
// ----- Components ----- //
import { FooterComponent }                    from './components/global-components/footer/footer.component';
import { HeaderComponent }                    from './components/global-components/header/header.component';
import { LoginFormComponent }                 from './components/forms/dynamic-forms/login-form/login-form.component';
import { MapfreButtonComponent }              from './components/individual-components/inputs/mapfre-button/mapfre-button.component';
import { MapfreCardComponent }                from './components/wrapper-components/mapfre-card/mapfre-card.component';
import { MapfreFormComponent }                from './components/wrapper-components/mapfre-form/mapfre-form.component';
import { MapfreIconComponent }                from './components/individual-components/mapfre-icon/mapfre-icon.component';
import { MapfreInputComponent }               from './components/individual-components/inputs/mapfre-input/mapfre-input.component';
import { MapfreLabelComponent }               from './components/individual-components/inputs/mapfre-label/mapfre-label.component';
import { MapfreLinkComponent }                from './components/individual-components/mapfre-link/mapfre-link.component';
import { MapfreSwitchComponent }              from './components/individual-components/inputs/mapfre-switch/mapfre-switch.component';
import { MapfreIputWithValidationComponent }  from './components/section-components/mapfre-input-with-validation/mapfre-input-with-validation.component';
import { CreatePasswordFormComponent }        from './components/forms/dynamic-forms/create-password-form/create-password-form.component';
import { SendEmailFormComponent }             from './components/forms/dynamic-forms/send-email-form/send-email-form.component';
import { EmailConfirmationComponent }         from './components/confirmations/email-confirmation/email-confirmation.component';
import { ForgotPasswordNondynamicComponent }  from './components/forms/non-dynamic-forms/forgot-password-nondynamic/forgot-password-nondynamic.component';
import { MapfreAlertComponent }               from './components/individual-components/mapfre-alert/mapfre-alert.component';
import { DesignSystemComponent }              from './routes/design-system/design-system.component';
import { MapfreCodeComponent }                from './components/wrapper-components/mapfre-code/mapfre-code.component';
import { MapfreModalComponent }               from './components/section-components/mapfre-modal/mapfre-modal.component';

import { MapfreLoadingComponent }              from './components/individual-components/mapfre-loading/mapfre-loading.component';       
import { MapfreTooltipComponent }              from './components/wrapper-components/mapfre-tooltip/mapfre-tooltip.component';       
import { MapfreDropdownComponent }             from './components/section-components/mapfre-dropdown/mapfre-dropdown.component';
import { MapfreIconInformationComponent } from './components/section-components/mapfre-icon-information/mapfre-icon-information.component';
import { CreateNewPasswordSetComponent } from './components/confirmations/create-new-password-set/create-new-password-set.component';
import { CreateNewPasswordExpiredComponent } from './components/confirmations/create-new-password-expired/create-new-password-expired.component';
import { ForgotPasswordTooManyComponent } from './components/confirmations/forgot-password-too-many/forgot-password-too-many.component';
import { CreateAccountFormComponent } from './components/forms/dynamic-forms/create-account-form/create-account-form.component';
import { AddPolicyComponent } from './components/forms/dynamic-forms/add-policy/add-policy.component';


if(environment.production) {
  enableProdMode();
}


export function tokenGetter() {
  return localStorage.getItem("currentUser");
}

@NgModule({
  declarations: [
    AppComponent,
    AccountMainComponent,
    AccountHeaderComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MapfreButtonComponent,
    MapfreLabelComponent,
    MapfreSwitchComponent,
    MapfreInputComponent,
    SidenavComponent,
    SignupComponent,
    LoginFormComponent,
    MapfreIputWithValidationComponent,
    TestingComponent,
    MapfreFormComponent,
    MapfreLinkComponent,
    MapfreCardComponent,
    MapfreIconComponent,
    CreatePasswordFormComponent,
    ForgotPasswordNondynamicComponent,
    SendEmailFormComponent,
    EmailConfirmationComponent,
    CreateNewPasswordComponent,
    MapfreAlertComponent,
    DesignSystemComponent,
    MapfreCodeComponent,
    MapfreModalComponent,
    MapfreLoadingComponent,
    MapfreTooltipComponent,
    MapfreDropdownComponent,
    MapfreIconInformationComponent,
    CreateNewPasswordSvgComponent,
    CreateNewPasswordSetComponent,
    CreateNewPasswordExpiredComponent,
    CreateNewPasswordExpiredSvgComponent,
    LoginIconSvgComponent,
    ForgotPasswordIconSvgComponent,
    CheckEmailIconSvgComponent,
    TooManyAttemptsSvgComponent,
    ForgotPasswordTooManyComponent,
    CreateAccountFormComponent,
    SignupProcessComponent,
    AddPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    RoutingModule,
    TranslateModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    CookieService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    Language,
    MockBackend,
    RegExHelper,
    UserService,
    // providers used to create fake backend
    //fakeBackendProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
