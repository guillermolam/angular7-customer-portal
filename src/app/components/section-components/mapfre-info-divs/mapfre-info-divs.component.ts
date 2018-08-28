import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-info-divs',
  templateUrl: './mapfre-info-divs.component.html',
  styleUrls: ['./mapfre-info-divs.component.scss']
})
export class MapfreInfoDivsComponent implements OnInit {
  @Input() additionalClasses: string = 'default';
  @Input() iconClasses:       string = 'fas fa-info-circle alert-icon icon-default'
  @Input() type:              string = 'icon';
  
  constructor() { }

  ngOnInit() {
  }

}
