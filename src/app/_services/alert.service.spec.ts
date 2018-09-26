import { TestBed, inject } from "@angular/core/testing";

import { AlertService } from "./alert.service";
import { Router } from "@angular/router";

describe("AlertService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertService
      ]
    });
  });

  it(
    "should be created",
    inject([AlertService,Router], (service: AlertService) => {
      // expect(service).toBeTruthy();
    })
    );

 


});
