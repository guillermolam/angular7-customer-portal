import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mapfre-button',
  templateUrl: './mapfre-button.component.html',
  styleUrls: ['./mapfre-button.component.scss']
})
export class MapfreButtonComponent implements OnInit {
  @Input() additionalClasses: string;
 // @Input() clickFunction: string;
  @Input() disabledValue: boolean;
  @Input() inputType: string ;
  @Input() translateValue: string

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  isFormValid(){
    if( this.disabledValue ) {
      return true;
    }
    else {
      return false;
    }
  }
  ngOnInit() {
  }
}
