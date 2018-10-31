import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  checkForIphoneType(): boolean {
    // detection method by Mark Notton
    // https://codepen.io/marknotton/pen/MOpodJ?editors=1010
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    // Get the device pixel ratio
    const ratio = window.devicePixelRatio || 1;

    // Define the users device screen dimensions
    const screen = {
      width : window.screen.width * ratio,
      height : window.screen.height * ratio
    };

    // iPhone X Detection
    if (iOS && screen.width == 1125 && screen.height === 2436) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit() {
  }

}
