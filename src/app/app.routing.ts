// ---- Packages | Helpers ---- //
import { Routes, RouterModule,  }         from '@angular/router';
import { NgModule }                       from '@angular/core';
// ---- Guards ----- //
import { AuthGuard }                      from './_guards/auth.guard';
import { SignUpGuard }                    from './_guards/signup.guard';
import { VerifyUserGuard }                from './_guards/verify-user.guard';

// --- components ---- //
import { ProfileEditEmailComponent }      from './components/dashboard/loggedin-content/profile/profile-edit-email/profile-edit-email.component';
import { ProfileCheckingAccountComponent } from './components/dashboard/loggedin-content/profile/profile-checking-account/profile-checking-account.component';

import { ProfilePhoneComponent }          from './components/dashboard/loggedin-content/profile/profile-phone/profile-phone.component';
import { InformationHomeComponent }       from './components/dashboard/loggedin-content/information/information-home/information-home.component';
import { InformationMainComponent }       from './components/dashboard/loggedin-content/information/information-main.component';
import { ProfileEditPasswordComponent }   from './components/dashboard/loggedin-content/profile/profile-edit-password/profile-edit-password.component';
import { ProfileMainComponent }           from './components/dashboard/loggedin-content/profile/profile-main/profile-main.component';
import { InformationProductsComponent }   from './components/dashboard/loggedin-content/information/information-products/information-products.component';
import { InformationAboutComponent }      from './components/dashboard/loggedin-content/information/information-about/information-about.component';
import { InformationDiscountsComponent }  from './components/dashboard/loggedin-content/information/information-discounts/information-discounts.component';
import { InformationRenewalComponent }    from './components/dashboard/loggedin-content/information/information-renewal/information-renewal.component';
import { InformationCancelComponent }     from './components/dashboard/loggedin-content/information/information-cancel/information-cancel.component';
import { InformationLegalComponent }      from './components/dashboard/loggedin-content/information/information-legal/information-legal.component';
import { ClaimsDetailComponent }          from './components/dashboard/loggedin-content/claims/claims-detail/claims-detail.component';
import { ClaimsHomeComponent }            from './components/dashboard/loggedin-content/claims/claims-dashboard-home/claims-home.component';
import { ClaimsHomeClosedComponent }      from './components/dashboard/loggedin-content/claims/claims-dashboard-closed/claims-home-closed.component';
import { ProfileEmailConfirmComponent }   from './components/dashboard/loggedin-content/profile/profile-email-confirm/profile-email-confirm.component';
import { PolicyDetailsComponent }         from './components/dashboard/loggedin-content/my-insurance/details/details.component';
import { BillingDetailsComponent }        from './components/dashboard/loggedin-content/my-insurance/billing/billing.component';
import { DocumentDetailsComponent }       from './components/dashboard/loggedin-content/my-insurance/documents/documents.component';
import { DashboardMainComponent }         from './components/dashboard/dashboard-main.component';
import { BillingMainComponent }           from './components/dashboard/loggedin-content/billing/billing-main.component';
import { BillingNewpaymentComponent }     from './components/dashboard/loggedin-content/billing/billing-newpayment/billing-newpayment.component';
import { BillingConfirmComponent }        from './components/dashboard/loggedin-content/billing//billing-confirm/billing-confirm.component';
import { LinkPolicyComponent }            from './components/dashboard/loggedin-content/my-insurance/add-policy/link-policy/link-policy.component';
import { MyInsuranceComponent }           from './components/dashboard/loggedin-content/my-insurance/my-insurance.component';
import { LoggedinContentComponent }       from './components/dashboard/loggedin-content/loggedin-content.component';
import { MyInsuranceMainComponent }       from './components/dashboard/loggedin-content/my-insurance/my-insurance-main/my-insurance-main.component';
import { PaperlessBillComponent }         from './components/dashboard/loggedin-content/billing/paperless/paperless-bill/paperless-bill.component';
import { PaperlessPayComponent }          from './components/dashboard/loggedin-content/billing/paperless/paperless-pay/paperless-pay.component';
import { PaperlessPolicyComponent }       from './components/dashboard/loggedin-content/billing/paperless/paperless-policy/paperless-policy.component';
import { PaperlessComponent }             from './components/dashboard/loggedin-content/billing/paperless/paperless.component';
import { PaperlessFirstTimeComponent }    from './components/dashboard/loggedin-content/billing/paperless/paperless-time/paperless-time.component';
import { PaperlessPayEnrollComponent }    from './components/dashboard/loggedin-content/billing/paperless/paperless-pay/enroll/enroll.component';
import { PaperlessPayConfirmComponent }   from './components/dashboard/loggedin-content/billing/paperless/paperless-pay/confirm/confirm.component';
import { PolicyNotFoundComponent }        from './components/dashboard/loggedin-content/my-insurance/add-policy/policy-not-found/policy-not-found.component';
import { EditPolicyDetailsComponent }     from './components/dashboard/loggedin-content/my-insurance/add-policy/edit-policy-details/edit-policy-details.component';
import { ValidatePolicyRightsComponent }  from './components/dashboard/loggedin-content/my-insurance/add-policy/validate-policy-rights/validate-policy-rights.component';
import { PolicyInProcessComponent }       from './components/dashboard/loggedin-content/my-insurance/add-policy/policy-in-process/policy-in-process.component';
import { BusinesspolicyDetectedComponent } from './components/dashboard/loggedin-content/my-insurance/add-policy/businesspolicy-detected/businesspolicy-detected.component';


// ----- Routes ----- //
import { BillingComponent }               from './routes/billing/billing.component';
import { DashboardComponent }             from './routes/my-insurance/dashboard.component';
import { ForgotPasswordComponent }        from './routes/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent }     from './routes/create-new-password/create-new-password.component';
import { LoginComponent }                 from './routes/login/login.component';
import { SignupComponent }                from './routes/signup/signup.component';
import { SignupProcessComponent }         from './routes/signup/signup-process/signup-process.component';
import { TestingComponent }               from './routes/testing/testing.component';
import { WelcomeComponent }               from './routes/welcome/welcome.component';
import { VerifyAccountComponent }         from './routes/verify-account/verify-account.component';
import { WalletCardComponent }            from './routes/wallet-card/wallet-card.component';
import { ProfileSettingsComponent }       from './routes/profile-settings/profile-settings.component';
import { AddressChangeComponent }         from './routes/profile-settings/address-change/address-change.component';
import { ContactComponent }               from './routes/contact/contact.component';
import { ClaimsComponent }                from './routes/claims/claims.component';
import { InformationComponent }           from './routes/information/information.component';

const appRoutes: Routes = [
  { path: 'forgotpassword/:emailPrefill', component: ForgotPasswordComponent },
  { path: 'createpassword',               component: CreateNewPasswordComponent },
  { path: 'login',                        component: LoginComponent },
  { path: 'signup',                       component: SignupComponent },
  { path: 'signup/:parm',                 component: SignupProcessComponent},
  { path: 'testing',                      component: TestingComponent },
  { path: 'verifyaccount',                component: VerifyAccountComponent, 
  // canActivate: [VerifyUserGuard] 
},
  { path: 'welcome',                      component: WelcomeComponent },
  { path: 'walletcard',                   component: WalletCardComponent},

// when logged in
{ path: '', component: DashboardMainComponent, //canActivate: [AuthGuard],
children: [
{ path: '',                               component: LoggedinContentComponent, children: [
  { path: '',                             redirectTo: 'my-insurance', pathMatch: 'full' },
  { path: 'my-insurance',                 component: MyInsuranceComponent,
  children: [
    { path: '',                           component: MyInsuranceMainComponent, pathMatch: 'full' },
    { path: 'link-policy',                component: LinkPolicyComponent},
    { path: 'business-policy-not-supported',  component: BusinesspolicyDetectedComponent},
    { path: 'policy-not-found',           component: PolicyNotFoundComponent},
    { path: 'edit-policy-details',        component: EditPolicyDetailsComponent},
    { path: 'policy-in-process',          component: PolicyInProcessComponent},
    { path: 'validate-policy-rights',     component: ValidatePolicyRightsComponent},
    { path: ':policyid',
      children: [
        { path: '',                       redirectTo: 'details', pathMatch: 'full' },
        { path: 'details',                component: PolicyDetailsComponent },
        { path: 'billing',                component: BillingDetailsComponent },
        { path: 'documents',              component: DocumentDetailsComponent },
      ]
    },
  ]
},
  { path: 'profile',                      component: ProfileSettingsComponent, children: [
    { path: '',                           component: ProfileMainComponent },
    { path: 'edit-phone',                 component: ProfilePhoneComponent},
    { path: 'add-phone',                  component: ProfilePhoneComponent},
    { path: 'edit-checking-account',      component: ProfileCheckingAccountComponent},
    { path: 'add-checking-account',       component: ProfileCheckingAccountComponent},
    { path: 'change-address/:address-type', component: AddressChangeComponent},
    { path: 'enter-password',             component: ProfileEditPasswordComponent },
    { path: 'verify-password',            component: ProfileEditEmailComponent },
    { path: 'edit-email',                 component: ProfileEditEmailComponent },
    { path: 'edit-password' ,             component: ProfileEditPasswordComponent },
    { path: 'email-confirmation' ,        component: ProfileEmailConfirmComponent}
  ] },
  { path: 'claims',                       component: ClaimsComponent, children: [
    { path: '',                            component: ClaimsHomeComponent },
    { path: ':claimid',                   children: [
      { path: '',                         redirectTo: 'details', pathMatch: 'full'},
      { path: 'details',                  component: ClaimsDetailComponent },
    ] }
  ] },
  { path: 'billing',                      component: BillingComponent , children: [
    { path: '',                           component: BillingMainComponent },
    { path: 'paperless',                  component: PaperlessComponent, children: [
      { path: '',                         component: PaperlessFirstTimeComponent  },
      { path: 'e-bill',                   component: PaperlessBillComponent },
      { path: 'e-pay',                    children : [
        { path: '',                       component: PaperlessPayComponent },
        { path: ':policyid/enroll',       component: PaperlessPayEnrollComponent },
        { path: ':policyid/confirm',      component: PaperlessPayConfirmComponent}
      ] },
      { path: 'e-policy',                 component: PaperlessPolicyComponent },
    ] },
    { path: ':policyid',                  children: [
      { path: '',                         redirectTo: 'new-payment', pathMatch: 'full'},
      { path: 'new-payment',              component: BillingNewpaymentComponent},
      { path: 'confirm',                  component: BillingConfirmComponent }
    ] }
  ] },
  { path: 'information',                  component: InformationComponent,  children: [
    { path: '',                           component: InformationHomeComponent },
    { path: 'products',                   component: InformationProductsComponent },
    { path: 'about',                      component: InformationAboutComponent },
    { path: 'discounts',                  component: InformationDiscountsComponent },
    { path: 'renewal',                    component: InformationRenewalComponent },
    { path: 'cancel',                     component: InformationCancelComponent },
    { path: 'legal',                      component: InformationLegalComponent },
  ]},
  { path: 'contact',                      component: ContactComponent }
]}]
},
  { path: 'policy/add',                   component: DashboardComponent },
  { path: 'offline',                      component: DashboardComponent },
  { path: '',                             redirectTo: 'login', pathMatch: 'full'},
  { path: '**',                           redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule {}
