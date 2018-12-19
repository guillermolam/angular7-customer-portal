import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatePolicyRightsComponent } from './validate-policy-rights.component';

describe('ValidatePolicyRightsComponent', () => {
  let component: ValidatePolicyRightsComponent;
  let fixture: ComponentFixture<ValidatePolicyRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatePolicyRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatePolicyRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
