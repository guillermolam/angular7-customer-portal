import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mapfre-icon',
  templateUrl: './mapfre-icon.component.html',
  styleUrls: ['./mapfre-icon.component.scss']
})
export class MapfreIconComponent implements OnInit {
  @Input() iconClasses: string;
  @Input() title: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
