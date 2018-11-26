import { async, ComponentFixture, TestBed,
   fakeAsync, tick }                          from '@angular/core/testing';
import { NO_ERRORS_SCHEMA}                    from '@angular/core';
import { HttpClientModule }                   from '@angular/common/http';
import { RouterTestingModule }                from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute }             from '@angular/router';
import { Location }                           from '@angular/common';
import { Observable, Observer, of }           from 'rxjs';
import { TranslateModule }                    from '@ngx-translate/core';
import { FormBase, TextBox, AlertService,
        FormBaseControlService, RegExHelper } from 'mapfre-design-library';
import { CreatePasswordFormComponent }        from './create-password-form.component';
import { AuthenticationService }              from '../../../../_services/_iam/authentication-service.service';
import { UserService }                        from '../../../../_services/user.service';
import { CreateNewPasswordFormService }       from '../../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { User }                               from '../../../../_models/user';
import { FakeAccountResponse }                from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { VerifyAccountComponent }             from '../../../../routes/verify-account/verify-account.component';

class MockAuthService extends AuthenticationService {
  createPassword(): Observable<any> {
    let obs = Observable.create((observer: Observer<string>) => {
      observer.next('verifyaccount');
    });
    return obs;
  }

  updatePassword(user, token): Observable<any> {
    let obs = Observable.create((observer: Observer<boolean>) => {
      observer.next(true);
    });
    return obs;
  }
}

describe('CreatePasswordFormComponent', () => {
  let authenticationService:            AuthenticationService;
  let component:                        CreatePasswordFormComponent;
  let fixture:                          ComponentFixture<CreatePasswordFormComponent>;
  let formBaseControlService;
  let createNewPasswordformService;
  let location:                         Location;
  let user:                             User;
  let userService:                      UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePasswordFormComponent, VerifyAccountComponent ],
    imports: [
        TranslateModule.forRoot(),
        HttpClientModule,
        RouterTestingModule.withRoutes(
          [{ path: 'verifyaccount', component: VerifyAccountComponent }]
        ),
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
      AuthenticationService, RegExHelper,  AlertService, UserService,
      FormBaseControlService, CreateNewPasswordFormService,
      {provide: ActivatedRoute,
      useValue: {
        queryParams: of({email: 'test@xyz.com', token: 'abcdef'}),
        params: of({parm: 'whereintheprocess'})
      }}],
      schemas:[NO_ERRORS_SCHEMA]
    });

    TestBed.overrideComponent(
      CreatePasswordFormComponent,
      {set: {providers: [{provide: AuthenticationService, useClass: MockAuthService}]}}
    );

    formBaseControlService =        TestBed.get(FormBaseControlService);
    createNewPasswordformService =  TestBed.get(CreateNewPasswordFormService);
    authenticationService =         TestBed.get(AuthenticationService);
    user =                          FakeAccountResponse.getUserData();
    userService =                   TestBed.get(UserService);
    userService.updateUser(user);
    location =                      TestBed.get(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePasswordFormComponent);
    component = fixture.componentInstance;
    let inputs = createNewPasswordformService.getInputs();
    component.inputs = inputs;
    component.createPasswordForm = formBaseControlService.toFormGroup(component.inputs);
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem('currentUser');
  });

  xit('should call createPassword method', fakeAsync( () => {
    component.whereInTheProcess = 'createpassword';
    fixture.detectChanges();
    spyOn(component, 'createPassword');
    component.createNewPassword();
    expect(component.createPassword).toHaveBeenCalled();
  }));

  xit('should call updatePassword method', fakeAsync( () => {
    component.whereInTheProcess = 'null';
    fixture.detectChanges();
    spyOn(component, 'updatePassword');
    component.createNewPassword();
    expect(component.updatePassword).toHaveBeenCalled();
  }));

  xit('should redirect user to verify account', fakeAsync( () => {
    component.createPasswordForm.setValue({createPassword: 'password'});
    component.user.password = component.createPasswordForm.get('createPassword').value;
    fixture.detectChanges();
    component.createPassword(user);
    tick();
    expect(location.path()).toBe('/verifyaccount');
  }));

  /*it('should redirect user to login account',fakeAsync(()=>{
    component.createPasswordForm.setValue({createPassword: 'password'});
    component.user.password = component.createPasswordForm.get('createPassword').value;
    fixture.detectChanges();
    component.createPassword(user);
    tick();  
    //expect(alertService.success).toHaveBeenCalled();
    expect(location.path()).toBe('/login'); */
    /*
    component.email = 'test@xyz.com';
    component.createPasswordForm.setValue({createPassword: 'password'});
    component.user.password = component.createPasswordForm.get('createPassword').value;
    component.user.email = component.email;
    spyOn(component.confirmationOfPasswordCreation, 'emit');
    fixture.detectChanges();
    component.updatePassword();
    tick();
    expect(component.confirmationOfPasswordCreation.emit).toBeTruthy();
    */
  //}));

  xit('should initializes parameters oninitialization', fakeAsync(()=>{
      let formBase: FormBase<any>[] = [
        new TextBox({
          form: 'formbase'
        })];
      let formGroup = fixture.debugElement.injector.get(FormBaseControlService).toFormGroup(formBase);
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.email).toBe('test@xyz.com');
      expect(component.token).toBe('abcdef');
      expect(component.whereInTheProcess).toBe('whereintheprocess');
      // expect(component.createPasswordForm).toEqual(formGroup);
  }));

  /** Password field unit test cases **/
//   fit('Create password test cases', fakeAsync(() => {
//       let createPassword = component.createPasswordForm.controls['createPassword'];
//       // Verify first blank password field should be required
//       expect(createPassword.valid).toBeFalsy();
//       expect(createPassword.errors['required']).toBeTruthy();

//       // Verify the password field should not be less than 7 Character.
//       createPassword.setValue('123456');
//       expect(createPassword.errors['minlength']).toBeDefined();

//       // verify password field should not more than 24 character.
//       createPassword.setValue('1234561231456123456123456123456');
//       expect(createPassword.errors['maxlength']).toBeDefined();

//       // verify password should have atleast one capital letter
//       createPassword.setValue('abcdef123@');
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // verify password should have atleast one small letter
//       createPassword.setValue('ABCD@123');
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // verify password should have atleast one number letter
//       createPassword.setValue('ABCDedf@');
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // verify password should have atleast one special character
//       createPassword.setValue('ABcdef123');
//       expect(createPassword.errors['pattern']).toBeDefined();

//       // Verify password field for valid password.
//       createPassword.setValue('ABcd@12');
//       expect(createPassword.valid).toBeTruthy();
//   }));
  
//   /** Create Password form unit test cases for Valid password. **/
//   fit('Create Password form test cases for existing user',  fakeAsync(() => {
//       /** Verifying Expected create password button for the first time **/
//       expect(component.createPasswordForm.valid).toBeFalsy();
//       /** Creating form object to set create password**/
//       let sendEmail = component.createPasswordForm.controls['createPassword'];
//       /** set valid password and validate the create password button active. **/
//       sendEmail.setValue('ABcd@12');
//       expect(component.createPasswordForm.valid).toBeTruthy();
//       tick(100);
//       /** Verify the success message for password reset successfully. **/
//       authenticationService.createPassword('abcd@gmail.com', 'ABcd@123').subscribe (
//         data => {
//           console.log(data);
//           // expect('200').toEqual(data['status']);             
//         }, 
//         error => {
//           expect(error.error).toEqual(error.message);
//         }); 
//     }));
});
