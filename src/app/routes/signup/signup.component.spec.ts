import { TextBox } from './../../_models/form-base-extends/text-box';
import { FormBase } from './../../_models/form-base';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CreateAccountService } from '../../_services/forms/create-account/create-account-service.service';


class MockCreateAccountService extends CreateAccountService{
    getInputs() {
      let res = [new FormBase({value:"formbase"})];
        return res;
    }
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let createAccountService: CreateAccountService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[ CreateAccountService ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    TestBed.overrideComponent(
      SignupComponent,
      {set: {providers: [{provide: CreateAccountService, useClass: MockCreateAccountService}]}}
    )

    fixture = TestBed.createComponent(SignupComponent);
    createAccountService = TestBed.get(CreateAccountService);
    

  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get the inputs', () => {
    expect(component.inputs).toEqual([new FormBase({value:"formbase"})]);
  });

  it('should get the null inputs', () => {
    spyOn(createAccountService,'getInputs').and.returnValue(null);
    component.constructor(createAccountService);
    fixture.detectChanges();
    expect(component.inputs).toBeNull();
  });


});
