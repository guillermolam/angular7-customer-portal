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
            component: PolicyDetailsComponent,
          },
          {
            path: 'documents',
            component: PolicyDetailsComponent,
          },
        ]
      }
    ]
  },
  { path: 'billing', component: DashboardComponent },
  { path: 'claims', component: DashboardComponent },
  { path: 'information', component: DashboardComponent },
  { path: 'contact', component: DashboardComponent },
  { path: 'profile', component: DashboardComponent },
  { path: 'policy/addpolicy', component: DashboardComponent },
  { path: 'contact', component: DashboardComponent },
  { path: 'offline', component: DashboardComponent },
  { path: '**', redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})

export class RoutingModule {}
