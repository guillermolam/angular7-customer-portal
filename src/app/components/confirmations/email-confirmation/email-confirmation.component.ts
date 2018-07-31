import { Component, EventEmitter, Input, OnInit, Output }     from '@angular/core';
import { User }                         from '../../../_models/user';
import { AuthenticationService }        from '../../../_services/_iam/authentication-service.service';


@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {
  @Input() sendEmailAgain:       string;
  user:                          User;

  @Output() showConfirmation:    EventEmitter<boolean> = new EventEmitter();

  constructor( private authService: AuthenticationService ) { }

  sendEmail(): void{
    this.user =                       new User();
    this.user.email =                 this.sendEmailAgain;
    
    if(this.user.email) {
      this.authService
        .sendEmail(this.user.email)
        .subscribe(
          (data) => {
            //this.showConfirmation.emit(true);
          },
          (error) => {
            console.log(error)
            //this.showConfirmation.emit(true);
            //this.alertService.error(error);
          }
        )
      ;
    }
  }

  goBackToForm(){
    this.showConfirmation.emit(false);
  }

  ngOnInit() {
   
  }

}
