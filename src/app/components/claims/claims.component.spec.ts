import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsWrapperComponent } from './claims.component';

describe('ClaimsComponent', () => {
  let component: ClaimsWrapperComponent;
  let fixture: ComponentFixture<ClaimsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
