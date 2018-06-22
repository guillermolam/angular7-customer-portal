import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreTooltipComponent } from './mapfre-tooltip.component';

describe('MapfreTooltipComponent', () => {
  let component: MapfreTooltipComponent;
  let fixture: ComponentFixture<MapfreTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
