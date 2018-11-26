import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claims-home-car',
  templateUrl: './claims-home-car.component.html',
  styleUrls: ['./claims-home-car.component.scss']
})
export class ClaimsHomeCarComponent implements OnInit {
  @Input() claim;
  constructor() { }

  ngOnInit() {
  }

}
