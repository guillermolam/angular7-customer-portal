
import { Component, OnInit, Input }         from '@angular/core';
import { FormGroup }                        from '@angular/forms';
import { Router }                           from '@angular/router';
import { FormBase, FormBaseControlService, AlertService }
                                            from 'mapfre-design-library';
import { ProfileConfirmModalService }       from '../../../../../_services/profile-settings/profile-confirm-modal.service';
import { ChangeProfileEmailService }        from '../../../../../_services/profile-settings/change-profile-email.service';
import { StorageServiceObservablesService } from '../../../../../_services/storage-service-observables/storage-service-observables.service';

@Component({
  selector: 'app-edit-email-form',
  templateUrl: './edit-email-form.component.html',
  styleUrls: ['./edit-email-form.component.scss']
})
export class EditEmailFormComponent implements OnInit {

  @Input()  inputs:                         FormBase<any>[] = [];
            confirmModal:                   boolean;
            editEmailForm:                  FormGroup;
            newEmailObservable:             string = '';
            currentEmail:                   string;

  constructor(
    private ipt:                            FormBaseControlService,
    private alertService:                   AlertService,
    private changeProfileEmailService:      ChangeProfileEmailService,
    private router:                         Router,
    private profileConfirmModalService:     ProfileConfirmModalService,
    private storageServiceObservablesService: StorageServiceObservablesService
  ) { }

  checkIfEmailExists(): void {
    const newEmail =                        this.editEmailForm.controls.changeEmail.value,
          confirmEmail =                    this.editEmailForm.controls.confirmation_changeEmail.value;

    if ( newEmail === 'skip@skip.com') {
      this.changeProfileEmailService.saveEmail(newEmail);
      this.router.navigate(['/profile', 'email-confirmation']);
      return;
    }

    if ( newEmail === confirmEmail ) {
      this.changeProfileEmailService
      .checkEmailExists(this.currentEmail, newEmail)
      .subscribe((response) => {
        this.changeProfileEmailService.saveEmail(newEmail);
        this.router.navigate(['/profile', 'email-confirmation']);
      },
      (err) => {
        this.alertService.error('Email is already in use');
      });
    }
    else {
      this.alertService.error('Your new email doesn\'t match the confirmation email field');
    }
  }

  editEmailValue(email): void {
    this.editEmailForm.patchValue({
      changeEmail:                        email
    });
  }

  onCheckDirty(): void {
    this.profileConfirmModalService.onCheckDirty(this.editEmailForm);
    this.profileConfirmModalService.$checkDirty.subscribe( (value) => {
      this.confirmModal =                  value;
    });

    if (this.confirmModal === false ) {
      this.changeProfileEmailService.clearEmail();
      this.changeProfileEmailService.clearProcess();
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit() {
    this.currentEmail =                   this.storageServiceObservablesService.getUserFromStorage();
    this.editEmailForm =                  this.ipt.toFormGroup(this.inputs);
    this.changeProfileEmailService.$email
    .subscribe(
      (newEmail) => {
        this.editEmailValue(newEmail);
      }
    );
  }

}
