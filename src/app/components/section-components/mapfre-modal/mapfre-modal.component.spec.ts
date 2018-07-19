import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreModalComponent } from './mapfre-modal.component';

describe('MapfreModalComponent', () => {
  let component: MapfreModalComponent;
  let fixture: ComponentFixture<MapfreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
