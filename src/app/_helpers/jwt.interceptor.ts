import { AlertService } from 'mapfre-design-library';
import { HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest }  from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ClientCredentialsTokenService } from '../_services/client-credentials/client-credentials-token.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  constructor(
    private router: Router,
    private clientCredentialsTokenService: ClientCredentialsTokenService,
    private alertService: AlertService){

  }


  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const clientCredToken = this.clientCredentialsTokenService.getToken();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const searchString = 'grant_type';
    if(request.urlWithParams.search(searchString)==-1){
     if (currentUser) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.access_token.access_token}`,
          },
        });
      } 
      else if(clientCredToken){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${clientCredToken}`,
          },
        });
      }
    }

    return next.handle(request)
    .pipe(catchError((e) => {
      if((e.status == 0)){
        this.router.navigate(['/login']);
      }
        return throwError(e);
    }))
  }
}
