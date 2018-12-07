import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfileSettingsRoutingService {
  private routeSubject =           new BehaviorSubject<any>(this.router.pathFromRoot);
  private changePasswordAlert =    new BehaviorSubject<boolean>(false);
  $alert =                         this.changePasswordAlert.asObservable();
  $routeSubject =                  this.routeSubject.asObservable();

  constructor(private router: ActivatedRoute) { }

  setChangePasswordAlert(value: boolean) {
    this.changePasswordAlert.next(value);
  }

  setRouteSubject(route: any) {
    this.routeSubject.next(route);
  }

  setDefault() {
    this.changePasswordAlert.next(false);
  }



}
