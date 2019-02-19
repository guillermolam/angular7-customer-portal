import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPolicyTypeComponent } from './no-policy-type.component';

describe('NoPolicyTypeComponent', () => {
  let component: NoPolicyTypeComponent;
  let fixture: ComponentFixture<NoPolicyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPolicyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPolicyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
