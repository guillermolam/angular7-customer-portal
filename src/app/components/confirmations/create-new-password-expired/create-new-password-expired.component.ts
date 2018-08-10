import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-create-new-password-expired',
  templateUrl: './create-new-password-expired.component.html',
  styleUrls: ['./create-new-password-expired.component.scss']
})
export class CreateNewPasswordExpiredComponent implements OnInit {
  emailPrefillParamater:                string;

  constructor(private activatedRoute: ActivatedRoute) { }

  getEmailFromParamater(): void{
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.emailPrefillParamater = params['emailPrefill'] || '';
      }
    );
  }

  ngOnInit() {
    this.getEmailFromParamater();
  }

}
