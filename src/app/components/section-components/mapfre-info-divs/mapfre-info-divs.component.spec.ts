import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreInfoDivsComponent } from './mapfre-info-divs.component';

describe('MapfreInfoDivsComponent', () => {
  let component: MapfreInfoDivsComponent;
  let fixture: ComponentFixture<MapfreInfoDivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreInfoDivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreInfoDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
