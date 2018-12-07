import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInsuranceComponent } from './my-insurance.component';

describe('MyInsuranceComponent', () => {
  let component: MyInsuranceComponent;
  let fixture: ComponentFixture<MyInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
