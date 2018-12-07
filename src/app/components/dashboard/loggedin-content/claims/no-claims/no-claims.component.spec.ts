import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoClaimsComponent } from './no-claims.component';

describe('NoClaimsComponent', () => {
  let component: NoClaimsComponent;
  let fixture: ComponentFixture<NoClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
