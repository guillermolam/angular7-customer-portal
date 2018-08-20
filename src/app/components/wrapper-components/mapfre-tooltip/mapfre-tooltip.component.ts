import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-tooltip',
  templateUrl: './mapfre-tooltip.component.html',
  styleUrls: ['./mapfre-tooltip.component.scss']
})
export class MapfreTooltipComponent implements OnInit {
  @Input() additionalClasses:     string;
  @Input() linkCopy:              string;
  @Input() toolTipPlacement:      string;
  @Input() typeOfToolTip:         string;

  constructor() { }

  ngOnInit() {
  }

}
