import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingAccountFormComponent } from './checking-account-form.component';

describe('CheckingAccountFormComponent', () => {
  let component: CheckingAccountFormComponent;
  let fixture: ComponentFixture<CheckingAccountFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckingAccountFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckingAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
