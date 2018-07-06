import { Component, Input, Output, EventEmitter, } from "@angular/core";
import { FormBuilder, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: "mapfre-switch",
  templateUrl: "./mapfre-switch.component.html",
  styleUrls: ["./mapfre-switch.component.scss"]
})
export class MapfreSwitchComponent {
  @Input() copyLeft:      boolean;
  @Input() copyRight:     boolean;

  @Output() switchOn:     EventEmitter<boolean> = new EventEmitter<boolean>();

  switchValueOnOff(e) {
    let bool;
    if(e.target.checked) {
      bool = true;
    }
    else {
      bool = false;
    }
    this.switchOn.emit(bool);
  }
  ngOnInit(): void {
    console.log(this.copyLeft, this.copyRight);
    
  }
}
