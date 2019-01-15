import { PolicyDetailsService } from './../../../../_services/my-insurance/policy-details.service';
// import { Component, OnInit, Input }     from '@angular/core';
// import { Router }                       from '@angular/router';
// import { AlertService }                 from 'mapfre-design-library';

// // --- Components | Services | Models --- //
// import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
// import { PolicyDetails }                from '../../../../_models/policy-details';
// import { UserService }                  from '../../../../_services/user.service';
// import { User }                         from '../../../../_models/user';

// @Component({
//   selector: 'app-policy-belong-to-another-screen',
//   templateUrl: './policy-belong-to-another-screen.component.html',
//   styleUrls: ['./policy-belong-to-another-screen.component.scss']
// })
// export class PolicyBelongToAnotherScreenComponent implements OnInit {
//   @Input()  userData:               User;
//             policyDate:             string;
//             policyDetail:           PolicyDetails[];
//             policyNumber:           string;
//             user:                   any = {};

//   constructor(
//     private alertService:           AlertService,
//     private authService:            AuthenticationService,
//     private router:                 Router,
//     private userService:            UserService
//   ) { }

//   confirmPolicy(): void {
//     this.authService
//       .confirmPolicyAndAccount(this.user)
//       .subscribe(
//         (data) => {
//           this.router.navigate(['/signup', 'createpassword']);
//         },
//         (err) => {
//           this.alertService.error('There was an issue');
//         }
//       );
//   }

//   createUserObject(formValue): void {
//     this.policyDetail =          [{ policynumber: { policynumber: formValue.editPolicyNumber } }];
//     this.user = {
//       firstName:                    formValue.editFirst_name,
//       middleName:                   formValue.editMI_name,
//       lastName:                     formValue.editLast_name,
//       email:                        formValue.editEmail,
//       policyDetails:                this.policyDetail
//     };
//     this.userService.updateUser(this.user);
//   }

//   ngOnInit() {
//     this.userService.$user
//       .subscribe( (user) => {
//           this.user = user;
//       }
//   }

// }


import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';
import { AlertService }                 from 'mapfre-design-library';

// --- Components | Services | Models --- //
import { AuthenticationService }        from '../../../../_services/_iam/authentication-service.service';
import { PolicyDetails }                from '../../../../_models/policy-details';
import { UserService }                  from '../../../../_services/user.service';
import { User }                         from '../../../../_models/user';


@Component({
  selector: 'app-policy-belong-to-another-screen',
  templateUrl: './policy-belong-to-another-screen.component.html',
  styleUrls: ['./policy-belong-to-another-screen.component.scss']
})
export class PolicyBelongToAnotherScreenComponent implements OnInit {
  @Input()  userData:               User;
            policyDate:             string;
            policyDetails:           any;
            policyNumber:           string;
            user:                   any;
            

  constructor(
    private alertService:           AlertService,
    private authService:            AuthenticationService,
    private router:                 Router,
    private userService:            UserService,
    private policyService:          PolicyDetailsService
  ) { }

  confirmPolicy(): void {

    if (this.router.url==='/my-insurance/validate-policy-rights') {
      this.policyService.addPolicyToEmail(this.user.userDetails.email.address,this.policyNumber).subscribe(()=>{
          this.alertService.error('Policy added successfully');
          this.router.navigate(['/my-insurance']);
      },(err)=>{
        this.alertService.error('Policy is already added');
        this.router.navigate(['/my-insurance']);
      })    
    }else {
          this.router.navigate(['/signup', 'createpassword']);
    } 
  }

  ngOnInit() {

    this.userService.$user.subscribe((user)=>{

      console.log(user);
      this.policyNumber = `${user.policyDetails[0].policynumber.policynumber}`;
      this.user = user;
      //new code
      this.policyService.getPolicyDetailsByNumber(this.policyNumber).subscribe((details)=>{
        this.policyDetails = details;
        // console.log(details);
      });

    });    
  }

}