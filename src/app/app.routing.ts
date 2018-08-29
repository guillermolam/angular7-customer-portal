// ---- Packages | Helpers ---- //
import { Routes, RouterModule,  }     from "@angular/router";
import { NgModule }                   from "@angular/core";
import { AuthGuard }                  from "./_guards/auth.guard";

// ----- Routes ----- //
import { DashboardComponent }         from './routes/dashboard/dashboard.component';
import { DesignSystemComponent }      from './routes/design-system/design-system.component';
import { ForgotPasswordComponent }    from "./routes/forgot-password/forgot-password.component";
import { CreateNewPasswordComponent } from "./routes/create-new-password/create-new-password.component";
import { LoginComponent }             from "./routes/login/login.component";
import { SignupComponent }            from "./routes/signup/signup.component";
import { SignupProcessComponent }     from "./routes/signup/signup-process/signup-process.component";
import { TestingComponent }           from "./routes/testing/testing.component";
import { WelcomeComponent }           from "./routes/welcome/welcome.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "design-system", component: DesignSystemComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
  { path: "createpassword", component: CreateNewPasswordComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "signup/:parm", component: SignupProcessComponent },
  { path: "testing", component: TestingComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "**", redirectTo: "" } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}

