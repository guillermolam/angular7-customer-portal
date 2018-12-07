import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConfirmModalComponent } from './profile-confirm-modal.component';

describe('ProfileConfirmModalComponent', () => {
  let component: ProfileConfirmModalComponent;
  let fixture: ComponentFixture<ProfileConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
