import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mapfre-button',
  templateUrl: './mapfre-button.component.html',
  styleUrls: ['./mapfre-button.component.scss']
})
export class MapfreButtonComponent implements OnInit{
  @Input() additionalClasses:                   string = 'basic primary';
  @Input() buttonCopy:                          string;
  @Input() customIcon:                          string;
  @Input() disabledValue:                       boolean;
  @Input() howManyIconsUsed:                    number;
  @Input() iconClasses:                         string;
  @Input() iconFamily:                          string;
  @Input() inputType:                           string;
  @Input() modalId:                             string;
  @Input() modalFunctionId:                     string;
  @Input() screenReader:                        boolean = false;
  @Input() showIcons:                           boolean = false;
  @Input() showIconsCustom:                     boolean = false;
  @Input() translateValue:                      string;
  iconClassesArray:                             string[] = [this.iconClasses];

  constructor() {}

  public moreCSSClasses(classes: string): boolean{
    let check;
    check = classes != undefined ? true : false;
    return check;
  } 

  isFormValid(): boolean{
    return this.disabledValue == undefined ? true : this.disabledValue;
  }

  checkIconClasses(icons: string): void {
    if( this.howManyIconsUsed == 2 ) {
      this.iconClassesArray = icons.split(',');
    }
  }

  ngOnInit(): void {
    this.iconClassesArray[0]= this.iconClasses;
    this.checkIconClasses(this.iconClasses);
  }
}
