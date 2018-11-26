import { ProfileSettingsRoutingService } from './../../_services/profile-settings/profile-settings-routing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showAlert: boolean;

  constructor(
    private profileRoutingService: ProfileSettingsRoutingService
  ) { }

  ngOnInit() {
    this.showAlert = this.profileRoutingService.getChangePasswordAlert();
  }

}
