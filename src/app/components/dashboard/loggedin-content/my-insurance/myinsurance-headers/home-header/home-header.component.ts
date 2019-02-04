import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  @Input() policy:            object;
  constructor() { }

  ngOnInit() {
  }

}
