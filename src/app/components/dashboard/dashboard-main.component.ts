import { Component, OnInit }      from '@angular/core';
import { Router, NavigationEnd }                 from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  reportClaim: boolean=true;

  constructor( private router: Router ){}

  ngOnInit() {

    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        // console.log(event.url);
        if(event.url === '/my-insurance'){
          this.reportClaim = true;
        }
        else {
          this.reportClaim = false;
        }
      }
    });
  }
}
