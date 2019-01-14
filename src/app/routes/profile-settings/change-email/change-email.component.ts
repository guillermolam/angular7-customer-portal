import { ActivatedRoute, Router } from '@angular/router';
import { ChangeEmailService } from './../../../_services/profile-settings/change-email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {

  private token: string;
  private oldEmail: string;
  private requestBody: any = {};

  constructor(
    private changeEmailService: ChangeEmailService,
    private activatedRoute:           ActivatedRoute,
    private router:                   Router,
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((queryParam)=>{
        this.oldEmail = queryParam.oldEmail;
        this.token    = queryParam.token;
        this.requestBody = {
            newEmail: queryParam.newEmail,
            password: ""
        }
        this.changeEmailService.updateAccountEmail(this.oldEmail,this.token,this.requestBody).subscribe(()=>{
          localStorage.setItem('currentUser.username',queryParam.newEmail);
          this.router.navigate(['/my-insurance']);
        });
    });

  }

}
