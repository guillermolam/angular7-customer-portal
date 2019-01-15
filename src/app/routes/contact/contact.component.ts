import { Component, OnInit }      from '@angular/core';
import { PolicyDataService }      from './../../_services/my-insurance/data-services/policy-data.service';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  policies:                       any;

  constructor(
    private policyDataService:    PolicyDataService,
    private userService:          UserService,
  ) { }

  ngOnInit() {
    this.policyDataService.$policyDetails
    .subscribe(
      (policyDetails) => {
        this.policies = policyDetails;
      }
    );
  }


}
