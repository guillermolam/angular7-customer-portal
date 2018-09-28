import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyNotFoundScreenComponent } from './policy-not-found-screen.component';

describe('PolicyNotFoundScreenComponent', () => {
  let component: PolicyNotFoundScreenComponent;
  let fixture: ComponentFixture<PolicyNotFoundScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyNotFoundScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyNotFoundScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should update policy holdername and number',()=>{

  })



});
