import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-link-policy',
  templateUrl: './link-policy.component.html',
  styleUrls: ['./link-policy.component.scss']
})
export class LinkPolicyComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // })
  }

}
