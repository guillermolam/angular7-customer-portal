import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreCardComponent } from './mapfre-card.component';

describe('MapfreCardComponent', () => {
  let component: MapfreCardComponent;
  let fixture: ComponentFixture<MapfreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
