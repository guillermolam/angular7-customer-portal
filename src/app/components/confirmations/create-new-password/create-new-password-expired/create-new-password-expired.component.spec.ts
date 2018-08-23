import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPasswordExpiredComponent } from './create-new-password-expired.component';

describe('CreateNewPasswordExpiredComponent', () => {
  let component: CreateNewPasswordExpiredComponent;
  let fixture: ComponentFixture<CreateNewPasswordExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
