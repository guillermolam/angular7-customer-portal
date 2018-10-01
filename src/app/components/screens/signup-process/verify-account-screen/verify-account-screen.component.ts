import { Component, Input, OnInit } from '@angular/core';
import { User }                     from '../../../../_models/user';

@Component({
  selector: 'app-verify-account-screen',
  templateUrl: './verify-account-screen.component.html',
  styleUrls: ['./verify-account-screen.component.scss']
})
export class VerifyAccountScreenComponent implements OnInit {
  @Input() userEmail:             string;

  constructor() { }

  ngOnInit() {

  }

}
