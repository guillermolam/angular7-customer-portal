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
    if (currentUser && currentUser.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access_token.access_token}`,
        },
      });
    }

    return next.handle(request).pipe(catchError((error) => {
      // console.log(error);
      if(error.status == 401 || error.status == 500){
        this.router.navigate(['/login']);
      }
      return of(error);
    }) as any)
  }
}
