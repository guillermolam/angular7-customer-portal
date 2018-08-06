import { async, ComponentFixture, TestBed, inject }    from '@angular/core/testing';
import { NO_ERRORS_SCHEMA}                             from '@angular/core';
import { HttpClient, HttpClientModule }                from '@angular/common/http';
import { RouterTestingModule }                         from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService }                               from 'ngx-cookie-service';
import { TranslateModule }                             from '@ngx-translate/core';

import { SendEmailFormComponent }       from './send-email-form.component';
import { LoginFormComponent }           from '../login-form/login-form.component';
import { FormBase }                     from '../../../../_models/form-base';
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { AlertService }                 from "../../../../_services/alert.service";
import { UserService }                  from "../../../../_services/user.service";
import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
import { EmailFormService }             from '../../../../_services/forms/forgot-password/email-form/email-form.service';

describe('SendEmailFormComponent', () => {
  let component: SendEmailFormComponent;
  let fixture: ComponentFixture<SendEmailFormComponent>;
  let formBaseControlService :     any;
  let authenticationService :      any;
  let sendEmailService :           any;
  let sendEmailErrorResponse:      string = "Email Not found";
  let existingUser:                string = "Admin@mapfre.com";
  let nonExistingUser:             string = "Abcde@gmail.com";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailFormComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        CookieService, AuthenticationService, AlertService, UserService, FormBaseControlService, EmailFormService
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

   // Inject FormBaseControlService
  beforeEach(inject([FormBaseControlService], (_formBaseControlService: FormBaseControlService) => {
    formBaseControlService = _formBaseControlService;
  }));

  // Inject AuthenticationService
  beforeEach(inject([AuthenticationService], (_authenticationService: AuthenticationService) => {
    authenticationService = _authenticationService;
  }));

  // Inject EmailFormService
  beforeEach(inject([EmailFormService], (_sendEmailService: EmailFormService) => {
    sendEmailService = _sendEmailService;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailFormComponent);
    component = fixture.componentInstance;
    let inputs = sendEmailService.getInputs();
    component.inputs = inputs;
    component.passwordEmailForm = formBaseControlService.toFormGroup(component.inputs);
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  /** Email field unit test cases on forgot password **/
  fit('Send email on forgot password test cases', (done:Function) => {
    fixture.whenStable().then(() => {
      let sendEmail = component.passwordEmailForm.controls['sendEmail'];
      // Verify email field required and required message.
      expect(sendEmail.valid).toBeFalsy();
      expect(sendEmail.errors['required']).toBeTruthy();
      // Verify email pattern
      sendEmail.setValue("test");
      expect(sendEmail.errors['pattern']).toBeDefined();
      // Verify for valid email.
      sendEmail.setValue("validEmail@gmail.com");     
      expect(sendEmail.valid).toBeTruthy();
      done();
    });
  });

  /** Forgot Password form unit test cases for non existing valid email. **/
  fit('Forgot Password form test cases for non existing user',  (done: Function) => {
    fixture.whenStable().then(() => {
      /** Verifying Expected login button for the first time **/
      expect(component.passwordEmailForm.valid).toBeFalsy();

      /** Creating form object to forgot password email**/
      let sendEmail = component.passwordEmailForm.controls['sendEmail'];
      
      /** set valid email type and validate the send email button active. **/
      sendEmail.setValue(existingUser);
      expect(component.passwordEmailForm.valid).toBeTruthy();
      /** Verify the error message for non existing email. **/
      authenticationService.forgotPasswordSendEmailId(component.passwordEmailForm.controls['sendEmail'].value).subscribe (
        data => {
          expect('200').toEqual(data['status']);
          done();                  
        },
        error => {
          console.log("Error ",error.error);
          
          expect(error.error).toEqual(sendEmailErrorResponse);
          done();
        }); 
    });
  });

  /** Forgot Password form unit test cases for existing valid email. **/
  fit('Forgot Password form test cases for existing user',  (done: Function) => {
    fixture.whenStable().then(() => {
      /** Verifying Expected login button for the first time **/
      expect(component.passwordEmailForm.valid).toBeFalsy();
      /** Creating form object to set email**/
      let sendEmail = component.passwordEmailForm.controls['sendEmail'];
      /** set valid email type and validate the send email button active. **/
      sendEmail.setValue(nonExistingUser);
      expect(component.passwordEmailForm.valid).toBeTruthy();
      /** Verify the success message for existing email. **/
      authenticationService.forgotPasswordSendEmailId(component.passwordEmailForm.controls['sendEmail'].value).subscribe (
        data => {
          expect('200').toEqual(data['status']);
          done();                  
        },
        error => {
          
          expect(error.error).toEqual(sendEmailErrorResponse);
          done();
        }); 
    });
  });  
});