import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsHomeCarComponent } from './claims-home-car.component';

describe('ClaimsHomeCarComponent', () => {
  let component: ClaimsHomeCarComponent;
  let fixture: ComponentFixture<ClaimsHomeCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsHomeCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsHomeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
