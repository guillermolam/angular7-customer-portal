import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaymentNoCheckingComponent } from './new-payment-no-checking.component';

describe('NewPaymentComponent', () => {
  let component: NewPaymentNoCheckingComponent;
  let fixture: ComponentFixture<NewPaymentNoCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaymentNoCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentNoCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
