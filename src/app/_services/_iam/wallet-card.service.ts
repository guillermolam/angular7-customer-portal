// import { HttpClient }         from "@angular/common/http";
// import { Injectable }         from "@angular/core";
// import { Observable, of }     from "rxjs";
// import { AuthenticationService } from "../_iam/authentication-service.service";
// import { UserService } from "../user.service";
// import { catchError, map }    from "rxjs/operators";
// import { environment }        from "../../../environments/environment";
// import { User }               from "../../_models/user";
// // import 'rxjs/add/operator/map'
// // import 'rxjs/add/observable/of'; 
// // import 'rxjs/add/observable/throw';
// // import 'rxjs/add/operator/delay';
// // import 'rxjs/add/operator/mergeMap';
// // import 'rxjs/add/operator/materialize';
// // import 'rxjs/add/operator/dematerialize'; 
// // import 'rxjs/add/operator/catch';


// @Injectable()
// export class WalletCardService {

//   private user: User;

//   private options:            Object = { headers : 
//     {"Content-Type": "application/json" }
//   };

//   constructor(
//     private http:             HttpClient,
//     private authService:      AuthenticationService,
//     private userData:         UserService
//   ) {

//   }


//   generatePkPass(){

//     this.userData.updateUser(this.user);
   
//     const user =    this.userData.$user.source;
//     let 
//       url: string =     `${environment.account}/accounts/${user}`,
//       userSendObject: Object = {

//       }
//     ;
//     return this.http.post<any>(url, userSendObject, this.options);




//     // const user =        userObject.$user.source._value;
//     // if(this.userData) {
//     //   this.authService.verifyUser(userObject).subscribe(
//     //     response => {
//     //       let url =           `${environment.account}/accounts/wallet/${response._body.policynumber.policynumber}`;
//     //     }
//     //   )
//     // }
      
//   }


//   createPkPass(policyNumber){

//   }

// }
