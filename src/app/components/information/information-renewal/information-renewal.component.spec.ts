import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationRenewalComponent } from './information-renewal.component';

describe('InformationRenewalComponent', () => {
  let component: InformationRenewalComponent;
  let fixture: ComponentFixture<InformationRenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationRenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
