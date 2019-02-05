import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfileSettingsRoutingService {
  passwordprocess:                  boolean;
  private routeSubject =            new BehaviorSubject<any>(this.router.pathFromRoot);
  private changePasswordAlert =     new BehaviorSubject<boolean>(false);
  private passwordprocesssource =   new BehaviorSubject<boolean>(this.passwordprocess);
  $passwordprocess =                this.passwordprocesssource.asObservable();
  $alert =                          this.changePasswordAlert.asObservable();
  $routeSubject =                   this.routeSubject.asObservable();

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

  setPasswordProcess(value) {
    this.passwordprocesssource.next(value);
  }

  clearPasswordProcess() {
    this.passwordprocesssource.next(false);
  }

}
