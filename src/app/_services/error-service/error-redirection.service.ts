import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorRedirectionService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:         Router
  ) { }

  redirect( where ) {

    switch ( where.toString() ) {
      case '400':
        this.router.navigate(['/opps/400']);
        break;

      case '401':
        this.router.navigate(['/opps/401']);
        break;

      case '403':
        this.router.navigate(['/opps/403']);
        break;

      case '404':
        this.router.navigate(['/opps/404']);
        break;

      case '408':
        this.router.navigate(['/opps/408']);
        break;

      case '410':
        this.router.navigate(['/opps/410']);
        break;

      case '500':
        this.router.navigate(['/opps/500']);
        break;

      case '502':
        this.router.navigate(['/opps/502']);
        break;

      case '503':
        this.router.navigate(['/opps/503']);
        break;

      case '504':
        this.router.navigate(['/opps/504']);
        break;

      case 'maintence':
        this.router.navigate(['/opps/maintence']);
        break;

      default:
        this.router.navigate(['/opps/404']);
        break;
    }
  }

}
