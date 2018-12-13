import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessMiscComponent } from './paperless-misc.component';

describe('PaperlessMiscComponent', () => {
  let component: PaperlessMiscComponent;
  let fixture: ComponentFixture<PaperlessMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
