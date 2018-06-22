import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreLabelComponent } from './mapfre-label.component';

describe('MapfreLabelComponent', () => {
  let component: MapfreLabelComponent;
  let fixture: ComponentFixture<MapfreLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
