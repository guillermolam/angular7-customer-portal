import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  constructor(
    private http:             HttpClient,
  ) { }

  getBankAccountByEmail(email) {
    const url = `${environment.backend_server_url_billing}/${email}/bankaccount`;
    return this.http.get(url);
  }

  addBankAccount(email, bankAccountDetails) {
    const url = `${environment.backend_server_url_billing}/${email}/enroll-bankaccount`;
    return this.http.put(url,bankAccountDetails);
  }

  deleteBankAccount(email) {
    const url = `${environment.backend_server_url_billing}/${email}/unenroll-bankaccount`;
    return this.http.post(url,{});

  }

}
