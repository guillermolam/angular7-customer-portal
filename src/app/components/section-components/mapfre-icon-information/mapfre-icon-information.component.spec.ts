import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreIconInformationComponent } from './mapfre-icon-information.component';

describe('MapfreIconInformationComponent', () => {
  let component: MapfreIconInformationComponent;
  let fixture: ComponentFixture<MapfreIconInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreIconInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreIconInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
