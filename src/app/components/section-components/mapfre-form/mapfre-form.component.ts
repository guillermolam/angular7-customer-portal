import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mapfre-form',
  templateUrl: './mapfre-form.component.html',
  styleUrls: ['./mapfre-form.component.scss']
})
export class MapfreFormComponent implements OnInit {
  @Input() formName:        any;
  @Input() submitFunction:  any;
           validForm:       any;

  constructor() { }

  ngOnInit() {
    this.validForm = this.formName.valid;
  }

}
