import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSetComponent } from './forgot-password-set.component';

describe('ForgotPasswordSetComponent', () => {
  let component: ForgotPasswordSetComponent;
  let fixture: ComponentFixture<ForgotPasswordSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
