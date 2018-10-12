import { Observable } from 'rxjs/Observable';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TextBox }                      from 'mapfre-design-library/lib/_models/form-base-extends/text-box';
import { FormBase }                     from 'mapfre-design-library/lib/_models/form-base';
import { FormBaseControlService }       from 'mapfre-design-library/lib/_services/form-base-control.service';
import { AlertService }                 from 'mapfre-design-library/lib/_services/alert.service';

import { EmailFormService } from './../../_services/forms/forgot-password/email-form/email-form.service';

import { ForgotPasswordComponent } from './forgot-password.component';


class MockEmailFormService extends EmailFormService{
  getInputs() {
    let res = [new FormBase({value:"formbase"})];
      return res;
  }
}

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let emailFormService: EmailFormService;
  let activatedRoute: ActivatedRoute;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[ EmailFormService, {provide: ActivatedRoute,
        useValue: {
          queryParams: Observable.of({emailPrefill: 'emailPrefill'})
        }
      } ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    TestBed.overrideComponent(
      ForgotPasswordComponent,
      {set: {providers: [{provide: EmailFormService, useClass: MockEmailFormService}]}}
    )

    emailFormService = TestBed.get(EmailFormService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get email from parameter', fakeAsync(()=>{
    component.getEmailFromParamater();
    tick();
    fixture.detectChanges();
    expect(component.emailPrefillParamater).toBe('emailPrefill')

  }));


  it('should set showConfirmation to true', ()=>{
    component.showConfirmationAction(true);
    fixture.detectChanges();
    expect(component.showConfirmation).toBeTruthy();
  });

  it('should call method getEmailFromParamater', ()=>{
    spyOn(component,'getEmailFromParamater');
    component.ngOnInit();
    expect(component.getEmailFromParamater).toHaveBeenCalled();
  });

  it('should set the emailInputs', ()=>{
    spyOn(emailFormService,'getInputs').and.returnValue(true);
    component.constructor(activatedRoute, emailFormService);
    fixture.detectChanges();
    expect(component.emailInputs).toBeTruthy();
  });

});
