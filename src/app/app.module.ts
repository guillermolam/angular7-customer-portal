// --- Design Library --- //
import { MapfreDesignLibraryModule }            from 'mapfre-design-library';
import { MDBBootstrapModule }                   from 'angular-bootstrap-md';
// import { ComponentsModule }                     from 'mapfre-framework';
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
import { ServiceWorkerModule }                  from '@angular/service-worker';
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
import { AccountMainComponent }                 from './components/dashboard/account-main.component';
import { AccountHeaderComponent }               from './components/dashboard/account-header/account-header.component';
import { SidenavComponent }                     from './components/dashboard/sidenav/sidenav.component';
// ----- Routes ----- //
import { CreateNewPasswordComponent }           from './routes/create-new-password/create-new-password.component';
import { DashboardComponent }                   from './routes/my-insurance/dashboard.component';
import { ForgotPasswordComponent }              from './routes/forgot-password/forgot-password.component';
import { LoginComponent }                       from './routes/login/login.component';
import { SignupComponent }                      from './routes/signup/signup.component';
import { SignupProcessComponent }               from './routes/signup/signup-process/signup-process.component';
import { TestingComponent }                     from './routes/testing/testing.component';
import { VerifyAccountComponent }               from './routes/verify-account/verify-account.component';
import { WalletCardComponent }                  from './routes/wallet-card/wallet-card.component';
import { WelcomeComponent }                     from './routes/welcome/welcome.component';
import { PolicyDetailsComponent }               from './routes/my-insurance/policy-details/policy-details.component';

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
import { MiscColumnComponent }                  from './components/dashboard/misc-column/misc-column.component';
import { DetailsComponent }                     from './components/dashboard/details/details.component';
import { ProfileSettingsComponent } from './routes/profile-settings/profile-settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileMainComponent } from './components/profile/profile-main/profile-main.component';
import { ProfilePhoneComponent } from './components/profile/profile-phone/profile-phone.component';
import { ApartmentPipePipe } from './_helpers/_pipes/apartment-pipe.pipe';
import { BillingComponent } from './components/dashboard/billing/billing.component';
import { DocumentsComponent } from './components/dashboard/documents/documents.component';
import { DocumentDetailsComponent } from './routes/my-insurance/document-details/document-details.component';
import { BillingDetailsComponent } from './routes/my-insurance/billing-details/billing-details.component';
import { InformationComponent } from './routes/information/information.component';
import { ClaimsComponent } from './routes/claims/claims.component';
import { ContactComponent } from './routes/contact/contact.component';
import { ChangePhoneComponent } from './components/forms/dynamic-forms/profile-setings-forms/change-phone/change-phone.component';
import { ProfileCheckingAccountComponent } from './components/profile/profile-checking-account/profile-checking-account.component';
import { CustomDateFormatPipe } from './_helpers/_pipes/custom-date-format.pipe';
import { AddressChangeComponent } from './routes/profile-settings/address-change/address-change.component';
import { ChangeAddressComponent } from './components/forms/dynamic-forms/profile-setings-forms/change-address/change-address.component';

if (environment.production) {
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
    OnboardingWalletModalComponent,
    PolicyDetailsComponent,
    MiscColumnComponent,
    DetailsComponent,
    ProfileSettingsComponent,
    ProfileComponent,
    ProfileMainComponent,
    ProfilePhoneComponent,
    ApartmentPipePipe,
    BillingComponent,
    DocumentsComponent,
    DocumentDetailsComponent,
    BillingDetailsComponent,
    InformationComponent,
    ClaimsComponent,
    ContactComponent,
    ChangePhoneComponent,
    ProfileCheckingAccountComponent,
    CustomDateFormatPipe,
    AddressChangeComponent,
    ChangeAddressComponent

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
    TranslateModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
