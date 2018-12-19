import { Component, OnInit }      from '@angular/core';
import { EnrollEftEpayService }   from '../../../../../../../_services/forms/enroll-eft-epay/enroll-eft-epay.service'

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
  providers:    [ EnrollEftEpayService ]
})
export class PaperlessPayEnrollComponent implements OnInit {
  inputs: any[];

  constructor(service: EnrollEftEpayService) {
    this.inputs = service.getInputs();
  }

  ngOnInit() {
  }

}
