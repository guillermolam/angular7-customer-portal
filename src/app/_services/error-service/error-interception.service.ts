import {Injectable}           from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest}
                              from '@angular/common/http';
import { HttpErrorResponse }  from '@angular/common/http';
import { Observable }         from 'rxjs/Observable';
import { ErrorRedirectionService } from './error-redirection.service';
import { environment }        from '../../../environments/environment.prod';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptionService implements HttpInterceptor {

  constructor(
    private errorRedirectionService: ErrorRedirectionService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do (
      (event) => {},
      (err) => {
        if (err instanceof HttpErrorResponse) {
          let status;
          if ( err.status == 0 || err.status == 400 || err.status == 404 ) {
            status = '500';
          }
          else {
            status = err.status;
          }
          if (environment.production  ) {
            if ( req.url.includes('personal-policy-api') && err.status === 500 ) {
              //this.errorRedirectionService.redirect(status);
            }
            else {
              return true;
            }
          }
          else {
            console.error('errr - not in prod so no redirection',  err.status );
          }
        }
    });
  }
}
