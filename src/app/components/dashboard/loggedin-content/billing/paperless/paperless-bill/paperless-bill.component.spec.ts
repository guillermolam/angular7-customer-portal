import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessBillComponent } from './paperless-bill.component';

describe('PaperlessBillComponent', () => {
  let component: PaperlessBillComponent;
  let fixture: ComponentFixture<PaperlessBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
