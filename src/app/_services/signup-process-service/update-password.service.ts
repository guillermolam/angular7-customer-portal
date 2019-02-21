import { AlertService } from 'mapfre-design-library';
import { Injectable } from '@angular/core';
import { ValidateEmailService } from './validate-email.service';
import { CreateUserMongoService } from './create-user-mongo.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdatePasswordService {

  constructor(
    private validateEmailService: ValidateEmailService,
    private createUserMongoService: CreateUserMongoService,
    private alertService: AlertService,
    private router: Router
  ) { }


  createLocalStorageUser(accessToken, email, password){
    this.validateEmailService.checkActiveEmail(email, JSON.parse(accessToken).access_token.access_token).subscribe(()=>{
      localStorage.setItem('currentUser', accessToken);
      this.router.navigate([`/my-insurance`]);
    },
    (err)=>{
      if (err.status === 400){
        this.router.navigate(['/signup','validate-email']);
      } else if(err.status === 404){
        localStorage.setItem('currentUser', accessToken);
        this.alertService.success('Successful Login', true);
        this.router.navigate([`/my-insurance`]);
        this.createUserMongoService.createMongoUser(email, password).subscribe(
          ()=>{
            
          }
        , (err)=>{

        })
      }
    }
   )
  }


}
