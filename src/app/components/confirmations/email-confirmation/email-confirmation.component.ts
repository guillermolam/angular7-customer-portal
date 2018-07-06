import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {
  @Input() emailSentTo: string;

  constructor() { }

  ngOnInit() {
    console.log(this.emailSentTo);
  }

}
