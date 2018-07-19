import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-link',
  templateUrl: './mapfre-link.component.html',
  styleUrls: ['./mapfre-link.component.scss']
})
export class MapfreLinkComponent implements OnInit {
  @Input() additionalClasses:     string;
  @Input() icon:                  boolean;
  @Input() iconClasses:           string;
  @Input() target:                string;
  @Input() url:                   string;

  constructor() { }

  ngOnInit() {
  }

}
