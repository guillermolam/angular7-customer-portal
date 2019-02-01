import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBillingRepFormComponent } from './contact-billing-rep-form.component';

describe('ContactBillingRepFormComponent', () => {
  let component: ContactBillingRepFormComponent;
  let fixture: ComponentFixture<ContactBillingRepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBillingRepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBillingRepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
