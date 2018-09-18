import { Component, OnInit }              from "@angular/core";
import { ModalOptions }                   from '../../_models/modal-options';

@Component({
  selector: "app-account-main",
  templateUrl: "./account-main.component.html",
  styleUrls: ["./account-main.component.scss"]
})
export class AccountMainComponent implements OnInit {
  walletDownloadModalOptions: ModalOptions;
  
  constructor() { 
    this.walletDownloadModalOptions = new ModalOptions({
      additionalButtonClasses:        "flat link", 
			animatePosition:                "bottom", 
			buttonCopy:                     "MODAL_WHERE_CAN_I_LINK",
			modalId:                        "helpModal",
			modalTranslateCopy:             "MODAL_WHERE_CAN_I_TITLE",
      typeOfModal:                    "wallet",
      onLoad:                         true
		});
  }

  ngOnInit() {
  }

}
