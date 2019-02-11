import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { AlertService }             from 'mapfre-design-library';
import { AuthenticationService }    from '../../_services/_iam/authentication-service.service';
import { User }                     from '../../_models/user';
import { UserService }              from '../../_services/user.service';
import { ClientCredentialsService } from '../../_services/client-credentials/client-credentials.service';
import { ClientCredentialsTokenService } from '../../_services/client-credentials/client-credentials-token.service';

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
    private clientCredentialsService:   ClientCredentialsService,
    private clientCredentialsTokenService: ClientCredentialsTokenService

  ) { }

  validateToken(email: string, token: string) {
    if (!email || !token) {
      return null;
    }
    return this.authService
      .verifyAccountTokenVerification(token, email)
      .subscribe(
        (data) => {
          this.alertService.success('Thank You for validating you account!', true);
          this.router.navigate(['login']);
        }
      );
  }

  ngOnInit() {

    if(!this.clientCredentialsTokenService.getToken()){
      this.clientCredentialsService.getToken().subscribe(()=>{
        this.userService.$user.subscribe(
          (user) => {
            this.user = user;
          }
        );
        this.activatedRoute.queryParams
          .subscribe( (params) => {
            if ( params ) {
              if ( this.user == undefined ) {
                this.user = params;
              }
              return this.validateToken( params.email, params.token );
            }
          }
        );
      });
    }

 
  }
}
