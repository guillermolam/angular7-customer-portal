import { UserInfoService } from './../../_services/_userinformation/user-info.service';
import { Component, OnInit }      from '@angular/core';
import { Router, NavigationEnd }                 from '@angular/router';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';
import { AuthenticationService }  from '../../_services/_iam/authentication-service.service';
import { TestingDataService }     from './../../_helpers/testing-data.service';


@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {

  reportClaim: boolean = true;

  constructor(
    private router:               Router
  ){

  }

  ngOnInit(){

    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        if(this.router.url === '/my-insurance'){
          this.reportClaim = true;
        }else {
          this.reportClaim = false;
        }
      }
    });
  }
}
