import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CreateNewPasswordSetComponent } from './create-new-password-set.component';

describe('CreateNewPasswordSetComponent', () => {
  let component: CreateNewPasswordSetComponent;
  let fixture: ComponentFixture<CreateNewPasswordSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordSetComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
