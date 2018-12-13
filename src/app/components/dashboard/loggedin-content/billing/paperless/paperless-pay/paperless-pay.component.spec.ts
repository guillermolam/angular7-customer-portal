import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessPayComponent } from './paperless-pay.component';

describe('PaperlessPayComponent', () => {
  let component: PaperlessPayComponent;
  let fixture: ComponentFixture<PaperlessPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
