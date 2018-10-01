import { HttpClient, HttpRequest }         from "@angular/common/http";
import { Injectable }         from "@angular/core";
import { Observable, of }     from "rxjs";
import { catchError, map }    from "rxjs/operators";
import { environment }        from "../../../environments/environment";
import { User }               from "../../_models/user";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class WalletCardService {

  constructor(
    private http:             HttpClient,
    private activatedRoute:   ActivatedRoute
  ) {

  }


  generatePkPass(email): Observable<HttpRequest<any>>{

    let url: string =     `${environment.account}/accounts/wallet/${email}`;
    return this.http.get<any>(url);
    
  }


//   createPkPass(policyNumber){

//   }

}
