import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInsuranceMainComponent } from './my-insurance-main.component';

describe('MyInsuranceMainComponent', () => {
  let component: MyInsuranceMainComponent;
  let fixture: ComponentFixture<MyInsuranceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInsuranceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInsuranceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
