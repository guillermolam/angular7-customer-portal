import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingWalletBackComponent } from './onboarding-wallet-back.component';

describe('OnboardingWalletBackComponent', () => {
  let component: OnboardingWalletBackComponent;
  let fixture: ComponentFixture<OnboardingWalletBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingWalletBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingWalletBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
