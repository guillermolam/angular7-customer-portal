import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsNavigationComponent } from './claims-navigation.component';

describe('ClaimsNavigationComponent', () => {
  let component: ClaimsNavigationComponent;
  let fixture: ComponentFixture<ClaimsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
