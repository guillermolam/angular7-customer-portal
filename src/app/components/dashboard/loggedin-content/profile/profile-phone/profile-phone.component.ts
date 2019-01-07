import { FakeAccountSettings } from '../../../../../_helpers/_testing-helpers/_services/_testing-helpers/account-settings.model';
import { ActivatedRoute } from '@angular/router';
import { EditPhoneService } from '../../../../../_services/forms/profile-settings/edit-phone.service';
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

  constructor(
    private editPhoneService: EditPhoneService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {    
    this.editPhoneService.getInputs().subscribe((eidtPhoneResponse)=>{
      this.accountPhoneForm = eidtPhoneResponse;
    });
    this.whereInTheProcess = this.activatedRoute.snapshot.routeConfig.path;
  }
}
