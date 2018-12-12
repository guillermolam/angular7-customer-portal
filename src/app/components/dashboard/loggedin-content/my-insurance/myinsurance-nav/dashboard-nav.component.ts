import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {
  @Input() policyId: string;
  
  constructor() { }

  ngOnInit() {
  }

}
