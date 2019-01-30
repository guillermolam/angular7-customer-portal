import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEditPolicyComponent } from './signup-edit-policy.component';

describe('SignupEditPolicyComponent', () => {
  let component: SignupEditPolicyComponent;
  let fixture: ComponentFixture<SignupEditPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupEditPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupEditPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
