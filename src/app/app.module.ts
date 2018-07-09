// ----- Packages ---- //
import { BrowserModule }            from "@angular/platform-browser";
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { CookieService }            from "angular2-cookie/services/cookies.service";
import { FormsModule }              from "@angular/forms";
import { GooglePlaceModule }        from "ngx-google-places-autocomplete";
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from "@angular/common/http";
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MDBBootstrapModule }       from "angular-bootstrap-md";

import { MockBackend }              from '@angular/http/testing';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule }             from "@angular/router";
import { ReactiveFormsModule }      from "@angular/forms";
import { TranslateModule }          from '@ngx-translate/core';
// ----- App ----- //
import { AppComponent }             from "./app.component";
import { Language }                 from "./app.language"; 
import { RoutingModule }            from "./app.routing";
// ----- Helpers | Service | Guard ----- //
//import { fakeBackendProvider }    from './_helpers/fake-backend';
//import { AuthenticationService }  from './_services/authentication-service.service';
import { AuthenticationService }    from './_services/_iam/authentication-service.service';
import { AlertService }             from "./_services/alert.service";
import { AuthGuard }                from "./_guards/auth.guard";
import { JwtInterceptor }           from "./_helpers/jwt.interceptor";
import { UserService }              from "./_services/user.service"; 
// ----- Components ----- //
import { AlertComponent }           from "./components/individual-components/alert/alert.component";
import { FooterComponent }          from './components/section-components/footer/footer.component';
import { HeaderComponent }          from './components/section-components/header/header.component';
import { LoginFormComponent }       from './components/forms/dynamic-forms/login-form/login-form.component';
import { MapfreButtonComponent }    from './components/individual-components/inputs/mapfre-button/mapfre-button.component';
import { MapfreCardComponent }      from './components/section-components/mapfre-card/mapfre-card.component';
import { MapfreFormComponent }      from './components/section-components/mapfre-form/mapfre-form.component';
import { MapfreIconComponent }      from './components/individual-components/mapfre-icon/mapfre-icon.component';
import { MapfreInputComponent }     from './components/individual-components/inputs/mapfre-input/mapfre-input.component';
import { MapfreLabelComponent }     from './components/individual-components/inputs/mapfre-label/mapfre-label.component';
import { MapfreLinkComponent }      from './components/individual-components/mapfre-link/mapfre-link.component';
import { MapfreSwitchComponent }    from './components/individual-components/inputs/mapfre-switch/mapfre-switch.component';
import { MapfreIputWithValidationComponent } from './components/section-components/mapfre-input-with-validation/mapfre-input-with-validation.component';
// ----- Account ----- //
import { AccountMainComponent }     from "./account-main/account-main.component";
import { AccountHeaderComponent }   from "./account-main/account-header/account-header.component";
import { SidenavComponent }         from "./account-main/sidenav/sidenav.component";
// ----- Routes ----- //
import { CreateNewPasswordComponent } from './routes/create-new-password/create-new-password.component';
import { DashboardComponent }       from './routes/dashboard/dashboard.component';
import { ForgotPasswordComponent }  from "./routes/forgot-password/forgot-password.component";
import { LoginComponent }           from "./routes/login/login.component";
import { SignupComponent }          from "./routes/signup/signup.component";
import { TestingComponent }         from './routes/testing/testing.component';


import { DynamicFormsComponent }              from './components/forms/dynamic-forms/dynamic-form-testing/dynamic-forms.component';
import { ForgotPasswordFormComponent }        from './components/forms/dynamic-forms/forgot-password-form/forgot-password-form.component';
import { SendEmailFormComponent }             from './components/forms/dynamic-forms/send-email-form/send-email-form.component';
import { EmailConfirmationComponent }         from './components/confirmations/email-confirmation/email-confirmation.component';
import { SendEmailFormNONDynamicComponent }   from './components/forms/non-dynamic-forms/send-email-form/send-email-form.component';
import { ForgotPasswordNondynamicComponent }  from './components/forms/non-dynamic-forms/forgot-password-nondynamic/forgot-password-nondynamic.component';


import { RepeatPasswordDirectiveDirective }   from './_directives/forms/repeat-password/repeat-password-directive.directive';
import { MapfreAlertComponent } from './components/individual-components/mapfre-alert/mapfre-alert.component';
import { DesignSystemComponent } from './routes/design-system/design-system.component';
import { MapfreCodeComponent } from './components/individual-components/mapfre-code/mapfre-code.component';
import { MapfreNotificationsComponent } from './components/individual-components/mapfre-notifications/mapfre-notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
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
    DynamicFormsComponent,
    ForgotPasswordFormComponent,
    RepeatPasswordDirectiveDirective,
    ForgotPasswordNondynamicComponent,
    SendEmailFormComponent,
    EmailConfirmationComponent,
    SendEmailFormNONDynamicComponent,
    CreateNewPasswordComponent,
    MapfreAlertComponent,
    DesignSystemComponent,
    MapfreCodeComponent,
    MapfreNotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
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
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    CookieService,
    Language,
    MockBackend,
    UserService,
    // providers used to create fake backend
    //fakeBackendProvider,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
