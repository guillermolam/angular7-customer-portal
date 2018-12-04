import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSidebarComponent } from './billing-sidebar.component';

describe('BillingSidebarComponent', () => {
  let component: BillingSidebarComponent;
  let fixture: ComponentFixture<BillingSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
