import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessTimeComponent } from './paperless-time.component';

describe('PaperlessTimeComponent', () => {
  let component: PaperlessTimeComponent;
  let fixture: ComponentFixture<PaperlessTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
