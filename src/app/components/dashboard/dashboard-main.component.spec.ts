import { Observable, Observer } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { async, ComponentFixture, TestBed,
  inject, fakeAsync, tick }              from '@angular/core/testing';
import { NO_ERRORS_SCHEMA}               from '@angular/core';
import { HttpClientModule }              from '@angular/common/http';
import { RouterTestingModule }           from '@angular/router/testing';
import { Router, NavigationEnd } from '@angular/router';
import { Location }                     from '@angular/common';
import { DashboardMainComponent } from './dashboard-main.component';
import { DashboardComponent } from '../../routes/my-insurance/dashboard.component';
import { ProfileComponent } from './loggedin-content/profile/profile.component';


class MockRoutingService {
  private events : Observable<any> = Observable.create(( observer: Observer<NavigationEnd> ) => {
    observer.next((new NavigationEnd(0, '/login', '/my-insurance')))
  });

  reportClaims() {
    this.events = Observable.create(( observer: Observer<NavigationEnd> ) => {
      observer.next((new NavigationEnd(0, '/login', '/my-insurance')))
    });
    return this.events;
  }

  noReportClaims() {
    this.events = Observable.create(( observer: Observer<NavigationEnd> ) => {
      observer.next((new NavigationEnd(0, '/login', '/login')))
    });
    return this.events;
  }

}


describe('DashboardMainComponent', () => {
  let component: DashboardMainComponent;
  let fixture: ComponentFixture<DashboardMainComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainComponent, DashboardComponent, ProfileComponent ],
      providers: [],
      imports: [
        TranslateModule.forRoot(),
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'my-insurance', component: DashboardComponent },
          { path: 'profile', component: DashboardComponent }
        ])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    TestBed.overrideComponent(
      DashboardMainComponent,
      {set: {providers: [{ provide: Router, useClass: MockRoutingService }]}}
    );


    fixture = TestBed.createComponent(DashboardMainComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    router = TestBed.get(Router);

  }));

  // fit('should display claims column if on /my-insurance', fakeAsync(() => {
  //   // router.();
  //   fixture.detectChanges();
  //   tick();
  //   expect(component.reportClaim).toBeTruthy();
  //   expect(location.path()).toBe('/my-insurance');
  // }));

  // fit('should not display claims column if not on /my-insurance', fakeAsync(() => {
  //   fixture.detectChanges();
  //   tick();
  //   expect(component.reportClaim).toBeFalsy();
  //   expect(location.path()).not.toBe('/my-insurance');
  // }));

  

});
