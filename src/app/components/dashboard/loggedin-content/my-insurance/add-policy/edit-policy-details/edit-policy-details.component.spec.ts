import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolicyDetailsComponent } from './edit-policy-details.component';

describe('EditPolicyDetailsComponent', () => {
  let component: EditPolicyDetailsComponent;
  let fixture: ComponentFixture<EditPolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
