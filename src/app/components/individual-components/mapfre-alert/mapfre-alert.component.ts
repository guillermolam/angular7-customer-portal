import { Component, OnInit, Input } from '@angular/core';

import { AlertService } from "../../../_services/alert.service";

@Component({
  moduleId: module.id,
  selector: 'mapfre-alert',
  templateUrl: './mapfre-alert.component.html',
  styleUrls: ['./mapfre-alert.component.scss']
})
export class MapfreAlertComponent implements OnInit {
  @Input() alertType:   string = 'default';
  @Input() closeButton: boolean = false;
  @Input() nonDynamic:  boolean = false;
           message:     any;

  constructor(private alertService: AlertService) { }

  alertTypeObjects = [
    {
      "alertType":    "default",
      "className":    "default",
      "iconClass":    "fas fa-info alert-icon"    
    },
    {
      "alertType":    "error",
      "className":    "error",
      "iconClass":    "fas fa-times-circle alert-icon"    
    },
    {
      "alertType":    "caution",
      "className":    "caution",
      "iconClass":    "fas fa-exclamation-triangle alert-icon"    
    },
    {
      "alertType":    "success",
      "className":    "success",
      "iconClass":    "fas fa-thumbs-up alert-icon"    
    },
  ];

  closeAlert(): void {
    if(this.message) this.alertService.clear();
  }
  
  ngOnInit() {
    this.alertService.getMessage().subscribe((message) => { 
      this.message = message; 
      console.log(message);
    });
  }

}
