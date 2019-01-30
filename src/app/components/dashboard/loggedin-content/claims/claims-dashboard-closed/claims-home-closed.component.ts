import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TestingDataService } from '../../../../../_helpers/testing-data.service';


@Component({
  selector: 'app-claims-home-closed',
  templateUrl: './claims-home-closed.component.html',
  styleUrls: ['./claims-home-closed.component.scss']
})
export class ClaimsHomeClosedComponent implements OnInit {
  claims;

  constructor(
    private testingData: TestingDataService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

}
