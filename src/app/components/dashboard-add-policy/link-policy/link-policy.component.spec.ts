import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPolicyComponent } from './link-policy.component';

describe('LinkPolicyComponent', () => {
  let component: LinkPolicyComponent;
  let fixture: ComponentFixture<LinkPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
