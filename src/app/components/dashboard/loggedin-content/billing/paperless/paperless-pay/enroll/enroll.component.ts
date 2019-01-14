import { Component, OnInit }      from '@angular/core';
import { EnrollEftEpayService }   from '../../../../../../../_services/forms/enroll-eft-epay/enroll-eft-epay.service'
import { UserService }            from '../../../../../../../_services/user.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
  providers:    [ EnrollEftEpayService ]
})
export class PaperlessPayEnrollComponent implements OnInit {
  inputs:                         any[];
  user:                           any;

  constructor(
    service:                      EnrollEftEpayService,
    private userService:          UserService
    ) {
    this.inputs = service.getInputs();
  }

  ngOnInit() {
    this.userService.$user.subscribe( (user) => {
      this.user = user;
    });
  }

}
