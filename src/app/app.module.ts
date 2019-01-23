import { AuthService } from './auth/auth.service';
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
import { NgModule, NO_ERRORS_SCHEMA, enableProdMode }
                                                from '@angular/core';
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
import { ApartmentPipePipe }                    from './_helpers/_pipes/apartment-pipe.pipe';
import { CustomDateFormatPipe }                 from './_helpers/_pipes/custom-date-format.pipe';
import { ProfileSettingsRoutingService }        from './_services/profile-settings/profile-settings-routing.service';
import { ProfileConfirmModalService }           from './_services/profile-settings/profile-confirm-modal.service';
import { StorageServiceObservablesService }     from './_services/storage-service-observables/storage-service-observables.service';
import { PolicyDataService }                    from './_services/my-insurance/data-services/policy-data.service';
import { PolicyDetailsService }                 from './_services/my-insurance/policy-details.service';
import { PolicyDocumentsDataService }           from './_services/my-insurance/data-services/policy-documents-data.service';

// ----- Account ----- //
import { DashboardMainComponent }                 from './components/dashboard/dashboard-main.component';
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
import { BillingComponent }                     from './routes/billing/billing.component';
import { InformationComponent }                 from './routes/information/information.component';
import { ClaimsComponent }                      from './routes/claims/claims.component';
import { ContactComponent }                     from './routes/contact/contact.component';
import { ProfileSettingsComponent }             from './routes/profile-settings/profile-settings.component';
import { AddressChangeComponent }               from './routes/profile-settings/address-change/address-change.component';
import { ChangeEmailComponent }                 from './routes/profile-settings/change-email/change-email.component';

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
import { PolicyDetailsComponent }               from './components/dashboard/loggedin-content/my-insurance/details/details.component';
import { ProfileComponent } from './components/dashboard/loggedin-content/profile/profile.component';
import { ProfileMainComponent } from './components/dashboard/loggedin-content/profile/profile-main/profile-main.component';
import { ProfilePhoneComponent } from './components/dashboard/loggedin-content/profile/profile-phone/profile-phone.component';
import { BillingDetailsComponent } from './components/dashboard/loggedin-content/my-insurance/billing/billing.component';
import { DocumentDetailsComponent } from './components/dashboard/loggedin-content/my-insurance/documents/documents.component';
import { ChangePhoneComponent } from './components/forms/dynamic-forms/profile-settings-forms/change-phone/change-phone.component';
import { ProfileCheckingAccountComponent } from './components/dashboard/loggedin-content/profile/profile-checking-account/profile-checking-account.component';
import { ChangeAddressComponent } from './components/forms/dynamic-forms/profile-settings-forms/change-address/change-address.component';
import { ProfileEditPasswordComponent } from './components/dashboard/loggedin-content/profile/profile-edit-password/profile-edit-password.component';
import { ChangePasswordFormComponent } from './components/forms/dynamic-forms/change-password-form/change-password-form.component';
import { ProfileEditEmailComponent } from './components/dashboard/loggedin-content/profile/profile-edit-email/profile-edit-email.component';
import { CheckingAccountFormComponent } from './components/forms/dynamic-forms/profile-settings-forms/checking-account-form/checking-account-form.component';
import { InformationMainComponent } from './components/dashboard/loggedin-content/information/information-main.component';
import { InformationHomeComponent } from './components/dashboard/loggedin-content/information/information-home/information-home.component';
import { InformationProductsComponent } from './components/dashboard/loggedin-content/information/information-products/information-products.component';
import { InformationAboutComponent } from './components/dashboard/loggedin-content/information/information-about/information-about.component';
import { InformationDiscountsComponent } from './components/dashboard/loggedin-content/information/information-discounts/information-discounts.component';
import { InformationRenewalComponent } from './components/dashboard/loggedin-content/information/information-renewal/information-renewal.component';
import { InformationCancelComponent } from './components/dashboard/loggedin-content/information/information-cancel/information-cancel.component';
import { InformationLegalComponent } from './components/dashboard/loggedin-content/information/information-legal/information-legal.component';
import { ContactScreenComponent } from './components/screens/contact-screen/contact-screen.component';
import { EditEmailFormComponent } from './components/forms/dynamic-forms/profile-settings-forms/edit-email-form/edit-email-form.component';
import { ProfileEmailConfirmComponent } from './components/dashboard/loggedin-content/profile/profile-email-confirm/profile-email-confirm.component';
import { ProfileConfirmModalComponent } from './components/dashboard/loggedin-content/profile/profile-confirm-modal/profile-confirm-modal.component';
import { ClaimsHomeComponent } from './components/dashboard/loggedin-content/claims/claims-dashboard-home/claims-home.component';
import { ClaimsWrapperComponent } from './components/dashboard/loggedin-content/claims/claims.component';
import { ClaimsDetailComponent } from './components/dashboard/loggedin-content/claims/claims-detail/claims-detail.component';
import { ClaimsHomeClosedComponent } from './components/dashboard/loggedin-content/claims/claims-dashboard-closed/claims-home-closed.component';
import { ClaimsAccordianFaqComponent } from './components/dashboard/loggedin-content/claims/claims-accordian-faq/claims-accordian-faq.component';
import { ClaimsNavigationComponent } from './components/dashboard/loggedin-content/claims/claims-navigation/claims-navigation.component';
import { NoClaimsComponent } from './components/dashboard/loggedin-content/claims/no-claims/no-claims.component';
import { ClaimsReportComponent } from './components/dashboard/loggedin-content/claims/claims-report/claims-report.component';
import { ClaimsHomeCarComponent } from './components/dashboard/loggedin-content/claims/claims-dashboard-car/claims-home-car.component';
import { ClaimsHomePropertyComponent } from './components/dashboard/loggedin-content/claims/claims-dashboard-property/claims-home-property.component';
import { BillingMainComponent } from './components/dashboard/loggedin-content/billing/billing-main.component';
import { BillingNewpaymentComponent } from './components/dashboard/loggedin-content/billing/billing-newpayment/billing-newpayment.component';
import { LinkPolicyComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/link-policy/link-policy.component';
import { NewPaymentComponent } from './components/forms/dynamic-forms/new-payment/new-payment.component';
import { BillingSidebarComponent } from './components/dashboard/loggedin-content/billing/billing-sidebar/billing-sidebar.component';
import { DashboardNavComponent } from './components/dashboard/loggedin-content/my-insurance/myinsurance-nav/dashboard-nav.component';
import { LoggedinAccountHeaderComponent } from './components/dashboard/loggedin-account-header/loggedin-account-header.component';
import { LoggedinSidenavComponent } from './components/dashboard/loggedin-sidenav/loggedin-sidenav.component';
import { LoggedinContentComponent } from './components/dashboard/loggedin-content/loggedin-content.component';
import { MyInsuranceMainComponent } from './components/dashboard/loggedin-content/my-insurance/my-insurance-main/my-insurance-main.component';
import { NewPaymentNoCheckingComponent } from './components/forms/dynamic-forms/new-payment-no-checking/new-payment-no-checking.component';
import { BillingConfirmComponent } from './components/dashboard/loggedin-content/billing/billing-confirm/billing-confirm.component';
import { ContactBillingRepFormComponent } from './components/forms/dynamic-forms/contact-billing-rep-form/contact-billing-rep-form.component';
import { BusinesspolicyDetectedComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/businesspolicy-detected/businesspolicy-detected.component';
import { PolicyNotFoundComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/policy-not-found/policy-not-found.component';
import { EditPolicyDetailsComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/edit-policy-details/edit-policy-details.component';
import { PolicyInProcessComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/policy-in-process/policy-in-process.component';
import { ValidatePolicyRightsComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/validate-policy-rights/validate-policy-rights.component';
import { PaperlessComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless.component';
import { PaperlessMiscComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-misc/paperless-misc.component';
import { PaperlessBillComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-bill/paperless-bill.component';
import { PaperlessPayComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-pay/paperless-pay.component';
import { PaperlessPolicyComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-policy/paperless-policy.component';
import { ClaimsMiscComponent } from './components/dashboard/loggedin-content/claims/claims-misc/claims-misc.component';
import { PaperlessFirstTimeComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-time/paperless-time.component';
import { PaperlessPayEnrollComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-pay/enroll/enroll.component';
import { EnrollEftEpayFormComponent } from './components/forms/dynamic-forms/enroll-eft-epay-form/enroll-eft-epay-form.component';
import { PaperlessPayConfirmComponent } from './components/dashboard/loggedin-content/billing/paperless/paperless-pay/confirm/confirm.component';
import { MyInsuranceComponent } from './components/dashboard/loggedin-content/my-insurance/my-insurance.component';
import { FullstateToAbvPipe } from './_helpers/_pipes/fullstate-to-abv.pipe';
import { AbvToFulstatePipe } from './_helpers/_pipes/abv-to-fulstate.pipe';


if (environment.production) {
  enableProdMode();
}

export function tokenGetter() {
  return localStorage.getItem('currentUser');
}

@NgModule({
  declarations: [
    NewPaymentNoCheckingComponent,
    ClaimsWrapperComponent,
    MyInsuranceComponent,
    ContactScreenComponent,
    AppComponent,
    DashboardMainComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    LoginComponent,
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
    ProfileSettingsComponent,
    ProfileComponent,
    ProfileMainComponent,
    ProfilePhoneComponent,
    ApartmentPipePipe,
    DocumentDetailsComponent,
    BillingDetailsComponent,
    InformationComponent,
    ClaimsComponent,
    ContactComponent,
    ChangePhoneComponent,
    ProfileCheckingAccountComponent,
    CustomDateFormatPipe,
    AddressChangeComponent,
    ChangeAddressComponent,
    ProfileEditPasswordComponent,
    ChangePasswordFormComponent,
    ProfileEditEmailComponent,
    CheckingAccountFormComponent,
    InformationMainComponent,
    InformationHomeComponent,
    InformationProductsComponent,
    InformationAboutComponent,
    InformationDiscountsComponent,
    InformationRenewalComponent,
    InformationCancelComponent,
    InformationLegalComponent,
    EditEmailFormComponent,
    ProfileEmailConfirmComponent,
    ProfileConfirmModalComponent,
    ClaimsHomeComponent,
    ClaimsDetailComponent,
    ClaimsHomeClosedComponent,
    ClaimsAccordianFaqComponent,
    ClaimsNavigationComponent,
    NoClaimsComponent,
    ClaimsReportComponent,
    ClaimsHomeCarComponent,
    ClaimsHomePropertyComponent,
    BillingMainComponent,
    BillingComponent,
    BillingNewpaymentComponent,
    LinkPolicyComponent,
    NewPaymentComponent,
    BillingSidebarComponent,
    DashboardNavComponent,
    LoggedinAccountHeaderComponent,
    LoggedinSidenavComponent,
    LoggedinContentComponent,
    MyInsuranceMainComponent,
    BillingConfirmComponent,
    ContactBillingRepFormComponent,

    BusinesspolicyDetectedComponent,
    PolicyNotFoundComponent,
    EditPolicyDetailsComponent,
    PolicyInProcessComponent,
    ValidatePolicyRightsComponent,

    PaperlessComponent,
    PaperlessMiscComponent,
    PaperlessBillComponent,
    PaperlessPayComponent,
    PaperlessPolicyComponent,
    ClaimsMiscComponent,
    PaperlessFirstTimeComponent,
    PaperlessPayEnrollComponent,
    EnrollEftEpayFormComponent,
    PaperlessPayConfirmComponent,
    ChangeEmailComponent,
    FullstateToAbvPipe,
    AbvToFulstatePipe,


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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthService,
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
    ProfileSettingsRoutingService,
    ProfileConfirmModalService,
    PolicyDetailsService,
    StorageServiceObservablesService,
    PolicyDataService,
    PolicyDocumentsDataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
