import { FormBaseControlService } from './../../../../_services/form-base-control.service';
import { EditPolicyComponent } from './edit-policy.component';
import { FormBase } from './../../../../_models/form-base';
import { FormControl } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AuthenticationService } from '../../../../_services/_iam/authentication-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, Observer, observable, ErrorObserver, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../_services/user.service';
import { User } from '../../../../_models/user';
import { FakeAccountResponse } from '../../../../_helpers/_testing-helpers/_services/_testing-helpers/fakeResponse/fake-account-response.model';
import { DashboardComponent } from '../../../../routes/dashboard/dashboard.component';
import { VerifyAccountComponent } from '../../../../routes/verify-account/verify-account.component';
import { SignupProcessComponent } from '../../../../routes/signup/signup-process/signup-process.component';
import { Location } from '@angular/common';
import { AlertService } from '../../../../_services/alert.service';
import { RegExHelper } from '../../../../_helpers/regex-helper';
import { FormGroup } from '@angular/forms';
import { TextBox } from '../../../../_models/form-base-extends/text-box';


describe('EditPolicyComponent', () => {
  let component: EditPolicyComponent;
  let fixture: ComponentFixture<EditPolicyComponent>;
  let user: any;
  let userService: UserService;
  let authService: AuthenticationService;
  let location: Location;
  let fbControlService: FormBaseControlService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPolicyComponent , SignupProcessComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule.withRoutes(
            [
            { path: "signup/:parm", component: SignupProcessComponent }
        ]),
        HttpClientTestingModule,
      ],
      providers: [ UserService, AuthenticationService, FormBaseControlService, RegExHelper],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

   
    fixture = TestBed.createComponent(EditPolicyComponent);
    fbControlService = fixture.debugElement.injector.get(FormBaseControlService);
    userService = fixture.debugElement.injector.get(UserService);
    authService = fixture.debugElement.injector.get(AuthenticationService);
    location = TestBed.get(Location);    
    
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    let input: FormBase<any>[] = [
      new TextBox({
        editFirst_name: "first",
        editMI_name : "middle",
        editLast_name: "last",
        editPolicyNumber: 12345
      })
    ];
    expect(component).toBeTruthy();
  });
});
