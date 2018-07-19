import { Component, HostListener, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'mapfre-modal-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})

export class HelpComponent implements OnInit {
  midHighResolution:    boolean;
  modalOverLay:         boolean;

  @HostListener('window:resize', ['$event']) 
  onResize() {
    this.setUpModalClass();
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
    let modalType = this.detectWindowWidth(window.innerWidth);
    switch (modalType) {
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

  constructor() { }

  ngOnInit() {
    this.setUpModalClass();
  }

}
