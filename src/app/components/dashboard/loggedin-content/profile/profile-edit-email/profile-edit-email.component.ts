import { ActivatedRoute }         from '@angular/router';
import { Component, OnInit }      from '@angular/core';
import { User }                   from 'mapfre-design-library';
import { EditPasswordService }    from '../../../../../_services/forms/profile-settings/edit-password.service';
import { EditEmailService }       from '../../../../../_services/forms/profile-settings/edit-email.service';

@Component({
  selector: 'app-profile-edit-email',
  templateUrl: './profile-edit-email.component.html',
  styleUrls: ['./profile-edit-email.component.scss'],
  providers: [EditPasswordService]
})
export class ProfileEditEmailComponent implements OnInit {

  verifyPassword:                 any[];
  user:                           User = {};
  whereInTheProcess:              string;

  constructor(
    private activatedRoute:       ActivatedRoute,
    private editPasswordService:  EditPasswordService,
    private editEmailService:     EditEmailService
  ) { }

  ngOnInit() {
    this.whereInTheProcess =      this.activatedRoute.snapshot.routeConfig.path;
    if ( this.whereInTheProcess === 'edit-email' ) {
      this.verifyPassword = this.editEmailService.getInputs('changeEmail');
    }
    else {
      this.verifyPassword = this.editPasswordService.getInputs('changePassword');
    }
  }

}
