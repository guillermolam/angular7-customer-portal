import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestingDataService }     from './../../_helpers/testing-data.service';
import { UserService }            from './../../_services/user.service';

@Component({
  selector: 'app-claims-wrapper',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsWrapperComponent implements OnInit {
  claims:                         any;
  classForPage:                   string;

  constructor(
    private testingData:          TestingDataService,
    private activateRouter:       ActivatedRoute,
    private router:               Router,
    private userService:          UserService
  ) { }

  checkRoute(): void {
    let page;
    if (this.router.url == '/claims/active' || this.router.url == '/claims/closed'){
      page = 'claims';
    }
    else {
      page = 'claim-detail';
    }
    this.classForPage = page;
  }

  ngOnInit() {
    this.checkRoute();
  }

}
