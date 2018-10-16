import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalOptions }                     from 'mapfre-design-library';

import { OnboardingWalletModalComponent } from './onboarding-wallet-modal.component';

describe('OnboardingWalletModalComponent', () => {
  let component: OnboardingWalletModalComponent;
  let fixture: ComponentFixture<OnboardingWalletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingWalletModalComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingWalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
