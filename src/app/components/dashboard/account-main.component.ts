import { Component, OnInit }      from '@angular/core';
import { Router, NavigationEnd }                 from '@angular/router';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.scss']
})
export class AccountMainComponent implements OnInit {

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
