import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreNotificationsComponent } from './mapfre-notifications.component';

describe('MapfreNotificationsComponent', () => {
  let component: MapfreNotificationsComponent;
  let fixture: ComponentFixture<MapfreNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
