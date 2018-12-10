import { AlertService } from 'mapfre-design-library';
import { Location } from '@angular/common';
import { ProfileSettingsRoutingService } from '../../../../_services/profile-settings/profile-settings-routing.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showAlert: boolean;
  alertValue: any;


  constructor(
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {


    //can do it better
    this.alertService.getMessage().subscribe((value)=>{
      this.alertValue = value;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          if(this.router.url==='/profile' && this.alertValue){
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