import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/_iam/authentication-service.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],

})
export class TestingComponent implements OnInit {

  jsonResponse: any = {};

  constructor(private authService: AuthenticationService){

  }
  
  ngOnInit() {
    this.authService.verifyAccountTokenVerification('2dbabdda8aa9f7aba8a80b75c5bd63e1', 'testMfre@gmail.com')
    .subscribe((response) => {
      console.log(this.jsonResponse);
      this.jsonResponse = response;
    });
  }




 }
