import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountMainComponent } from "./account-main/account-main.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./_guards/auth.guard";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
   {path: "dasboard", component: DashboardComponent},

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
