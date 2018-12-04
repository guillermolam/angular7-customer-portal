// ---- Packages | Helpers ---- //
import { Routes, RouterModule,  }     from '@angular/router';
import { NgModule }                   from '@angular/core';
import { AuthGuard }                  from './_guards/auth.guard';
import { SignUpGuard }                from './_guards/signup.guard';
import { VerifyUserGuard }            from './_guards/verify-user.guard';

// --- components ---- //
import { ProfileEditEmailComponent }  from './components/profile/profile-edit-email/profile-edit-email.component';
import { ProfileCheckingAccountComponent } from './components/profile/profile-checking-account/profile-checking-account.component';
import { ProfilePhoneComponent }      from './components/profile/profile-phone/profile-phone.component';
import { InformationHomeComponent }   from './components/information/information-home/information-home.component';
import { InformationMainComponent }   from './components/information/information-main.component';
import { ProfileEditPasswordComponent } from './components/profile/profile-edit-password/profile-edit-password.component';
import { ProfileMainComponent }       from './components/profile/profile-main/profile-main.component';
import { InformationProductsComponent } from './components/information/information-products/information-products.component';
import { InformationAboutComponent }  from './components/information/information-about/information-about.component';
import { InformationDiscountsComponent } from './components/information/information-discounts/information-discounts.component';
import { InformationRenewalComponent } from './components/information/information-renewal/information-renewal.component';
import { InformationCancelComponent } from './components/information/information-cancel/information-cancel.component';
import { InformationLegalComponent }  from './components/information/information-legal/information-legal.component';
import { ClaimsDetailComponent }      from './components/claims/claims-detail/claims-detail.component';
import { ClaimsHomeComponent }        from './components/claims/claims-dashboard-active/claims-home.component';
import { ClaimsHomeClosedComponent }  from './components/claims/claims-dashboard-closed/claims-home-closed.component';
import { ProfileEmailConfirmComponent } from './components/profile/profile-email-confirm/profile-email-confirm.component';
import { DashboardHomeComponent }     from './components/dashboard/home/dashboard.component';
import { PolicyDetailsComponent }     from './components/dashboard/details/details.component';
import { BillingDetailsComponent }    from './components/dashboard/billing/billing.component';
import { DocumentDetailsComponent }   from './components/dashboard/documents/documents.component';
import { AccountMainComponent }       from './components/dashboard/account-main.component';
import { BillingMainComponent }       from './components/billing/billing-main.component';
import { BillingNewpaymentComponent } from './components/billing/billing-newpayment/billing-newpayment.component';


// ----- Routes ----- //
import { BillingComponent }           from './routes/billing/billing.component';
import { DashboardComponent }         from './routes/my-insurance/dashboard.component';
import { ForgotPasswordComponent }    from './routes/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent } from './routes/create-new-password/create-new-password.component';
import { LoginComponent }             from './routes/login/login.component';
import { SignupComponent }            from './routes/signup/signup.component';
import { SignupProcessComponent }     from './routes/signup/signup-process/signup-process.component';
import { TestingComponent }           from './routes/testing/testing.component';
import { WelcomeComponent }           from './routes/welcome/welcome.component';
import { VerifyAccountComponent }     from './routes/verify-account/verify-account.component';
import { WalletCardComponent }        from './routes/wallet-card/wallet-card.component';
import { ProfileSettingsComponent }   from './routes/profile-settings/profile-settings.component';
import { AddressChangeComponent }     from './routes/profile-settings/address-change/address-change.component';
import { ContactComponent }           from './routes/contact/contact.component';
import { ClaimsComponent }            from './routes/claims/claims.component';
import { InformationComponent }       from './routes/information/information.component';
import { LinkPolicyComponent } from './components/dashboard-add-policy/link-policy/link-policy.component';

const appRoutes: Routes = [
  { path: 'forgotpassword/:emailPrefill', component: ForgotPasswordComponent },
  { path: 'createpassword', component: CreateNewPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:parm', component: SignupProcessComponent},
  { path: 'testing', component: TestingComponent },
  { path: 'verifyaccount', component: VerifyAccountComponent},
  // { path: 'verifyaccount', component: VerifyAccountComponent, canActivate: [VerifyUserGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'walletcard', component: WalletCardComponent},

  //when logged in
  { path: 'my-insurance', component: AccountMainComponent,
    children: [
      { path: '',  component: DashboardHomeComponent},
      { path: 'link-policy',  component: LinkPolicyComponent},
      { path: ':policyid',
        children: [
          {path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: PolicyDetailsComponent },
          { path: 'billing', component: BillingDetailsComponent },
          { path: 'documents', component: DocumentDetailsComponent },
        ]
      },
    ]
  },
  { path: 'profile', component: ProfileSettingsComponent, children: [
    { path: '', component: ProfileMainComponent },
    { path: 'edit-phone', component: ProfilePhoneComponent},
    { path: 'add-phone', component: ProfilePhoneComponent},
    { path: 'edit-checking-account', component: ProfileCheckingAccountComponent},
    { path: 'add-checking-account', component: ProfileCheckingAccountComponent},
    { path: 'change-address/:address-type', component: AddressChangeComponent},
    { path: 'enter-password', component: ProfileEditPasswordComponent },
    { path: 'verify-password', component: ProfileEditEmailComponent },
    { path: 'edit-email', component: ProfileEditEmailComponent },
    { path: 'edit-password' , component: ProfileEditPasswordComponent },
    { path: 'email-confirmation' , component: ProfileEmailConfirmComponent}
  ] },
  { path: 'claims', component: ClaimsComponent, children: [
    { path: '', redirectTo: 'active', pathMatch: 'full' },
    { path: 'active', component: ClaimsHomeComponent },
    { path: 'closed', component: ClaimsHomeClosedComponent },
    { path: ':claimid', children: [
      {path: '', redirectTo: 'details', pathMatch: 'full'},
      { path: 'details', component: ClaimsDetailComponent },
    ] }
  ] },

  { path: 'billing', component: BillingComponent , children: [
    { path: '', component: BillingMainComponent },
    { path: 'new-payment/:policyid', component: BillingNewpaymentComponent}
  ] },

  { path: 'information', component: InformationComponent,  children: [
    { path: '', component: InformationHomeComponent },
    { path: 'products', component: InformationProductsComponent },
    { path: 'about', component: InformationAboutComponent },
    { path: 'discounts', component: InformationDiscountsComponent },
    { path: 'renewal', component: InformationRenewalComponent },
    { path: 'cancel', component: InformationCancelComponent },
    { path: 'legal', component: InformationLegalComponent },

  ] },
  { path: 'contact', component: ContactComponent },
  { path: 'policy/add', component: DashboardComponent },
  { path: 'offline', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule {}
