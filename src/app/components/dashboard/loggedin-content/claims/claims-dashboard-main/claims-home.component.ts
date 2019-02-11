import { Component, OnInit }        from '@angular/core';
import { ClaimsDataService }        from '../../../../../_services/_claims/claims-data.service';
import { UserService }              from '../../../../../_services/user.service';

@Component({
  selector: 'app-claims-home',
  templateUrl: './claims-home.component.html',
  styleUrls: ['./claims-home.component.scss']
})
export class ClaimsHomeComponent implements OnInit {
  claims:                           any;
  loading:                          boolean;
  constructor(
    private claimsDataService:      ClaimsDataService,
    private userService:            UserService,
  ) { }

  ngOnInit() {
    this.loading =                  true;
    this.claimsDataService.$claimsLossDetails
    .subscribe( (claimsLossDetails) => {
      this.claims =                 claimsLossDetails;
    });
  }
}
