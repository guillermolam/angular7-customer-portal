import { BehaviorSubject }  from 'rxjs';
import { Injectable }       from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  private dashboardDetails:            any;
  private details =         new BehaviorSubject<any>(this.dashboardDetails);
  $dashboardDetails =          this.details.asObservable();

  constructor() {}

  updateDashboardDetails(dashboardDetails: any) {
    this.details.next(dashboardDetails);
  }

  clear() {
    this.details.next('');
  }
}
