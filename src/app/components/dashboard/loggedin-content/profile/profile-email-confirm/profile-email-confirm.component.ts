import { Component, OnInit }                from '@angular/core';
import { Router }                           from '@angular/router';
import { AlertService }                     from 'mapfre-design-library';
import { AuthenticationService }            from '../../../../../_services/_iam/authentication-service.service';
import { ChangeProfileEmailService }        from '../../../../../_services/profile-settings/change-profile-email.service';
import { StorageServiceObservablesService } from '../../../../../_services/storage-service-observables/storage-service-observables.service';
import { UserService }                      from '../../../../../_services/user.service';

@Component({
  selector: 'app-profile-email-confirm',
  templateUrl: './profile-email-confirm.component.html',
  styleUrls: ['./profile-email-confirm.component.scss']
})
export class ProfileEmailConfirmComponent implements OnInit {

  newEmail:                                 string = '';
  oldEmail:                                 string;

  constructor(
    private alertService:                   AlertService,
    private authenticationService:          AuthenticationService,
    private router:                         Router,
    private changeProfileEmailService:      ChangeProfileEmailService,
    private storageService:                 StorageServiceObservablesService,
    private userService:                    UserService
  ) { }

  confirmNewEmail() {
    this.changeProfileEmailService
    .changeAccountEmail(this.oldEmail, this.newEmail)
    .subscribe((success) => {
      this.reSync(this.newEmail);
    });
  }

  cancel(): void {
    this.changeProfileEmailService.clearEmail();
    this.changeProfileEmailService.clearProcess();
    this.router.navigate(['/profile']);
  }

  reSync(email): void {
    this.storageService.setUserStorage(email);
    this.authenticationService
      .getUserDetailsByEmail(email)
      .subscribe(([userResponse, accountResponse]) => {
        this.userService.updateUser(
        [{
          userDetails:              {...userResponse},
          bankAccountDetails:       {...accountResponse}}]
        );
        this.changeProfileEmailService.clearEmail();
        this.router.navigate(['/profile']);
      })
    ;
  }

  ngOnInit() {
    this.oldEmail =                       this.storageService.getUserFromStorage();
    this.changeProfileEmailService.$email
    .subscribe(
      ( emailObject ) => {
        this.newEmail =                   emailObject;
      }
    );
  }
}
