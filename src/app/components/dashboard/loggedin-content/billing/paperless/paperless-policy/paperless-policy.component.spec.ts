import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperlessPolicyComponent } from './paperless-policy.component';

describe('PaperlessPolicyComponent', () => {
  let component: PaperlessPolicyComponent;
  let fixture: ComponentFixture<PaperlessPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
