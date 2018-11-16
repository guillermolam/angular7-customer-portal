import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDiscountsComponent } from './information-discounts.component';

describe('InformationDiscountsComponent', () => {
  let component: InformationDiscountsComponent;
  let fixture: ComponentFixture<InformationDiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationDiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
