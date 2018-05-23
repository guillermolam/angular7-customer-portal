import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legacy-login',
  templateUrl: './legacy-login.component.html',
  styleUrls: ['./legacy-login.component.scss']
})
export class LegacyLoginComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log("here we go!");
 
    this.http.get(
      "https://account.mapfreinsurance.com/b2cwebapp/account/loginView?state=MA",
      {
        //headers: {}
      }
    ).toPromise(
    ).then((rsp) => {
      console.log("responded");
      console.log(rsp);
    }).catch((err) => {
      console.log("error");
      console.log(err);
    });
 }

}
