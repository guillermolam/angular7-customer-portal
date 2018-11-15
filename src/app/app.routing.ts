import { ProfileEditEmailComponent } from './components/profile/profile-edit-email/profile-edit-email.component';

import { ContactComponent } from './routes/contact/contact.component';
import { ClaimsComponent } from './routes/claims/claims.component';
import { InformationComponent } from './routes/information/information.component';
import { ProfileCheckingAccountComponent } from './components/profile/profile-checking-account/profile-checking-account.component';
import { ProfilePhoneComponent } from './components/profile/profile-phone/profile-phone.component';
// ---- Packages | Helpers ---- //
import { Routes, RouterModule,  }     from '@angular/router';
import { NgModule }                   from '@angular/core';

import { AuthGuard }                  from './_guards/auth.guard';
import { SignUpGuard }                from './_guards/signup.guard';
import { VerifyUserGuard }            from './_guards/verify-user.guard';

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
import { ProfileSettingsComponent } from './routes/profile-settings/profile-settings.component';
import { ProfileMainComponent } from './components/profile/profile-main/profile-main.component';
import { BillingDetailsComponent }    from './routes/my-insurance/billing-details/billing-details.component';
import { DocumentDetailsComponent }   from './routes/my-insurance/document-details/document-details.component';
import { ProfileEditPasswordComponent } from './components/profile/profile-edit-password/profile-edit-password.component';

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
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: ':policyid',
        children: [
          {
            path: '',
            redirectTo: 'details',
            pathMatch: 'full',
          },
          {
            path: 'details',
            component: PolicyDetailsComponent,
          },
          {
            path: 'billing',
            component: BillingDetailsComponent,
          },
          {
            path: 'documents',
            component: DocumentDetailsComponent,
          },
        ]
      }
    ]
  },
  { path: 'profile', component: ProfileSettingsComponent, children: [
    { path: '', component: ProfileMainComponent },
    { path: 'change-phone', component: ProfilePhoneComponent},
    { path: 'edit-account', component: ProfileCheckingAccountComponent},
    { path: 'enter-password', component: ProfileEditPasswordComponent },
    { path: 'edit-email', component: ProfileEditEmailComponent },
    { path: 'edit-password' , component: ProfileEditPasswordComponent }
  ] },
  { path: 'billing', component: DashboardComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'information', component: InformationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileSettingsComponent },
  { path: 'policy/addpolicy', component: DashboardComponent },
  { path: 'offline', component: DashboardComponent },
  { path: '**', redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'} )],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule {}
