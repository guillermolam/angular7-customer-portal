import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditEmailComponent } from './profile-edit-email.component';

describe('ProfileEditEmailComponent', () => {
  let component: ProfileEditEmailComponent;
  let fixture: ComponentFixture<ProfileEditEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
