import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordNondynamicComponent } from './forgot-password-nondynamic.component';

describe('ForgotPasswordNondynamicComponent', () => {
  let component: ForgotPasswordNondynamicComponent;
  let fixture: ComponentFixture<ForgotPasswordNondynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordNondynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordNondynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
