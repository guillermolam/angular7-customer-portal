import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent implements OnInit {

  components = [
    {
      "url": '#mapfre-card' ,
      "name": "Card"
    },
    {
      "url": '#mapfre-link' ,
      "name": "Link"
    },
    {
      "url": '#mapfre-icon' ,
      "name": "Icon",
    },
    {
      "url": "#mapfre-code",
      "name": "code-block"
    },
    {
      "url": "#mapfre-alert",
      "name": "alert"
    },
    {
      "url": "#mapfre-button",
      "name": "button"
    },
    {
      "url": "#mapfre-switch",
      "name": "switch"
    },
    {
      "url": "#mapfre-input-validation",
      "name": "Input with validation"
    }
  ]

  exampleObject = [{
    key: 'example',
    additionalClasses: 'form-control',
    label: 'Example Email',
    required: true,
    type: 'email'
  }]
  

  constructor() { }

  ngOnInit() {
  }

}
