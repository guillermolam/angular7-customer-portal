import { AlertService } from 'mapfre-design-library';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../../../../_services/profile-settings/user-details.service';
import { UserService } from '../../../../_services/user.service';
import { TestingDataService } from '../../../../_helpers/testing-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading:       boolean;

  constructor(
    private userDetailsService: UserDetailsService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userDetailsService.getUserDetailsByEmail().subscribe(()=>{
      this.loading = false;
    });
  }
}
