import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { CreateNewPasswordExpiredComponent } from './create-new-password-expired.component';


describe('CreateNewPasswordExpiredComponent', () => {
  let component: CreateNewPasswordExpiredComponent;
  let fixture: ComponentFixture<CreateNewPasswordExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPasswordExpiredComponent ],
      imports: [TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [  {provide: ActivatedRoute,
        useValue: {
          queryParams: of({emailPrefill: 'test@xyz.com'})
        }
      } ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPasswordExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should get email from parameter', fakeAsync(() => {
    component.getEmailFromParamater();
    tick();
    fixture.detectChanges();
    expect(component.emailPrefillParamater).toBe('test@xyz.com');
  }));

  xit('should call getEmailFromParameter', fakeAsync(() => {
    spyOn(component, 'getEmailFromParamater')
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.getEmailFromParamater).toHaveBeenCalled();
  }));

});
