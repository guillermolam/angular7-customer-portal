import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProcessComponent } from './signup-process.component';

describe('SignupProcessComponent', () => {
  let component: SignupProcessComponent;
  let fixture: ComponentFixture<SignupProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
