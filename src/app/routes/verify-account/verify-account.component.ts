import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { AlertService }             from '../../_services/alert.service';
import { AuthenticationService }    from '../../_services/_iam/authentication-service.service';
import { User }                     from '../../_models/user';
import { UserService }              from '../../_services/user.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {
  user:                             User;
  
  constructor(
    private activatedRoute:         ActivatedRoute,
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService,
  ) { }

  validateToken(email: string, token: string) {
    if(!email || !token) return null;
    return this.authService.verifyAccountTokenVerification(token, email)
      .subscribe(
        data => {
          this.alertService.success('Thank You for validating you account!');
          this.router.navigate(['login']);
        }
      )
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      user => {
        this.user = user;
      }
    );
    this.activatedRoute.queryParams.subscribe(params => {
      if(params) {
        return this.validateToken( params.email, params.token);
      }
    });
  }
}
