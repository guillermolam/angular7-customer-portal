import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollEftEpayFormComponent } from './enroll-eft-epay-form.component';

describe('EnrollEftEpayFormComponent', () => {
  let component: EnrollEftEpayFormComponent;
  let fixture: ComponentFixture<EnrollEftEpayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollEftEpayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollEftEpayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
