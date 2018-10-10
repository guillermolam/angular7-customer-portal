import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingWalletBackListComponent } from './onboarding-wallet-back-list.component';

describe('OnboardingWalletBackListComponent', () => {
  let component: OnboardingWalletBackListComponent;
  let fixture: ComponentFixture<OnboardingWalletBackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingWalletBackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingWalletBackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
