import { NO_ERRORS_SCHEMA }         from '@angular/core';
import { HttpClientTestingModule }  from '@angular/common/http/testing';
import { RouterTestingModule }      from '@angular/router/testing';
import { async, ComponentFixture,
  TestBed }                         from '@angular/core/testing';
import { TranslateModule }          from '@ngx-translate/core';
import { FormBase }                 from 'mapfre-design-library';
import { LoginService }             from './../../_services/forms/login/login.service';
import { LoginComponent }           from './login.component';

class MockLoginService extends LoginService{
  getInputs() {
    let res = [new FormBase({value: 'formbase'})];
    return res;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[ LoginService ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    TestBed.overrideComponent(
      LoginComponent,
      {set: {providers: [{provide: LoginService, useClass: MockLoginService}]}}
    )

    loginService = TestBed.get(LoginService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem('currentUser');
  });

  it('should get the inputs', () => {
    expect(component.inputs).toEqual([new FormBase({value: 'formbase'})]);
  });

  it('should get the null inputs', () => {
    spyOn(loginService, 'getInputs').and.returnValue(null);
    component.constructor(loginService);
    fixture.detectChanges();
    expect(component.inputs).toBeNull();
  });
});
