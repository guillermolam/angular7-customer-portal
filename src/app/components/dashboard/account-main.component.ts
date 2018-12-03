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

  reportClaim: boolean=true;

  constructor(
    private router:               Router
  ){

  }

  ngOnInit(){

    this.router.events.subscribe((event)=>{
      
      if(event instanceof NavigationEnd){
        // console.log(event.url);
        if(event.url === '/my-insurance'){
          console.log(this.router.url + 'true');
          this.reportClaim = true;
        }else {
          console.log(this.router.url + 'false');
          this.reportClaim = false;
          console.log(this.reportClaim);
        }
      }
    });
  }
}
