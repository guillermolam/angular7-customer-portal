import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CreateNewPasswordFormService } from '../../../_services/forms/forgot-password/create-new-password-form/create-new-password-form.service';
import { User } from 'mapfre-design-library';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-profile-edit-password',
  templateUrl: './profile-edit-password.component.html',
  styleUrls: ['./profile-edit-password.component.scss']
})
export class ProfileEditPasswordComponent implements OnInit {

  changePassword: any[];
  user: User = {};
  whereInTheProcess: string;

  constructor(
    private userService : UserService,
    private activatedRoute: ActivatedRoute,
    passwordService:                   CreateNewPasswordFormService
  ) { 
    this.changePassword = passwordService.getInputs();
  }

  ngOnInit() {
    this.userService.$user.subscribe(
      (user) => {
        this.user = user;
      }
    );
    this.whereInTheProcess = this.activatedRoute.snapshot.routeConfig.path;
  }
}
