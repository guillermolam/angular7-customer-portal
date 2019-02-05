import { Component, OnInit } from '@angular/core';
import { Location }                       from '@angular/common';


@Component({
  selector: 'app-signup-bop',
  templateUrl: './signup-bop.component.html',
  styleUrls: ['./signup-bop.component.scss']
})
export class SignupBopComponent implements OnInit {

  constructor(
    private location:                   Location
  ) { }

  ngOnInit() {
  }

  goBackAPage(){
    this.location.back();
  }


}
