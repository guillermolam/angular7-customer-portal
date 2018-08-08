import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-card',
  templateUrl: './mapfre-card.component.html',
  styleUrls: ['./mapfre-card.component.scss']
})
export class MapfreCardComponent implements OnInit {
  @Input() additionalClasses:             string;
  @Input() singleCard:                    boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
