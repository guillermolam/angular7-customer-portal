import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.scss']
})
export class CarHeaderComponent implements OnInit {
  @Input() policy:          object;
  constructor() { }

  ngOnInit() {
  }

}
