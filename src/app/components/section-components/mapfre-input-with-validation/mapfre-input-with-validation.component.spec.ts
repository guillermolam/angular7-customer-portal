import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreIputWithValidationComponent } from './mapfre-input-with-validation.component';

describe('MapfreIputWithValidationComponent', () => {
  let component: MapfreIputWithValidationComponent;
  let fixture: ComponentFixture<MapfreIputWithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreIputWithValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreIputWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
