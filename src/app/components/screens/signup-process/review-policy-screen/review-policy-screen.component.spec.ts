import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPolicyScreenComponent } from './review-policy-screen.component';

describe('ReviewPolicyScreenComponent', () => {
  let component: ReviewPolicyScreenComponent;
  let fixture: ComponentFixture<ReviewPolicyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPolicyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPolicyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
