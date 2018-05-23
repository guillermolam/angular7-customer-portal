import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyLoginComponent } from './legacy-login.component';

describe('LegacyLoginComponent', () => {
  let component: LegacyLoginComponent;
  let fixture: ComponentFixture<LegacyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
