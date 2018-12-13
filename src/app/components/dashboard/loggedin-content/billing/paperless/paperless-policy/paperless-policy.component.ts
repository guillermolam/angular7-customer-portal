import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paperless-policy',
  templateUrl: './paperless-policy.component.html',
  styleUrls: ['./paperless-policy.component.scss']
})
export class PaperlessPolicyComponent implements OnInit {

  constructor() { }
  
  enroll(): void {
    console.log('Enroll button pressed');
  }

  ngOnInit() {
  }

}
