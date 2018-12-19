import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyNotFoundComponent } from './policy-not-found.component';

describe('PolicyNotFoundComponent', () => {
  let component: PolicyNotFoundComponent;
  let fixture: ComponentFixture<PolicyNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
