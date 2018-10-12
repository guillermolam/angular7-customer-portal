import { ModalModule } from 'angular-bootstrap-md';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreModalComponent } from './mapfre-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('MapfreModalComponent', () => {
  let component: MapfreModalComponent;
  let fixture: ComponentFixture<MapfreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreModalComponent ],
      providers: [ModalModule],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    
  });
});
