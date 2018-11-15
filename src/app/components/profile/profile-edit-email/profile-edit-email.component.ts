import { Component, OnInit } from '@angular/core';
import { EditPasswordService } from '../../../_services/forms/profile-settings/edit-password.service';
import { User } from 'mapfre-design-library';

@Component({
  selector: 'app-profile-edit-email',
  templateUrl: './profile-edit-email.component.html',
  styleUrls: ['./profile-edit-email.component.scss'],
  providers: [EditPasswordService]
})
export class ProfileEditEmailComponent implements OnInit {

  verifyPassword: any[];
  user: User = {};

  constructor(
    private editPasswordService: EditPasswordService
  ) { }

  ngOnInit() {
    this.verifyPassword = this.editPasswordService.getInputs('changePassword');
  }

}
