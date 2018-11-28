import { AlertService } from 'mapfre-design-library';
import { Location } from '@angular/common';
import { ProfileSettingsRoutingService } from './../../_services/profile-settings/profile-settings-routing.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showAlert: boolean;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          if(this.router.url==='/profile'){
            this.showAlert = true;
            setTimeout(()=>{
              this.showAlert = false;
            },3000);
          }else {
            this.showAlert = false;
          }
        } 
      });
    }
  }
