import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMainComponent } from './information-main.component';

describe('InformationMainComponent', () => {
  let component: InformationMainComponent;
  let fixture: ComponentFixture<InformationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
