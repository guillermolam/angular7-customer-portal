import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNotFoundComponent } from './signup-not-found.component';

describe('SignupNotFoundComponent', () => {
  let component: SignupNotFoundComponent;
  let fixture: ComponentFixture<SignupNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
