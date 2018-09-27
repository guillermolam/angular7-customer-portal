import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUseScreenComponent } from './email-use-screen.component';

describe('EmailUseScreenComponent', () => {
  let component: EmailUseScreenComponent;
  let fixture: ComponentFixture<EmailUseScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailUseScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
