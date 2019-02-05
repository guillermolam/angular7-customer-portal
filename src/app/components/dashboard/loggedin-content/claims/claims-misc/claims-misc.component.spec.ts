import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsMiscComponent } from './claims-misc.component';

describe('ClaimsMiscComponent', () => {
  let component: ClaimsMiscComponent;
  let fixture: ComponentFixture<ClaimsMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
