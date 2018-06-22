import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreLoadingComponent } from './mapfre-loading.component';

describe('MapfreLoadingComponent', () => {
  let component: MapfreLoadingComponent;
  let fixture: ComponentFixture<MapfreLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
