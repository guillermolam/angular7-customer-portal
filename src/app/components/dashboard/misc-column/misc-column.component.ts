import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-misc-column',
  templateUrl: './misc-column.component.html',
  styleUrls: ['./misc-column.component.scss']
})
export class MiscColumnComponent implements OnInit {
  @Input() paperless: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
