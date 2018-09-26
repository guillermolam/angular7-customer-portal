import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreIconComponent } from './mapfre-icon.component';

describe('MapfreIconComponent', () => {
  let component: MapfreIconComponent;
  let fixture: ComponentFixture<MapfreIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
