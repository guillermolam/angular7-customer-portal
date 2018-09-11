import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyBelongToAnotherScreenComponent } from './policy-belong-to-another-screen.component';

describe('PolicyBelongToAnotherScreenComponent', () => {
  let component: PolicyBelongToAnotherScreenComponent;
  let fixture: ComponentFixture<PolicyBelongToAnotherScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyBelongToAnotherScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyBelongToAnotherScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
