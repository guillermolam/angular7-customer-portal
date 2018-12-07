import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmailConfirmComponent } from './profile-email-confirm.component';

describe('ProfileEmailConfirmComponent', () => {
  let component: ProfileEmailConfirmComponent;
  let fixture: ComponentFixture<ProfileEmailConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEmailConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEmailConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
