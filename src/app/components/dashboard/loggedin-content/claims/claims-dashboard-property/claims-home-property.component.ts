import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claims-home-property',
  templateUrl: './claims-home-property.component.html',
  styleUrls: ['./claims-home-property.component.scss']
})
export class ClaimsHomePropertyComponent implements OnInit {
  @Input() claim;
  @Input() claimid;
  @Input() exposure;
  @Input() type: string = 'header';
  constructor() { }

  ngOnInit() {

  }

}
