import { Component, OnInit, Input }      from '@angular/core';
import { User }                   from '../../../_models/user';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent implements OnInit {
  @Input() user:                           User;

  constructor(
   
  ) { }

  ngOnInit() {

  }

}
