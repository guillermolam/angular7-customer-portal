import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-link',
  templateUrl: './mapfre-link.component.html',
  styleUrls: ['./mapfre-link.component.scss']
})
export class MapfreLinkComponent implements OnInit {
  @Input() icon: boolean;
  @Input() additionalClasses: string;
  @Input() iconClasses: string;
  @Input() target: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
