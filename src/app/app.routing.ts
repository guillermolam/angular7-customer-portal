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
import { InformationAboutComponent } from './components/information/information-about/information-about.component';
import { InformationDiscountsComponent } from './components/information/information-discounts/information-discounts.component';
import { InformationRenewalComponent } from './components/information/information-renewal/information-renewal.component';
import { InformationCancelComponent } from './components/information/information-cancel/information-cancel.component';
import { InformationLegalComponent } from './components/information/information-legal/information-legal.component';
import { ClaimsDetailComponent }      from './components/claims/claims-detail/claims-detail.component';
import { ClaimsHomeComponent }        from './components/claims/claims-dashboard-active/claims-home.component';
import { ClaimsHomeClosedComponent } from './components/claims/claims-dashboard-closed/claims-home-closed.component';
// ----- Routes ----- //
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
import { PolicyDetailsComponent }     from './routes/my-insurance/policy-details/policy-details.component';
import { ProfileSettingsComponent }   from './routes/profile-settings/profile-settings.component';
import { BillingDetailsComponent }    from './routes/my-insurance/billing-details/billing-details.component';
import { DocumentDetailsComponent }   from './routes/my-insurance/document-details/document-details.component';
import { AddressChangeComponent }     from './routes/profile-settings/address-change/address-change.component';
import { ContactComponent }           from './routes/contact/contact.component';
import { ClaimsComponent }            from './routes/claims/claims.component';
import { InformationComponent }       from './routes/information/information.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'createpassword', component: CreateNewPasswordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/:parm', component: SignupProcessComponent},
  { path: 'testing', component: TestingComponent },
  { path: 'verifyaccount', component: VerifyAccountComponent, canActivate: [VerifyUserGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'walletcard', component: WalletCardComponent},

  //when logged in
  { path: 'my-insurance',
    children: [
      { path: '',  component: DashboardComponent},
      { path: ':policyid',
        children: [
          {path: '', redirectTo: 'details', pathMatch: 'full' },
          { path: 'details', component: PolicyDetailsComponent },
          { path: 'billing', component: BillingDetailsComponent },
          { path: 'documents', component: DocumentDetailsComponent },
        ]
      }
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
    { path: 'edit-email', component: ProfileEditEmailComponent },
    { path: 'edit-password' , component: ProfileEditPasswordComponent }

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
  { path: 'information', component: InformationComponent,  children: [
    { path: '', component: InformationHomeComponent },
    { path: 'products', component: InformationProductsComponent },
    { path: 'about', component: InformationAboutComponent },
    { path: 'discounts', component: InformationDiscountsComponent },
    { path: 'renewal', component: InformationRenewalComponent },
    { path: 'cancel', component: InformationCancelComponent },
    { path: 'legal', component: InformationLegalComponent },

  ] },
  { path: 'billing', component: DashboardComponent },
  
  { path: 'information', component: InformationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policy/add', component: DashboardComponent },
  { path: 'offline', component: DashboardComponent },
  { path: '**', redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule {}
