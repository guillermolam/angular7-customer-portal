import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingConfirmComponent } from './billing-confirm.component';

describe('BillingConfirmComponent', () => {
  let component: BillingConfirmComponent;
  let fixture: ComponentFixture<BillingConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
