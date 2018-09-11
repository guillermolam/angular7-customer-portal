import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolicyScreenComponent } from './edit-policy-screen.component';

describe('EditPolicyScreenComponent', () => {
  let component: EditPolicyScreenComponent;
  let fixture: ComponentFixture<EditPolicyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPolicyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPolicyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
