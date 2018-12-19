import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessFirstTimeComponent } from './paperless-time.component';

describe('PaperlessTimeComponent', () => {
  let component: PaperlessFirstTimeComponent;
  let fixture: ComponentFixture<PaperlessFirstTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessFirstTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessFirstTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
