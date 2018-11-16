import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProductsComponent } from './information-products.component';

describe('InformationProductsComponent', () => {
  let component: InformationProductsComponent;
  let fixture: ComponentFixture<InformationProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
