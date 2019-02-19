import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-policy-type',
  templateUrl: './no-policy-type.component.html',
  styleUrls: ['./no-policy-type.component.scss']
})
export class NoPolicyTypeComponent implements OnInit {
  @Input() claim;
  @Input() type: string = 'header';
  @Input() claimid;

  constructor() { }

  ngOnInit() {
  }

}
