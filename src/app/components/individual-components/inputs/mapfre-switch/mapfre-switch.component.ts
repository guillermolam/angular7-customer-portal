import { Component, Input, Output, EventEmitter, } from "@angular/core";
import { FormBuilder, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: "mapfre-switch",
  templateUrl: "./mapfre-switch.component.html",
  styleUrls: ["./mapfre-switch.component.scss"]
})
export class MapfreSwitchComponent {
  @Input() copyLeft: boolean;
  @Input() copyRight: boolean;

  @Output() switchOn = new EventEmitter<boolean>();

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
}
