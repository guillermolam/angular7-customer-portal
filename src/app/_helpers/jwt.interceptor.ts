import { HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest }  from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  constructor(private router: Router){

  }


  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.current_user) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.current_user.current_user}`,
        },
      });
    }

    return next.handle(request)
    .pipe(catchError((e) => {
      console.log(e);
      if((e.status == 401 && e.error.error === 'Invalid Request')){
        // this.router.navigate(['/login']);
      }
        return throwError(e);     
    }))
  }
}
