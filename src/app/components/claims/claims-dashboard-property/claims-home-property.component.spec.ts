import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsHomePropertyComponent } from './claims-home-property.component';

describe('ClaimsHomePropertyComponent', () => {
  let component: ClaimsHomePropertyComponent;
  let fixture: ComponentFixture<ClaimsHomePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsHomePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsHomePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
