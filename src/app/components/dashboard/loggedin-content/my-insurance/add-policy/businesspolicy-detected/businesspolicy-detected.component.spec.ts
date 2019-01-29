import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesspolicyDetectedComponent } from './businesspolicy-detected.component';

describe('BusinesspolicyDetectedComponent', () => {
  let component: BusinesspolicyDetectedComponent;
  let fixture: ComponentFixture<BusinesspolicyDetectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesspolicyDetectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesspolicyDetectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
