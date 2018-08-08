import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreFormComponent } from './mapfre-form.component';

describe('MapfreFormComponent', () => {
  let component: MapfreFormComponent;
  let fixture: ComponentFixture<MapfreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
