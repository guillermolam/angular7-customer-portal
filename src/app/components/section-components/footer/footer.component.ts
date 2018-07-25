import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapfre-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year:         number;
  constructor() { }

  ngOnInit() {
    this.year = 2018;
  }

}