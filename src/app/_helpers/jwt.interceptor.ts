import { HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest }  from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access_token.access_token}`,
        },
      });
    }

    return next.handle(request);
  }
}
