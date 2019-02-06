import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEmailScreenComponent } from './validate-email-screen.component';

describe('ValidateEmailScreenComponent', () => {
  let component: ValidateEmailScreenComponent;
  let fixture: ComponentFixture<ValidateEmailScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateEmailScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateEmailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
