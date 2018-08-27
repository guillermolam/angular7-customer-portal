import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreCheckboxComponent } from './mapfre-checkbox.component';

describe('MapfreCheckboxComponent', () => {
  let component: MapfreCheckboxComponent;
  let fixture: ComponentFixture<MapfreCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
