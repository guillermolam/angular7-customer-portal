import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePhoneService {

  constructor(
    private http:HttpClient
  ) { }

  addUpdatePhone(email,phoneNumber){
    // const url = `https://mdv-doctest:8083/customers/accounts/change-phone?email=${email}&phone=${phoneNumber}`;
    const url = `${environment.backend_server_url}/b2c-account-api/change-phone?email=${email}&phone=${phoneNumber}`;
    return this.http.put(url,{});
  }

}
