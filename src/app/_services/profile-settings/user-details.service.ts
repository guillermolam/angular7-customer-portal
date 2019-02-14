import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserDataService } from './../data-services/user-data.service';
import { StorageServiceObservablesService } from './../storage-service-observables/storage-service-observables.service';
import { BankAccountService } from './bank-account.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(
    private http:             HttpClient,
    private bankAccountService: BankAccountService,
    private storageServiceObservablesService: StorageServiceObservablesService,
    private userDataService: UserDataService
  ) { }

  getUserDetailsByEmail() {
    const email = this.storageServiceObservablesService.getUserFromStorage();
    const url =  `${environment.backend_server_url_identity}/${email}`;

    return forkJoin(
      this.http.get(url),
      this.bankAccountService.getBankAccountByEmail(email)
      ).pipe(map(([userResponse, bankAccountResponse])=>{
        const response = {
          userDetails:                  {...userResponse},
          bankAccountDetails:           {...bankAccountResponse}
        };
        this.userDataService.updateUserDetails(response);
      })
    );
  }

}
