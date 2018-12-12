import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-sidebar',
  templateUrl: './billing-sidebar.component.html',
  styleUrls: ['./billing-sidebar.component.scss']
})
export class BillingSidebarComponent implements OnInit {

  policy: any;

  constructor() { }

  ngOnInit() {
  }

}
