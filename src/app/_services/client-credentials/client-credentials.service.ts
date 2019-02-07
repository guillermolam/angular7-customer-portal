import { Injectable } from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { environment }            from '../../../environments/environment';
import { ClientCredentialsTokenService } from './client-credentials-token.service'
import { catchError, map }        from 'rxjs/operators';
import { throwError }             from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientCredentialsService {

  constructor(
    private http:                  HttpClient,
    private clientCredentialsTokenService: ClientCredentialsTokenService
  ) { }

  getToken(){
    const url =  `${environment.backend_server_url}/auth-client/oauth/token`;
    return this.http.get(url,{
      params: {
        grant_type: `client_credentials`
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .pipe(
        map((accessToken: any) => {
          this.clientCredentialsTokenService.setToken(accessToken.access_token);
        }),
        catchError( (error) => throwError('CLIENT_CREDENTIALS_ERROR'))
      )
    
  }

  

}
