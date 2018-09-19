// import { async, ComponentFixture, TestBed, inject, fakeAsync, tick }    from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA}                             from '@angular/core';
// import { HttpClient, HttpClientModule }                from '@angular/common/http';
// import { RouterTestingModule }                         from '@angular/router/testing';
// import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { CookieService }                               from 'ngx-cookie-service';
// import { TranslateModule }                             from '@ngx-translate/core';

// import { CreatePasswordFormComponent }  from './create-password-form.component';
// import { RegExHelper }                  from '../../../../_helpers/regex-helper';
// import { FormBase }                     from '../../../../_models/form-base';
// import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
// import { AlertService }                 from "../../../../_services/alert.service";
// import { UserService }                  from "../../../../_services/user.service";
// import { FormBaseControlService }       from '../../../../_services/form-base-control.service';
// import { CreateNewPasswordFormService } from "../../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service";

// describe('CreatePasswordFormComponent', () => {
//   let component: CreatePasswordFormComponent;
//   let fixture: ComponentFixture<CreatePasswordFormComponent>;
//   let formBaseControlService :         any;
//   let createNewPasswordformService :   any;
//   let authenticationService :          any;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CreatePasswordFormComponent ],
//    imports: [
//         TranslateModule.forRoot(),
//         HttpClientModule,
//         RouterTestingModule,
//         FormsModule,
//         ReactiveFormsModule
//       ],
//       providers: [
//         CookieService, AuthenticationService, RegExHelper,  AlertService, UserService, FormBaseControlService, CreateNewPasswordFormService],
//       schemas:[NO_ERRORS_SCHEMA]
//     })

//   formBaseControlService=         TestBed.get(FormBaseControlService);
//   createNewPasswordformService=   TestBed.get(CreateNewPasswordFormService);
//   authenticationService =         TestBed.get(AuthenticationService);

//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CreatePasswordFormComponent);
//     component = fixture.componentInstance;
//     let inputs = createNewPasswordformService.getInputs();
//     component.inputs = inputs;
//     component.createPasswordForm = formBaseControlService.toFormGroup(component.inputs);
//     fixture.detectChanges();
//   });


//   /** Password field unit test cases **/
//   fit('Create password test cases', fakeAsync(() => {
//       let createPassword = component.createPasswordForm.controls['createPassword'];
//       // Verify first blank password field should be required
//       expect(createPassword.valid).toBeFalsy();
//       expect(createPassword.errors['required']).toBeTruthy();

//       // Verify the password field should not be less than 7 Character.
//       createPassword.setValue("123456");
//       expect(createPassword.errors['minlength']).toBeDefined();

//       // verify password field should not more than 24 character.
//       createPassword.setValue("1234561231456123456123456123456");
//       expect(createPassword.errors['maxlength']).toBeDefined();

//       // verify password should have atleast one capital letter
//       createPassword.setValue("abcdef123@");
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // verify password should have atleast one small letter
//       createPassword.setValue("ABCD@123");
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // verify password should have atleast one number letter
//       createPassword.setValue("ABCDedf@");
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // verify password should have atleast one special character
//       createPassword.setValue("ABcdef123");
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // Verify password field for valid password.
//       createPassword.setValue("ABcd@12");
//       expect(createPassword.valid).toBeTruthy();
//   }));
  
//   /** Create Password form unit test cases for Valid password. **/
//   fit('Create Password form test cases for existing user',  fakeAsync(() => {
//       /** Verifying Expected create password button for the first time **/
//       expect(component.createPasswordForm.valid).toBeFalsy();
//       /** Creating form object to set create password**/
//       let sendEmail = component.createPasswordForm.controls['createPassword'];
//       /** set valid password and validate the create password button active. **/
//       sendEmail.setValue("ABcd@12");
//       expect(component.createPasswordForm.valid).toBeTruthy();
//       tick(100);
//       /** Verify the success message for password reset successfully. **/
//       authenticationService.createPassword("abcd@gmail.com", "ABcd@123").subscribe (
//         data => {
//           console.log(data);
//           // expect('200').toEqual(data['status']);             
//         }, 
//         error => {
//           expect(error.error).toEqual(error.message);
//         }); 
//     }));
// });
