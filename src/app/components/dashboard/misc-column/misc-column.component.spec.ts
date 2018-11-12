import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscColumnComponent } from './misc-column.component';

describe('MiscColumnComponent', () => {
  let component: MiscColumnComponent;
  let fixture: ComponentFixture<MiscColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
