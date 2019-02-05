import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinSidenavComponent } from './loggedin-sidenav.component';

describe('LoggedinSidenavComponent', () => {
  let component: LoggedinSidenavComponent;
  let fixture: ComponentFixture<LoggedinSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
