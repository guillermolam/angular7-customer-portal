import { Component, OnInit, Input } from '@angular/core';
import { Observable }               from 'rxjs';

import { User }                     from '../../../../_models/user';

@Component({
  selector: 'app-email-use-screen',
  templateUrl: './email-use-screen.component.html',
  styleUrls: ['./email-use-screen.component.scss']
})
export class EmailUseScreenComponent implements OnInit {
  @Input() userData:              any;
  userEmail:                      string;

  constructor() { }

  ngOnInit() {
    this.userEmail = this.userData.email;
  }

}
