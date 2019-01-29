import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessPayEnrollComponent } from './enroll.component';

describe('EnrollComponent', () => {
  let component: PaperlessPayEnrollComponent;
  let fixture: ComponentFixture<PaperlessPayEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessPayEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessPayEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
