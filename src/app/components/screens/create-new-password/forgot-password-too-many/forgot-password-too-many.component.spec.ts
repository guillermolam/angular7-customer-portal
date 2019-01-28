import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ForgotPasswordTooManyComponent } from './forgot-password-too-many.component';

describe('ForgotPasswordTooManyComponent', () => {
  let component: ForgotPasswordTooManyComponent;
  let fixture: ComponentFixture<ForgotPasswordTooManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordTooManyComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordTooManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
