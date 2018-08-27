import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPasswordSetComponent } from './create-new-password-set.component';

describe('CreateNewPasswordSetComponent', () => {
  let component: CreateNewPasswordSetComponent;
  let fixture: ComponentFixture<CreateNewPasswordSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
