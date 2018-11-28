import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsReportComponent } from './claims-report.component';

describe('ClaimsReportComponent', () => {
  let component: ClaimsReportComponent;
  let fixture: ComponentFixture<ClaimsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
