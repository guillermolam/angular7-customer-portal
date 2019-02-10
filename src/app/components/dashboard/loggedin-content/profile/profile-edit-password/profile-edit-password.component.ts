import { UserDataService } from './../../../../../_services/data-services/user-data.service';
import { ActivatedRoute }                         from '@angular/router';
import { Component, OnInit }                      from '@angular/core';
import { User }                                   from 'mapfre-design-library';
import { EditPasswordService }                    from '../../../../../_services/forms/profile-settings/edit-password.service';
import { CreateNewPasswordFormService }           from '../../../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { UserService }                            from '../../../../../_services/user.service';

@Component({
  selector: 'app-profile-edit-password',
  templateUrl: './profile-edit-password.component.html',
  styleUrls: ['./profile-edit-password.component.scss'],
  providers: [EditPasswordService]
})
export class ProfileEditPasswordComponent implements OnInit {

  changePassword:                                 any[];
  user:                                           User = {};
  whereInTheProcess:                              string;

  constructor(
    private activatedRoute:                       ActivatedRoute,
    private createPasswordService:                CreateNewPasswordFormService,
    private passwordService:                      EditPasswordService,
    private userService:                          UserService,
    private userDataService:                      UserDataService
  ) {}

  whereInTheProcessTitle(): string {
    if (this.whereInTheProcess === 'enter-password') {
      return 'PROFILE_PASSWORD_ONE';
    }
    else {
      return 'PROFILE_PASSWORD_TWO';
    }
  }

  ngOnInit() {
    // this.userService.$user.subscribe(
    //   (user) => {
    //     this.user = user;
    //   }
    // );


    this.userDataService.$userData.subscribe(
      (user) => {
        this.user = user;
      }
    );

    this.whereInTheProcess = this.activatedRoute.snapshot.routeConfig.path;
    if (this.whereInTheProcess === 'enter-password') {
      this.changePassword =                     this.passwordService.getInputs('changePassword');
    }
    else if (this.whereInTheProcess === 'edit-password') {
      this.changePassword =                     this.createPasswordService.getInputs();
    }
    else if (this.whereInTheProcess === 'edit-email') {
    }
  }
}
