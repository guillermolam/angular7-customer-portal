import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map }        from 'rxjs/operators';
import { throwError }             from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateEmailService {

  backend:string = environment.backend_server_cu;

  constructor(
    private http:HttpClient
  ) {
   }

   checkActiveEmail(email: string){
    const url = `${this.backend}/customers/accounts/check-customer?email=${email}`;  
    return this.http.get(url)
      .pipe(
      map((info: any) => info),
      catchError( (error) => throwError(error))
    );
   }

}
