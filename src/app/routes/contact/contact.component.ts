import { Component, OnInit }      from '@angular/core';
import { PolicyDataService }      from './../../_services/my-insurance/data-services/policy-data.service';
import { User }                   from '../../_models/user';
import { UserService }            from '../../_services/user.service';
import { PolicyDetailsService }   from '../../_services/my-insurance/policy-details.service';
import { StorageServiceObservablesService } from './../../_services/storage-service-observables/storage-service-observables.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loading:                        boolean;

  constructor(
   
  ) { }

  ngOnInit() {
    
  }
}
