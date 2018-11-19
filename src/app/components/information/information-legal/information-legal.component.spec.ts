import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationLegalComponent } from './information-legal.component';

describe('InformationLegalComponent', () => {
  let component: InformationLegalComponent;
  let fixture: ComponentFixture<InformationLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
