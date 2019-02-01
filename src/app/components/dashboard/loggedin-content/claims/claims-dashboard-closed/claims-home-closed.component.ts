import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claims-home-closed',
  templateUrl: './claims-home-closed.component.html',
  styleUrls: ['./claims-home-closed.component.scss']
})
export class ClaimsHomeClosedComponent implements OnInit {
  claims;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

}
