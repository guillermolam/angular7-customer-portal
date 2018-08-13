import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordTooManyComponent } from './forgot-password-too-many.component';

describe('ForgotPasswordTooManyComponent', () => {
  let component: ForgotPasswordTooManyComponent;
  let fixture: ComponentFixture<ForgotPasswordTooManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordTooManyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordTooManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
