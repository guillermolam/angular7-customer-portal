import { Component, HostListener, Input, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalOptions } from '../../../_models/modal-options';
import { ModalModule } from 'angular-bootstrap-md';

@Component({
  selector: 'mapfre-modal',
  templateUrl: './mapfre-modal.component.html',
  styleUrls: ['./mapfre-modal.component.scss']
})
export class MapfreModalComponent implements OnInit {
  @Input() modalOptions:                ModalOptions;
  @Input() hideModal:                   boolean;
  helpButtonPositionLeft:               string;
  midHighResolution:                    boolean;
  modalOverLay:                         boolean = true;

  @Output() hideModalOutput:            EventEmitter<boolean> = new EventEmitter();
  @ViewChild ('modal') public modal:    any;

  @HostListener('window:resize', ['$event']) 
  onResize() {
    if(this.modalOptions.typeOfModal == 'header') this.setUpModalClass();
  }

  @HostListener('click', ['$event']) 
  OnClick(){
    this.closeOnInternalButton(this.hideModal);
  }

  constructor( private modalService: ModalModule ) { }

  whereIsTheHelpButton(ref): void {
    if(this.modalOptions.typeOfModal == 'header') {
      let leftPos = ref.clientX - 310;
      this.helpButtonPositionLeft = leftPos.toString() + "px";
    }
  }

  private detectWindowWidth( width: number ): string{
    let modalType: string,
        breakPoints: any[] = [
          [   320, 767, 'lowest' ],
          [   768, 991, 'mid' ],
          [   992, 1980, 'highest' ]
        ]
    ;
    for(let breakPoint of breakPoints) {
      if( width >= breakPoint[0] && width <= breakPoint[1] ){
        modalType = breakPoint[2];
      }
    }
    return modalType;
  }

  private setUpModalClass(): void {
    let modalWidth = this.detectWindowWidth(window.innerWidth);
    switch (modalWidth) {
      case 'lowest':
        this.modalOverLay = true;
        this.midHighResolution = false;
      break;
      case 'mid':
        this.modalOverLay = true;
        this.midHighResolution = true ;
      break;
      case 'highest':
        this.modalOverLay = false;
        this.midHighResolution = true;
      break;
    }
  }

  closeOnInternalButton(hideModal): void {
    if(hideModal) {
      this.modal.hide();
      this.hideModalOutput.emit(false);
    }
  }

  ngOnInit() {
    if(this.modalOptions.typeOfModal == 'header') {
      this.setUpModalClass();
    }
  }

}


