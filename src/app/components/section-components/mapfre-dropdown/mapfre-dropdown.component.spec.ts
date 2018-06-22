import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreDropdownComponent } from './mapfre-dropdown.component';

describe('MapfreDropdownComponent', () => {
  let component: MapfreDropdownComponent;
  let fixture: ComponentFixture<MapfreDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
