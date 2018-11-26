import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsAccordianFaqComponent } from './claims-accordian-faq.component';

describe('ClaimsAccordianFaqComponent', () => {
  let component: ClaimsAccordianFaqComponent;
  let fixture: ComponentFixture<ClaimsAccordianFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsAccordianFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsAccordianFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
