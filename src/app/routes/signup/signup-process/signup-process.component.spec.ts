import { async, ComponentFixture, 
  TestBed, fakeAsync, tick }        from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }         from '@angular/core';
import { HttpClientTestingModule }  from '@angular/common/http/testing';
import { RouterTestingModule }      from '@angular/router/testing';
import { TranslateModule }          from '@ngx-translate/core';
import { FormBase, ModalOptions }   from 'mapfre-design-library';
import { ActivatedRoute }           from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { FakeAccountResponse }      from '../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { AddPolicyService }         from '../../../_services/forms/create-account/add-policy.service';
import { EditPolicyService }        from '../../../_services/forms/create-account/edit-policy.service';
import { CreateNewPasswordFormService } from '../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { UserService }              from '../../../_services/user.service';
import { SignupProcessComponent }   from './signup-process.component';
import { User }                     from '../../../_models/user';

describe('SignupProcessComponent', () => {
  let component: SignupProcessComponent;
  let fixture: ComponentFixture<SignupProcessComponent>;
  let route: ActivatedRoute;
  let userService: UserService;
  let editPolicyService: EditPolicyService;
  let passwordService: CreateNewPasswordFormService;
  let policyService: AddPolicyService;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupProcessComponent,
       ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        CreateNewPasswordFormService,
        EditPolicyService,
        {provide: ActivatedRoute,
        useValue: {
          params: of({parm: 'whereInTheProcess'})
        }
      }
    ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupProcessComponent);
    policyService = fixture.debugElement.injector.get(AddPolicyService);
    passwordService = fixture.debugElement.injector.get(CreateNewPasswordFormService);
    editPolicyService = fixture.debugElement.injector.get(EditPolicyService);
    userService = fixture.debugElement.injector.get(UserService);
    user = FakeAccountResponse.getUserData();
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem('currentUser');
  });

  xit('should initialize ', () => {
    let formBase = [new FormBase({})];
    let fakeModalOption = new ModalOptions({
        additionalButtonClasses:        'flat normal-link small',
        animatePosition:                'bottom',
        buttonCopy:                     'MODAL_WHERE_CAN_I_LINK',
        modalId:                        'helpModal',
        modalTranslateCopy:             'MODAL_WHERE_CAN_I_TITLE',
        typeOfModal:                    'default',
    });
    spyOn(policyService,'getInputs').and.returnValue(formBase);
    spyOn(passwordService,'getInputs').and.returnValue(formBase);
    spyOn(editPolicyService,'getInputs').and.returnValue(formBase);
    component.constructor(route,userService,editPolicyService,passwordService,policyService);
    fixture.detectChanges();
    // expect(component.addPolicy).toEqual(formBase);
    // expect(component.createNewPassword).toEqual(formBase);
    // expect(component.editPolicyInfo).toEqual(formBase);
    // expect(component.whereToFindModalOptions).toEqual(fakeModalOption);
  });

  xit('should initialize user and update whereInTheProcess', fakeAsync(() => {

    spyOn(userService, '$user').and.callFake(() => {
      Observable.create((observer: Observer<User>) => {
       observer.next(user);
      }
    )
  });
    // component.ngOnInit();
    tick();
    fixture.detectChanges();
    // expect(component.user).toEqual(user);
    // expect(component.whereInTheProcess).toBe('whereInTheProcess');
  }));

});
