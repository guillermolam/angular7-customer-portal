import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../_models/user';

@Component({
  selector: 'app-onboarding-wallet-back-list',
  templateUrl: './onboarding-wallet-back-list.component.html',
  styleUrls: ['./onboarding-wallet-back-list.component.scss']
})
export class OnboardingWalletBackListComponent implements OnInit {
  @Input() userData:                        User;

  constructor() { }

  ngOnInit() {
  }

}
