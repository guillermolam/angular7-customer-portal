import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAddPolicyComponent } from './signup-add-policy.component';

describe('SignupAddPolicyComponent', () => {
  let component: SignupAddPolicyComponent;
  let fixture: ComponentFixture<SignupAddPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAddPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAddPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
