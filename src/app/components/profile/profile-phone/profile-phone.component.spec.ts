import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhoneComponent } from './profile-phone.component';

describe('ProfilePhoneComponent', () => {
  let component: ProfilePhoneComponent;
  let fixture: ComponentFixture<ProfilePhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
