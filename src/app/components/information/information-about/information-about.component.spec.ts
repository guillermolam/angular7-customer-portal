import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAboutComponent } from './information-about.component';

describe('InformationAboutComponent', () => {
  let component: InformationAboutComponent;
  let fixture: ComponentFixture<InformationAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
