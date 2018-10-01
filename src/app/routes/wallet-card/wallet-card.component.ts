import { Component, OnInit } from '@angular/core';
import { WalletCardService } from '../../_services/_iam/wallet-card.service';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';

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
    this.route.queryParams.subscribe((params)=>{
      this.walletCardService.generatePkPass(params.email).subscribe((byteArray)=>{
        console.log(byteArray);
        let blob = new Blob([byteArray], {type: 'arrayBuffer'});
        saveAs(blob,'policy.pkpass');
      });
    })
  }



}
