import { AlertService } from 'mapfre-design-library';
import { Location } from '@angular/common';
import { ProfileSettingsRoutingService } from '../../../../_services/profile-settings/profile-settings-routing.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { UserDetailsService } from '../../../../_services/profile-settings/user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showAlert: boolean;
  alertValue: any;
  loading:       boolean;


  constructor(
    private router: Router,
    private alertService: AlertService,
    private userDetailsService: UserDetailsService,

  ) { }

  ngOnInit() {

    this.loading = true;

    this.userDetailsService.getUserDetailsByEmail().subscribe(()=>{
    this.loading = false;     
    });

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //       if(this.router.url==='/profile' && this.alertValue){
    //         this.showAlert = true;
    //         setTimeout(()=>{
    //           this.showAlert = false;
    //         },3000);
    //       }else {
    //         this.showAlert = false;
    //       }
    //     } 
    //   });
    }
  }
