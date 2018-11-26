import { Component, OnInit }    from '@angular/core';
import { TestingDataService }   from './../../_helpers/testing-data.service';
import { UserService }          from './../../_services/user.service';


@Component({
  selector: 'app-claims-wrapper',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsWrapperComponent implements OnInit {
  claims:                   any;

  constructor(
    private testingData: TestingDataService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
