import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreCodeComponent } from './mapfre-code.component';

describe('MapfreCodeComponent', () => {
  let component: MapfreCodeComponent;
  let fixture: ComponentFixture<MapfreCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
