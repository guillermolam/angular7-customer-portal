import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { saveAs }             from 'file-saver';
import { WalletCardService }  from '../../_services/_iam/wallet-card.service';

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss']
})
export class WalletCardComponent implements OnInit {

  constructor(
    private walletCardService: WalletCardService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.walletCardService
      .generatePkPass(params.email)
      .subscribe((byteArray) => {
        const blob = new Blob([byteArray]);
        saveAs(blob, 'policy.pkpass');
      });
    });
  }

}
