// --- Design Library --- //
import { MDBBootstrapModule }                   from 'angular-bootstrap-md';
import { MapfreDesignLibraryModule }            from 'mapfre-design-library';
// ----- Packages ---- //
import { BrowserModule }                        from '@angular/platform-browser';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { CookieService }                        from 'ngx-cookie-service';
import { FormsModule }                          from '@angular/forms';
import { GooglePlaceModule }                    from 'ngx-google-places-autocomplete';
import { HTTP_INTERCEPTORS, HttpClientModule }  from '@angular/common/http';
import { JwtModule }                            from '@auth0/angular-jwt';
import { MockBackend }                          from '@angular/http/testing';
import { NgModule, NO_ERRORS_SCHEMA, 
        enableProdMode }                        from '@angular/core';
import { ReactiveFormsModule }                  from '@angular/forms';
import { TranslateModule }                      from '@ngx-translate/core';
// ----- App ----- //
import { AppComponent }                         from './app.component';
import { RoutingModule }                        from './app.routing';
// ----- Helpers | Service | Guard ----- //
import { environment }                          from '../environments/environment.dev';
import { AuthenticationService }                from './_services/_iam/authentication-service.service';
import { AuthGuard }                            from './_guards/auth.guard';
import { JwtInterceptor }                       from './_helpers/jwt.interceptor';
import { UserService }                          from './_services/user.service'; 
import { WalletCardService }                    from './_services/_iam/wallet-card.service';
// ----- Account ----- //
import { AccountMainComponent }                 from "./components/dashboard/account-main.component";
import { AccountHeaderComponent }               from "./components/dashboard/account-header/account-header.component";
import { SidenavComponent }                     from "./components/dashboard/sidenav/sidenav.component";
// ----- Routes ----- //
import { CreateNewPasswordComponent }           from './routes/create-new-password/create-new-password.component';
import { DashboardComponent }                   from './routes/dashboard/dashboard.component';
import { ForgotPasswordComponent }              from './routes/forgot-password/forgot-password.component';
import { LoginComponent }                       from './routes/login/login.component';
import { SignupComponent }                      from './routes/signup/signup.component';
import { SignupProcessComponent }               from './routes/signup/signup-process/signup-process.component';
import { TestingComponent }                     from './routes/testing/testing.component';
import { VerifyAccountComponent }               from './routes/verify-account/verify-account.component';
import { WalletCardComponent }                  from './routes/wallet-card/wallet-card.component';
import { WelcomeComponent }                     from './routes/welcome/welcome.component';
// ----- Components ----- //
import { LoginFormComponent }                   from './components/forms/dynamic-forms/login-form/login-form.component';
import { CreatePasswordFormComponent }          from './components/forms/dynamic-forms/create-password-form/create-password-form.component';
import { SendEmailFormComponent }               from './components/forms/dynamic-forms/send-email-form/send-email-form.component';
import { EmailConfirmationComponent }           from './components/screens/email-confirmation/email-confirmation.component';
import { ForgotPasswordNondynamicComponent }    from './components/forms/non-dynamic-forms/forgot-password-nondynamic/forgot-password-nondynamic.component';
import { CreateNewPasswordSetComponent }        from './components/screens/create-new-password/create-new-password-set/create-new-password-set.component';
import { CreateNewPasswordExpiredComponent }    from './components/screens/create-new-password/create-new-password-expired/create-new-password-expired.component';
import { ForgotPasswordTooManyComponent }       from './components/screens/create-new-password/forgot-password-too-many/forgot-password-too-many.component';
import { CreateAccountFormComponent }           from './components/forms/dynamic-forms/create-account-form/create-account-form.component';
import { AddPolicyComponent }                   from './components/forms/dynamic-forms/add-policy/add-policy.component';
import { EmailUseScreenComponent }              from './components/screens/signup-process/email-use-screen/email-use-screen.component';
import { ReviewPolicyScreenComponent }          from './components/screens/signup-process/review-policy-screen/review-policy-screen.component';
import { BopScreenComponent }                   from './components/screens/signup-process/bop-screen/bop-screen.component';
import { VerifyAccountScreenComponent }         from './components/screens/signup-process/verify-account-screen/verify-account-screen.component';
import { PolicyNotFoundScreenComponent }        from './components/screens/signup-process/policy-not-found-screen/policy-not-found-screen.component';
import { PolicyBelongToAnotherScreenComponent } from './components/screens/signup-process/policy-belong-to-another-screen/policy-belong-to-another-screen.component';
import { EditPolicyComponent }                  from './components/forms/dynamic-forms/edit-policy-form/edit-policy.component';
import { OnboardingWalletFrontComponent }       from './components/screens/wallet-passes/onboarding-wallet-front/onboarding-wallet-front.component';
import { OnboardingWalletBackComponent }        from './components/screens/wallet-passes/onboarding-wallet-back/onboarding-wallet-back.component';
import { OnboardingWalletBackListComponent }    from './components/screens/wallet-passes/onboarding-wallet-back-list/onboarding-wallet-back-list.component';
import { OnboardingWalletModalComponent }       from './components/screens/wallet-passes/onboarding-wallet-modal/onboarding-wallet-modal.component';


if(environment.production) {
  enableProdMode();
}

export function tokenGetter() {
  return localStorage.getItem('currentUser');
}

@NgModule({
  declarations: [
    AppComponent,
    AccountMainComponent,
    AccountHeaderComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
    SidenavComponent,
    SignupComponent,
    LoginFormComponent,
    TestingComponent,
    CreatePasswordFormComponent,
    ForgotPasswordNondynamicComponent,
    SendEmailFormComponent,
    EmailConfirmationComponent,
    CreateNewPasswordComponent,
    CreateNewPasswordSetComponent,
    CreateNewPasswordExpiredComponent,
    ForgotPasswordTooManyComponent,
    CreateAccountFormComponent,
    SignupProcessComponent,
    AddPolicyComponent,
    EmailUseScreenComponent,
    ReviewPolicyScreenComponent,
    BopScreenComponent,
    VerifyAccountScreenComponent,
    WelcomeComponent,
    PolicyNotFoundScreenComponent,
    PolicyBelongToAnotherScreenComponent,
    EditPolicyComponent,
    VerifyAccountComponent,
    WalletCardComponent,
    OnboardingWalletFrontComponent,
    OnboardingWalletBackComponent,
    OnboardingWalletBackListComponent,
    OnboardingWalletModalComponent

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
    MapfreDesignLibraryModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    RoutingModule,
    TranslateModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthGuard,
    AuthenticationService,
    CookieService,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    MockBackend,
    UserService,
    WalletCardService,  //provider for wallet card service
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
