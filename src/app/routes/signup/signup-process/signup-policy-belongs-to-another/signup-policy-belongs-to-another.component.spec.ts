import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPolicyBelongsToAnotherComponent } from './signup-policy-belongs-to-another.component';

describe('SignupPolicyBelongsToAnotherComponent', () => {
  let component: SignupPolicyBelongsToAnotherComponent;
  let fixture: ComponentFixture<SignupPolicyBelongsToAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPolicyBelongsToAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPolicyBelongsToAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
