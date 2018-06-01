import { Component, Input } from "@angular/core";

@Component({
  selector: "mapfre-switch",
  templateUrl: "./mapfre-switch.component.html",
  styleUrls: ["./mapfre-switch.component.scss"]
})
export class MapfreSwitchComponent {
  @Input ()  textLabel: string;
}
