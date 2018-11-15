import { EditPhoneService } from './../../../_services/forms/profile-settings/edit-phone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html',
  styleUrls: ['./profile-phone.component.scss'],
  providers: [EditPhoneService]
})
export class ProfilePhoneComponent implements OnInit {

  accountPhoneForm: any[];

  constructor(
    private editPhoneService: EditPhoneService
  ) { }

  ngOnInit() {
    this.accountPhoneForm = this.editPhoneService.getInputs();
  }
}
