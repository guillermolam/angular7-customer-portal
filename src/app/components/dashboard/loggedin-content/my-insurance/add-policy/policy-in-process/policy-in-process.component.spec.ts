import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyInProcessComponent } from './policy-in-process.component';

describe('PolicyInProcessComponent', () => {
  let component: PolicyInProcessComponent;
  let fixture: ComponentFixture<PolicyInProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyInProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyInProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
