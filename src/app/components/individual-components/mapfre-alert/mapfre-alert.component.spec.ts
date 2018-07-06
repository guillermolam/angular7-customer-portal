import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreAlertComponent } from './mapfre-alert.component';

describe('MapfreAlertComponent', () => {
  let component: MapfreAlertComponent;
  let fixture: ComponentFixture<MapfreAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
