import { Component, OnInit }        from '@angular/core';
import { TestingDataService }       from '../../../_helpers/testing-data.service';


@Component({
  selector: 'app-claims-home',
  templateUrl: './claims-home.component.html',
  styleUrls: ['./claims-home.component.scss']
})
export class ClaimsHomeComponent implements OnInit {
  claims;

  constructor(
    private testingData: TestingDataService
  ) { }

  ngOnInit() {
    this.claims = this.testingData.testDataClaims();
    console.log('claims', this.claims);
  }

}
