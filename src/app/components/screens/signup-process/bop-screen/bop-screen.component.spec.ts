import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BopScreenComponent } from './bop-screen.component';

describe('BopScreenComponent', () => {
  let component: BopScreenComponent;
  let fixture: ComponentFixture<BopScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BopScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BopScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
