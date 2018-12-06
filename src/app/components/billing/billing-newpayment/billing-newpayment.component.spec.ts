import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingNewpaymentComponent } from './billing-newpayment.component';

describe('BillingNewpaymentComponent', () => {
  let component: BillingNewpaymentComponent;
  let fixture: ComponentFixture<BillingNewpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingNewpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingNewpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
