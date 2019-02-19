import { Component, OnInit }  from '@angular/core';
import { ClaimsDataService }  from '../../../../../_services/_claims/claims-data.service';
import { UserService }        from '../../../../../_services/user.service';
import { TestingDataService } from '../../../../../_helpers/testing-data.service';

@Component({
  selector: 'app-claims-home',
  templateUrl: './claims-home.component.html',
  styleUrls: ['./claims-home.component.scss']
})
export class ClaimsHomeComponent implements OnInit {
  claims:       any;
  claimsObject: boolean;
  loading:      boolean;
  
  constructor(
    private claimsDataService: ClaimsDataService,
    private userService: UserService,
    private testing: TestingDataService
  ) { }

  ngOnInit() {
    this.loading =                  true;
    this.claimsDataService.$claimsLossDetails
      .subscribe((claimsLossDetails) => {
        this.claimsObject = true;
        this.claims = claimsLossDetails;
        this.loading = false;
      },
      (err) => {
        this.claimsObject = false;
        this.claims = false;
        this.loading = false;
      });

    console.log( 'claims object this will be removed', this.claims, 'this.claimsObject', this.claimsObject );
  }
}
