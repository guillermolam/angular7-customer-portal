import { HttpClient }           from '@angular/common/http';
import { Injectable }           from '@angular/core';
import { of, throwError,
  BehaviorSubject }             from 'rxjs';
import { Observable }           from 'rxjs/Observable';
import { catchError, map }      from 'rxjs/operators';
import { environment }          from '../../../environments/environment';
import { UserService }          from './../user.service';
import { TestingService }       from '../../_helpers/_testing-helpers/_services/_testing-helpers/testing.service';


@Injectable({
  providedIn: 'root'
})
export class PaperlessService {
  firstTime:                    boolean;
  private messageSource =       new BehaviorSubject<boolean>(this.firstTime);
  $firstTime =                  this.messageSource.asObservable();

  constructor(
    private http:               HttpClient,
    private userService:        UserService,
    private testingService:     TestingService
  ) {}

  allEPayMethod(): boolean {
    let all = false,
        userData;

    this.userService.$user.subscribe( (data) => {
      userData = data;
    });

    // for (let policyDetails of userData['policyDetails']) {
    //   const policyFlags = policyDetails['policyFlags'];
    //   if ( policyFlags.isEft == false ) {
    //     all = false;
    //     break;
    //   }
    //   else {
    //     all = true;
    //   }
    // }

    return all;
  }

  cancelPaperlessEPolicy( policyid ) {
    console.log(policyid);
    return this.testingService.testingResponses(policyid);
  }

  cancelPaperlessEPay( policyid ) {
    console.log(policyid);
    return this.testingService.testingResponses(policyid);
  }

  cancelPaperlessEBill( policyid ) {
    console.log(policyid);
    return this.testingService.testingResponses(policyid);
  }

  enrollPaperlessEPolicy( policyid ) {
    console.log(policyid);
    return this.testingService.testingResponses(policyid);
  }

  enrollPaperlessEPay( policyid, form ) {
    console.log(policyid, form);
    return this.testingService.testingResponses(form);
  }

  enrollPaperlessEBill( policyid ) {
    console.log(policyid);
    return this.testingService.testingResponses(policyid);
  }

  updatePaperlessFirstTime(firsttime: boolean) {
    this.messageSource.next(firsttime);
  }
}
