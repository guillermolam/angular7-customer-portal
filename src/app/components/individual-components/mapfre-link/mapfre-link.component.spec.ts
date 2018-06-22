import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreLinkComponent } from './mapfre-link.component';

describe('MapfreLinkComponent', () => {
  let component: MapfreLinkComponent;
  let fixture: ComponentFixture<MapfreLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
