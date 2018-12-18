import { HttpClient }           from '@angular/common/http';
import { Injectable }           from '@angular/core';
import { of, throwError,
  BehaviorSubject }             from 'rxjs';
import { Observable }           from 'rxjs/Observable';
import { catchError, map }      from 'rxjs/operators';
import { environment }          from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaperlessService {
  firstTime:                    boolean;
  private messageSource =       new BehaviorSubject<boolean>(this.firstTime);
  $firstTime =                  this.messageSource.asObservable();

  constructor(
    private http:               HttpClient,
  ) {}

  cancelPaperlessEPolicy( policyid ) {
    console.log(policyid);
  }

  cancelPaperlessEPay( policyid ) {
    console.log(policyid);
  }

  cancelPaperlessEBill( policyid ) {
    console.log(policyid);
  }

  enrollPaperlessEPolicy( policyid ) {
    console.log(policyid);
  }

  enrollPaperlessEPay( policyid ) {
    console.log(policyid);
  }

  enrollPaperlessEBill( policyid ) {
    console.log(policyid);
  }

  updatePaperlessFirstTime(firsttime: boolean) {
    this.messageSource.next(firsttime);
  }
}
