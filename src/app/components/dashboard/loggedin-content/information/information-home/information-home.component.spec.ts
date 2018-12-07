import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationHomeComponent } from './information-home.component';

describe('InformationHomeComponent', () => {
  let component: InformationHomeComponent;
  let fixture: ComponentFixture<InformationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
