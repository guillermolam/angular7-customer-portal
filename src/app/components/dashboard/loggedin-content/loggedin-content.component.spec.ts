import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinContentComponent } from './loggedin-content.component';

describe('LoggedinContentComponent', () => {
  let component: LoggedinContentComponent;
  let fixture: ComponentFixture<LoggedinContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
