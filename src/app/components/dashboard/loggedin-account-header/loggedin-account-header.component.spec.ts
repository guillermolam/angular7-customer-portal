import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinAccountHeaderComponent } from './loggedin-account-header.component';

describe('LoggedinAccountHeaderComponent', () => {
  let component: LoggedinAccountHeaderComponent;
  let fixture: ComponentFixture<LoggedinAccountHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinAccountHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinAccountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
