import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessPayConfirmComponent } from './confirm.component';

describe('ConfirmComponent', () => {
  let component: PaperlessPayConfirmComponent;
  let fixture: ComponentFixture<PaperlessPayConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessPayConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessPayConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
