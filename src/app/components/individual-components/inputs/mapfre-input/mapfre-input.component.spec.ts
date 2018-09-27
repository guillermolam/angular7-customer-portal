import { async, ComponentFixture, TestBed, fakeAsync,tick } from '@angular/core/testing';

import { MapfreInputComponent } from './mapfre-input.component';

describe('MapfreInputComponent', () => {
  let component: MapfreInputComponent;
  let fixture: ComponentFixture<MapfreInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapfreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should emit value', fakeAsync(()=>{
    spyOn(component.inputValue, 'emit');
    spyOn(component,'onInputOfValue');
    tick();
    fixture.detectChanges();
    expect(component.inputValue.emit).toBeTruthy();
  }));
});
