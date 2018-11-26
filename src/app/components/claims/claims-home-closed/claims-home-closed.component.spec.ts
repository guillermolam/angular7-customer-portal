import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsHomeClosedComponent } from './claims-home-closed.component';

describe('ClaimsHomeClosedComponent', () => {
  let component: ClaimsHomeClosedComponent;
  let fixture: ComponentFixture<ClaimsHomeClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsHomeClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsHomeClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
