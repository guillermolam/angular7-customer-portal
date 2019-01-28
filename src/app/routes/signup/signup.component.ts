import { Component, OnInit }              from '@angular/core';
import { Location }                       from '@angular/common';
import { ActivatedRoute, Params, NavigationEnd,
  Router, RoutesRecognized,  }            from '@angular/router';
import { ModalOptions }                   from 'mapfre-design-library';
import { filter, pairwise }               from 'rxjs/operators';
import { AddPolicyService }               from '../../_services/forms/create-account/add-policy.service';
import { CreateNewPasswordFormService }   from '../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { EditPolicyService }              from '../../_services/forms/create-account/edit-policy.service';
import { User }                           from '../../_models/user';
import { UserService }                    from '../../_services/user.service';

@Component({
  selector: 'app-signup-process',
  templateUrl: './signup-process.component.html',
  styleUrls: ['./signup-process.component.scss']
})
export class SignupComponent implements OnInit {
  previousUrl;
  user:                                 User  = {};

  constructor(
    private activatedRoute:             ActivatedRoute,
    private location:                   Location,
    private userService:                UserService,
    private router:                             Router
  ) {
   
  }




  goBackAPage() {
    //this.location.back();
   this.router.navigate(this.previousUrl)
   // console.log('this.previousUrl', this.previousUrl)
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((e: any) => e instanceof RoutesRecognized),
          pairwise()
      ).subscribe((e: any) => {
          console.log(e[0].urlAfterRedirects); // previous url
          this.previousUrl = e[0].urlAfterRedirects;
      });

    this.userService.$user.subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

}
