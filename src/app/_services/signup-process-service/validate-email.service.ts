import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map }        from 'rxjs/operators';
import { throwError }             from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateEmailService {

  constructor(
    private http:HttpClient
  ) {
   }

   checkActiveEmail(email: string){
    const url = `${environment.backend_server_url_account}/check-customer?email=${email}`;  
    return this.http.get(url)
      .pipe(
      map((info: any) => info),
      catchError( (error) => throwError(error))
    );
   }


   sendValidationEmail(email: string){
    const url = `${environment.backend_server_url_account}/verify-email?email=${email}`;
    return this.http.get(url);
   }

}
