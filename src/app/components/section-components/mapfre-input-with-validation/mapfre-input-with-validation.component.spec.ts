import { MapfreIconComponent } from './../../individual-components/mapfre-icon/mapfre-icon.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegExHelper } from './../../../_helpers/regex-helper';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfreIputWithValidationComponent } from './mapfre-input-with-validation.component';
import { AlertService } from '../../../_services/alert.service';
import { FormBase } from '../../../_models/form-base';
import { FormGroup, FormControl } from '@angular/forms';

describe('MapfreIputWithValidationComponent', () => {
  let component: MapfreIputWithValidationComponent;
  let fixture: ComponentFixture<MapfreIputWithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapfreIputWithValidationComponent, MapfreIconComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        MDBBootstrapModule
      ],
      providers: [AlertService, RegExHelper],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();



  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapfreIputWithValidationComponent);
    component = fixture.componentInstance;
    component.input = new FormBase<any>({key: 'key'});
    component.form = new FormGroup({key: new FormControl('key')});
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
