import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mapfre-button',
  templateUrl: './mapfre-button.component.html',
  styleUrls: ['./mapfre-button.component.scss']
})
export class MapfreButtonComponent implements OnInit {
  @Input() additionalClasses:                   string = 'basic primary';
  @Input() buttonCopy:                          string;
  @Input() disabledValue:                       boolean;
  @Input() iconClasses:                         string;
  @Input() iconFamily:                          string;
  @Input() inputType:                           string;
  @Input() modalId:                             string;
  @Input() modalFunctionId:                     string;
  @Input() screenReader:                        boolean = false;
  @Input() showIcons:                           boolean = false;
  @Input() translateValue:                      string;

  constructor(
    private activeRoute:                        ActivatedRoute,
    private router:                             Router,
  ) {}

  public moreCSSClasses(classes: string): boolean{
    let check;
    if(classes != undefined) {
      check = true;
    }
    else {
      check = false;
    }
    return check;
  } 


  isFormValid(): boolean{
    if(this.disabledValue == undefined){
      return true;
    }
    else {
      return this.disabledValue;
    }
  }
  ngOnInit() {

  }
}
