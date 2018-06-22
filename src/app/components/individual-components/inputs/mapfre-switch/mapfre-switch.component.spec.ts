import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreSwitchComponent } from './mapfre-switch.component';

describe('MapfreSwitchComponent', () => {
  let component: MapfreSwitchComponent;
  let fixture: ComponentFixture<MapfreSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
