import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCheckingAccountComponent } from './profile-checking-account.component';

describe('ProfileCheckingAccountComponent', () => {
  let component: ProfileCheckingAccountComponent;
  let fixture: ComponentFixture<ProfileCheckingAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCheckingAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCheckingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
