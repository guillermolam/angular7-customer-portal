import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingWalletFrontComponent } from './onboarding-wallet-front.component';

describe('OnboardingWalletFrontComponent', () => {
  let component: OnboardingWalletFrontComponent;
  let fixture: ComponentFixture<OnboardingWalletFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingWalletFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingWalletFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
