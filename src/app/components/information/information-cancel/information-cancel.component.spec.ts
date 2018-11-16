import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCancelComponent } from './information-cancel.component';

describe('InformationCancelComponent', () => {
  let component: InformationCancelComponent;
  let fixture: ComponentFixture<InformationCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
