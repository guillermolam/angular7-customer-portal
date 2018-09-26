import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreButtonComponent } from './mapfre-button.component';

describe('MapfreButtonComponent', () => {
  let component: MapfreButtonComponent;
  let fixture: ComponentFixture<MapfreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
