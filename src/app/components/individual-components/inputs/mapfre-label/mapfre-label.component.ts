import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-label',
  templateUrl: './mapfre-label.component.html',
  styleUrls: ['./mapfre-label.component.scss'],
})
export class MapfreLabelComponent implements OnInit {
  @Input() forInput: string;

  constructor() { }

  ngOnInit() {
  }

}
