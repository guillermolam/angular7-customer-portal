import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBopComponent } from './signup-bop.component';

describe('SignupBopComponent', () => {
  let component: SignupBopComponent;
  let fixture: ComponentFixture<SignupBopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupBopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupBopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
