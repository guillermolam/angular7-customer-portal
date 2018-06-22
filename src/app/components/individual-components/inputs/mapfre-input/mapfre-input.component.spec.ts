import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreTextInputComponent } from './mapfre-text-input.component';

describe('MapfreTextInputComponent', () => {
  let component: MapfreTextInputComponent;
  let fixture: ComponentFixture<MapfreTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
