import { Observable, Observer } from 'rxjs';
import { AuthenticationService } from './../../../_services/_iam/authentication-service.service';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { EmailConfirmationComponent } from './email-confirmation.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('EmailConfirmationComponent', () => {
  let component: EmailConfirmationComponent;
  let fixture: ComponentFixture<EmailConfirmationComponent>;
  let authService: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmationComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [AuthenticationService],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailConfirmationComponent);
    authService = fixture.debugElement.injector.get(AuthenticationService);

  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit false value', fakeAsync(() => {
    spyOn(component.showConfirmation,'emit');
    component.goBackToForm();
    tick();
    fixture.detectChanges();
    expect(component.showConfirmation.emit).toHaveBeenCalledWith(false);
  }));

  it('should send email to user and emit true', fakeAsync(()=>{
    component.sendEmailAgain = "test@xyz.com";
    spyOn(authService,'forgotPasswordSendEmailId').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        observer.next('email');
      });
    });
    spyOn(component.showConfirmation,'emit');
    component.forgotPasswordSendEmailId();
    tick();
    fixture.detectChanges();
    expect(component.user.email).toBe("test@xyz.com");
    expect(component.showConfirmation.emit).toHaveBeenCalledWith(true);
    expect(authService.forgotPasswordSendEmailId).toHaveBeenCalled();
  }));

  it('should do nothing', fakeAsync(()=>{
    component.sendEmailAgain = null;
    spyOn(authService,'forgotPasswordSendEmailId');
    spyOn(component.showConfirmation,'emit');
    component.forgotPasswordSendEmailId();
    tick();
    fixture.detectChanges();
    expect(component.user.email).toBeNull();
    expect(component.showConfirmation.emit).not.toHaveBeenCalledWith(true);
    expect(authService.forgotPasswordSendEmailId).not.toHaveBeenCalled();
  }));


  it('should throw error', fakeAsync(()=>{
    component.sendEmailAgain = "test@xyz.com";
    spyOn(authService,'forgotPasswordSendEmailId').and.callFake(()=>{
      return Observable.create((observer: Observer<string>)=>{
        throw observer.error('error');
      });
    });
    spyOn(component.showConfirmation,'emit');
    component.forgotPasswordSendEmailId();
    tick();
    fixture.detectChanges();
    expect(component.user.email).toBe("test@xyz.com");
    expect(component.showConfirmation.emit).not.toHaveBeenCalledWith(true);
    expect(authService.forgotPasswordSendEmailId).toHaveBeenCalled();
  }));


});
