import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmailInUseComponent } from './signup-email-in-use.component';

describe('SignupEmailInUseComponent', () => {
  let component: SignupEmailInUseComponent;
  let fixture: ComponentFixture<SignupEmailInUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupEmailInUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupEmailInUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
