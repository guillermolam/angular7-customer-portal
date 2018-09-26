import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAccountScreenComponent } from './verify-account-screen.component';

describe('VerifyAccountScreenComponent', () => {
  let component: VerifyAccountScreenComponent;
  let fixture: ComponentFixture<VerifyAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
