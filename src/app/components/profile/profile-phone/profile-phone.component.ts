import { FakeAccountSettings } from '../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { ActivatedRoute } from '@angular/router';
import { EditPhoneService } from '../../../_services/forms/profile-settings/edit-phone.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-phone',
  templateUrl: './profile-phone.component.html',
  styleUrls: ['./profile-phone.component.scss'],
  providers: [EditPhoneService]
})
export class ProfilePhoneComponent implements OnInit {

  accountPhoneForm: any[];
  whereInTheProcess: string;
  phoneNumber: string;
  user: any;

  constructor(
    private editPhoneService: EditPhoneService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    FakeAccountSettings.getUserData().subscribe((user)=>{
      this.phoneNumber = user.phone;
    })
    this.accountPhoneForm = this.editPhoneService.getInputs();
    this.whereInTheProcess = this.activatedRoute.snapshot.routeConfig.path;
  }
}
